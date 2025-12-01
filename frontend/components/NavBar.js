import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import profile from "@assets/profile.jpeg";
import { COLORS, SIZE } from "@constants/Theme";
import ProfilePicture from "@components/ProfilePicture";
import SearchBar from "@components/SearchBar";
import { useNavigation } from "@react-navigation/native";

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Left: Profile Picture */}
      <ProfilePicture
        source={profile}
        width={40}
        height={40}
        onPress={() => navigation.openDrawer()}
      />

      {/* Middle: Search Bar */}
      <SearchBar />

      {/* Right: Icons */}
      <View style={styles.rightIcons}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons
            name="chat-bubble-outline"
            size={24}
            color={COLORS.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.primarySolid,
  },
  rightIcons: {
    flexDirection: "row",
    gap: 5,
  },
  icon: {
    marginLeft: 10,
  },
});
