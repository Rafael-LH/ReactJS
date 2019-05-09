import React,{Component} from 'react'
import Modal from './Modal'

    const DeleteBadgeModal = props =>(
        <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
                <div className="DelereBadgeModal">
                    <h1>Are you sure? </h1>
                    <p>You about to delete this badge</p>
                    <div className="container-buttons">
                        <button onClick={props.onDeleteBadge} className="btn btn-outline-danger">Aceptar</button>
                        <button onClick={props.onCloseModal} className="btn btn-outline-primary ml-4">Cancelar</button>
                    </div>
                </div>
        </Modal>
    )

    export default DeleteBadgeModal