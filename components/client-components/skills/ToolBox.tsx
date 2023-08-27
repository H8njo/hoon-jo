import { GiPopcorn } from 'react-icons/gi';
import { BsMagic } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PiListFill } from 'react-icons/pi';
import { GrPowerReset } from 'react-icons/gr';
import { motion } from 'framer-motion';

type ToolBox = {
  shakeScene: () => void;
  sortSkills: () => void;
  reset: () => void;
  openList: () => void;
  closeList: () => void;
  isOpenList: boolean;
};

const ToolBox = ({
  shakeScene,
  sortSkills,
  openList,
  reset,
  isOpenList,
  closeList,
}: ToolBox) => {
  return (
    <div className="absolute z-20 flex h-auto justify-center flex-col  inset-y-0">
      <div className="flex flex-col py-[10px] px-[6px] gap-[10px]">
        <motion.button
          onClick={isOpenList ? closeList : openList}
          whileHover={{ scale: 1.1 }}
          animate={isOpenList ? 'open' : 'close'}
          className=" overflow-hidden relative"
        >
          <motion.div
            variants={{
              open: {
                translateY: -50,
              },
              close: { y: 0 },
            }}
          >
            <PiListFill className="text-5xl" />
          </motion.div>
          <motion.div
            variants={{
              open: {
                translateY: -50,
              },
              close: { y: 0 },
            }}
            className="absolute"
          >
            <AiOutlineCloseCircle className="text-5xl" />
          </motion.div>
        </motion.button>
        <motion.button
          onClick={shakeScene}
          whileTap={{ scale: 1.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <GiPopcorn className="text-5xl" />
        </motion.button>
        {/* <button onClick={sortSkills}>
        <BsMagic fontSize={30} />
      </button> */}
        <motion.button
          onClick={reset}
          whileHover={{
            rotate: [0, 360],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          <GrPowerReset className="text-5xl" />
        </motion.button>
      </div>
    </div>
  );
};

export default ToolBox;
