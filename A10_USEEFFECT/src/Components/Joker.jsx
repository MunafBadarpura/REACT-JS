import {useState, useEffect} from "react";

function Joker(){
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const [joke, setJoke] = useState({ 
        setup: "",
        punchline: "" 
    });
    
    const getJoke = async() => {
        const responce = await fetch(URL);
        const jsonResponce = await responce.json();
        
        setJoke({setup: jsonResponce.setup, punchline: jsonResponce.punchline});
        console.log(jsonResponce);
    }

    useEffect(() => {
        getJoke();
    }, []);

    return(
        <>
            <button onClick={getJoke}>Get Joke</button>
            <h3>Joke : </h3> 
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>            
        </>
    )
}

export default Joker;