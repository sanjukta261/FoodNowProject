import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { COLORS, SIZE } from "@constants/Theme";

const Location = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.locationRow}>
        <Entypo name="location-pin" size={24} color={COLORS.secondary} />
        <Text style={styles.colonyText}>Walford Colony</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color={COLORS.secondary} />
      </View>
      <Text style={styles.cityText}>Dimapur, Nagaland</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    paddingHorizontal: 10,
    backgroundColor: COLORS.primarySolid, 
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  colonyText: {
    color: COLORS.secondary,
    fontSize: SIZE.xlarge,
  },
  cityText: {
    color: COLORS.secondary,
    fontSize: SIZE.medium,
    marginLeft: 34,
  },
});

export default Location;
