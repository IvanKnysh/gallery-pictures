import React from 'react';
import './style.css';
import Gallery from './components/Gallery';
import Modal from "./components/Modal";

function App() {
  const [picture, setPicture] = React.useState(null);

  return (
    <>
      <Gallery setPicture={setPicture} />
      <Modal picture={picture} setPicture={setPicture} />
    </>
  );
}

export default App;