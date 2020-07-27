import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded, useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import 'firebase/firestore';

function ImageDetail(props) {
  const { setSelectedImage, selectedImage, editing, setEditing } = props
  console.log(selectedImage)
  const firestore = useFirestore();
  useFirestoreConnect([
    {
      collection: 'images',
      doc: selectedImage
    }
  ]);

  const handleDeletingImage = (selectedImage) => {
    firestore.delete({collection:
    'images',
    doc: selectedImage});
    setSelectedImage(null)
  }

  const image=useSelector(
    ({ firestore: { data } }) => data.images && data.images[selectedImage]
  )
  return(
    <React.Fragment>
      <h1>{image.imageName}</h1>
      <img width="100" height="100" src={image.imageURL} />
      <button onClick={ () => setEditing(!editing)}>Edit Image</button>
      <button onClick={ () => handleDeletingImage(selectedImage)}>Delete Image</button>
    </React.Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object
}

export default ImageDetail