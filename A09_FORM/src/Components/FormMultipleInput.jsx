import { useState } from "react";

function Form2(){
    let [formData, setFormData] = useState({
        id:"",
        username:""
    });

    // function changeHandle(event){
    //     let feildName = event.target.name;
    //     let newVal = event.target.value;

    //     setFormData((currData) => {
    //         //currData.feildName = newVal; <- we cant use this cause when we access member through variable we use brackets
    //         currData[feildName] = newVal;
    //         return {...currData};
    //     })
    // }

    function changeHandle(event){
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
        setFormData({
            id:"",
            username:""
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={formData.id} onChange={changeHandle} name="id"  placeholder="id" />
            <input value={formData.username} onChange={changeHandle}  name="username"  placeholder="username"/>
            <button>Submit</button>
        </form>
    )
}



export default Form2;