import React from 'react';

const Modal = ({ picture, setPicture }) => {
	if (!picture) return null;

	return (
		<div className="overlay">
			<div className="modal__window">
				<img src={picture.url} alt="" />
				<h3>{picture.title}</h3>
				<button onClick={() => setPicture(null)}>X</button>
			</div>
		</div>
	);
};

export default Modal;