import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Image from './Image';
import { Container, Divider } from 'semantic-ui-react';

function ImageList(props) {
  useFirestoreConnect([
    {collection: 'images'}
  ]);
  const images = useSelector(state => state.firestore.ordered.images);
  if(isLoaded(images)){
    console.log(images)
    const {setSelectedImage, selectedImage} = props
    return(
      <React.Fragment>
        {images.map((image) => {
          return <Image
          whenImageClicked = {setSelectedImage}
          imageName={image.imageName}
          id={image.id}
          key={image.id}/>
        })}
      </React.Fragment>
    )
  } else {
    return(
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default ImageList