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
import ThemeToggleButton from '@/context/Theme/ThemeToggleButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[var(--card-bg)] border-b border-[var(--border-color)] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-[var(--accent-color)]"
        >
          <FaLaptopCode className="text-[var(--accent-color)] text-xl" />
          <span>Dev Site Nils 👋</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-[var(--text-muted-color)] flex items-center">
            <NavbarLink text="Home" icon={<FaHome className="ml-1" />} to="/" />
            <NavbarLink
              text="Projects"
              icon={<FaProjectDiagram className="ml-1" />}
              to="/projects"
            />
            <NavbarLink
              text="Blog"
              icon={<FaBlog className="ml-1" />}
              to="/blog"
            />
            <NavbarLink
              text="About"
              icon={<IoIosContact className="ml-1" />}
              to="/about"
            />
            <NavbarLink
              text="Contact"
              icon={<MdEmail className="ml-1" />}
              to="/contact"
            />
          </div>
          <ThemeToggleButton />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-6">
          <button
            className="cursor-pointer text-[var(--accent-color)] text-xl"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--card-bg)] border-t border-[var(--border-color)] px-6 py-4 space-y-2 text-center">
          <div className="space-y-4 text-sm text-[var(--text-muted-color)] flex flex-col items-center">
            <NavbarLink
              text="Home"
              icon={<FaHome className="ml-1" />}
              to="/"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavbarLink
              text="Projects"
              icon={<FaProjectDiagram className="ml-1" />}
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavbarLink
              text="Blog"
              icon={<FaBlog className="ml-1" />}
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavbarLink
              text="About"
              icon={<IoIosContact className="ml-1" />}
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            />
            <NavbarLink
              text="Contact"
              icon={<MdEmail className="ml-1" />}
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            />
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
