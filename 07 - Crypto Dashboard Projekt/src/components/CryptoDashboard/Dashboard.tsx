import CryptoCard from "./CryptoCard.tsx";
import type {Coin} from "../types.ts";
import {AnimatePresence, motion} from "framer-motion";

type DashboardProps = {
    coins: Coin[];
};

export const Dashboard = ({coins}: DashboardProps) => {
    return (
        <div className="grid">
            {coins.length > 0 ? (
                <AnimatePresence>
                    {coins.map((singleCoin) => (
                        <motion.div
                            key={singleCoin.id}
                            layout
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{duration: 0.3}}
                        >
                            <CryptoCard coin={singleCoin}/>
                        </motion.div>
                    ))}
                </AnimatePresence>
            ) : (
                <motion.p
                    key="no-results"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    No matching coins
                </motion.p>
            )}
        </div>
    );
};
