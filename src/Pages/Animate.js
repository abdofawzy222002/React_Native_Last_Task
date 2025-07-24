import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function AnimateOne() {
  const logoAnim = useRef(new Animated.Value(0)).current;
  const brandAnim = useRef(new Animated.Value(0)).current;
  const titleAnim = useRef(new Animated.Value(0)).current;
  const subtitleAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(300, [
      animateIn(logoAnim),
      animateIn(brandAnim),
      animateIn(titleAnim),
      animateIn(subtitleAnim),
      animateIn(buttonAnim),
    ]).start();
  }, []);

  const animateIn = (anim) =>
    Animated.timing(anim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    });

  const getStyle = (anim) => ({
    opacity: anim,
    transform: [
      {
        translateY: anim.interpolate({
          inputRange: [0, 1],
          outputRange: [40, 0],
        }),
      },
    ],
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoRow}>
        <Animated.View style={[styles.logo, getStyle(logoAnim)]}>
          <Text style={styles.logoText}>LOGO</Text>
        </Animated.View>
        <Animated.View style={[styles.brand, getStyle(brandAnim)]}>
          <Text style={styles.brandText}>BRAND</Text>
        </Animated.View>
      </View>

      <Animated.Text style={[styles.title, getStyle(titleAnim)]}>
        Welcome
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, getStyle(subtitleAnim)]}>
        Experience the future of mobile design
      </Animated.Text>

      <Animated.View style={getStyle(buttonAnim)}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3b1f80",
    alignItems: "center",
    justifyContent: "center",
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