import type {MarketChartData} from "../types.ts";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Spinner from "../Loading/Spinner.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import {useTheme} from "../../context/Theme/UseTheme.tsx";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale
);

// --- Types ---
export type ChartPoint = {
    x: number;
    y: number;
};

export type ChartDataset = {
    label: string;
    data: ChartPoint[];
    fill?: boolean;
    borderColor?: string;
    backgroundColor?: string;
    pointRadius?: number;
    tension?: number;
};

export type ChartData = {
    datasets: ChartDataset[];
};

const API_BASE_URL = import.meta.env.VITE_API_URL;

type CoinChartProps = {
    coinID: string;
};

const lightModeColors = {
    borderColor: '#007bff',
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
};

const darkModeColors = {
    borderColor: '#66b2ff',
    backgroundColor: 'rgba(102, 178, 255, 0.2)',
};

const CoinChart = ({coinID}: CoinChartProps) => {

    const {theme} = useTheme();

    const color = theme === "dark" ? darkModeColors : lightModeColors;

    const [chartData, setChartData] = useState<ChartData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error & { context?: string } | null>(null);

    useEffect(() => {
        const fetchCoinData = async () => {
            setIsLoading(true);
            const url = `${API_BASE_URL}coins/${coinID}/market_chart?vs_currency=eur&days=7`;

            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`Failed to fetch data from ${url}: ${res.status}`);
                const data: MarketChartData = await res.json();

                const prices: ChartPoint[] = data.prices.map(([timestamp, value]) => ({
                    x: timestamp,
                    y: value,
                }));

                setChartData({
                    datasets: [
                        {
                            label: 'Price (EUR)',
                            data: prices,
                            fill: true,
                            borderColor: color.borderColor,
                            backgroundColor: color.backgroundColor,
                            pointRadius: 0,
                            tension: 0.3,
                        },
                    ],
                });

                if (!toast.isActive(`success-toast-CoinChart-${coinID}`)) {
                    toast.success(`Successfully loaded Prices for: ${coinID}`, {
                        toastId: `success-toast-CoinChart-${coinID}`,
                    });
                }
            } catch (err) {
                if (err instanceof Error) {
                    setError({
                        name: err.name,
                        message: err.message,
                        context: `Beim Abrufen der Daten von: ${url}`,
                    });
                } else {
                    setError({
                        name: "UnknownError",
                        message: "An unknown error occurred"
                    });
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchCoinData();
    }, [coinID]);

    return (
        <>
            {isLoading && <Spinner/>}
            {error && <ErrorMessage error={error}/>}
            {!isLoading && chartData &&
                <div style={{marginTop: "30px"}}>
                    <Line
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    mode: "index",
                                    intersect: false,
                                },
                            },
                            scales: {
                                x: {
                                    type: "time",
                                    time: {
                                        unit: "day",
                                    },
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 7,
                                    },
                                },
                                y: {
                                    ticks: {
                                        callback: (value) => `$${Number(value).toLocaleString()}`,
                                    },
                                },
                            },
                        }}
                    />
                </div>}
        </>
    );
};

export default CoinChart;
