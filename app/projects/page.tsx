'use client';
import { projects } from '@/constants/variables';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import _ from 'lodash';
import React, { useState } from 'react';

type Props = {};

const Projects = (props: Props) => {
  const [selected, setSelected] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <div className="flex flex-row">
        <aside className="w-[50%] h-auto relative">
          <div className="fixed w-[50%] flex flex-col justify-center px-[100px] h-full">
            <div className="text-center mb-[10px]">
              <span
                style={{ fontSize: '1vw', color: '#4d4d4d' }}
                className=" font-semibold"
              >
                2023-06-23
              </span>
            </div>
            <div className="bg-slate-300 aspect-video"></div>
            <div className="mt-[20px]">
              <h1
                className="text-center font-extrabold mb-[2px] font-bodoniModa"
                style={{ fontSize: '3vw' }}
              >
                HOON-JO
              </h1>
              <p
                style={{ fontSize: '1.5vw', color: '#212121' }}
                className="text-center"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to m
              </p>
            </div>
          </div>
        </aside>
        <main className="w-[50%] flex flex-col gap-[1vw] mt-[170px] mb-[100px]">
          {projects.map((item: any, idx) => (
            <motion.article
              className="relative w-max"
              whileHover="mouseOver"
              key={idx}
            >
              {selected === idx ? (
                <motion.div
                  className="bg-black w-[10px] absolute h-full -left-[30px]"
                  layoutId="selected"
                />
              ) : null}

              <motion.div
                className="absolute h-full bg-black rounded-md "
                initial={false}
                variants={{
                  mouseOver: {
                    width: '100%',
                  },
                }}
              />
              <div
                onClick={() => setSelected(idx)}
                className="p-[15px] cursor-pointer"
              >
                <h2
                  style={{ fontSize: '6vw' }}
                  className="uppercase leading-[0.9] font-bodoniModa font-bold whitespace-nowrap mix-blend-difference invert text-black"
                >
                  {item}
                </h2>
                <div className="ml-[3px] flex gap-[10px] mix-blend-difference invert">
                  <span
                    style={{
                      fontSize: '1vw',
                      color: '#474747',
                      borderColor: '#474747',
                    }}
                    className="font-normal border-[1px] rounded-full px-[10px] font-roboto "
                  >
                    NEST.js
                  </span>
                  <span
                    style={{
                      fontSize: '1vw',
                      color: '#474747',
                      borderColor: '#474747',
                    }}
                    className="font-normal border-[1px] rounded-full px-[10px] font-roboto "
                  >
                    NEST.js
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </main>
      </div>
      <motion.div
        className=" bg-black fixed left-0 w-full h-[15px]"
        style={{ scaleX }}
      />
    </>
  );
};

export default Projects;
