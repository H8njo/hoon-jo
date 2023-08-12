'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
  Bodies,
  Body,
  Common,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from 'matter-js';
import { SkillCategory, skills } from '@/constants/variables';
import * as _ from 'lodash';
import useWindowSize from '@/hooks/useWindowSize';
import List from '@/components/client-components/skills/List';
import ToolBox from '@/components/client-components/skills/ToolBox';

const STATIC_DENSITY = 900;
const PARTICLE_SIZE = 39;
const PARTICLE_BOUNCYNESS = 0.9;
const WALL_SIZE = 20;

const Skills = () => {
  const boxRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);
  const size = useWindowSize();
  const { width, height } = size;

  const [world, setWorld] = useState<any>(null);
  const [engine, setEngine] = useState<any>(null);
  const [constraints, setContraints] = useState<any>();
  const [render, setRender] = useState<any>();

  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [isAddedBall, setIsAddedBall] = useState<PointerEvent>();
  const [isPause, setIsPause] = useState<boolean>(false);
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [reset, setReset] = useState(false);

  const skillCategories: any = _.groupBy(skills, 'category') || {};

  const handleCreateBall = useCallback((e: PointerEvent) => {
    setIsAddedBall(e);
  }, []);

  const onOpenList = async () => {
    setIsOpenDetail(true);
    await shakeScene();
    setShowTitle(true);
  };
  const onCloseList = () => {
    setIsOpenDetail(false);
    setShowTitle(false);
    setIsPause(false);
  };
  const resetWorld = () => {
    setIsOpenDetail(false);
    setIsPause(false);
    setShowTitle(false);
    Engine.clear(engine);
    Render.stop(render);

    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    setReset((prev) => !prev);
  };

  const shakeScene = async () => {
    await setIsPause(false);
    await setShowTitle(false);

    const timeScale = 1500 / 60 / render.engine.timing.lastDelta;
    const bodies = Composite.allBodies(render.engine.world);

    for (let i = 0; i < bodies.length; i++) {
      const body = bodies[i];

      if (!body.isStatic && body.position.y >= 500) {
        // scale force for mass and time applied
        const forceMagnitude = 0.03 * body.mass * timeScale;

        // apply the force over a single update
        Body.applyForce(body, body.position, {
          x:
            (forceMagnitude + Common.random() * forceMagnitude) *
            Common.choose([1, -1]),
          y: -forceMagnitude + Common.random() * -forceMagnitude,
        });
      }
    }
  };

  const sortSkills = () => {
    setIsPause((prev) => {
      if (!prev) setShowTitle(true);
      else if (isOpenDetail) {
        setShowTitle(true);
      } else setShowTitle(false);

      return !prev;
    });
    const bodies = render.engine.world.bodies;
    const logoBalls = _.drop(bodies, 3);
    const uselessBalls = _.drop(bodies, 3 + skills.length);

    const order = ['frontend', 'backend', 'etc'];
    const skillCategories = _.groupBy(logoBalls, 'label');

    // TODO: Need to improve balls' postions
    order.forEach((item, idx) => {
      const layoutWidth = (window.innerWidth - 200 - 40) / 3; // 화면크기 / 3분할 - padding - gap
      const gap = 40;
      let row = 1;
      let col = 0;
      let y = 200;
      skillCategories[item].forEach((skill: any) => {
        const x = 120 + col * 80 + idx * layoutWidth + gap * idx;
        col++;
        Body.setPosition(skill, {
          x,
          y,
        });
        if (x > layoutWidth * (idx + 1)) {
          y = y + 100;
          row++;
          col = 0;
        }
      });
    });

    uselessBalls.forEach((ball: any) => {
      World.remove(render.engine.world, ball);
    });
  };

  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        background: 'transparent',
        wireframes: false,
      },
    });

    const floor = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight,
      window.innerWidth,
      WALL_SIZE,
      {
        label: 'walls',
        isStatic: true,
        render: {
          fillStyle: 'rgba(51, 51, 51, 0)',
        },
      }
    );
    const wallHeight = window.innerHeight * 3;
    const leftWall = Bodies.rectangle(
      0,
      wallHeight / 2,
      WALL_SIZE,
      wallHeight,
      {
        label: 'walls',
        isStatic: true,
        render: {
          fillStyle: 'rgba(51, 51, 51, 0)',
        },
      }
    );
    const rightWall = Bodies.rectangle(
      window.innerWidth,
      wallHeight / 2,
      WALL_SIZE,
      wallHeight,
      {
        label: 'walls',
        isStatic: true,
        render: {
          fillStyle: 'rgba(51, 51, 51, 0)',
        },
      }
    );

    // Mouse Drag
    const mouse = Mouse.create(canvasRef.current);
    let mConstraint = MouseConstraint.create(engine, { mouse: mouse });
    Events.on(mConstraint, 'mousedown', function (event: any) {
      let x,
        y,
        ball = mConstraint.body;
      console.log(mConstraint);
      if (typeof ball == 'undefined' || ball == null) return;
      if (ball.label === 'Rectangle Body') return;

      Body.setVelocity(ball, { x: ball.velocity.x, y: 0 });

      x = (ball.position.x - event.mouse.mousedownPosition.x) / 700;

      Body.applyForce(
        ball,
        { x: ball.position.x, y: ball.position.y },
        { x, y: -2 }
      );
    });
    World.add(engine.world, mConstraint);

    const width = window.innerWidth;
    const order: SkillCategory[] = ['frontend', 'backend', 'etc'];

    const randomBalls = order.map((item: 'frontend' | 'backend' | 'etc') => {
      const balls = skillCategories[item].map((skill: any) => {
        const randomX = Math.floor(Math.random() * -width) + width;
        const randomY = Math.floor(Math.random() * 3000) * -1;

        const ball = Bodies.circle(randomX, randomY, PARTICLE_SIZE, {
          label: skill.category,
          restitution: PARTICLE_BOUNCYNESS,
          isStatic: false,
          render: {
            sprite: {
              texture: skill.src,
              xScale: 0.7,
              yScale: 0.7,
            },
          },
        });

        return ball;
      });
      return balls;
    });

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ..._.flatMap(randomBalls),
    ]);

    Runner.run(engine);
    Render.run(render);

    setContraints(boxRef.current.getBoundingClientRect());
    setRender(render);
    setWorld(engine.world);
    setEngine(engine);
    render.bounds.max.x = window.innerWidth;
    render.bounds.max.y = window.innerHeight;
    render.options.width = window.innerWidth;
    render.options.height = window.innerHeight;
    render.canvas.width = window.innerWidth;
    render.canvas.height = window.innerHeight;

    return () => {
      Engine.clear(engine);
    };
  }, [reset]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.addEventListener('click', handleCreateBall);
    return () => {
      canvas.removeEventListener('click', handleCreateBall);
    };
  }, [canvasRef]);

  useEffect(() => {
    if (constraints) {
      // Dynamically update canvas and bounds
      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      render.canvas.width = width;
      render.canvas.height = height;

      // Dynamically update floor
      const floor = render.engine.world.bodies[0];
      const rightWall = render.engine.world.bodies[2];

      Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2,
      });
      Body.setPosition(rightWall, {
        x: width,
        y: height / 2,
      });

      Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ]);
    }
  }, [render, constraints, size]);

  // when background clicked, create a ball
  useEffect(() => {
    if (render) {
      const randomX = Math.floor(Math.random() * -width) + width;
      // balls fall down randomly
      World.add(
        render.engine.world,
        Bodies.circle(randomX, -PARTICLE_SIZE, PARTICLE_SIZE, {
          restitution: PARTICLE_BOUNCYNESS,
        })
      );
    }
  }, [isAddedBall]);

  // stop all of balls
  useEffect(() => {
    if (constraints) {
      const bodies = Composite.allBodies(render.engine.world);
      bodies.forEach((body) => {
        if (body.label !== 'walls') Body.setStatic(body, isPause);
      });
    }
  }, [isPause]);

  return (
    <div
      ref={boxRef}
      style={{
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#868686',
      }}
    >
      <ToolBox
        shakeScene={shakeScene}
        sortSkills={sortSkills}
        reset={resetWorld}
      />
      <List
        onOpenList={onOpenList}
        onCloseList={onCloseList}
        skillCategories={skillCategories}
        isOpened={isOpenDetail}
        isShowTitle={showTitle}
      />
      <canvas ref={canvasRef} />
    </div>
  );
};
export default Skills;
