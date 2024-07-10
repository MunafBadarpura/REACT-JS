import "./App.css"
import Para from "./Components/Paragraph"
import {Button1, Button2} from "./Components/Button"
import ProductList from "./Components/ProductList"
let name = "Munaf"

function Title(){
  return(
    <h1>I am Title</h1>
  )
}

function App(){
  return(
    <>
      <Title/>
      <Para/>
      <Button1/> <br />
      <Button2/>

      {/* js in jsx */}
      <p>2+2 is {2+2}</p>
      <p>My name is {name.toUpperCase()}</p>
      
      <h3>Product List</h3>

      <ProductList/>
    </>
  )
}

export default App;
