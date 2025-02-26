import {useState, useEffect} from "react";

function Counter(){
    let [counter1, setCounter1] = useState(0);
    let [counter2, setCounter2] = useState(0);

    function increase(){
        setCounter1((currCount) => {
            return currCount+1;
        })
    }
    function increase2(){
        setCounter2((currCount) => {
            return currCount+1;
        })
    }

    // useEffect(function, dependencies) , if we use "[]" (empty array) so it only execute 1time
    // ===> this run first time and after every render
    // useEffect(function print(){
    //     console.log("This is use-effect");
    // })

    // ===> this run only first time 
    // useEffect(function print(){
    //     console.log("This is use-effect");
    // },[])

    // ===> this run first time and after counter1 rendring
    useEffect(function print(){
        console.log("This is use-effect");
    }, [counter1])

    return(
        <>
            <h3>Counter : {counter1}</h3>
            <button onClick={increase}>Increase</button>     <br /><hr />

            <h3>Counter : {counter2}</h3>
            <button onClick={increase2}>Increase</button>
        </>
    )
}




export default Counter;