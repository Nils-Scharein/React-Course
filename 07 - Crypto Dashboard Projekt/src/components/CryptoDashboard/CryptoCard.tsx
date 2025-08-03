type CryptoCardProps = {
    coinLabel: string;
    image?: string;
    Price?: string;
    Percent?: string;
    MarketCap?: string;
};

const CryptoCard = ({coinLabel, image, Price, Percent, MarketCap}: CryptoCardProps) => {
    return (
        <div className="coin-card">
            <div className="coin-header">
                <img className="coin-image"/>
                <div>
                    <p>{coinLabel}</p>
                    <p>Small: {coinLabel}</p>
                </div>
            </div>
            <p>Price</p>
            <p>Percent %</p>
            <p>Market Cap</p>
        </div>
    );
};

export default CryptoCard
