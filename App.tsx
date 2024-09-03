import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';


export default function App() {
  const device = useCameraDevice('front');

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      console.log({status});
    })();
  }, [device]);

  // const base64ToURI = async (frame) => {
  //   const imgFileName = '1.png';

  //     console.log('imageURL', frame);
 

  //   return frame;
  // };


  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   // const imageAsBase64 = toBase64(frame);
  //   console.log('work!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

  //   // Ensure that runOnJS is correctly used and imported
  //   // runOnJS(base64ToURI)(imageAsBase64);
  // }, []);



  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const imageAsBase64 = toBase64(frame);
  //   console.log(imageAsBase64);
  //
  //   // Use runOnJS to call the base64ToURI function
  //   runOnJS(base64ToURI)(imageAsBase64)
  //     .then((imgURI) => {
  //       console.log('Image URI:', imgURI);
  //     })
  //     .catch((error) => {
  //       console.error('Error in base64ToURI:', error);
  //     });
  //
  //   // Example of scanning faces
  //   // const scannedFaces = scanFaces(frame, {});
  //   // runOnJS(console.log)(scannedFaces?.faces);
  // }, []);

  if (device == null) {
    return <Text>No Device</Text>;
  }
  if (device) {
    return (
      <View style={{position: 'relative', flex: 1}}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={!!device}
          // frameProcessor={frameProcessor}
          // // pixel format should be either yuv or rgb
          // pixelFormat="yuv"
          // frameProcessorFps={1}
        />
      </View>
    );
  }
}
