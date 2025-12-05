import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomerCart = ({ route, navigation }) => {
  const { item, quantity, timeSlot, addition } = route.params;

  const totalPrice = Number(item.price) * quantity;

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>Cart</Text>
        <TouchableOpacity>
          <Text style={styles.bell}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Cart Item */}
      <View style={styles.cartItem}>
        <Image source={item.image} style={styles.foodImage} />

        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.foodTitle}>{item.title}</Text>
          <Text style={styles.foodPrice}>₹ {item.price}/-</Text>

          <Text style={styles.metaText}>Qty: {quantity}</Text>
          {addition ? <Text style={styles.metaText}>Add: {addition}</Text> : null}
          {timeSlot ? <Text style={styles.metaText}>Time: {timeSlot}</Text> : null}
        </View>

        <TouchableOpacity style={styles.removeBtn}>
          <Text style={{ color: "white", fontWeight: "700" }}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Order Summary */}
      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>Order Summary</Text>

        <View style={styles.rowSpace}>
          <Text>Order</Text>
          <Text>₹ {item.price} × {quantity}</Text>
        </View>

        <View style={styles.rowSpace}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>₹ {totalPrice}/-</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate("Checkout")}  // create later
      >
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomerCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  bell: {
    fontSize: 22,
  },

  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
    elevation: 5,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  foodPrice: {
    fontSize: 14,
    marginVertical: 4,
  },
  metaText: {
    color: "#555",
    fontSize: 13,
  },
  removeBtn: {
    backgroundColor: "#B00020",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  summaryBox: {
    backgroundColor: "#f8f8f8",
    marginTop: 25,
    padding: 16,
    borderRadius: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  rowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  totalText: {
    fontWeight: "700",
    fontSize: 16,
  },

  checkoutBtn: {
    backgroundColor: "#6A0A0A",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  checkoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
