import './Header.css';
import useCart from "../context/CartContext.tsx";

export const Header = () => {

    const {cartItems} = useCart()

    return (
        <header className="header">
            <div className="shopping-card">
                <button>View Shopping Cart {cartItems.length}</button>

            </div>
        </header>
    );
};

export default Header;