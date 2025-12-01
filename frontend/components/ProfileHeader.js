import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../components/PrimaryButton"; // your custom button

const ProfileHeader = ({ 
  coverPhoto, 
  profilePic, 
  name, 
  occupation, 
  subOccupation, 
  location, 
  description, 
  followers, 
  following, 
  gigs 
}) => {
  return (
    <View style={styles.container}>
      {/* Cover Photo */}
      <Image source={coverPhoto} style={styles.coverPhoto} />

      {/* Profile Picture */}
      <View style={styles.profileWrapper}>
        <Image source={profilePic} style={styles.profilePic} />
      </View>

      {/* Edit and Add Icons */}
      <TouchableOpacity style={styles.addIcon}>
        <Ionicons name="add" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.editIcon}>
        <Ionicons name="pencil" size={18} color="#000" />
      </TouchableOpacity>

      {/* Info */}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.occupation}>
        {occupation} • {subOccupation}
      </Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.bio}>{description}</Text>

      {/* Hire Button */}
      <PrimaryButton title="Hire" />

      {/* Stats */}
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{gigs}</Text>
          <Text style={styles.statLabel}>Gigs</Text>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={styles.messageText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingBottom: 10,
    overflow: "hidden",
  },
  coverPhoto: {
    width: "100%",
    height: 120,
  },
  profileWrapper: {
    alignItems: "center",
    marginTop: -40,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
  addIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  name: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    color: "#2B2BEB",
    marginTop: 8,
  },
  occupation: {
    textAlign: "center",
    fontSize: 14,
    color: "#444",
  },
  location: {
    textAlign: "center",
    fontSize: 13,
    color: "#666",
    marginTop: 3,
  },
  bio: {
    textAlign: "center",
    fontSize: 12,
    color: "#888",
    marginTop: 6,
    marginHorizontal: 20,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    paddingVertical: 10,
    marginTop: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "600",
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  messageBtn: {
    backgroundColor: "#2B2BEB",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  messageText: {
    color: "#fff",
    fontWeight: "500",
  },
  followBtn: {
    borderWidth: 1,
    borderColor: "#2B2BEB",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  followText: {
    color: "#2B2BEB",
    fontWeight: "500",
  },
});
