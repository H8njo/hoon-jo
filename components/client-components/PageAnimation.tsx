'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type AnimationPageProps = {
  animate: string | null;
};

const hidePauseDuration = 1200;

const PageAnimation = ({ animate }: AnimationPageProps) => {
  const [animateState, setAnimateState] = useState<'show' | 'hide' | ''>('');

  useEffect(() => {
    setAnimateState('show');
    const timeout = setTimeout(() => {
      setAnimateState('hide');
    }, hidePauseDuration);
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <>
      <div className="fixed h-full w-full grid grid-cols-12 divide-x divide-gray">
        {Array(12)
          .fill(null)
          .map((_, key) => (
            <div key={key}></div>
          ))}
      </div>
      <motion.div
        className="fixed w-screen h-screen grid grid-cols-12 divide-x divide-gray"
        animate={animateState}
        variants={{
          show: {
            zIndex: 99,
            transition: { staggerChildren: 0.06, ease: 'easeOut' },
          },
          hide: {
            zIndex: 0,
            transition: { delay: 1, staggerChildren: 0.06, ease: 'easeOut' },
          },
        }}
      >
        {Array(12)
          .fill(null)
          .map((_, key) => (
            <motion.div
              key={key}
              className="bg-slate-600 w-full h-full"
              initial={{ y: -1000 }}
              variants={{ show: { y: 0 }, hide: { y: 1000 } }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
            />
          ))}
      </motion.div>
    </>
  );
};

export default PageAnimation;
