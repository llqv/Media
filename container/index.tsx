import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const CameraApp = () => {
  const webcamRef = React.useRef(null);

  useEffect(() => {
    const checkUserMedia = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        alert('Bạn đã cho phép truy cập camera');
      } catch (error) {
        alert('Bạn không cho phép truy cập camera');
      }
    };

    checkUserMedia();
  }, []);

  return (
    <div>
      <h1>Camera App</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
      />
    </div>
  );
};

export default CameraApp;
