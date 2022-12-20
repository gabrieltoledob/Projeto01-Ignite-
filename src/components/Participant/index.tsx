import { UserCircleMinus } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <UserCircleMinus size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  )
}