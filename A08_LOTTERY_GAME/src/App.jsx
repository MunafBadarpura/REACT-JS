import './App.css'
import Lottery from './Components/Lottery'
import { sum } from './Components/helper' 

function App() {

    function winFun(ticket){
      return sum(ticket) === 15;
    }

  return(
    <>
      <Lottery n={3} winCondition={winFun} />
    </>
  )
}

export default App
