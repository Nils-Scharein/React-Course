import {useParams} from "react-router";
import Header from "../../components/Header/Header.tsx";
import {useEffect, useState} from "react";
import type {Coin} from "../../components/types.ts";
import CoinDetails from "../../components/CoinDetails/CoinDetails.tsx";

const API_URL = import.meta.env.VITE_API_URL || "ERROR GETTING API URL FROM ENV"

const CoinDetailPage = () => {
    const {id} = useParams();

    const [coin, setCoin] = useState<Coin | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true);

        const API_EXTRA = `coins/${id}`

        const fetchCoins = async () => {
            try {
                console.log(`${API_URL}${API_EXTRA}`)
                const res = await fetch(`${API_URL}${API_EXTRA}`);
                if (!res.ok) throw new Error(`Failed to fetch data from ${API_URL}: ${res.status}`);
                const data = await res.json();
                console.log(data);
                setCoin(data);
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
    }, [id]);

    return (

        <>
            <Header gecko={true}/>
            {loading && "loading..."}
            {error && error}
            {!loading && !error && coin &&
                <CoinDetails key={coin.id} coin={coin}/>}
            )
        </>

    );
};

export default CoinDetailPage
