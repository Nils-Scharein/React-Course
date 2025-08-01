import {useEffect, useState} from 'react';

const LifecycleLoggerUseEffect = () => {


    const [count, setCount] = useState(0);

    // componentDidMount
    useEffect(() => {
        console.log("Component Mounted")

        // ComponentWill Unmount
        return () => {
            console.log("Component unmounted")
        }
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("Vaue changed:", count)
    }, [count]);


    const incrementCount = () => {
        return setCount((prev) => prev + 1);
    }

    return (
        <div className="logger-container">
            <h2>Lifecycle Logger (Function Component)</h2>
            <p>Count: {count}</p>
            <button className="secondary-btn"
                    onClick={incrementCount}>Increase
            </button>

        </div>
    )
}
export default LifecycleLoggerUseEffect;
