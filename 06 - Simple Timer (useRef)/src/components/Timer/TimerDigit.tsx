type TimerNumberProps = {
    numberTime: number;
    className?: string;
    label?: string;
};

const TimerDigit = ({numberTime, className, label}: TimerNumberProps) => {
    return (
        <div className={`${className}`}>
            <div className={className}>
                <span>{label}</span>
                <span>{String(numberTime).padStart(2, "0")}</span>
            </div>
        </div>
    );
};

export default TimerDigit