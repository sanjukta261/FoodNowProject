import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import BestSellerCard from "./BestSellerCard";

import vegthali from '../assets/veg_thali.png';
import chai from '../assets/chai.png';

const BestSellerList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>

        <BestSellerCard
          title="Veg Thali"
          price="60"
          image={vegthali}
        />

        <BestSellerCard
          title="Chai"
          price="12"
          image={chai}
        />

        <BestSellerCard
          title="Dosa"
          price="40"
          image={chai}
        />

      </View>
    </ScrollView>
  );
};

export default BestSellerList;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
