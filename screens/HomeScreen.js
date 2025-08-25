import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 20 }}>Home</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate("Details", { itemId: 42 })}
      />
    </View>
  );
}
