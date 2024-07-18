import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'

function Model({isopen, onClose, children}) {
  return createPortal(
    <>
        <>
        <div className='z-50 relative m-auto bg-white h-[244px] max-w-[80%] p-4'> 
            <div className="flex justify-end ">
                <AiOutlineClose onClick={onClose} className='text-2xl cursor-pointer'/>
            </div>
            {children}
         </div>
         
         <div onClick={onClose} className='backdrop-blur top-0 z-40 absolute h-screen w-screen'/>
        </>
    </>
  ,document.getElementById("model-root"))
}

export default Model
