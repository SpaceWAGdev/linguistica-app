import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { View, Text } from "react-native";
import { Card } from "../card";

export function cardInfo(card: Card) {
    const navigation = useNavigation();
    return <View>
        <Text>
            {card.title}
            {card.id}
            {card.description}
        </Text>
    </View>;
}