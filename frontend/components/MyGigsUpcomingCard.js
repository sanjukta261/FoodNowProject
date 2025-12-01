import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZE } from "@constants/Theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import IconText from "@components/IconText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "@components/PrimaryButton";

const MyGigsCompletedCard = ({
  studioName,
  location,
  date,
  people,
  duration,
  fee,
  advanceReceived,
  status, // 'confirmed' or 'completed'
  isSelected = false,
  onEditPress,
  onSharePress,
}) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.studioName}>{studioName}</Text>
          <IconText
            icon={<FontAwesome5 name="search-location" />}
            text={location}
            iconColor={COLORS.gray}
            textColor={COLORS.gray}
            iconSize={16}
            fontSize={14}
            spacing={12}
          />
        </View>

        <View
          style={[
            styles.statusBadge,
            status === "confirmed"
              ? styles.confirmedBadge
              : styles.completedBadge,
          ]}
        >
          <Text style={styles.statusText}>
            {status === "confirmed" ? "Confirmed" : "Completed"}
          </Text>
        </View>
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <IconText
          icon={<FontAwesome5 name="calendar" />}
          text={date}
          iconColor={COLORS.gray}
          textColor={COLORS.gray}
          iconSize={14}
          fontSize={12}
          spacing={10}
        />

        <IconText
          icon={<Ionicons name="people" />}
          text={people}
          iconColor={COLORS.gray}
          textColor={COLORS.gray}
          iconSize={14}
          fontSize={12}
          spacing={10}
        />

        <IconText
          icon={<FontAwesome5 name="clock" />}
          text={duration}
          iconColor={COLORS.gray}
          textColor={COLORS.gray}
          iconSize={14}
          fontSize={12}
          spacing={10}
        />
      </View>

      {/* Payment Received Section */}
      <LinearGradient
        colors={COLORS.primary}
        style={styles.feeContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.feeLabel}>Payment Due</Text>
        <Text style={styles.feeValue}>${fee}</Text>
      </LinearGradient>

      {/* Advance Received Section */}
      <View style={styles.advanceContainer}>
        <Text style={styles.advanceLabel}>Advance Received</Text>
        <Text style={styles.advanceValue}>${advanceReceived}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            text="Edit Gig"
            size="medium"
            variant="outlined"
            onPress={onEditPress}
            style={styles.buttonFull}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <PrimaryButton
            text="Share Gig"
            size="medium"
            variant="filled"
            onPress={onSharePress}
            style={styles.buttonFull}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCard: {
    borderColor: COLORS.primary[0],
    borderWidth: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  headerLeft: {
    flex: 1,
  },
  studioName: {
    fontSize: SIZE.large,
    fontWeight: "bold",
    color: COLORS.secondary,
    marginBottom: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  confirmedBadge: {
    backgroundColor: "#4ADE80",
  },
  completedBadge: {
    backgroundColor: "#4ADE80",
  },
  statusText: {
    fontSize: SIZE.small,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    flexWrap: "wrap",
    gap: 20,
  },
  feeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  feeLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  feeValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  advanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: COLORS.primarySolid,
    borderWidth: 2,
    borderColor: COLORS.primary[0],
  },
  advanceLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primary[0],
  },
  advanceValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary[0],
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 16,
  },
  buttonWrapper: {
    flex: 1,
    height: 50,
  },
  buttonFull: {
    marginVertical: 0,
    width: '100%',
    height: '100%',
  },
});

export default MyGigsCompletedCard;

// Usage Example:
// <MyGigsCompletedCard
//   studioName="The Maroom Room"
//   location="Downtown"
//   date="24 Jan 2026"
//   people="500 Expected"
//   duration="8 PM - 11 PM"
//   fee="500"
//   advanceReceived="500"
//   status="confirmed"
//   isSelected={false}
//   onEditPress={() => console.log('Edit Gig pressed')}
//   onSharePress={() => console.log('Share Gig pressed')}
// />`