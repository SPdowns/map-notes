import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Image } from 'semantic-ui-react';

function UserImage(props){
  console.log(props.imageURL)
  return (
    <React.Fragment>
      <div  onClick = {() => props.whenImageClicked(props.id)}>
        <h5>{props.imageName}</h5>
        <img class='ui small image' src={props.imageURL} />
        <div class='ui divider'></div>
      </div>
    </React.Fragment>
  )
}

UserImage.propTypes ={
  imageName: PropTypes.string,
  imageURL: PropTypes.string,
  id: PropTypes.string
};

export default UserImage;