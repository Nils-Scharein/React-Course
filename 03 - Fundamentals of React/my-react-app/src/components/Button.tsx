import {ReactNode} from 'react';

interface ButtonProps {
    children: ReactNode,
    className?: string,
    disabled?: boolean,
    onClick?: () => void
}

const Button = ({children, className, disabled, onClick}: ButtonProps) => {
    return (
        <button className={className} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
