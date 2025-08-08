import type {Product} from "../../../types/types.ts";

type CartModaltemProps = {
    product: Product;
    removeFromCart: (productID: string) => void;
}

const CartModality = ({product, removeFromCart}: CartModaltemProps) => {

    return (
        <>
            <div className="flex items-center gap-3 p-2">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                />

                <span>{product.name} - {product.quantity} - {product.quantity * product.price}</span>

                <button
                    className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-red-200 hover:bg-red-300 transition-colors"
                    onClick={() => removeFromCart(product.id)}
                >
                    <img
                        src="trash.svg"
                        alt="trash"
                        className="w-4 h-4 object-contain"
                    />
                </button>

            </div>
        </>
    );
};

export default CartModality
