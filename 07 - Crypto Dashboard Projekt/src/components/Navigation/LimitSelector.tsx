function createRange(start: number, step: number = 1, end: number): number[] {
    const result: number[] = [];

    for (let i = start; i <= end; i += step) {
        result.push(i);
    }

    return result;
}

type LimitSelectorProps = {
    limit: number;
    onSelectLimit: (limit: number) => void;
};

const LimitSelector = ({limit, onSelectLimit}: LimitSelectorProps) => {
    return (
        <div className="controls">
            <label htmlFor="limit">Show: </label>
            <select
                id="limit"
                value={limit}
                defaultValue={limit}
                onChange={(e) => onSelectLimit(Number(e.target.value))}
            >
                {createRange(10, 10, 250).map((element) => {
                    return (
                        <>
                            <option value={element}>{element}</option>
                        </>
                    )
                })}
            </select>
        </div>
    );
};

export default LimitSelector