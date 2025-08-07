import ProductCard from "./ProductCard.tsx";
import type {Product} from "../../../types/types.ts";
import "./ProductDisplay.css"

type ProductDisplayProps = {
    isLoading: boolean;
    error: string | null;
    productsData: Product[] | null;
};

const ProductDisplay = ({isLoading, error, productsData}: ProductDisplayProps) => {
    return (
        <div className="display-wrapper">
            {isLoading && <p>Loading...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            {productsData &&
                productsData.map((singleProduct) => {
                        return (
                            <div key={singleProduct.id}>
                                <ProductCard productToDisplay={singleProduct}/>
                            </div>
                        )
                    }
                )}

        </div>
    );
};

export default ProductDisplay