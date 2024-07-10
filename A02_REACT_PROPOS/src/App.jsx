import './App.css'
import ProductList from './Components/ProductList'
import MsgBox from './Components/MsgBox'

function App(){
  return(
    <>
    <ProductList/>
    <MsgBox username={"Munaf"} textColor={"green"}/>
    </>
  )
}

export default App
