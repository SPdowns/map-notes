import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Image } from 'semantic-ui-react';

function UserImage(props){
  return (
    <React.Fragment>
      <div class='ui divider' onClick = {() => props.whenImageClicked(props.id)}>
        <h5>{props.imageName}</h5>
        <img class='ui small image' src={props.imageURL} />
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