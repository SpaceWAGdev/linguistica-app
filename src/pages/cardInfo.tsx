import { RouteProp, useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { View, Text } from "react-native";
import { RootStackParamList } from '../../App'; // import the type you defined earlier
import { Card } from "../card";

type CardInfoScreenRouteProp = RouteProp<RootStackParamList, 'cardInfo'>;

type CardInfoScreenProps = {
  route: CardInfoScreenRouteProp;
};

export function cardInfo({ route } : CardInfoScreenProps) {
    const navigation = useNavigation();
    return <View>
        <Text>
            {route.params.card.title}
        </Text>
    </View>;
}