import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePicture = ({ source, width , height, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Image
        source={source}
        style={[styles.image, { width, height, borderRadius: width / 2 }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    marginRight: 10,
  },
});

export default ProfilePicture;
