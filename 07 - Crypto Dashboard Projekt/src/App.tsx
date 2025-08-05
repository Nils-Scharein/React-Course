import {useEffect, useState} from "react";
import type {AppError, Coin} from "./components/types.ts";
import HomePage from "./pages/home/HomePage.tsx";
import {Routes, Route} from "react-router";
import AboutPage from "./pages/about/AboutPage.tsx";
import {useTheme} from "./context/Theme/UseTheme.tsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.tsx";
import ContactPage from "./pages/contact/ContactPage.tsx";
import CoinDetailPage from "./pages/CoinDetail/CoinDetailPage.tsx";
import {Bounce, ToastContainer} from "react-toastify";

const App = () => {
    const {theme} = useTheme();

    // Global state
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AppError | null>(null);
    const [limit, setLimit] = useState<number>(() => {
        const storedLimit = localStorage.getItem('limit');
        return storedLimit ? Number(JSON.parse(storedLimit)) : 10;
    });
    const [filter, setFilter] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("market_cap_desc");

    useEffect(() => {
        localStorage.setItem('limit', String(limit));
    }, [limit]);

    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={true}
                draggable={true}
                theme={theme === "dark" ? "dark" : "light"}
                transition={Bounce}
                limit={3}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage
                            coins={coins}
                            setCoins={setCoins}
                            filter={filter}
                            setFilter={setFilter}
                            limit={limit}
                            setLimit={setLimit}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            loading={loading}
                            setLoading={setLoading}
                            error={error}
                            setError={setError}
                        />
                    }
                />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/coin/:id" element={<CoinDetailPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
};

export default App;
