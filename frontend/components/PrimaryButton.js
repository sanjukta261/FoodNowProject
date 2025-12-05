import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZE } from "../constants/Theme";

const PrimaryButton = ({
  text,
  onPress,
  size = "medium",
  variant = "filled",
  disabled = false,
  loading = false,
  style,
  textStyle,
  children,
  width,      // ← added
  height,     // ← added
  ...props
}) => {
  const sizeConfig = {
    small: { paddingHorizontal: 16, paddingVertical: 8, fontSize: SIZE.small, borderRadius: 6 },
    medium: { paddingHorizontal: 32, paddingVertical: 12, fontSize: SIZE.medium, borderRadius: 20 },
    large: { paddingHorizontal: 32, paddingVertical: 16, fontSize: SIZE.large, borderRadius: 10 },
    full: { paddingHorizontal: 24, paddingVertical: 16, fontSize: SIZE.xlarge, borderRadius: 28, width: "100%" },
  };

  const currentSize = sizeConfig[size];

  const buttonStyle = [
  styles.button,
  {
    paddingHorizontal: currentSize.paddingHorizontal,
    paddingVertical: currentSize.paddingVertical,
    borderRadius: currentSize.borderRadius,
    ...(currentSize.width && { width: currentSize.width }),
    ...(width && { width }),     // ← added
    ...(height && { height }),   // ← added
  },
  style,
];

  const textStyles = [
    styles.text,
    { fontSize: currentSize.fontSize },
    textStyle,
  ];

  // 🔹 OUTLINED BUTTON
  if (variant === "outlined") {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        style={[buttonStyle, styles.outlined]}
        {...props}
      >
        <Text style={[textStyles, styles.outlinedText]}>
          {loading ? "Loading..." : text}
        </Text>
        {children}
      </TouchableOpacity>
    );
  }

  // 🔹 FILLED BUTTON (MAIN BUTTON)
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      <LinearGradient
        colors={
          disabled
            ? [COLORS.gray, COLORS.gray]
            : [COLORS.primary, COLORS.primary]   // ✅ FIXED: always an array
        }
        style={buttonStyle}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={textStyles}>{loading ? "Loading..." : text}</Text>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 4,
  },
  text: {
    color: "white", // ✔ your primary is dark, so white text fits
    fontWeight: "600",
    textAlign: "center",
  },

  // OUTLINED STYLE
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: COLORS.primary, 
  },
  outlinedText: {
    color: COLORS.primary, 
  },
});

export default PrimaryButton;
