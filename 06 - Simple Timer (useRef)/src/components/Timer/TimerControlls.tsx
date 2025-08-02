type TimerControllsProps = {
    isRunning: boolean;
    onToogle: () => void;
    onResset: () => void;
}

const TimerControlls = ({isRunning, onToogle, onReset: onReset}:TimerControllsProps) => {
    return (
        <div id="wrapper-btn" className="flex gap-4">
            <button
                className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={onToogle}
            >
                {isRunning ? "Stop Timer" : "Start Timer"}
            </button>
            <button
                className={`mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  ${
                    !isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={onReset}
                disabled={!isRunning}
            >
                Reset Time
            </button>
        </div>
    );
};

export default TimerControlls