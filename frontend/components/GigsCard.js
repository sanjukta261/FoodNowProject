import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import venue from '@assets/venue2.jpg';
import GradientText from '@components/GradientText';
import {COLORS,SIZE} from '@constants/Theme';

const mockVenue = {
  gigName: "3 Piece Acoustic",
  venueName: "The Maroon Room",
  location: "5th Floor, Aurus Mall, near supermarket.....",
  price: "15,000 + Complimentary drinks",
  image: venue,
};

const GigsCard = () => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <Image source={venue} style={styles.image} />

      {/* Text content */}
      <View style={styles.content}>
        <GradientText text={mockVenue.gigName} colors={COLORS.primary} style={styles.gigName} />
        <Text>{mockVenue.venueName}</Text>

        {/* Location */}
        <View style={styles.iconText}>
          <Ionicons name="location-outline" size={16} color="#777" />
          <Text style={styles.iconTextLabel}>{mockVenue.location}</Text>
        </View>

        {/* Price */}
        <View style={styles.iconText}>
          <Ionicons name="ticket-outline" size={16} color="#777" />
          <Text style={styles.iconTextLabel}>{mockVenue.price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    margin: 10,
    padding: 10,
    gap: 10,

  },
  image: {
    width: 100,
    height: '100%',
    borderRadius: 10,
  },
  content: {
    flex: 1,
  },
  gigName: {
    fontSize: SIZE.xlarge,
    fontWeight: 'bold',

  },
  bold: {
    fontWeight: 'bold',
  },
  venueName: {
    fontWeight: '600',
    fontSize: 14,
    marginVertical: 2,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  iconTextLabel: {
    marginLeft: 5,
    color: '#777',
    fontSize: 10,
  },
});

export default GigsCard;