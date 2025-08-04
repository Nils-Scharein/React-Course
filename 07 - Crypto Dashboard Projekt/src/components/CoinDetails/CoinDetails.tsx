import type {Coin} from "../types.ts";

interface CoinDetailsProps {
    coin: Coin;
}

const CoinDetails = ({coin}: CoinDetailsProps) => {
    return (
        <div className="coin-details-container">
            <h1 className="coin-details-title">
                {coin ? `${coin.name} (${coin.symbol})` : "Coin Details"}
            </h1>
        </div>
    );
};

export default CoinDetails;
