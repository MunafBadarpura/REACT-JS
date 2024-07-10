import {useState} from 'react'

function LudoBoard(){
    let [moves, setMoves] = useState( {blue:0, yellow:0, green:0, red:0} );
    let [arr, setArr] = useState([0]);

    function blueClick(){
        setMoves((preMoves) => {
            return {...preMoves, blue: preMoves.blue+1}
        });

        setArr((preArr) => {
            return [...preArr, 1];
        });
        console.log(arr);
    }

    function yellowClick(){
        setMoves((preMoves) => {
            return {...preMoves, yellow: preMoves.yellow+1}
        });
    }

    function greenClick(){
        moves.green+=1;
        setMoves({...moves});
        console.log(moves.green);
    }

    function redClick(){
        moves.red+=1;
        setMoves({...moves});
    }



    return(
        <>
            <p>Game Begines</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves: {moves.blue}</p>
                <button onClick={blueClick}>+1</button>

                <p>Yellow moves: {moves.yellow}</p>
                <button onClick={yellowClick}>+1</button>

                <p>Greem moves: {moves.green}</p>
                <button onClick={greenClick}>+1</button>

                <p>Red moves : {moves.red} </p>
                <button onClick={redClick} >+1</button>
            </div>
        </>
    )
}

export default LudoBoard;