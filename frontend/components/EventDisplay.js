import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SIZE, COLORS } from "@constants/Theme";
import GradientText from "@components/GradientText";
import { LinearGradient } from "expo-linear-gradient";
import IconText from "./IconText";
import {Ionicons} from '@expo/vector-icons';

const EventDisplay = ({ event }) => {
  if (!event) return null;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.subHeadingLeft}>Shows for</Text>
        <GradientText
          style={styles.subHeadingRight}
          text={" Thursday, July 10, 2025"}
          colors={COLORS.primary}
        />
      </View>

      <LinearGradient
        colors={COLORS.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>VG</Text>
          </View>
          <View>
            <Text style={styles.name}>{event.client}</Text>
            <Text style={styles.detail}>Manager of Maroom Room</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>Event Details</Text>
          <IconText icon={<Ionicons name="location"/>} text={'Downtown'} iconColor={COLORS.primarySolid} textColor={COLORS.primarySolid} />
          <IconText icon={<Ionicons name="calendar"/>} text={'24 jan 2025'} iconColor={COLORS.primarySolid} textColor={COLORS.primarySolid} />
          <IconText icon={<Ionicons name="people"/>} text={'500'} iconColor={COLORS.primarySolid} textColor={COLORS.primarySolid} />
          <IconText icon={<Ionicons name="time"/>} text={'8PM - 10PM'} iconColor={COLORS.primarySolid} textColor={COLORS.primarySolid} />
          <IconText icon={<Ionicons name="list"/>} text={'classical'} iconColor={COLORS.primarySolid} textColor={COLORS.primarySolid} />
          <IconText icon={<Ionicons name="cash"/>} text={'15,000 + complimentary drinks'} iconColor={COLORS.primarySolid} textColor={COLORS.primarySolid} />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  headerContainer: {
    flexDirection: "row",
    gap: 3,
  },
  subHeadingLeft: {
    fontSize: SIZE.large,
    color: COLORS.secondary,
    marginBottom: 15,
    fontWeight: "600",
  },
  subHeadingRight: {
    fontSize: SIZE.large,
    marginBottom: 15,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 20,
    padding: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  name: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  detail: {
    color: "#C4B5FD",
    fontSize: 12,
  },
  info: {
    gap: 4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#C4B5FD",
    fontSize: 12,
  },
});

export default EventDisplay;
