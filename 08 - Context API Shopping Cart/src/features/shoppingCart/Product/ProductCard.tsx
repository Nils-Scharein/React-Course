import type {Product} from "../../../types/types.ts";
import "./ProductCard.css"
import useCart from "../../../context/CartContext.tsx";
import "../../../styles/Button.css"

type ProductCardProps = {
    productToDisplay: Product;
};

const ProductCard = ({productToDisplay}: ProductCardProps) => {

    const {addToCart} = useCart()

    return (
        <div className="card">
            <div className="card-content">
                <h1 className="">{productToDisplay.id} {productToDisplay.name}</h1>
                <p className="price">Price: {Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                }).format(productToDisplay.price)}</p>
                <p>Category: {productToDisplay.category}</p>
                <p>Rating: {productToDisplay.rating ? productToDisplay.rating.toFixed(1) : "No rating"}</p>
                <p>Quantity: {productToDisplay.quantity ? productToDisplay.quantity : "Not available"}</p>
                {<img src={`./${productToDisplay.image}`} alt={productToDisplay.name}/>}
                <p>{productToDisplay.description}</p>
            </div>
            <button className="button" onClick={() => addToCart(productToDisplay)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard
