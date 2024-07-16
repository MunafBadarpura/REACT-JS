import styled from "styled-components";

export default function Rules(){
    return(
        <RulesOuter>
            <div className="RulesContainer">
                <h1>How to play dice game</h1>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
                <p>if you get wrong guess then 2 point will be dedcuted</p>
            </div>
         </RulesOuter>
    )
}

// Styling

const RulesOuter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;


    .RulesContainer{
        background-color: #FBF1F1;
        height: 208px;
        width: 794px;
    }
    h1{
        font-weight: 700;
        font-size: 24px;
        margin: 20px;
    }
    p{
        font-weight: 500;
        font-size: 16px;
        margin: 4px 20px;
    }
`;