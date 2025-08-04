import type {Coin} from "../../components/types.ts";
import {Dashboard} from "../../components/CryptoDashboard/Dashboard.tsx";
import Header from "../../components/Header/Header.tsx";
import NavigationBar from "../../components/Navigation/NavigationBar.tsx";

type HomePageProps = {
    coins: Coin[];
    filter: string;
    setFilter: (filter: string) => void;
    limit: number;
    setLimit: (limit: number) => void;
    sortBy: string;
    setSortBy: (sortBy: string) => void;
    loading: boolean;
    error: string | null;
};


const HomePage = ({coins, filter, setFilter, limit, setLimit, sortBy, setSortBy, loading, error}: HomePageProps) => {


    const filteredCoins = coins.filter((coin) => {
        return coin.symbol.includes(filter.toLowerCase()) || coin.name.toLowerCase().includes(filter.toLowerCase())
    })

    const sortCoins = (coinstoFilter: Coin[]) => {
        return coinstoFilter.slice()
            .sort((a, b) => {
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
    }


    return (
        <div>
            <Header gecko={true}/>
            <h1>🚀 Crypto Dashboard</h1>
            {loading && <p>Loading...</p>}
            {error && <div className="error">{error}</div>}
            {!loading && !error && (
                <>
                    <NavigationBar limit={limit} onSelectLimit={setLimit} filter={filter} onFilterChange={setFilter}
                                   sort={sortBy} onSortSelect={setSortBy}/>
                    <Dashboard coins={sortCoins(filteredCoins)}/>
                </>
            )}
        </div>
    )
};

export default HomePage