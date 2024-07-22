import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { FaPlusCircle } from "react-icons/fa";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase"
import ContactCard from "./Components/ContactCard";
import Model from "./Components/Model";
import AddandUpdate from "./Components/AddandUpdate";

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  function onOpen(){
    setisOpen(true);
  }
  function onClose(){
    setisOpen(false);
  }

  useEffect(() => {
    async function getContacts(){
      try{
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactList = contactSnapshot.docs.map((doc) => {
          return{
            id: doc.id,
            ...doc.data()
          }
        });
        setContacts(contactList);
      }
      catch(err){
        console.log(err);
      }
    } 

    getContacts(); 

  }, [])

  return (
    <>
      <div className="mx-auto px-4 max-w-[370px]">
      <Navbar/>
      <div className="flex justify-between">
        <Search/>
        <FaPlusCircle onClick={onOpen} className="text-[45px] text-white cursor-pointer" />
      </div>

      <div>
        {
          contacts.map((contact) => (
              <ContactCard contact={contacts} key={contact.id} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
          ))
        }
      </div>
    </div>
      
      <AddandUpdate isOpen={isOpen} onClose={onClose} contact={contacts}/>
    
    </>
  );
}

export default App;