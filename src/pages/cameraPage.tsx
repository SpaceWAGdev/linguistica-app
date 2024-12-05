import { StyleSheet, View } from 'react-native';
import { Camera, runAtTargetFps, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';

export function CameraPage(): React.ReactElement {  
  const device = useCameraDevice("back");

  // Only create the frameProcessor hook when the device is ready (i.e., not null)
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    runAtTargetFps(10, () => {
      'worklet'
      console.log(`${frame.timestamp}: ${frame.width}x${frame.height} ${frame.pixelFormat} Frame (${frame.orientation})`)
    })
  }, []);

  // If the device is not available, render an empty View
  if (device == null) return <View/>;

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
      />
    </View>
  );
}
