import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default function AnimateTwo() {
  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Animatable.View
          animation="bounceInDown"
          delay={500}
          style={styles.logo}
        >
          <Text style={styles.logoText}>LOGO</Text>
        </Animatable.View>

        <Animatable.View
          animation="bounceInDown"
          delay={1000}
          style={styles.brand}
        >
          <Text style={styles.brandText}>BRAND</Text>
        </Animatable.View>
      </View>

      <Animatable.Text animation="fadeInUp" delay={1500} style={styles.title}>
        Welcome
      </Animatable.Text>

      <Animatable.Text animation="fadeInUp" delay={2000} style={styles.subtitle}>
        Experience the future of mobile design
      </Animatable.Text>

      <Animatable.View animation="fadeInUp" delay={2500}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b1f80",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoRow: {
    flexDirection: "row",
    marginBottom: 30,
  },
  logo: {
    backgroundColor: "yellow",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  logoText: {
    fontWeight: "bold",
    color: "black",
  },
  brand: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  brandText: {
    fontWeight: "bold",
    color: "black",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});