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
  return isActive
    ? 'text-[var(--accent-color)]'
    : 'text-[var(--text-muted-color)] transition-colors hover:text-[var(--accent-color)]';
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
        `${colorActive(isActive)} flex items-center gap-2 ${className}`
      }
      onClick={onClick}
    >
      {icon} {text}
    </NavLink>
  );
};

export default NavbarLink;
