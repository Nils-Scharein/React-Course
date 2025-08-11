import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router';

type NavbarLinkProps = {
  className?: string;
  to?: string;
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void | null;
};

function colorActive(isActive: boolean) {
  return isActive ? 'text-blue-400' : 'transition hover:text-blue-400';
}

const NavbarLink = ({
  className = '',
  to = '/',
  text = 'Placeholder',
  icon = '',
  onClick,
}: NavbarLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${colorActive(isActive)} flex items-center ${className}`
      }
      onClick={onClick}
    >
      {text} {icon}
    </NavLink>
  );
};

export default NavbarLink;
