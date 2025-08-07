import './App.css';
import ProductDisplay from "./features/shoppingCart/Product/ProductDisplay.tsx";
import Header from "./components/Header.tsx";
import useProducts from "./context/ProductContext.tsx";
import useCart from "./context/CartContext.tsx";

function App() {

    const {productsData, isLoading, error} = useProducts();
    const {cartItems} = useCart()

    return (
        <>
            <Header/>
            <div className="flex"> {`Cart Contains: `}
                {cartItems.map((singleItem, index) => {
                    return (<div key={index}>{singleItem.id}</div>)
                })}
            </div>
            <button>This is a Button to increase CardItems</button>
            {isLoading && <p>Is Loading...</p>}
            {error && <div className="error-container">error</div>}
            <ProductDisplay isLoading={isLoading} error={error} productsData={productsData}/>
        </>
    );
}

export default App;
