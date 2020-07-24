import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function NewImage(props){
  const {setForm, visibleForm} = props;
  const firestore = useFirestore();

  function addImageToFirestore(event) {
    event.preventDefault();
    setForm(!visibleForm);
    return firestore.collection('images').add(
      {
        imageName: event.target.imageName.value,
        // imageURL: event.target.imageURL.value
      }
    );
  }
  return(
    <React.Fragment>
      <form onSubmit = {addImageToFirestore}>
        <input
          type='text'
          name='imageName'
          placeholder='Image Name' />
        {/* UPLOAD IMAGE FORM HERE */}
        <button type='submit'>Add Image</button>
      </form>
    </React.Fragment>
  );
}

export default NewImage;