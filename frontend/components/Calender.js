import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS, SIZE } from "@constants/Theme";
import { LinearGradient } from "expo-linear-gradient";

const Calendar = ({ selectedDate, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6));

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <View style={styles.container}>
      {/* Month Navigation */}
      <LinearGradient
        style={styles.monthContainer}
        colors={COLORS.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.monthTop}>
          <TouchableOpacity onPress={() => navigateMonth(-1)}>
            <Entypo name="chevron-left" size={28} color={COLORS.primarySolid} />
          </TouchableOpacity>
          <Text style={styles.monthTopText}>
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Text>
          <TouchableOpacity onPress={() => navigateMonth(1)}>
            <Entypo name="chevron-right" size={28} color={COLORS.primarySolid}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.monthBottom}>
          <Text style={styles.monthBottomText}>
            Your Booked Shows at a glance
          </Text>
        </View>
      </LinearGradient>

      {/* Day Names */}
      <View style={styles.grid}>
        {dayNames.map((day) => (
          <Text key={day} style={styles.dayName}>
            {day}
          </Text>
        ))}
      </View>

      {/* Calendar Days */}
      <View style={styles.calendarGrid}>
        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => day && onDateSelect(day)}
            style={[
              styles.dayCell,
              !day && { opacity: 0 },
              day === 10 && styles.today,
              day === selectedDate && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                day === 10 && { color: "#ffffffff", fontWeight: "bold" },
                day === selectedDate && styles.selectedText,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    marginBottom: 30,
  },
  monthContainer: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  monthTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    margin: 10,
  },
  monthTopText: {
    fontSize: SIZE.h2,
    fontWeight: "600",
    color: COLORS.primarySolid,
  },
  monthBottom: {
    alignItems: "center",
  },
  monthBottomText: {
    color: COLORS.primarySolid,
    fontSize: SIZE.medium,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayName: {
    width: "14.28%",
    textAlign: "center",
    fontSize: SIZE.large,
    fontWeight: "600",
    color: COLORS.secondary,
    paddingVertical: 4,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 12,
  },
  dayCell: {
    width: "14.28%",
    minHeight: 36,
    maxHeight: 50,
    aspectRatio: 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "transparent",
    marginVertical: 1,
  },
  today: {
    borderColor: "rgba(233, 15, 15, 1)",
    backgroundColor: "rgba(233, 15, 15, 0.4)",
  },
  selected: {
    borderColor: "rgb(15, 66, 233)", 
    backgroundColor: "rgba(15, 66, 233, 0.4)", 
  },
  dayText: {
    color: COLORS.gray,
    fontSize: SIZE.large,
  },
  selectedText: {
    color: COLORS.primarySolid,
    fontWeight: "600",
  },
});

export default Calendar;