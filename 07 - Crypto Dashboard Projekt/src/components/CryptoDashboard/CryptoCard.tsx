import type {Coin} from "../types.ts";
import {Link} from "react-router";

type CryptoCardProps = {
    coin: Coin
};

const CryptoCard = ({coin}: CryptoCardProps) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="coin-card">
                <div className="coin-header">
                    <img className="coin-image" alt={coin.image} src={coin.image}/>
                    <div>
                        <p>{coin.name}</p>
                        <p className="symbol">{coin.symbol.toUpperCase()}</p>
                    </div>
                </div>
                <p>Price: {coin.current_price.toLocaleString()}</p>
                {/*<p>{Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()}</p>*/}
                <p className={coin.price_change_percentage_24h >= 0 ? "positive" : "negative"}>{Intl.NumberFormat("de-DE", {
                    style: "percent",
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 4,
                }).format(coin.price_change_percentage_24h / 100)}</p>
                <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
            </div>
        </Link>
    );
};

export default CryptoCard
