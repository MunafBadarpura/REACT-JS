import React from "react"
import "./Product.css"

function Product({title, price=1 ,features}){
    let style1 = {backgroundColor: price>=25000 ? "yellow" : null};
    return(
        <div className="Product" style={style1}>
        <h1>{title}</h1>
        <h3>{price}</h3>
        <p>{features}</p>
        {/* {price>25000 ? <p>Discount of 5% </p> : null} */}
        {price>25000 && <p>Discount of 5% </p> }

        </div>
    )
}

export default Product;