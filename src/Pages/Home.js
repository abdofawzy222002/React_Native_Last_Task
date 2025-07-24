import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button, ImageBackground } from "react-native";

function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmc6_aiNn1-KNtnS19D5HXS2-SOAlehsUObw&s",
      }}
    >
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the Home Page!</Text>
        <Button
          title="Go To Movies Page"
          onPress={() => navigation.navigate("Movies")}
        />
      </View>
    </ImageBackground>
  );
}

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color:"white"
  },
});
