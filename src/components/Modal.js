import React,{Component} from 'react'
import {createPortal} from 'react-dom'

{/* createPortal(que queremos renderizar, donde lo queremos renderizar) */}
    
const Modal = props => {
        
        if(!props.isOpen){
            return null
        }  
       return(
           createPortal(
               <div className="Modal">
                   <div className="Modal__container">
                    <button className="Modal__close-button" onClick={props.onCloseModal}>X</button>
                     {props.children}   
                   </div>
               </div>,
               document.getElementById('modal')
           )
       ) 
    }
    export default Modal