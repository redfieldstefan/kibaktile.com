import React from "react";
import ReactModal from "react-modal";
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100vh',
    maxWidth: '100%'
  },
  overlay: {
  	'zIndex': 4
  }
};

const Button = styled.button`
	border: none;
  background-color: transparent;
  position: absolute;
  top: 15px;
  right: 15px;

  &:hover {
    cursor: pointer;
  };
  
  img {
    width: 15px;
  }
`;

const Modal = ({children, isOpen, handleClose, ...rest}) => (
	<ReactModal {...rest} isOpen={isOpen} style={customStyles}>
		<Button onClick={handleClose}>
			<img src="/icons/close.png" />
		</Button>
		{children}
	</ReactModal>
);

export default Modal;
