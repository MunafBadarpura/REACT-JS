import React from "react"
import "./Product.css"
import Price from "./Price";

function Product({title, idx}){
    let oldPrices = ["12,599", "9,833", "1,099", "599"];
    let newPrices = ["9,989", "7,800", "999", "378"];
    let Descriptions = [
        ["HighSuper DPI", "8000 DPI"],
        ["PowerFull Proccesor", "option widly"],
        ["Light And Surface", "design For Ipad"],
        ["Greate And Surface", "Batter Options"]
    ]
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{Descriptions[idx][0]}</p>
            <p>{Descriptions[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            
        </div>
    )
}

export default Product;