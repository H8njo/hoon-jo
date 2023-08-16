'use client';
import { usePathname } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';

const Header = ({ redirect }: any) => {
  const pathname = usePathname();
  return (
    <header className="fixed w-full flex justify-center pt-[25px] mix-blend-difference invert z-20">
      {pathname !== '/' && (
        <AiOutlineHome
          fontSize={50}
          className="cursor-pointer"
          onClick={() => redirect('/')}
        />
      )}
    </header>
  );
};

export default Header;
