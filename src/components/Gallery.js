import React from 'react';
import GalleryItem from "./GalleryItem";
import Pictures from './DBImages';

const Gallery = ({ setPicture }) => {
	return (
		<ul className="gallery__items">
			{ Pictures.map(item => <GalleryItem key={item.id} picture={item} setPicture={setPicture} />) }
		</ul>
	);
};

export default Gallery;