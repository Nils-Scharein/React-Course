import {useState, useRef, useEffect} from "react";
import TimerNumber from "./TimerNumber.tsx";
import TimeHelper from "./TimeHelper.tsx"; // ✅ importiere die neue Klasse

const SimpleTimer = () => {
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const timeFormatted = new TimeHelper(time);
    const timeParts = timeFormatted.toObject();

    useEffect(() => {
        document.title = `${timeFormatted.toString()}`;
    }, [time]);

    const toggleTimer = () => {
        if (isRunning) {
            if (timeRef.current) {
                clearInterval(timeRef.current);
                timeRef.current = null;
            }
        } else {
            timeRef.current = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1);
        }
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        if (timeRef.current) {
            clearInterval(timeRef.current);
            setIsRunning(false);
            setTime(0);
            timeRef.current = null;
        }
    }

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
                <div
                    className={`flex justify-center items-center rounded-lg p-2 border-2 ${
                        isRunning
                            ? "bg-green-100 border-green-200"
                            : "bg-red-100 border-red-200"
                    }`}
                >
                    {Object.entries(timeParts).map(([label, value], idx, arr) => (
                        <div key={label} className="flex items-center">
                            <TimerNumber
                                className="text-4xl font-mono text-center px-1"
                                numberTime={value}
                            />
                            {idx < arr.length - 1 && (
                                <span className="text-4xl font-mono mx-1">:</span>
                            )}
                        </div>
                    ))}
                </div>
                <div id="wrapper-btn" className="flex gap-4">
                    <button
                        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={toggleTimer}
                    >
                        {isRunning ? "Stop Timer" : "Start Timer"}
                    </button>
                    <button
                        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={resetTimer}
                    >
                        Reset Time
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimpleTimer;
