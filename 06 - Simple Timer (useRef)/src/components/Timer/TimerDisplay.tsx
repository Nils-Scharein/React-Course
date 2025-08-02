import TimerDigit from "./TimerDigit.tsx";
import TimeClass from "./TimeClass.tsx";

type TimerDisplayProps = {
    isRunning: boolean;
    timeParts: {
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    };
}


const TimerDisplay = ({isRunning, time} : TimerDisplayProps) => {
    const timeFormatted = new TimeClass(time);
    const timeParts = timeFormatted.toObject();
    return (
        <div
            className={`flex justify-center items-center rounded-lg p-2 border-2 ${
                isRunning
                    ? "bg-green-100 border-green-200"
                    : "bg-red-100 border-red-200"
            }`}
        >
            {Object.entries(timeParts).map(([label, value], idx, arr) => (
                <div key={label} className="flex items-center">
                    <TimerDigit
                        className="text-4xl font-mono text-center px-1"
                        numberTime={value}
                    />
                    {idx < arr.length - 1 && (
                        <span className="text-4xl font-mono mx-1">:</span>
                    )}
                </div>
            ))}
        </div>
    );
};


export default TimerDisplay
