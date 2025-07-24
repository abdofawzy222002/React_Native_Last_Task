import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function MyCard({ title, logo, cid, onPress, isFavorite, onToggleFavorite }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: logo }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onToggleFavorite}>
          <AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default MyCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    borderRadius: 10,
    margin: 10,
    overflow: "hidden",
    width: 300,
  },
  image: {
    width: "100%",
    height: 450,
  },
  info: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
  },
});