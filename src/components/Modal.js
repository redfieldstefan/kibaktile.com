import React from "react";
import ReactModal from "react-modal";
import closeIcon from "../assets/images/icons/close.png";

const Modal = ({children, isOpen, handleClose, ...rest}) => (
	<ReactModal {...rest} isOpen={isOpen} className="Modal" overlayClassName="Overlay">
		<button className="modal-close" onClick={handleClose}>
			<img src={closeIcon} />
		</button>
		{children}
	</ReactModal>
);

export default Modal;