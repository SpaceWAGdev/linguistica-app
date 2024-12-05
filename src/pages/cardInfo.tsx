import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { View, Text } from "react-native";

function switchToCamera(nav: any){
    nav.navigate('cameraPage')
}

export function cardInfo() {
    const navigation = useNavigation();
    return <View>
        <Button onPress={switchToCamera}>
            <Text>
                Hello
            </Text>
        </Button>
    </View>;
}