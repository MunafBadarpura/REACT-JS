import "../CSS/Contact.css";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { useState } from "react";

export default function Contact() {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [text, setText] = useState("");


    function handleSubmit(event){
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        event.target.reset();
    }


  return (
    <>
      <div className="contact">
        <div className="right">
          <div className="black-btns">
            <button>
              <MdMessage /> &nbsp; Via Support Chat
            </button>
            <button>
              {" "}
              <IoMdCall /> &nbsp; Via Call
            </button>
          </div>
          <div className="white-btns">
            <button>
              {" "}
              <MdMessage /> Via Email Form
            </button>
          </div>

          <form onSubmit={handleSubmit} className="form-fill">
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-control">
              <label htmlFor="name">Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="4"></textarea>
            </div>
            <div className="black-btns submit">
              <button>Submit</button>
            </div>
          </form>
        </div>

        <div className="contact-img">
          <img src="/public/Images/service.svg" alt="" />
        </div>
      </div>
      <div className="details">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Text: {text} </p>
      </div>
    </>
  );
  
}
