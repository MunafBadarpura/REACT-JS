import React from "react"
import Product from "./product";

function ProductList(){
    let options = [<li>"fast"</li>, <li>"efiicinet"</li>, <li>"relaible"</li>];
    let options2 = {a:"Aplle", b:"Ball"}
    return(
        <>
        <Product title="Laptop" price={30000}  features={options} features2={options2}/>
        <Product title="Mobile" price={20000} />
        <Product title="Apple"/>
        </>
    )
}

export default ProductList;