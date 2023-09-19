'use client';
import Markdown from '@/components/client-components/Markdown';
import { projects } from '@/constants/variables';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import _ from 'lodash';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

type Props = {};

const Projects = (props: Props) => {
  const [selected, setSelected] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<Boolean>(false);
  const [showDetail, setShowDetail] = useState(false);
  const swiperRef: any = useRef(null);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <main className="flex flex-col sm:flex-row h-screen relative z-150">
        {showDetail || (
          <>
            <aside className="w-[100%] sm:w-[50%] h-auto relative flex-none pt-[90px] sm:pt-0 pb-[30px]">
              <div className="sm:fixed w-[100%] sm:w-[50%] flex flex-col sm:justify-center px-[15px] sm:px-[20px] lg:px-[80px] xl:px-[120px] h-full">
                <div className="text-center mb-[10px]">
                  <span
                    style={{ color: '#4d4d4d' }}
                    className="font-semibold sm:text-[1vw]"
                  >
                    {projects[selected].date}
                  </span>
                </div>
                <div className="border-2 rounded-md border-[#ac967a]">
                  <div className="h-[24px] bg-[#ebdfcf] border-b-2 border-[#ac967a]">
                    <div className="pl-[8px] flex items-center h-full gap-[4px]">
                      <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#d60000]" />
                      <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#ecee00]" />
                      <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#00c400]" />
                    </div>
                  </div>
                  <motion.div
                    layoutId="thumbnail"
                    className="aspect-video cursor-pointer relative z-50"
                    onClick={() => setShowDetail(true)}
                  >
                    <Image
                      src={projects[selected].screenshots?.[0]}
                      alt={projects[selected].name}
                      width={800}
                      height={500}
                    />
                  </motion.div>
                </div>
                <div className="mt-[20px]">
                  <h1 className="text-center font-extrabold mb-[2px] uppercase font-bodoniModa text-[8vw] sm:text-[5vw]">
                    {projects[selected].name}
                  </h1>
                  <p
                    style={{ color: '#212121' }}
                    className="text-center text-[3vw] sm:text-[1.5vw] xl:text-[18px] md:px-[50px] lg:px-[30px]"
                  >
                    {projects[selected].description}
                  </p>
                </div>
              </div>
            </aside>
            <main className="w-[100%] sm:w-[50%] overflow-y-scroll sm:h-auto flex flex-col gap-[1vw] sm:pt-[110px] pb-[100px] pl-[15px] sm:pl-0 relative">
              {projects.map((item, idx) => (
                <motion.article
                  className="relative sm:w-max"
                  whileHover="mouseOver"
                  key={idx}
                >
                  {selected === idx ? (
                    <motion.div
                      className="bg-black w-[8px] absolute h-full left-[0]"
                      layoutId="selected"
                    />
                  ) : null}

                  <motion.div
                    className="absolute h-full bg-black"
                    initial={false}
                    variants={{
                      mouseOver: {
                        width: '100%',
                      },
                    }}
                  />
                  <div
                    onClick={() => setSelected(idx)}
                    className="p-[15px] pl-[20px] cursor-pointer"
                  >
                    <h2 className="uppercase text-[12vw] sm:text-[6vw] leading-[0.9] font-bodoniModa font-bold whitespace-nowrap mix-blend-difference invert text-black">
                      {item.name}
                    </h2>
                    <div className="ml-[3px]  flex gap-[10px] mix-blend-difference invert">
                      {item.skills.map((skill, key) => (
                        <span
                          key={key}
                          className={` border-[1px] rounded-full px-[10px] font-roboto text-[1vw] text-[#474747] border-[#474747] ${
                            key === 0 ? 'font-bold underline' : 'font-normal'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </main>
          </>
        )}

        {showDetail && (
          <div className="px-[30px] md:px-[100px] lg:px-[150px] xl:px-[250px]">
            <div className="py-[25px] fixed z-20 mix-blend-difference invert">
              <IoArrowBackOutline
                fontSize={50}
                onClick={() => {
                  visibleImages
                    ? setVisibleImages(false)
                    : setShowDetail(false);
                }}
              />
            </div>
            <div className="w-full markdown-container mt-[100px]">
              <div className="flex flex-row items-center">
                <div className="h-auto w-[11vw] md:w-[8vw] pr-[3%]">
                  <Image
                    src="/images/skills/ajax.png"
                    alt={'test'}
                    width={300}
                    height={300}
                  />
                </div>
                <h1 className="uppercase font-bodoniModa text-[9vw] md:text-[6.5vw] xl:text-[6.5vw] font-semibold">
                  {projects[0].name}
                </h1>
              </div>
              <div className="px-[10px] xl:px-[100px] pt-[20px] max-w-[1200px] m-auto">
                <motion.div
                  className="relative"
                  // whileHover="hoverImage"
                  // whileHover={{ scale: 1.05 }}
                  variants={{
                    hoverImage: {
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      scale: 1.05,
                    },
                  }}
                  onClick={() => setVisibleImages(true)}
                >
                  <motion.div
                    className="absolute w-full h-full cursor-pointer bg-[#191919] z-10 flex justify-center items-center"
                    initial={{ opacity: 0 }}
                    layoutId="seeMore"
                    variants={{
                      hoverImage: { opacity: 0.6 },
                    }}
                  >
                    <motion.span
                      className="text-white text-xl"
                      initial={{ opacity: 0 }}
                      variants={{ hoverImage: { opacity: 1 } }}
                    >
                      See More +{projects[0].screenshots.length}
                    </motion.span>
                  </motion.div>
                  <motion.div
                    className="border-2 rounded-md border-[#ac967a]"
                    initial={{ filter: 'blur(0px)' }}
                    variants={{
                      hoverImage: {
                        filter: 'blur(2px)',
                      },
                    }}
                  >
                    <div className="h-[24px] bg-[#ebdfcf] border-b-2 border-[#ac967a]">
                      <div className="pl-[8px] flex items-center h-full gap-[4px]">
                        <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#d60000]" />
                        <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#ecee00]" />
                        <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#00c400]" />
                      </div>
                    </div>
                    <motion.div layoutId="thumbnail">
                      <Image
                        src={projects[0].screenshots[0]}
                        width={1900}
                        height={800}
                        alt={projects[0].name}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              <Markdown text={projects[0].detail} />
            </div>
          </div>
        )}

        {visibleImages && (
          <motion.div
            layoutId="seeMore"
            className="bg-[#232323] w-full fixed h-screen pt-[100px] z-[19] px-[30px] md:px-[100px] lg:px-[150px] xl:px-[250px]"
          >
            <button
              className="text-white absolute left-0 sm:left-[30px] top-[50%] text-6xl z-[3]"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <MdArrowBackIos />
            </button>
            <button
              className="text-white absolute -right-[10px] sm:right-[20px] top-[50%] text-6xl z-[3]"
              onClick={() => swiperRef.current.slideNext()}
            >
              <MdArrowForwardIos />
            </button>
            <div className="w-[100%] m-auto h-full relative overflow-scroll">
              <Swiper
                style={{ width: '100%' }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                autoHeight={true}
                spaceBetween={20}
                navigation={true}
                pagination={true}
              >
                {projects[0].screenshots.map((item, key) => (
                  <SwiperSlide key={key}>
                    <Image src={item} alt={'test'} width={9999} height={9999} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </main>
      <motion.div
        className=" bg-black fixed left-0 w-full h-[15px]"
        style={{ scaleX }}
      />
    </>
  );
};

export default Projects;
