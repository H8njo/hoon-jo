import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { Skill } from '@/constants/variables';

type List = {
  onOpenList: () => void;
  onCloseList: () => void;
  skillCategories: {
    frontend: Skill[];
    backend: Skill[];
    etc: Skill[];
  };
  isOpened: boolean;
  isShowTitle: boolean;
};

const List = ({
  onOpenList,
  onCloseList,
  skillCategories,
  isOpened,
  isShowTitle,
}: List) => {
  return (
    <div className="absolute z-10 w-full">
      {/* <motion.div
        animate={isShowTitle ? 'show' : 'hide'}
        transition={{ staggerChildren: 0.1 }}
        className=" w-full h-full flex flex-row gap-[40px] "
      >
        <div className=" basis-1/3">
          <div className="overflow-hidden">
            <motion.h1
              className="text-center font-roboto"
              initial={{ y: -40 }}
              variants={{
                show: { y: 0 },
                hide: { y: -40 },
              }}
              style={{ fontSize: 30 }}
            >
              Front-end
            </motion.h1>
          </div>
        </div>
        <div className=" basis-1/3">
          <div className="overflow-hidden">
            <motion.h1
              className="text-center font-roboto"
              initial={{ y: -40 }}
              variants={{
                show: { y: 0 },
                hide: { y: -40 },
              }}
              style={{ fontSize: 30 }}
            >
              Back-end & DB
            </motion.h1>
          </div>
        </div>
        <div className=" basis-1/3">
          <div className="overflow-hidden">
            <motion.h1
              className="text-center font-roboto"
              initial={{ y: -40 }}
              variants={{
                show: { y: 0 },
                hide: { y: -40 },
              }}
              style={{ fontSize: 30 }}
            >
              Languages & etc
            </motion.h1>
          </div>
        </div>
      </motion.div> */}
      <motion.div
        className="fixed bg-slate-50 w-[90%] h-full rounded-b-xl bottom-[0px] inset-x-0 mx-auto"
        // style={{ height: 'calc(100% - 50px)' }}
        initial={{ y: '100%' }}
        animate={isOpened ? 'open' : 'closed'}
        variants={{
          open: {
            y: 90,
          },
        }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        {/* OPEN BUTTON */}
        <motion.button
          className="absolute w-[100px] h-[30px] -top-[30px] cursor-pointer bg-slate-300 rounded-t-xl inset-x-0 mx-auto z-10"
          variants={{
            open: {
              opacity: 0,
              transition: { duration: 0.1 },
            },
            close: {
              opacity: 1,
            },
          }}
          onClick={onOpenList}
        />
        {/* CLOSE BUTTON */}
        <motion.button
          initial={{ opacity: 0 }}
          variants={{
            open: {
              opacity: 1,
              transition: { delay: 1 },
            },
          }}
          className="absolute w-[50px] h-[50px] top-[10px] cursor-pointer inset-x-0 mx-auto z-10 flex justify-center items-center"
          onClick={onCloseList}
        >
          <AiOutlineClose fontSize={40} color="#ff8282" />
        </motion.button>
        <motion.div className="relative w-full h-full p-[30px] pt-[80px] overflow-scroll">
          <div className="flex gap-[10%]">
            <div className="basis-1/3 grid grid-cols-2 gap-[15px] ">
              {skillCategories.frontend.map((item, idx) => (
                <h1 key={idx} className="text-center">
                  {item.name}
                </h1>
              ))}
            </div>
            <div className="basis-1/3 grid grid-cols-2 gap-[15px]">
              {skillCategories.backend.map((item, idx) => (
                <h1 key={idx} className="text-center">
                  {item.name}
                </h1>
              ))}
            </div>
            <div className="basis-1/3 grid grid-cols-2 gap-[15px]">
              {skillCategories.etc.map((item, idx) => (
                <h1 key={idx} className="text-center">
                  {item.name}
                </h1>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default List;
