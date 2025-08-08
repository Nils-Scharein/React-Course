import './App.css';
import ProductDisplay from "../features/shoppingCart/Product/ProductDisplay.tsx";
import Header from "../components/Header.tsx";
import useProducts from "../context/ProductContext.tsx";
import CartHeader from "../features/shoppingCart/CartHeader/CartHeader.tsx";

function App() {

    const {productsData, isLoading, error} = useProducts();

    return (
        <>
            <Header>
                <CartHeader/>
            </Header>
            {isLoading && <p>Is Loading...</p>}
            {error && <div className="error-container">error</div>}
            <ProductDisplay isLoading={isLoading} error={error} productsData={productsData}/>
        </>
    );
}

export default App;
