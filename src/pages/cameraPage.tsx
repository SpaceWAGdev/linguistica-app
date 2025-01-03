import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, runAtTargetFps, Templates, useCameraDevice, useCameraFormat, useFrameProcessor } from 'react-native-vision-camera';
import { RootStackParamList } from '../../App'; // import the type you defined earlier
import { Card } from '../card';

export function CameraPage(): React.ReactElement {
  const device = useCameraDevice("back");
  const format = useCameraFormat(device, Templates.Photo)
  const navigation = useNavigation();

  const [ocrText, setOcrText] = React.useState<string | null>(null);

  // If the device is not available, render an empty View

  // Only create the frameProcessor hook when the device is ready (i.e., not null)
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'
    runAtTargetFps(10, () => {
      // TODO: Native Processor integration
      // setOcrText with the extracted text
    })
  }, []);

  const handleNavigate = () => {
    if (ocrText) {
      let c = new Card(ocrText, "ddssd", "dsdsds")
      navigation.navigate('cardInfo', { card: c });
    }
  };

  if (device == null) return <View />;
  
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
      />
      <Button onPress={handleNavigate}>Go to Card Info</Button>
    </View>
  );
}
