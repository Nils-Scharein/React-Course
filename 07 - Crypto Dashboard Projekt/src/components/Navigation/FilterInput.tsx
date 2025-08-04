type FilterInputProps = {
    filter: string;
    onFilterChange: (filter: string) => void;
};

const FilterInput = ({filter, onFilterChange}: FilterInputProps) => {
    return (
        <div className="filter">
            <input type="text"
                   value={filter}
                   placeholder="Filter coins by name or symbol"
                   onChange={(e) => onFilterChange(e.target.value)}
            />
        </div>
    );
};

export default FilterInput