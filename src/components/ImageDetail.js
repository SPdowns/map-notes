import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded, useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import 'firebase/firestore';
// import { getAnnotationsFromFirebase, saveAnnotationToFirebase } from './FirebaseAnnotationQueries'

function ImageDetail(props) {
  const { setSelectedImage, selectedImage, editing, setEditing } = props
  console.log(selectedImage)
  const firestore = useFirestore();
  // const [annotations, setAnnotations] = useState(getAnnotationsFromFirebase(image));
  // const [annotation, setAnnotation] = useState({})
  
  useFirestoreConnect([
    {
      collection: 'images',
      doc: selectedImage
    }
  ]);
  
  // onChangeAnnotation = (annotation) => {
  //     setAnnotation({ annotation })
  //   }
  
  // onCreateAnnotation = (annotation) => {
  //   const { geometry, data } = annotation;
  //   const { image } =  selectedImage;
  //   setAnnotations(annotations.push(annotation));
  //   db.collection('images').doc(image).update({
  //     'annotations': annotations
  //   })
  //   .then(function() {
  //     console.log('Document Updated Successfully')
  //   });
      

  //     saveAnnotationToFirebase(annotation, image)
      
      
  //     }
      
      
      
  const handleDeletingImage = (selectedImage) => {
    firestore.delete({collection:
      'images',
      doc: selectedImage});
      setSelectedImage(null)
    }
    
    const image = useSelector(
      ({ firestore: { data } }) => data.images && data.images[selectedImage]
      )
      console.log(image)

  return(
    <Fragment>
      <h1>{image.imageName}</h1>
      <img width='1000' height='1000' src={image.imageURL} />
      <button onClick={ () => setEditing(!editing)}>Edit Image</button>
      <button onClick={ () => handleDeletingImage(selectedImage)}>Delete Image</button>
    </Fragment>
  );
}

ImageDetail.propTypes = {
  image: PropTypes.object
}

export default ImageDetail
