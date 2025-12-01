import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {COLORS, SIZE} from '@constants/Theme';
import AntDesign from '@expo/vector-icons/AntDesign';

const HorizontalNews = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <ImageBackground 
        source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
        style={styles.image}
      >
        <View style={styles.iconContainer}>
           <AntDesign name="heart" size={24} color={COLORS.primarySolid} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 200,
    marginRight: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 20,
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  title: {
    color: COLORS.primarySolid,
    fontSize: SIZE.large,
    fontWeight: "bold",
  },
});

export default HorizontalNews;