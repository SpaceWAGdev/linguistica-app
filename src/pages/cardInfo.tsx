import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { View, Text } from "react-native";

export function cardInfo() {
    const navigation = useNavigation();
    return <View>
        <Button>
            <Text>
                Hello
            </Text>
        </Button>
    </View>;
}