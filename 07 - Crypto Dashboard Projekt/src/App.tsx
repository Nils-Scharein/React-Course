import Header from "./components/Header/Header.tsx";
import {Dashboard} from "./components/CryptoDashboard/Dashboard.tsx";
import NavigationBar from "./components/Navigation/NavigationBar.tsx";
import {useEffect, useState} from "react";

const API_URL = 'https://coingecko.com/api/v3/coins/markets?vs_currency=eur'


const App = () => {

    const fetchData = async () => {
        try {
            const response: Response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

        } catch (error: unknown) {
            console.error(error instanceof Error ? error.message : error);
        }
    };

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     setCoins(fetchData());
    // }, []);


    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch data');
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setCoins(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);


    return (
        <>
            <Header/>
            <h1>🚀 Crypto Dashboard</h1>
            <NavigationBar/>
            <Dashboard/>
        </>
    );
};

export default App
