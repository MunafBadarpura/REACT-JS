import { useState } from 'react';
import styled from 'styled-components';
import RollDice from './RollDice';

export default function Game(){

    let arr = [1,2,3,4,5,6];
    let [score, setScore] = useState(0);  //this is for score
    let [selectedNumber, setSelectedNumber] = useState(); // this is for selected number
    let [currentDice, setCurrentDice] = useState(1); // this is for dice image
    let [error, setError] = useState(""); // this is for error message
    let [rulesCheck, setRulesCheck] = useState(false); // this is for rules

    // function for genrate random number
    function genraterandomNumber(){
        return Math.floor(Math.random()*6+1);
    }

    function rollDice(){
        if(selectedNumber === undefined){
            setError("You have not selected any number");
            return;
        }
        const randomNumber = genraterandomNumber();
        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber ){
            setScore((prev) => prev+randomNumber);
        }
        else{
            setScore((prev) => prev-2);
        }

        setSelectedNumber(undefined); // set selected number to none
    }

    // function for set selected number
    function numberSelectorHandle(value){
        setSelectedNumber(value);
        setError("");
    }

    // function for reset score
    function resetScore(){
        setScore((pre) => 0);
    }

    // function for rules toggle
    function toggle(){
        setRulesCheck((prev) => !prev);
    }


    return(
        <>
        <Main>
            <Nav>
                <div className="first">
                    <h1>{score}</h1>
                    <p>Total Score</p>
                </div>
                <div className="second">
                    <p style={{color:"red"}}>{error}</p>
                    <div className="flex">
                    {
                        arr.map((value, i) => 
                            <Box $isSelected={value === selectedNumber} onClick={() => numberSelectorHandle(value)} key={i} >{value}</Box>
                        )
                    }
                    </div>
                    <p>Select Number</p>
                </div>
            </Nav>
        </Main>

        <RollDice currentDice={currentDice} rollDice={rollDice} resetScore={resetScore} toggle={toggle}  rulesCheck={rulesCheck}/>
        </>
        
    )
}


//Styling

const Main = styled.div`
    height: 151px;
    max-width: 1280px;
    margin: 40px 80px 48px 80px;
`;

const Nav = styled.div`

    display: flex;
    justify-content: space-between;

    .first{

        width: 135px;
        height: 151px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 1;

        h1{
            font-size: 100px;
            font-weight: 500;
        }
        p{
            font-size: 24px;
            font-weight: 500;
            margin-top: px;
        }
    }

    .second{
        display: flex;
        flex-direction: column;
        align-items: end;
        height: 138px;
        width: 552px;

        .flex{
            width: 552px;
            height: 100%;
            display: flex;
            gap: 24px;
        }

        p{
            font-weight: 700;
            font-size: 24px;
            margin-top: 30px;
        }

    }

    
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    align-items: center;
    text-align: center;
    font-weight: 700;
    font-size:24px;
    background-color: ${(props) => (props.$isSelected ? "black" : "white")};
    color: ${(props) => (!props.$isSelected ? "black" : "white")};

`;
