import { View, Text, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { itemId } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 20 }}>Details</Text>
      <Text>ID: {itemId ?? "—"}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
