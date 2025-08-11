import { useState } from 'react';
import {
  FaLaptopCode,
  FaBars,
  FaTimes,
  FaHome,
  FaProjectDiagram,
  FaBlog,
} from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router';
import NavbarLink from '@/components/NavbarLink';

function colorActive(isActive: boolean) {
  return isActive ? 'text-blue-400' : 'transition hover:text-blue-400';
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to={'/'}
          className={'flex items-center gap-2 text-lg font-bold text-blue-300'}
        >
          <FaLaptopCode className={'text-blue-400 text-xl'} />
          <span>Dev Site Nils 👋</span>
        </NavLink>
        {/*Desktop Navigation*/}
        <div className={'hidden md:flex items-center gap-6'}>
          <div className={'space-x-4 text-sm text-gray-300 flex items-center'}>
            <NavbarLink
              text={'Home'}
              icon={<FaHome className={'ml-1'} />}
              to={'/'}
            />
            <NavbarLink
              text={'Projects'}
              icon={<FaProjectDiagram className={'ml-1'} />}
              to={'/projects'}
            />
            <NavbarLink
              text={'Blog'}
              icon={<FaBlog className={'ml-1'} />}
              to={'/blog'}
            />
            <NavbarLink
              text={'About'}
              icon={<IoIosContact className={'ml-1'} />}
              to={'/about'}
            />
            <NavbarLink
              text={'Contact'}
              icon={<MdEmail className={'ml-1'} />}
              to={'/contact'}
            />
          </div>
        </div>
        {/*Mobile Navigation*/}
        <div className={'flex md:hidden items-center gap-6'}>
          <button
            className={'cursor-pointer text-blue-400 text-xl'}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
          <div
            className={'space-x-4 text-sm text-gray-300 flex justify-center'}
          >
            <NavbarLink
              text={'Home'}
              icon={<FaHome className={'ml-1'} />}
              to={'/'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <NavbarLink
              text={'Projects'}
              icon={<FaProjectDiagram className={'ml-1'} />}
              to={'/projects'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <NavbarLink
              text={'Blog'}
              icon={<FaBlog className={'ml-1'} />}
              to={'/blog'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <NavbarLink
              text={'About'}
              icon={<IoIosContact className={'ml-1'} />}
              to={'/about'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <NavbarLink
              text={'Contact'}
              icon={<MdEmail className={'ml-1'} />}
              to={'/contact'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
