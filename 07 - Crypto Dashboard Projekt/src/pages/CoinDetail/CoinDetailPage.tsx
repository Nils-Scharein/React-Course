import {useParams} from "react-router";
import Header from "../../components/Header/Header.tsx";
import {useEffect, useState} from "react";
import type {AppError, CoinData} from "../../components/types.ts";
import CoinDetails from "../../components/CoinDetails/CoinDetails.tsx";
import Spinner from "../../components/Loading/Spinner.tsx";
import {toast} from "react-toastify";
import CoinChart from "../../components/CoinDetails/CoinChart.tsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.tsx";

const API_URL = import.meta.env.VITE_API_URL || "ERROR GETTING API URL FROM ENV";

const CoinDetailPage = () => {
    const {id} = useParams();
    const [coin, setCoin] = useState<CoinData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AppError | null>(null);

    useEffect(() => {
        const fetchCoins = async () => {
            setLoading(true);
            const API_EXTRA = `coins/${id}`;

            try {
                const res = await fetch(`${API_URL}${API_EXTRA}`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch data from ${API_URL}${API_EXTRA}: ${res.status}`);
                }

                const data = await res.json();
                console.log(data);
                setCoin(data);

                if (!toast.isActive(`success-toast-CoinDetailPage-${id}`)) {
                    toast.success(`Successfully loaded data for: ${id}`, {
                        toastId: `success-toast-CoinDetailPage-${id}`,
                    });
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError({
                        name: err.name,
                        message: err.message,
                        context: `Fehler beim Abrufen der Daten von: ${API_URL}${API_EXTRA}`,
                    });
                } else {
                    setError({
                        name: "UnknownError",
                        message: "An unknown error occurred.",
                    });
                }
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchCoins();
        }
    }, [id]);

    return (
        <>
            <Header gecko={true}/>

            {loading ? (
                <div className="loading-container">
                    <Spinner/>
                </div>
            ) : error ? (
                <ErrorMessage error={error}/>
            ) : (
                <div className="coin-details-container">
                    {coin && <CoinDetails key={coin.id} coin={coin}/>}
                    {coin && <CoinChart coinID={coin.id}/>}
                </div>
            )}
        </>
    );
};

export default CoinDetailPage;
