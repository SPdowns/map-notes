import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux'
import NewImage from './NewImage'
import ImageList from './ImageList'
import ImageDetail from './ImageDetail'
import EditImage from './EditImage'
import firebase from '../firebase'
import { Button } from 'semantic-ui-react';

function MapControl(){
  let currentlyVisibleState = null
  let buttonText = null

  const [visibleForm, setForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function returnToGallery(){
    if (selectedImage !== null) {
      setSelectedImage(null);
      setEditing(false);
      setForm(false);
    } else {
      setForm(!visibleForm);
    }
  }

  const user = firebase.auth().currentUser;

  // if (user) {
    if (editing === true){
      currentlyVisibleState = <EditImage
                              editing={editing}
                              setEditing={setEditing}
                              visibleForm={visibleForm}
                              setForm={setForm}
                              selectedImage={selectedImage} />
      buttonText = "Return To Gallery"
    } else if (selectedImage !== null) {
      currentlyVisibleState = <ImageDetail
                              setSelectedImage={setSelectedImage}
                              selectedImage={selectedImage}
                              editing={editing}
                              setEditing={setEditing} />
      buttonText = "Return To Gallery"
    } else if (visibleForm === true) {
      currentlyVisibleState = <NewImage
                              setForm={setForm}
                              visibleForm={visibleForm} />
      buttonText = "View Images"
    } else {
      currentlyVisibleState = <ImageList
                              setSelectedImage={setSelectedImage}
                              selectedImage={selectedImage} />
      buttonText = "Add Image"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button class='ui primary button' onClick={ () => returnToGallery() }>{buttonText}</button>
      </React.Fragment>
    )
  // } else {
  //   return (
  //     <div>
  //       <p>Please Sign In</p>
  //     </div>
  //   )
  // }

}

export default withFirestore(MapControl);