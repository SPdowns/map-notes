import React from 'react';
import PropTypes from 'prop-types';

function Image(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenImageClicked(props.id)}>
        <h5>{props.imageName}</h5>
        {/* <img {link to image thumbnail} */}
      </div>
    </React.Fragment>
  )
}

Image.propTypes ={
  imageName: PropTypes.string,
  id: PropTypes.string
};

export default Image;