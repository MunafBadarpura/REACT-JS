import { useState } from "react";

function Form(){
    let [fullName, setFullName] = useState("");
    function changeHandle(event){
        // setFullName(event.target.value);
        setFullName((preName) => {
            return event.target.value;
        })
        console.log(fullName);
    }

    return(
        <form>
            <label htmlFor="name">Fullname : </label>
            <input value={fullName} onChange={changeHandle} type="text" id="name" placeholder="enter fullName" />
            <button>Submit</button>
        </form>
    )
}

export default Form