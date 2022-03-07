import { useState } from "react";

export function Counter(props) {
    const [counter, setCounter] = useState(10);

    const handleChange = (v) => {
        setCounter(counter + v);
    }

    const doubleValue = (value) => {
        setCounter(counter * value)
    }

    return (
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={() => handleChange(1)}>Add 1</button>
            <button onClick={() => {
                if (counter >= 1) {
                    handleChange(-1)
                }
            }}>Sub 1</button>
            <button onClick={() => doubleValue(2)}>Double</button>
        </div>
    );
}