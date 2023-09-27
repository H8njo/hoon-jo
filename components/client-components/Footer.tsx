'use client';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
type Props = {};

const Footer = (props: Props) => {
  const HoonJoCards = [
    {
      icon: <BsGithub fontSize={30} />,
      href: 'https://github.com/jyhisgood',
      background: '#333333',
    },
    {
      icon: <BsInstagram fontSize={30} />,
      href: 'https://www.instagram.com/younghooncho_/',
      background:
        'linear-gradient(45deg, #506cf8, #6a62f6, #8c3fc0, #cd3b8e, #ee3673, #ff4949)',
    },
    {
      icon: <SiGmail fontSize={30} />,
      href: 'mailto:jaiemf@gmail.com',
      background: '#2752ad',
    },
    {
      icon: <BsLinkedin fontSize={30} />,
      href: 'https://www.linkedin.com/in/younghoon-cho-a225b5286',
      background: '#6c75f4',
    },
  ];
  return (
    <div className="h-[200px] bg-[#242424] flex flex-col items-center justify-center">
      <p className="mb-[20px] text-white">Designed by Hoonjo</p>
      <ul className="flex text-white  gap-[20px]">
        {HoonJoCards.map(({ icon, background, href }, idx) => (
          <li
            key={idx}
            className="w-[60px] h-[60px] flex justify-center items-center rounded-xl cursor-pointer"
            style={{ background }}
            onClick={() => window.open(href)}
          >
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
