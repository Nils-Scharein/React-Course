import {useEffect, useState} from "react";
import './App.css'

function App() {


    const [productsData, setProductsData] = useState();

    useEffect(() => {
        async function getData() {
            const url = "http://localhost:8000/products";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error.message);
            }
        }
        getData()
    }, []);

    return (
        <>
      <h1>Test</h1>
    </>
  )
}

export default App
