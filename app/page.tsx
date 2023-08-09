'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsGithub, BsDiscord, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export default function Home() {
  const navItemProps = {
    style: { fontSize: 80 },
    className: 'nav-text cursor-pointer',
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
      icon: <BsGithub fontSize={60} />,
      background: '#333333',
      hoverBackground: '#202020',
    },
    {
      siteName: 'Instagram',
      id: 'younghooncho_',
      icon: <BsInstagram fontSize={60} />,
      background:
        'linear-gradient(45deg, #506cf8, #6a62f6, #8c3fc0, #cd3b8e, #ee3673, #ff4949)',
      hoverBackground:
        'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    },
    {
      siteName: 'Mail',
      id: 'jaiemf@gmail.com',
      icon: <SiGmail fontSize={60} />,
      background: '#2752ad',
      hoverBackground: '#1f4597',
    },
    {
      siteName: 'Discord',
      id: 'hoonjo',
      icon: <BsDiscord fontSize={60} />,
      background: '#6c75f4',
      hoverBackground: '#5b63d3',
    },
  ];
  return (
    <motion.div
      className="h-[100vh] flex"
      animate="show"
      transition={{ staggerChildren: 0.15 }}
    >
      <ul className="w-[40%] h-full flex text-white">
        {HoonJoCards.map(
          ({ siteName, id, icon, background, hoverBackground }, idx) => (
            <motion.li
              initial={{ y: -1100 }}
              variants={{
                show: {
                  y: 0,
                  transition: { ease: [0.22, 0.6, 0.47, 0.94], duration: 1 },
                },
              }}
              key={idx}
              className="basis-1/4 flex justify-center items-center relative overflow-hidden"
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
                  >
                    <div
                      className="h-screen w-full flex justify-center items-center relative"
                      style={{ background: hoverBackground }}
                    >
                      <div className="absolute top-[10%] z-20">{icon}</div>
                      <h1
                        className="-rotate-90 font-pacifico whitespace-nowrap "
                        style={{ fontSize: 70 }}
                      >
                        {id}
                      </h1>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <div className="absolute top-[10%] opacity-40 z-20">{icon}</div>
              <h1
                className="-rotate-90 font-pacifico whitespace-nowrap opacity-40"
                style={{ fontSize: 80 }}
              >
                {siteName}
              </h1>
            </motion.li>
          )
        )}
      </ul>
      <nav className="w-[60%] h-full flex justify-end items-end bg-white">
        <ul className="h-[60%] flex flex-col pr-[20%] pb-[10%] font-bodoniModa italic font-bold">
          <li className="basis-1/4 flex items-center justify-end">
            <Link href={`/hoon-jo`}>
              <motion.h1 {...navItemProps}>About</motion.h1>
            </Link>
          </li>
          <li className="basis-1/4 flex items-center justify-end">
            <Link href={`/projects`}>
              <motion.h1 {...navItemProps}>Projects</motion.h1>
            </Link>
          </li>
          <li className="basis-1/4 flex items-center justify-end">
            <Link href={`/skills`}>
              <motion.h1 {...navItemProps}>Skills</motion.h1>
            </Link>
          </li>

          <li className="basis-1/4 flex items-center justify-end">
            <Link href={`/contact`}>
              <motion.h1 {...navItemProps}>Contact</motion.h1>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
