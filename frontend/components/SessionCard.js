import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import PrimaryButton from "@components/PrimaryButton";
import { COLORS, SIZE } from "@constants/Theme";
import { Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";


const { width: SCREEN_WIDTH } = Dimensions.get("window");

const SessionCard = ({
  title,
  subtitle,
  description,
  price,
  images = [],
  item,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const navigation = useNavigation();

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / (SCREEN_WIDTH * 0.8));
    setCurrentImageIndex(index);
  };

  return (
    <View style={styles.card}>
      {/* Image Carousel with Peek Effect */}
      <View style={styles.carouselContainer}>
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={SCREEN_WIDTH * 0.8 + SCREEN_WIDTH * 0.04}
          snapToAlignment="start"
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {images.map((image, index) => (
            <Animated.View key={index} style={styles.imageWrapper}>
              <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
              />
            </Animated.View>
          ))}
        </Animated.ScrollView>

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentImageIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Price and Actions */}
        <View style={styles.footer}>
          <Text style={styles.price}>₹{price}/hr</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton text="View" variant="outlined" onPress={()=> navigation.navigate('StudioDetails',{studio: item})} />
            <PrimaryButton text="Book" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    overflow: "hidden",
    padding: 12,
  },
  carouselContainer: {
    height: 200,
  },
  imageWrapper: {
    width: SCREEN_WIDTH * 0.75,
    height: "100%",
    marginRight: 10,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  dotsContainer: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 32,
    backgroundColor: "#FFFFFF",
  },
  content: {
    marginTop: 10,
  },
  title: {
    fontSize: SIZE.xlarge,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: SIZE.medium,
    color: COLORS.gray,
  },
  description: {
    fontSize: 12,
    color: COLORS.lightGray,
    lineHeight: 20,
    marginBottom: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: SIZE.large,
    fontWeight: "bold",
    color: "#111827",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default SessionCard;
