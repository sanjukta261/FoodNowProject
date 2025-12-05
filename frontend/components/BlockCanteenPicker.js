import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const BlockCanteenPicker = () => {
  const [block, setBlock] = useState("");
  const [canteen, setCanteen] = useState("");

  return (
    <View style={styles.container}>

      {/* Block Picker */}
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={block}
          onValueChange={(value) => setBlock(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Block" value="" />
          <Picker.Item label="A Block" value="A" />
          <Picker.Item label="B Block" value="B" />
        </Picker>
      </View>

      {/* Canteen Picker */}
      <View style={styles.pickerBox}>
        <Picker
          selectedValue={canteen}
          onValueChange={(value) => setCanteen(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Canteen" value="" />
          <Picker.Item label="Jironi" value="jironi" />
          <Picker.Item label="Dream Cafe" value="dreamCafe" />
        </Picker>
      </View>

    </View>
  );
};

export default BlockCanteenPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  pickerBox: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    height: 55,
  },
});
