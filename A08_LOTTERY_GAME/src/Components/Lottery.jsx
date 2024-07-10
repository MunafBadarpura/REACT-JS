import { useState } from "react"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";

function Lottery({n=3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWin = winCondition(ticket);

    function buyTicket(){
        setTicket(genTicket(n));
    }

    return (
        <>
            <h1>Lottery Game</h1>

            <Ticket ticket={ticket}/>

            <br/>
            <button onClick={buyTicket}>Genrate Ticket</button>

            <h2>{isWin ? "Congratulations You Won!!!" : "Try Again! "}</h2>
        </>
    )
}

export default Lottery;