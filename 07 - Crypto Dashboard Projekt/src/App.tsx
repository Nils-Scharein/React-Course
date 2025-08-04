import {useEffect, useState} from "react";
import type {Coin} from "./components/types.ts";
import HomePage from "./pages/home/HomePage.tsx";
import {Routes, Route} from "react-router";
import AboutPage from "./pages/about/AboutPage.tsx";
import {ThemeProvider} from "./components/Header/Theme/ThemeContext.tsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import CoinDetailPage from "./pages/CoinDetail/CoinDetailPage.tsx";

const API_URL = import.meta.env.VITE_API_URL || "ERROR GETTING API URL FROM ENV"

const App = () => {

    // This is going to be global state
    const [coins, setCoins] = useState<Coin[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [limit, setLimit] = useState<number>(() => {
        const storedLimit = localStorage.getItem('limit');
        return storedLimit ? Number(JSON.parse(storedLimit)) : 10;
    });
    const [filter, setFilter] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("market_cap_desc");

    useEffect(() => {
        localStorage.setItem('limit', String(limit))
    }, [limit]);

    // This effect fetches the data from the API and sets the coins state
    useEffect(() => {
        setLoading(true);

        const API_EXTRA = `coins/markets?vs_currency=eur&per_page=${limit}`

        const fetchCoins = async () => {
            try {
                console.log(`${API_URL}${API_EXTRA}`)
                const res = await fetch(`${API_URL}${API_EXTRA}`);
                if (!res.ok) throw new Error(`Failed to fetch data from ${API_URL}: ${res.status}`);
                const data = await res.json();
                console.log(data);
                setCoins(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, [limit]);

    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<HomePage coins={coins}
                                                   filter={filter}
                                                   setFilter={setFilter}
                                                   limit={limit}
                                                   setLimit={setLimit}
                                                   sortBy={sortBy}
                                                   setSortBy={setSortBy}
                                                   loading={loading}
                                                   error={error}/>}
                />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/coin/:id" element={<CoinDetailPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </ThemeProvider>
    );
};

export default App
