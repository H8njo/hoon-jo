import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { Skill, Skills } from '@/constants/variables';
import _ from 'lodash';
import Image from 'next/image';

type List = {
  onOpenList: () => void;
  onCloseList: () => void;
  skills: Skills;
  isOpened: boolean;
  isShowTitle: boolean;
};

const List = ({
  onOpenList,
  onCloseList,
  skills,
  isOpened,
  isShowTitle,
}: List) => {
  const skillGroup = _.groupBy(skills, 'category2');

  return (
    <div className="absolute z-10 w-full">
      <motion.div
        className="fixed bg-white w-[90%] rounded-b-xl bottom-[0px] inset-x-0 mx-auto overflow-scroll shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
        style={{ height: 'calc(100% - 90px)' }}
        initial={{ y: '100%' }}
        animate={isOpened ? 'open' : 'closed'}
        variants={{
          open: {
            y: 0,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.5,
              duration: 0.8,
              type: 'spring',
            },
          },
        }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <div className="relative w-full h-full p-0 sm:p-[50px] flex flex-col lg:flex-row gap-[30px]">
          <div className="w-full lg:w-1/2 bg-slate-10 space-y-[10px] ">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 py-[10px] sm:py-[20px] px-[30px] sm:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
              initial={{ y: 50 }}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                closed: { opacity: 0 },
              }}
            >
              <div className=" col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-3">
                <h1 className="text-center text-2xl sm:text-3xl font-bold mb-[25px] font-roboto">
                  Web Frontend
                </h1>
              </div>
              {skillGroup['Web_Frontend'].map((item, key) => (
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <div className="border rounded-full border-neutral-300 w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] relative">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-md sm:text-lg">{item.name}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 py-[10px] sm:py-[20px] px-[30px] sm:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
              initial={{ y: 50 }}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                closed: { opacity: 0 },
              }}
            >
              <div className=" col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-3">
                <h1 className="text-center text-2xl sm:text-3xl font-bold mb-[25px] font-roboto">
                  Languages
                </h1>
              </div>
              {skillGroup['language'].map((item, key) => (
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <div className="border rounded-full border-neutral-300 w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] relative">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-md sm:text-lg">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 bg-slate-10 space-y-[30px] ">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 py-[10px] sm:py-[20px] px-[30px] sm:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
              initial={{ y: 50 }}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                closed: { opacity: 0 },
              }}
            >
              <div className=" col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-3">
                <h1 className="text-center text-2xl sm:text-3xl font-bold mb-[25px] font-roboto">
                  Backend
                </h1>
              </div>
              {skillGroup['Backend'].map((item, key) => (
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <div className="border rounded-full border-neutral-300 w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] relative">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-md sm:text-lg">{item.name}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 py-[10px] sm:py-[20px] px-[30px] sm:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
              initial={{ y: 50 }}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                closed: { opacity: 0 },
              }}
            >
              <div className=" col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-3">
                <h1 className="text-center text-2xl sm:text-3xl font-bold mb-[25px] font-roboto">
                  App Frontend
                </h1>
              </div>
              {skillGroup['App_Frontend'].map((item, key) => (
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <div className="border rounded-full border-neutral-300 w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] relative">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-md sm:text-lg">{item.name}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 py-[10px] sm:py-[20px] px-[30px] sm:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
              initial={{ y: 50 }}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                closed: { opacity: 0 },
              }}
            >
              <div className=" col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-3">
                <h1 className="text-center text-2xl sm:text-3xl font-bold mb-[25px] font-roboto">
                  Deploy
                </h1>
              </div>
              {skillGroup['Deploy'].map((item, key) => (
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <div className="border rounded-full border-neutral-300 w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] relative">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-md sm:text-lg">{item.name}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 py-[10px] sm:py-[20px] px-[30px] sm:shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
              initial={{ y: 50 }}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                closed: { opacity: 0 },
              }}
            >
              <div className=" col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 2xl:col-span-3">
                <h1 className="text-center text-2xl sm:text-3xl font-bold mb-[25px] font-roboto">
                  ETC
                </h1>
              </div>
              {skillGroup['etc'].map((item, key) => (
                <div className="flex items-center gap-[15px] mb-[10px]">
                  <div className="border rounded-full border-neutral-300 w-[55px] h-[55px] lg:w-[70px] lg:h-[70px] relative">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={item.src}
                      alt={item.name}
                    />
                  </div>
                  <span className="text-md sm:text-lg">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default List;
