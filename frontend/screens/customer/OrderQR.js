import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const OrderQR = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No order yet!</Text>
      </SafeAreaView>
    );
  }

  // Create QR payload
  const qrData = JSON.stringify({
    orderId: Date.now(), // simple unique ID
    items: cartItems.map((c) => ({
      title: c.item.title,
      quantity: c.quantity,
    })),
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* ---- TOP TITLE ---- */}
      <Text style={styles.title}>Your Pickup QR</Text>

      {/* ---- QR CARD ---- */}
      <View style={styles.card}>
        <QRCode value={qrData} size={220} />

        <Text style={styles.orderId}>
          Order ID: {qrData.orderId}
        </Text>

        <Text style={styles.cardNote}>
          Show this QR at the counter to verify your order
        </Text>
      </View>

      {/* ---- FOOTER NOTE ---- */}
      <Text style={styles.footerNote}>Thank you for ordering with FoodNow!</Text>
    </SafeAreaView>
  );
};

export default OrderQR;

// ----------- STYLES -----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingTop: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 25,
  },

  card: {
    backgroundColor: "white",
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "88%",
    alignItems: "center",
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  orderId: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
  },

  cardNote: {
    marginTop: 10,
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    width: "90%",
  },

  footerNote: {
    marginTop: 30,
    fontSize: 14,
    color: "#888",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  emptyText: {
    fontSize: 18,
    color: "#777",
  },
});
