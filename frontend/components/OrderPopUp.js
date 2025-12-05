import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
  PanResponder,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const OrderPopup = ({
  visible,
  onClose,
  item,
  quantity,
  setQuantity,
  timeSlot,
  setTimeSlot,
  addition,
  setAddition,
  onContinue,
}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  // Slide-up animation
  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(0);
    }
  }, [visible]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  });

  // Draggable bottom-sheet movement
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: (_, gesture) => {
      if (gesture.dy > 0) {
        pan.setValue({ x: 0, y: gesture.dy });
      }
    },

    onPanResponderRelease: (_, gesture) => {
      if (gesture.dy > 120) {
        onClose();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    },
  });

  if (!visible) return null;

  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.sheet,
            {
              transform: [
                { translateY },
                { translateY: pan.y },
              ],
            },
          ]}
          {...panResponder.panHandlers}
        >
          {/* Drag handle */}
          <View style={styles.dragHandle} />

          {/* Item image */}
          <Image source={item.image} style={styles.foodImage} />

          <Text style={styles.title}>{item.title}</Text>

          {/* Description */}
          <Text style={styles.sectionHeader}>Description</Text>
          <Text style={styles.descText}>{item.description}</Text>

          {/* Veg / Non-Veg */}
          <View style={styles.row}>
            <TouchableOpacity style={styles.typeBtn}>
              <Text style={styles.typeText}>Veg</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.typeBtn}>
              <Text style={styles.typeText}>Non-Veg</Text>
            </TouchableOpacity>
          </View>

          {/* Time Slot Dropdown */}
          <Text style={styles.sectionHeader}>Select time slot</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={timeSlot}
              onValueChange={setTimeSlot}
              style={styles.picker}
            >
              <Picker.Item label="Choose time slot" value="" />
              <Picker.Item label="12 PM – 1 PM" value="12-1" />
              <Picker.Item label="1 PM – 2 PM" value="1-2" />
            </Picker>
          </View>

          {/* Additions Dropdown */}
          <Text style={styles.sectionHeader}>Additions</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={addition}
              onValueChange={setAddition}
              style={styles.picker}
            >
              <Picker.Item label="Egg" value="egg" />
              <Picker.Item label="Paneer" value="paneer" />
              <Picker.Item label="Extra Rice" value="rice" />
            </Picker>
          </View>

          {/* Quantity */}
          <View style={styles.qtyRow}>
            <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
              <Text style={styles.qtyBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.qtyBtn}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Continue */}
          <TouchableOpacity style={styles.continueBtn} onPress={onContinue}>
            <Text style={styles.continueText}>Continue →</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default OrderPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 18,
    paddingBottom: 40,
  },
  dragHandle: {
    width: 55,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 8,
  },
  foodImage: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 15,
  },
  descText: {
    marginTop: 6,
    color: "#555",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  typeBtn: {
    backgroundColor: "#6A0A0A",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  typeText: { color: "#fff", fontWeight: "600" },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 8,
    overflow: "hidden",
  },
  picker: {
    height: 52,
  },
  qtyRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  qtyBtn: {
    backgroundColor: "#6A0A0A",
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 22,
  },
  qtyValue: {
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 20,
  },
  continueBtn: {
    backgroundColor: "#6A0A0A",
    paddingVertical: 14,
    borderRadius: 25,
  },
  continueText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});
