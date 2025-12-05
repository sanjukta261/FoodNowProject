import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const BestSellerCard = ({ title, price, image }) => {
  return (
    <View style={styles.card}>

      {/* Dynamic Product Image */}
      <Image
        source={image}     // ← now dynamic
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>₹ {price}</Text>

      <TouchableOpacity style={styles.orderBtn}>
        <Text style={styles.orderText}>Order Now</Text>
      </TouchableOpacity>

    </View>
  );
};

export default BestSellerCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#6A0A0A",
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
  },

  image: {
    width: "100%",
    height: 90,
    resizeMode: "contain",
  },

  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },

  price: {
    color: "#ffdede",
    marginVertical: 4,
  },

  orderBtn: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    borderRadius: 14,
    marginTop: 8,
  },

  orderText: {
    color: "#6A0A0A",
    textAlign: "center",
    fontWeight: "600",
  },
});
