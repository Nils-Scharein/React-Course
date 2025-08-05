import type {CoinData} from "../types.ts";

interface CoinDetailsProps {
    coin: CoinData;
}

const CoinDetails = ({coin}: CoinDetailsProps) => {
    return (
        <>
            <h1 className="coin-details-title">
                {coin ? `${coin.name} (${coin.symbol})` : "Coin Details"}
            </h1>
            <img className="coin-details-image" src={coin.image.large} alt={coin.name}/>
            <p>{coin.description.en.split(". ")[0] + "."}</p>
            <div className="coin-details-info">
                <h3>Market Cap Rank: {coin.market_cap_rank}</h3>
                <h3>Current Price: {coin.market_data.current_price.eur.toLocaleString()} €</h3>
                <h4>Market Capitalization: {coin.market_data.market_cap.eur.toLocaleString()} €</h4>
                <h4>24h High: {coin.market_data.high_24h.eur.toLocaleString()}€</h4>
                <h4>24h Low : {coin.market_data.low_24h.eur.toLocaleString()}€</h4>
                <h4>
                    24h Price Change:{' '}
                    <span
                        className={coin.market_data.price_change_24h > 0 ? "positive" : "negative"}>
                            {coin.market_data.price_change_24h.toFixed(2)}€
                            ({coin.market_data.price_change_percentage_24h.toFixed(2)}%)
                        </span>
                </h4>

                <h4>
                    Circulating Supply: {coin.market_data.circulating_supply.toLocaleString()}
                </h4>

                <h4>
                    Total Supply: {coin.market_data.total_supply
                    ? coin.market_data.total_supply.toLocaleString()
                    : 'N/A'}
                </h4>
                <h4>
                    All-Time High: ${coin.market_data.ath.usd.toLocaleString()} on{' '}
                    {new Date(coin.market_data.ath_date.usd).toLocaleDateString()}
                </h4>
                <h4>
                    All-Time Low: ${coin.market_data.atl.usd.toLocaleString()} on{' '}
                    {new Date(coin.market_data.atl_date.usd).toLocaleDateString()}
                </h4>
                <h4>
                    Last Updated: {new Date(coin.last_updated).toLocaleDateString()}
                </h4>
            </div>

            <div className="coin-details-links">
                {coin.links.homepage[0] && (
                    <p>
                        🌐{' '}
                        <a
                            href={coin.links.homepage[0]}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Website
                        </a>
                    </p>
                )}
                {coin.links.blockchain_site[0] && (
                    <p>
                        🧬{' '}
                        <a
                            href={coin.links.blockchain_site[0]}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Blockchain Explorer
                        </a>
                    </p>
                )}
                {coin.categories.length > 0 && (
                    <p>Categories: {coin.categories.join(', ')}</p>
                )}
            </div>

        </>
    )
};

export default CoinDetails;
