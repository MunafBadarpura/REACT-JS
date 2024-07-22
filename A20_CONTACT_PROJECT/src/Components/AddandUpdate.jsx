import React from "react";
import Model from "./Model";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc} from "firebase/firestore"
import { db } from "../config/firebase"

function AddandUpdate({ isOpen, onClose, isUpdate , contact}) {

  const addContact = async(contact) => {
    try{
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    }
    catch(err){
      console.log(err);
    }
  }
  const updateContact = async(contact, id) => {
    try{
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div>

        <Model isopen={isOpen} onClose={onClose}>
          <Formik
            initialValues={isUpdate
              ? {
                name: contact.name,
                email: contact.email,
              }
              : {
              name: "",
              email: "",
            }}
            onSubmit={(values) => {
              isUpdate ? updateContact(values, contact.id) : addContact(values);
              
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

    </div>
  );
}

export default AddandUpdate;