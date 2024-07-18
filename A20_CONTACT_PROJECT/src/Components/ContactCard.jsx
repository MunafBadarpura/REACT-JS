import React from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc, collection} from "firebase/firestore"
import { db } from "../config/firebase"

const ContactCard = ({contact}) => {

  const deleteContact = async(id) => {
    try{
      await deleteDoc(doc(db, "contact", id))
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="mt-[24px] flex h-[64px] justify-between rounded-[10px] bg-yellow">
      <div className="flex items-center gap-2" key={contact.id}>
        <img
          className="h-[50px] w-[50px]"
          src="public/Images//user.png"
          alt=""
        />
        <div className="text-black">
          <h1 className="text-[16px] font-[600]">{contact.name}</h1>
          <p className="text-[14px]">{contact.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <RiEditCircleLine className="cursor-pointer text-[35px]" />
        <IoMdTrash onClick={() => deleteContact(contact.id)} className="cursor-pointer text-[35px]" />
      </div>
    </div>
  );
};

export default ContactCard;
