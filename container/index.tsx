import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const CameraApp = () => {
  const webcamRef = React.useRef<Webcam>(null);

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

    const interval = setInterval(() => {
      if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
        const video = webcamRef.current.video as HTMLVideoElement;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx && canvas) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, canvas.width, canvas.height);
          if (code) {
            console.log('QR Code:', code.data);
          }
        }
      }
    }, 1000);
    return () => clearInterval(interval);
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
