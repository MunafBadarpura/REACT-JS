import styled from "styled-components";


export default function Start({buttonToggle}){
    return(
            <Container>
                <div className="right">
                     <img src="/public/Images/dices.png" alt="Dices" />
                </div>
            <div className="left"> 
                <h1>DICE GAME</h1>
                <Button onClick={buttonToggle}>Play Now</Button>
            </div>
            </Container>
        
    )
}

// styling

// const Outer = styled.div`
//     height: 100vh;
//     width: 100vw;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

const Container = styled.div`
    max-width: 1182px;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    display: flex;

    .right{
        width: 649px;
        height: 522px;
    }   
    .left{
        width: 533;
        height: 522px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;

        h1{
            font-size: 96px;
            font-weight: 700;
        }

    }
`;

const Left = styled.div`
    width: 533;
    height: 522px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
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
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
    
`;