function handleSubmit(event){
    event.preventDefault();
    console.log("Form Submitted");
}

function Form(){
    return(
        <form  onSubmit={handleSubmit}>
        <input type="text" />
        <button>Submit</button>
        </form>
    )
}

export default Form;