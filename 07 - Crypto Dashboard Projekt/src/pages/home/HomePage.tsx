import type {AppError, Coin} from "../../components/types.ts";
import {Dashboard} from "../../components/CryptoDashboard/Dashboard.tsx";
import Header from "../../components/Header/Header.tsx";
import NavigationBar from "../../components/Navigation/NavigationBar.tsx";
import Spinner from "../../components/Loading/Spinner.tsx";
import {toast} from 'react-toastify';
import {useEffect, useMemo} from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;

type HomePageProps = {
    coins: Coin[];
    setCoins: (coins: Coin[]) => void;
    filter: string;
    setFilter: (filter: string) => void;
    limit: number;
    setLimit: (limit: number) => void;
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    error: AppError | null;
    setError: (err: AppError | null) => void;
};

const HomePage = ({
                      coins,
                      setCoins,
                      filter,
                      setFilter,
                      limit,
                      setLimit,
                      sortBy,
                      setSortBy,
                      loading,
                      setLoading,
                      error,
                      setError
                  }: HomePageProps) => {

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            const url = `${API_BASE_URL}coins/markets?vs_currency=eur&per_page=${limit}`;

            try {
                const res = await fetch(url);

                if (!res.ok) {
                    const isRateLimit = res.status === 429;

                    const errorObj: AppError = {
                        name: "FetchError",
                        message: `Error loading data (${res.status})`,
                        context: isRateLimit
                            ? `⚠️ API rate limit exceeded (${res.status}). Please wait a moment.`
                            : `URL: ${url}`,
                    };

                    // Set error again to trigger useEffect
                    setError({...errorObj});
                    return;
                }

                const data = await res.json();
                setCoins(data);

                if (!toast.isActive("success-toast-App")) {
                    toast.success("Data successfully fetched from CoinGecko", {
                        toastId: "success-toast-App",
                    });
                }
            } catch (err) {
                const errorObj: AppError = {
                    name: err instanceof Error ? err.name : "UnknownError",
                    message: err instanceof Error ? err.message : "Unknown error occurred while fetching data.",
                    context: `URL: ${url}`,
                };

                setError({...errorObj});
            } finally {
                setLoading(false);
            }
        };

        fetchCoins();
    }, [limit]);


    // Fehler automatisch anzeigen, wenn gesetzt
    useEffect(() => {
        if (error) {
            const toastId = `error-toast-${error.name}-${error.message}`;

            if (!toast.isActive(toastId)) {
                toast.error(
                    `❌ ${error.message}\n${error.context ?? ""}`,
                    {
                        toastId,
                        autoClose: 7000,
                        pauseOnHover: true,
                    }
                );
            }
        }
    }, [error]);

    const filteredCoins = useMemo(() => {
        return coins.filter((coin) =>
            coin.symbol.toLowerCase().includes(filter.toLowerCase()) ||
            coin.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [coins, filter]);

    const sortCoins = (coinsToSort: Coin[]) => {
        return coinsToSort.slice().sort((a, b) => {
            switch (sortBy) {
                case 'market_cap_desc':
                    return b.market_cap - a.market_cap;
                case 'market_cap_asc':
                    return a.market_cap - b.market_cap;
                case 'price_desc':
                    return b.current_price - a.current_price;
                case 'price_asc':
                    return a.current_price - b.current_price;
                case 'change_desc':
                    return b.price_change_percentage_24h - a.price_change_percentage_24h;
                case 'change_asc':
                    return a.price_change_percentage_24h - b.price_change_percentage_24h;
                default:
                    return 0;
            }
        });
    };

    return (
        <div>
            <Header gecko={true}/>
            <h1>🚀 Crypto Dashboard</h1>

            {loading && (
                <div className="loading-container">
                    <Spinner/>
                </div>
            )}

            {!loading && !error && (
                <>
                    <NavigationBar
                        limit={limit}
                        onSelectLimit={setLimit}
                        filter={filter}
                        onFilterChange={setFilter}
                        sort={sortBy}
                        onSortSelect={setSortBy}
                    />
                    <Dashboard coins={sortCoins(filteredCoins)}/>
                </>
            )}
        </div>
    );
};

export default HomePage;
