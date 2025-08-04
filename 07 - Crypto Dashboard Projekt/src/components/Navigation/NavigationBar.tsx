import "../../index.css";
import LimitSelector from "./LimitSelector.tsx";
import FilterInput from "./FilterInput.tsx";
import SortSelector from "./SortSelector.tsx";

type NavigationBarProps = {
    limit: number,
    onSelectLimit: (limit: number) => void,
    filter: string,
    onFilterChange: (filter: string) => void,
    sort: string,
    onSortSelect: (sort: string) => void
};

const NavigationBar = ({limit, onSelectLimit, filter, onFilterChange, sort, onSortSelect}: NavigationBarProps) => {

    return (
        <div className="top-controls">
            <FilterInput filter={filter} onFilterChange={onFilterChange}/>
            <LimitSelector limit={limit} onSelectLimit={onSelectLimit}/>
            <SortSelector sort={sort} onSortSelect={onSortSelect}/>
        </div>
    );
};

export default NavigationBar;
