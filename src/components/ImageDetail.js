import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded, useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import 'firebase/firestore';
import { getAnnotationsFromFirebase, saveAnnotationToStore } from './firebase_annotation_queries'

function ImageDetail(props) {
  const { setSelectedImage, selectedImage, editing, setEditing } = props
  console.log(selectedImage)
  const firestore = useFirestore();
  // const [annotations, setAnnotations] = useState(getAnnotationsFromFirebase(imageId));
  // const [annotation, setAnnotation] = useState({})

  useFirestoreConnect([
    {
      collection: 'images',
      doc: selectedImage
    }
  ]);

  // onChangeAnnotation = (annotation) => {
  //   setAnnotation({ annotation })
  // }

  // onCreateAnnotation = (annotation) => {
  //   const { geometry, data } = annotation
  //   const  { imageId } =  selectedImage

  //   saveAnnotationToStore(annotation, imageId)


  // }



  const handleDeletingImage = (selectedImage) => {
    firestore.delete({collection:
    'images',
    doc: selectedImage});
    setSelectedImage(null)
  }

  const image = useSelector(
    ({ firestore: { data } }) => data.images && data.images[selectedImage]
  )

  return(
    <Fragment>
      <h1>{image.imageName}</h1>
      <img src={image.imageURL} />
      <button onClick={ () => setEditing(!editing)}>Edit Image</button>
      <button onClick={ () => handleDeletingImage(selectedImage)}>Delete Image</button>
    </Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object
}

export default ImageDetail
