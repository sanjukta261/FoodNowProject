import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import sweets from "../assets/gulab_jamun.png";

const SpecialCard = () => {
  return (
    <View style={styles.card}>
      
      {/* Top Subtitle */}
      <Text style={styles.subtitle}>See What’s Special For You TODAY!</Text>

      {/* Row: Text Left, Image Right */}
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Gulab jamun 😋</Text>
        </View>

        <Image source={sweets} style={styles.foodImage} />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get it now</Text>
      </TouchableOpacity>

    </View>
  );
};

export default SpecialCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#6A0A0A",
    borderRadius: 20,
    padding: 16,
    marginVertical: 20,
  },

  subtitle: {
    color: "#f9cfcf",
    fontSize: 14,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    maxWidth: "80%", // Prevent text overflow
  },

  foodImage: {
    width: 110,
    height: 110,
    resizeMode: "contain",
  },

  button: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 20,
  },

  buttonText: {
    color: "#6A0A0A",
    fontWeight: "600",
  },
});
