import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZE } from "@constants/Theme";

const PrimaryButton = ({
  text,
  onPress,
  size = "medium", // 'small', 'medium', 'large', 'full'
  variant = "filled", // 'filled', 'outlined'
  disabled = false,
  loading = false,
  style, // Allow custom styles
  textStyle, // Allow custom text styles
  children, // For icons or custom content
  ...props // Spread remaining TouchableOpacity props
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: SIZE.small,
      borderRadius: 6,
    },
    medium: {
      paddingHorizontal: 32,
      paddingVertical: 12,
      fontSize: SIZE.medium,
      borderRadius: 20,
    },
    large: {
      paddingHorizontal: 32,
      paddingVertical: 16,
      fontSize: SIZE.large,
      borderRadius: 10,
    },
    full: {
      paddingHorizontal: 24,
      paddingVertical: 16,
      fontSize: SIZE.xlarge,
      borderRadius: 28,
      width: "100%",
    },
  };

  const currentSize = sizeConfig[size];

  const buttonStyle = [
    styles.button,
    {
      paddingHorizontal: currentSize.paddingHorizontal,
      paddingVertical: currentSize.paddingVertical,
      borderRadius: currentSize.borderRadius,
      ...(currentSize.width && { width: currentSize.width }),
    },
    disabled && styles.disabled,
    style, // Custom styles override defaults
  ];

  const textStyles = [
    styles.text,
    { fontSize: currentSize.fontSize },
    disabled && styles.disabledText,
    textStyle, // Custom text styles
  ];

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

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      <LinearGradient
        colors={disabled ? [COLORS.gray, COLORS.gray] : COLORS.primary}
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
    color: COLORS.primarySolid,
    fontWeight: "600",
    textAlign: "center",
  },
  outlined: {
    backgroundColor: COLORS.primarySolid,
    borderWidth: 2,
    borderColor: COLORS.primary[0],
    borderStyle: "solid",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  outlinedText: {
    color: COLORS.primary[0],
  },
  disabled: {
    opacity: 0.6,
  },
  disabledText: {
    color: COLORS.gray,
  },
});

export default PrimaryButton;

// // Basic usage
// <PrimaryButton text="Submit" onPress={handleSubmit} />

// // Different sizes
// <PrimaryButton text="Small" size="small" onPress={handlePress} />
// <PrimaryButton text="Large" size="large" onPress={handlePress} />
// <PrimaryButton text="Full Width" size="full" onPress={handlePress} />

// // Outlined variant
// <PrimaryButton text="Cancel" variant="outlined" onPress={handleCancel} />

// // With states
// <PrimaryButton text="Submit" disabled={true} onPress={handleSubmit} />
// <PrimaryButton text="Loading..." loading={true} onPress={handleSubmit} />

// // With custom styles
// <PrimaryButton
//   text="Custom"
//   onPress={handlePress}
//   style={{ marginTop: 20 }}
//   textStyle={{ fontSize: 18 }}
// />

// // With icon (using children)
// <PrimaryButton text="Download" onPress={handleDownload}>
//   <Icon name="download" size={16} color="white" />
// </PrimaryButton>
