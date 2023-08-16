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
    <div className="absolute z-20 flex h-full justify-center flex-col">
      <button className="" onClick={shakeScene}>
        <GiPopcorn fontSize={30} />
      </button>

      <button onClick={sortSkills}>
        <BsMagic fontSize={30} />
      </button>
      <button onClick={reset}>
        <GrPowerReset fontSize={30} />
      </button>
    </div>
  );
};

export default ToolBox;
