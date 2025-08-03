import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header id="header">
            <div id="attribution">
                {/* Textattribution wie im Brand Guide empfohlen */}
                <p>Data powered by </p><a href="https://www.coingecko.com/en/api" target="_blank"
                                          rel="noopener noreferrer">CoinGecko</a>
                <a href="https://www.coingecko.com/en/api" target="_blank" rel="noopener noreferrer">
                    <img src="/images/coingecko.svg" alt="CoinGecko Logo" id="coingecko-logo"/>
                </a>
            </div>

            <div className="HeaderLinks">
                <a>Home</a>
                <a>About</a>
            </div>
        </header>
    );
};

export default Header;