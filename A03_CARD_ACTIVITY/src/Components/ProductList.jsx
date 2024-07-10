import React from "react"
import Product from "./product";

function ProductList(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
    return(
        <div style={styles}>
        <Product title="Logitech MX MASTER" idx={0}/>
        <Product title="MASTER low Infinix" idx={1}/>
        <Product title="Apple pencil (2n Genration)" idx={2}/>
        <Product title="Petromcis MS Tod 234" idx={3}/>
        </div>
    )
}

export default ProductList;