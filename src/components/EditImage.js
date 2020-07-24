import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditImageForm(props){
  const { setForm, visibleForm, selectedImage, setEditing, editing } = props;
  const firestore = useFirestore();
  console.log(selectedImage);

  function handleEditImageFormSubmission(event) {
    event.preventDefault();
    setForm(!visibleForm);
    setEditing(!editing);
    const propertiesToUpdate = {
                              imageName: event.target.imageName.value,
    }
    return firestore.update({ collection: 'images', doc: selectedImage }, propertiesToUpdate)
  }

  return(
    <React.Fragment>
      <form onSubmit={handleEditImageFormSubmission}>
        <input
          type='text'
          name='imageName'
          placeHolder='New Image Name' />
        <button type='submit'>Update Image</button>
      </form>
    </React.Fragment>
  );
}

EditImageForm.propTypes = {
  setForm: PropTypes.func,
  visibleForm: PropTypes.bool,
  selectedImage: PropTypes.string
}

export default EditImageForm