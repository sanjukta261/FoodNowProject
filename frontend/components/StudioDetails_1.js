import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const StudioDetails_1 = () => {

  return (
    <View style={styles.card}>
      {/* Main Image */}
      <Image source={studio.mainImage} style={styles.mainImage} />

      {/* Scrollable smaller images */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {studio.images.map((img, index) => (
          <Image key={index} source={img} style={styles.smallImage} />
        ))}
      </ScrollView>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{studio.name}</Text>
        <Text style={styles.location}>📍 {studio.location}</Text>
        <Text style={styles.rating}>⭐ {studio.rating} ({studio.reviews} Reviews)</Text>

        <View style={styles.paymentRow}>
          <Text style={styles.paymentLabel}>Payment</Text>
          <Text style={styles.paymentAmount}>${studio.price}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Availability</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    margin: 16,
    overflow: "hidden",
  },
  mainImage: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageScroll: {
    flexDirection: "row",
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  smallImage: {
    width: 100,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E1E1E",
  },
  location: {
    color: "#666",
    marginTop: 2,
  },
  rating: {
    color: "#444",
    marginTop: 4,
    marginBottom: 8,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  paymentLabel: {
    color: "#555",
    fontWeight: "500",
  },
  paymentAmount: {
    color: "#007AFF",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#1E40AF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default StudioDetails_1;