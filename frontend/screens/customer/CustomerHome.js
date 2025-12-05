import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SpecialCard from "../../components/SpecialCard";
import BlockCanteenPicker from "../../components/BlockCanteenPicker";
import BestSellerList from "../../components/BestSellerList";


const CustomerHome = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Screen Header */}
        <Text style={styles.header}>Home</Text>

        {/* Special Offer Card */}
        <SpecialCard />

        {/* Block + Canteen Selection */}
        <BlockCanteenPicker />

        {/* Best Seller Section */}
        <Text style={styles.sectionTitle}>Our Best Seller</Text>
        <BestSellerList />

        {/* Add bottom spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
});
