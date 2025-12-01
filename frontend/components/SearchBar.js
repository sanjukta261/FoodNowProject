import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, SIZE } from "@constants/Theme";

const SearchBar = ({ placeholder = "Search", onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons
        name="search"
        size={18}
        color={COLORS.secondary}
        style={{ marginRight: 6 }}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondary}
        style={styles.searchInput}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    color: COLORS.secondary,
    fontSize: SIZE.medium,
  },
});

export default SearchBar;
