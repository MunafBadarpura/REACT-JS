import TicketNum from "./TicketNum";
import "./ticket.css"

function Ticket({ticket}){
    return(
        <div className="ticket">
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}

export default Ticket