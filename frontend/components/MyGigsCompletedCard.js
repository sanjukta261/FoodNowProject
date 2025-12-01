import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZE } from "@constants/Theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import IconText from "@components/IconText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const MyGigsCompletedCard = ({
  studioName,
  location,
  date,
  people,
  duration,
  fee,
  status, // 'confirmed' or 'completed'
  isSelected = false,
  onFeePress,
  onPricePress,
}) => {
  return (
    <View style={[styles.card, isSelected && styles.selectedCard]}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.studioName}>{studioName}</Text>
          <IconText
            icon={<FontAwesome5 name="search-location" />}
            text="New York"
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
          spacing={8}
        />

        <IconText
          icon={<Ionicons name="people" />}
          text={people}
          iconColor={COLORS.gray}
          textColor={COLORS.gray}
          iconSize={14}
          fontSize={12}
          spacing={8}
        />

        <IconText
          icon={<FontAwesome5 name="clock" />}
          text={duration}
          iconColor={COLORS.gray}
          textColor={COLORS.gray}
          iconSize={14}
          fontSize={12}
          spacing={8}
        />
      </View>

      <LinearGradient
        colors={COLORS.primary}
        style={styles.feeContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.feeLabel}>Payment Received</Text>
        <Text style={styles.feeValue}>${fee}</Text>
      </LinearGradient>
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
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: SIZE.medium,
    color: COLORS.gray,
    marginLeft: 4,
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
});

export default MyGigsCompletedCard;

// Usage Examples:

// For Upcoming Tab (Confirmed):
// <MyGigsCompletedCard
//   studioName="Echo Chambers Studios"
//   location="Downtown"
//   date="24 Jan 2025"
//   people="4 people"
//   duration="9PM - 1PM"
//   fee="500"
//   status="confirmed"
//   isSelected={false}
//   onFeePress={() => console.log('Fee pressed')}
//   onPricePress={() => console.log('Price pressed')}
// />

// For Completed Tab:
// <MyGigsCompletedCard
//   studioName="Echo Chambers Studios"
//   location="Downtown"
//   date="24 Jan 2025"
//   people="4 people"
//   duration="9PM - 3PM"
//   fee="500"
//   status="completed"
//   onFeePress={() => console.log('Fee pressed')}
//   onPricePress={() => console.log('Price pressed')}
// />
