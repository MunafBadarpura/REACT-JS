import React from "react";
import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { addDoc, collection} from "firebase/firestore"
import { db } from "../config/firebase"

function AddandUpdate({ isOpen, onClose, isUpdate }) {

  const addContact = async(contact) => {
    try{
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>
      {isOpen == true && (
        <Model isopen={isOpen} onClose={onClose}>
          <Formik
            initialValues={{
              name: "",
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              addContact(values);
            }}
          >
            <Form>
              <div className="flex flex-col">
                <label className="" htmlFor="name"> Name:{" "} </label>
                <Field className="h-[30px] border border-black p-2" name="name" required/>
              </div>
              <div className="flex flex-col pt-3">
                <label className="" htmlFor="email"> Email:{" "}</label>
                <Field className="h-[30px] border border-black p-2" name="email" required/>
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" className="h-[31px] w-[120px] bg-dark-yellow">
                  {isUpdate ? "Update " : "Add "} Contact
                </button>
              </div>
            </Form>
          </Formik>
        </Model>
      )}
    </div>
  );
}

export default AddandUpdate;
