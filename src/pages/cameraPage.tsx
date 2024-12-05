import { StyleSheet, View } from 'react-native';
import { Camera, runAtTargetFps, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';

export function cameraPage() : React.ReactElement {  

  const device = useCameraDevice("back");
  

  if (device == null) return <View/>

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'

    runAtTargetFps(10, () => {
      'worklet'
      console.log(`${frame.timestamp}: ${frame.width}x${frame.height} ${frame.pixelFormat} Frame (${frame.orientation})`)
    })
    }, [])

    return <View>
      <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
    </View>;
  }
