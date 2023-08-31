import React, { Fragment, useRef } from 'react';
import Webcam from 'react-webcam';
import { ReactComponent as UploadIcon } from '../../assets/upload-icon.svg';
import {
  UploadIconContainer,
  UploadTitle,
  UploadSubTitle
} from './upload-presonal-photo.styles';
import PresetphotosList from '../presetphotos-list/presetphotos-list.component';
import { Button } from '../utils/button.styles';


const UploadPersonalPhoto = ({ setPersonalPhoto, presetPhotos }) => {
  const webcamRef = useRef(null);

  // const uploadFile = async e => {
  //   const file = e.target.files;

  //   const data = new FormData();
  //   data.append('file', file[0]);
  //   data.append('upload_preset', 'sickfits');
  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/dariku/image/upload',
  //     {
  //       method: 'POST',
  //       body: data
  //     }
  //   );

  //   const imageFile = await res.json();

  //   setPersonalPhoto(imageFile.eager[0].secure_url);
  // };

  const captureWebcamPhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPersonalPhoto(imageSrc);
  };

  // const setDefaultFace = id => {
  //   const { presetImg } = presetPhotos.filter(item => item.id === id)[0];
  //   setPersonalPhoto(presetImg);
  // };

  return (
    <Fragment>
      {/* <UploadTitle>Upload photo of your face</UploadTitle>
      <UploadSubTitle>
        use an unobstructed <em>front</em> face photo.
      </UploadSubTitle>
      <label htmlFor='file'>
        <UploadIconContainer>
          <UploadIcon />
        </UploadIconContainer>
        <input
          type='file'
          id='file'
          name='file'
          placeholder='Upload an image'
          onChange={uploadFile}
          style={{ display: 'none' }}
        />
      </label>
      <UploadSubTitle>or have fun with these faces</UploadSubTitle>
      <PresetphotosList
        presetPhotos={presetPhotos}
        setDefaultFace={setDefaultFace}
      /> */}
      <div 
         style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
            
      }}>

      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        mirrored={true} // Adjust this as needed
        />
      <Button
      onClick={captureWebcamPhoto}
      >

        Capture Photo
      </Button>
        </div>
    </Fragment>
  );
};

export default UploadPersonalPhoto;
