import { useState } from "react";
import styled from "styled-components"
import Rules from "./Rules";

export default function RollDice({ currentDice, rollDice, resetScore, toggle, rulesCheck}){

    return (
        
        <RollContainer>
        <div className="container">
            <div onClick={rollDice} className="dice">
            <img src={`/public/Images/dice_${currentDice}.png`} alt="Dice" />
            </div>
            <p>Click on Dice to roll</p>
            <Button onClick={resetScore} className="first-btn">Reset Score</Button>
            <Button onClick={toggle} >{rulesCheck ? "Hide Rules" : "Show Rules"}</Button>
        </div>
        <div className="rules">
        {rulesCheck && <Rules/>}
        </div>
        </RollContainer>
    )
}

const RollContainer = styled.div`

    display: flex;
    justify-content: center;

    .container{
        height: 449px;
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            height: 250px;
            width: 250px;
        }
    
        p{
            font-weight: 500;
            font-size: 24px;
            margin-top: 15px;
        }

        .first-btn{
            background-color: white;
            color: black;
            border: 1px solid black;
            margin-top: 30px;
        }
    }

    .rules{
        margin-top: 100px;
        margin-left: 100px;
    }

`;

const Button = styled.button`
    height: 44px;
    width: 220px;
    padding: 10px 72px;
    color: white;
    background-color: black;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    border: 1px solid transparent;
    margin-top: 24px;
    white-space: nowrap;
`;