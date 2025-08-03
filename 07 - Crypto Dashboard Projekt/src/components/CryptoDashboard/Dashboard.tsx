import CryptoCard from "./CryptoCard.tsx";

export const Dashboard = () => {

    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <div className="grid">
                {testArray.map((element, index) => (
                    <CryptoCard key={element} coinLabel={String(element)}/>
                ))}
            </div>
        </>
    );
};
