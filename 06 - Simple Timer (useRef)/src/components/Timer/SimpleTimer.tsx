import {useState, useRef, useEffect} from "react";
import TimeClass from "./TimeClass.tsx";
import TimerControls from "./TimerControlls.tsx";
import TimerDisplay from "./TimerDisplay.tsx";

const SimpleTimer = () => {
    const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        const timeFormatted = new TimeClass(time);
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
                <TimerDisplay isRunning={isRunning} time={time}/>
                <TimerControls isRunning={isRunning} onReset={resetTimer} onToogle={toggleTimer}/>
            </div>
        </div>
    );
};

export default SimpleTimer;
