import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import UserImage from './UserImage';
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
        <div class='ui center aligned container'>
        {images.map((image) => {
          return <UserImage
          whenImageClicked = {setSelectedImage}
          imageName={image.imageName}
          imageUrl={image.imageURL}
          id={image.id}
          key={image.id}/>
        })}
        </div>
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