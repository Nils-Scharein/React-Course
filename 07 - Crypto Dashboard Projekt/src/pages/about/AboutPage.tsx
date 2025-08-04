import Header from "../../components/Header/Header.tsx";

const AboutPage = () => {

    return (
        <>
            <Header/>
            <div className="about">
                <h1 className="h1">About Crypto Dash</h1>
                <p className="p">Crypto Dash is a simple React application that displays live cryptocurrency data using
                    the
                    CoinGecko API.

                    You can explore the top cryptocurrencies by market cap, filter by name or symbol, and sort them by
                    price, market cap, or 24-hour change.

                    This project is built as part of a React tutorial to help you understand hooks, components, state
                    management, and integrating with external APIs.

                    🚀 Future features might include detailed coin views, favorites, pagination, and much more!</p>
            </div>
        </>
    )
};

export default AboutPage