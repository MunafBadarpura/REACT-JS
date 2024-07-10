import "./App.css"
import Form from "./Form";

function handelClick(){
  console.log("Clicked!!!!!");
}

function handelMouse(){
  console.log("Mouse In Paragraph");
}

function handleDblClick(){
  console.log("H1 Dbl Clicked");
}

function App(){
  return(
    <>
       <button onClick={handelClick} >Click ME!</button>
       <p onMouseOver={handelMouse} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, tempore.</p>
       <h1 onDoubleClick={handleDblClick}>DBL CLICK</h1>
       <Form/>

    </>
  )
}

export default App;
