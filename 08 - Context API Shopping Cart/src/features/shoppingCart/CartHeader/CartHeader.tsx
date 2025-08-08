import "./CartHeader.css"
import "../../../styles/Button.css"
import useCart from "../../../context/CartContext.tsx";
import {useState} from "react";
import Drawer from "../../../components/Drawer/Drawer.tsx";
import CartModality from "../CartModal/CartModality.tsx";

const CartHeader = () => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const {cartItems, removeFromCart, setCartItems} = useCart()
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

    return (
        <div className="cart-header">
            <div>
                <button className="button rounded-lg shadow-lg"
                        onClick={() => setShowDropdown((prev) => !prev)}>
                    {showDropdown ? "Close cart" : "Open cart"}
                </button>
            </div>
            <button className="cart-container ml-2 cart-button" onClick={() => setShowDropdown((prev) => !prev)}>
                <img className="cart-img" src="./shopping-cart-outline.svg" alt={"Cart icon"}/>
                {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </button>
            {/* Could be moved to a separate file */}
            <Drawer open={showDropdown} onClose={() => setShowDropdown(false)}>
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                        <h2 className="font-semibold text-lg mb-2">Shopping Cart</h2>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        {itemCount > 0 ?
                            cartItems.map((item) => (
                                <div key={item.id} className="mb-2">
                                    <CartModality product={item} removeFromCart={removeFromCart}/>
                                </div>
                            )) : "No items in the cart yet"}
                    </div>
                    <button className="button mb-4" onClick={() => setCartItems([])}>Empty cart</button>
                    <h1 className="mb-4 text-xl font-semibold text-gray-800">
                        Subtotal: <span className="text-indigo-600">{subtotal}€</span>
                    </h1>
                </div>
            </Drawer>
        </div>
    );
};

export default CartHeader
