import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
type Props = {};

const Footer = (props: Props) => {
  const HoonJoCards = [
    {
      icon: <BsGithub fontSize={30} />,
      background: '#333333',
    },
    {
      icon: <BsInstagram fontSize={30} />,
      background:
        'linear-gradient(45deg, #506cf8, #6a62f6, #8c3fc0, #cd3b8e, #ee3673, #ff4949)',
    },
    {
      icon: <SiGmail fontSize={30} />,
      background: '#2752ad',
    },
    {
      icon: <BsLinkedin fontSize={30} />,
      background: '#6c75f4',
    },
  ];
  return (
    <div className="h-[200px] bg-[#242424] flex items-center justify-center">
      <ul className="flex text-white  gap-[20px]">
        {HoonJoCards.map(({ icon, background }, idx) => (
          <li
            key={idx}
            className="w-[60px] h-[60px] flex justify-center items-center rounded-xl"
            style={{ background }}
          >
            {icon}
          </li>
        ))}
      </ul>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default Footer;
