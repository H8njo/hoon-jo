import { GiPopcorn } from 'react-icons/gi';
import { BsMagic } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';

type ToolBox = {
  shakeScene: () => void;
  sortSkills: () => void;
  reset: () => void;
};

const ToolBox = ({ shakeScene, sortSkills, reset }: ToolBox) => {
  return (
    <div className="absolute z-20 flex h-auto justify-center flex-col  inset-y-0">
      <div
        className="flex flex-col py-[10px] px-[6px] gap-[10px] "
        style={{ backgroundColor: '#cbcbcb' }}
      >
        <button onClick={shakeScene}>
          <GiPopcorn fontSize={30} />
        </button>

        {/* <button onClick={sortSkills}>
        <BsMagic fontSize={30} />
      </button> */}
        <button onClick={reset}>
          <GrPowerReset fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default ToolBox;
