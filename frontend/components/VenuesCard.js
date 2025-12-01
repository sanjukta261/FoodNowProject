import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "@constants/Theme";
import IconText from "@components/IconText";

const messages = [
  { icon: <FontAwesome5 name="user-friends" />, text: "250 People visited this place last month" },
  { icon: <Entypo name="star" />, text: "Rated 4.5 stars by musicians" },
  { icon: <FontAwesome5 name="music" />, text: "Hosted 50 shows this year" },
];

const VenuesCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [fadeAnim]);

  const currentMessage = messages[currentIndex];

  return (
    <View style={styles.card}>
      {/*  Top Row: Rank + Main Content */}
      <View style={styles.topContainer}>
        {/* Left: Rank */}
        <View style={styles.rankContainer}>
          <FontAwesome5 name="crown" size={22} color={COLORS.gray} />
          <Text style={styles.rank}>1</Text>
        </View>

        {/* Right: Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.topRow}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
              }}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.title}>Maroom Room</Text>
              <IconText
                icon={<Entypo name="location-pin" />}
                text="Downtown"
                iconColor={COLORS.gray}
                textColor={COLORS.gray}
              />

              <View style={styles.statsGrid}>
                <IconText icon={<FontAwesome5 name="comments" />} text="100 Review" textColor={COLORS.darkGray} iconSize={10} fontSize={10} />
                <IconText icon={<FontAwesome5 name="calendar-alt" />} text="50 Shows" textColor={COLORS.darkGray} iconSize={10} fontSize={10} />
                <IconText icon={<FontAwesome5 name="users" />} text="450 Capacity" textColor={COLORS.darkGray} iconSize={10} fontSize={10} />
                <IconText icon={<Entypo name="star" />} text="4.5 Rating" textColor={COLORS.darkGray} iconSize={10} fontSize={10} />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/*  Bottom Banner */}
      <Animated.View style={[styles.bottomBanner, { opacity: fadeAnim }]}>
        <IconText
          icon={currentMessage.icon}
          text={currentMessage.text}
          iconColor={COLORS.gray}
          textColor={COLORS.gray}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },

  // ---- Containers ----
  topContainer: {
    flexDirection: "row", // Rank (left) + Main Content (right)
  },
  rankContainer: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  mainContent: {
    flex: 1,
  },

  // ---- Inner Elements ----
  rank: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.gray,
    marginTop: 2,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 4,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 8,
  },

  // ---- Bottom Banner ----
  bottomBanner: {
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
});

export default VenuesCard;
