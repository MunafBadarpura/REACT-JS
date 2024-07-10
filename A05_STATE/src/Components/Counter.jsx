import { useState } from "react";

function Counter(){
    //let [stateVariable, setState] = useState(0);  // syntax
    let [count, setCount] = useState(0);

    function increase(){
        // setCount(count+1);
        setCount((currntCount) => {
            return currntCount+1;
        })
    }

    return(
    <div>
        <h3>Count: {count}</h3>
        <button onClick={increase}>Increase</button>
    </div>
    )
}

export default Counter;

