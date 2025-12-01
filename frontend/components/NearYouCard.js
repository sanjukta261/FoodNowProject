import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { COLORS } from "@constants/Theme";
import ProfilePicture from "@components/ProfilePicture";
import profile from "@assets/profile.jpeg";
import PrimaryButton from "@components/PrimaryButton";
import coverPhoto from '@assets/coverPhoto.jpg';

const NearYouCard = ({ item }) => {
  return (
    <View style={styles.card}>
      {/* Cover Image */}
      <View style={styles.coverContainer}>
        <Image source={coverPhoto} style={styles.coverImage} />
        {/* Profile Picture overlapping the cover */}
        <View style={styles.profilePicContainer}>
          <ProfilePicture source={profile} width={70} height={70} />
        </View>
      </View>

      {/* Text and Button */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.occupation}>{item.occupation}</Text>
        <PrimaryButton
          text="Follow"
          onPress={() => console.log(`Followed ${item.name}`)}
        />
      </View>
    </View>
  );
};

export default NearYouCard;

const styles = StyleSheet.create({
  card: {
    borderColor: COLORS.blur,
    borderWidth: 1,
    borderRadius: 8,
    width: '47.5%',
    overflow: 'hidden',
    margin: 4,
  },
  coverContainer: {
    position: 'relative',
    height: 60,
    backgroundColor: '#000',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  profilePicContainer: {
    position: 'absolute',
    bottom: -25,
    left: '50%',
    transform: [{ translateX: -35 }],
    zIndex: 1,
  },
  info: {
    marginTop: 40,
    alignItems: 'center',
  },
  name: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  occupation: {
    color: COLORS.gray,
    fontSize: 14,
    marginBottom: 45,
  },
});
