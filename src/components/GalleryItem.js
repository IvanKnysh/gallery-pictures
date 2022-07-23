import React from 'react';

const GalleryItem = ({ picture, setPicture }) => {
	return (
		<li className="gallery__item" onClick={() => setPicture(picture)}>
			<div className="pic__wrap">
				<img src={picture.url} alt="" />
			</div>
		</li>
	);
};

export default GalleryItem;