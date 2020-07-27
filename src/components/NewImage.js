import React, { useState } from 'react';
import { storage } from '../firebase'
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';


function NewImage(props){
  const {setForm, visibleForm} = props;
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("")
  const firestore = useFirestore();

  const handleChange = e => {
    const file = e.target.files[0];
    
    if (file) {
      const fileType = file["type"];
      const validImageTypes = ["image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        setError("")
        setImage(file);
      } else {
        console.log("error");
        setError("Error - Please upload an image file")
      }
    }
  }

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
          setError(error);
        },
        () => {
          storage
          .ref('images')
          .child(image.name)
          .getDownloadUrl()
          .then(url => {
            console.log(url);
            setUrl(url);
            setProgress(0);
          });
        }
      );
    } else {
      setError('Error - Please choose an image to upload');
    }
  };

  function addImageToFirestore(event) {
    event.preventDefault();
    setForm(!visibleForm);
    return firestore.collection('images').add(
      {
        imageName: event.target.imageName.value,
        // imageURL: event.target.imageURL.value
      }
    );
  }
  return(
    <React.Fragment>
      <div>
        <form onSubmit = {addImageToFirestore, handleUpload}>
          <input
            type='text'
            name='imageName'
            placeholder='Image Name' />
          <input type='file' onChange={handleChange} />
          <button type='submit'>Add Image</button>
        </form>
      </div>
      <div>
        <p>{error}</p>
        {progress > 0 ? <progress value={progress} max='100' /> : ""}
      </div>
      {url ? (
        <img src={url} alt='Uploaded image' />
      ) : (
        <img src='https://i.redd.it/ehb1ckmfg2d51.jpg'/>
      )}
    </React.Fragment>
  );
}

export default NewImage;

