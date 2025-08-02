import {useRef, useEffect} from "react";

type TimerControlsProps = {
    isRunning: boolean;
    onToggle: () => void;
    onReset: () => void;
}

const TimerControls = ({isRunning, onToggle, onReset}: TimerControlsProps) => {

    const startButtonRef = useRef<HTMLButtonElement>(null);


    useEffect(() => {
        if (startButtonRef.current) {
            startButtonRef.current.focus();
        }
    }, []);

    return (
        <div id="wrapper-btn" className="flex gap-4">
            <button
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={onToggle}
                ref={startButtonRef}
            >
                {isRunning ? "Stop Timer" : "Start Timer"}
            </button>
            <button
                className={`mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600`}
                onClick={onReset}
            >
                Reset Time
            </button>
        </div>
    );
};

export default TimerControls