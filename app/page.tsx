'use client';
import { RedirectContext } from '@/context/redirect.context';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export default function Home() {
  const { redirect } = useContext(RedirectContext);
  const navItemProps = {
    className: 'nav-text cursor-pointer text-[50px] md:text-[80px]',
    initial: { x: '200%' },
    whileHover: { filter: 'blur(0px)', scale: 1.2 },
    transition: { duration: 0.4 },
    variants: {
      show: {
        x: '0%',
        transition: { ease: [0.22, 0.6, 0.47, 0.94], duration: 1 },
      },
    },
  };

  const HoonJoCards = [
    {
      siteName: 'Github',
      id: 'jyhisgood',
      href: 'https://github.com/jyhisgood',
      icon: <BsGithub fontSize={60} />,
      background: '#333333',
      hoverBackground: '#202020',
    },
    {
      siteName: 'Instagram',
      id: 'younghooncho_',
      href: 'https://www.instagram.com/younghooncho_/',
      icon: <BsInstagram fontSize={60} />,
      background:
        'linear-gradient(45deg, #506cf8, #6a62f6, #8c3fc0, #cd3b8e, #ee3673, #ff4949)',
      hoverBackground:
        'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    {
      siteName: 'Mail',
      id: 'jaiemf@gmail.com',
      href: 'mailto:jaiemf@gmail.com',
      icon: <SiGmail fontSize={60} />,
      background: '#2752ad',
      hoverBackground: '#1f4597',
    },
    {
      siteName: 'LinkedIn',
      href: 'https://www.linkedin.com/in/younghoon-cho-a225b5286',
      id: 'hoonjo',
      icon: <BsLinkedin fontSize={60} />,
      background: '#6c75f4',
      hoverBackground: '#5b63d3',
    },
  ];

  return (
    <>
      <motion.div
        className="h-[100vh] flex flex-col md:flex-row"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 1 }}
      >
        <ul className="w-[100%] md:w-[50%] h-full flex text-white">
          {HoonJoCards.map(
            (
              { siteName, id, icon, background, hoverBackground, href },
              idx
            ) => (
              <motion.li
                initial={{ y: -1100 }}
                variants={{
                  show: {
                    y: 0,
                    transition: { ease: [0.22, 0.6, 0.47, 0.94], duration: 1 },
                  },
                }}
                key={idx}
                className="basis-1/4 md:basis-1/6 flex justify-center items-center relative overflow-hidden"
                style={{ background }}
              >
                <motion.div
                  className="w-full h-full absolute z-10 cursor-pointer"
                  whileHover="hover"
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      initial={{ height: '0%' }}
                      variants={{ hover: { height: '100%' } }}
                      className="overflow-hidden"
                      transition={{ duration: 0.6 }}
                      onClick={() => window.open(href)}
                    >
                      <div
                        className="h-full md:h-screen w-full flex justify-center items-center"
                        style={{ background: hoverBackground }}
                      >
                        <div className="absolute top-[10%] z-20">{icon}</div>
                        <h1 className="w-auto md:text-center -rotate-90  font-pacifico whitespace-nowrap text-[40px] sm:text-[55px] md:text-[40px] lg:text-[50px] xl:text-[80px]">
                          {id}
                        </h1>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                <div className="absolute top-[10%] opacity-40 z-20">{icon}</div>
                <h1 className="-rotate-90 font-pacifico whitespace-nowrap opacity-40 text-[40px] sm:text-[55px] md:text-[40px] lg:text-[50px] xl:text-[80px]">
                  {siteName}
                </h1>
              </motion.li>
            )
          )}
        </ul>
        <nav className="w-[100%] md:w-[50%] h-full flex justify-end items-center md:items-end">
          <ul className="h-auto md:h-[60%] flex flex-col pr-[20%] pb-[10%] font-bodoniModa italic font-bold">
            <li className="basis-1/4 flex items-center justify-end">
              <button onClick={() => redirect('/hoon-jo')}>
                <motion.h1 {...navItemProps}>About</motion.h1>
              </button>
            </li>
            <li className="basis-1/4 flex items-center justify-end">
              <button onClick={() => redirect('/projects')}>
                <motion.h1 {...navItemProps}>Projects</motion.h1>
              </button>
            </li>
            <li className="basis-1/4 flex items-center justify-end">
              <button onClick={() => redirect('/skills')}>
                <motion.h1 {...navItemProps}>Skills</motion.h1>
              </button>
            </li>

            {/* <li className="basis-1/4 flex items-center justify-end">
              <button onClick={() => redirect('/contact')}>
                <motion.h1 {...navItemProps}>Contact</motion.h1>
              </button>
            </li> */}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
