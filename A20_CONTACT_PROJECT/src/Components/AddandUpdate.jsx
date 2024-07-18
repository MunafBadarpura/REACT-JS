import React from 'react'
import Model from './Model'

function AddandUpdate({isOpen, onClose}) {
  return (
    <div>
        {isOpen == true && 
            <Model isopen={isOpen} onClose={onClose}>
                this is model 
            </Model>
        }
    </div>
  )
}

export default AddandUpdate
