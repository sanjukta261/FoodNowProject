
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SIZE } from '../constants/Theme';

const IconText = ({
  icon, // React element (Icon component)
  text,
  iconColor = COLORS.gray,
  textColor = COLORS.gray,
  iconSize = 14,
  fontSize = SIZE.medium,
  spacing = 8, // Space between icon and text
  containerStyle,
  textStyle,
  alignment = 'flex-start', // 'flex-start', 'center', 'flex-end'
  direction = 'row', // 'row' or 'column'
  ...props
}) => {
  return (
    <View 
      style={[
        styles.container,
        {
          justifyContent: alignment,
          flexDirection: direction,
          gap: spacing, // Modern way to add spacing
        },
        containerStyle
      ]}
      {...props}
    >
      {/* Clone the icon element and add color/size props */}
      {icon && React.cloneElement(icon, {
        size: iconSize,
        color: iconColor,
        ...icon.props, // Preserve original props, but allow override
      })}
      
      <Text 
        style={[
          styles.text,
          {
            color: textColor,
            fontSize: fontSize,
          },
          textStyle
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

// Alternative version using icon name if you prefer string-based icons
const IconTextWithName = ({
  iconName,
  iconFamily = 'Entypo', // Default icon family
  text,
  iconColor = COLORS.gray,
  textColor = COLORS.gray,
  iconSize = 20,
  fontSize = SIZE.medium,
  spacing = 8,
  containerStyle,
  textStyle,
  alignment = 'flex-start',
  direction = 'row',
  ...props
}) => {
  // You can import different icon families and switch based on iconFamily prop
  const IconComponent = iconFamily === 'Entypo' ? 
    require('@expo/vector-icons/Entypo').default : 
    require('@expo/vector-icons/Entypo').default; // Add more as needed

  return (
    <View 
      style={[
        styles.container,
        {
          justifyContent: alignment,
          flexDirection: direction,
          gap: spacing,
        },
        containerStyle
      ]}
      {...props}
    >
      <IconComponent 
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
      
      <Text 
        style={[
          styles.text,
          {
            color: textColor,
            fontSize: fontSize,
          },
          textStyle
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
  },
});

export default IconText;
export { IconTextWithName };


// // Your specific use case
// <IconText 
//   icon={<Entypo name="calendar" />}
//   text="24 Jan 2026"
//   iconColor="#666"
//   textColor="#333"
// />

// <IconText 
//   icon={<Entypo name="users" />}
//   text="500 Attended"
//   iconColor="#4CAF50"
//   textColor="#333"
// />

// <IconText 
//   icon={<Entypo name="clock" />}
//   text="8 PM - 11 PM"
//   iconColor="#FF9800"
//   textColor="#333"
// />

// // Different configurations
// <IconText 
//   icon={<Entypo name="location-pin" />}
//   text="New York"
//   iconColor={COLORS.primary}
//   textColor={COLORS.secondary}
//   iconSize={24}
//   fontSize={16}
//   spacing={12}
// />

// // Vertical layout
// <IconText 
//   icon={<Entypo name="heart" />}
//   text="Favorites"
//   direction="column"
//   alignment="center"
//   iconColor="#E91E63"
// />

// // Custom styling
// <IconText 
//   icon={<Entypo name="star" />}
//   text="4.8 Rating"
//   containerStyle={{ 
//     backgroundColor: '#f0f0f0', 
//     padding: 8, 
//     borderRadius: 8 
//   }}
//   textStyle={{ fontWeight: 'bold' }}
// />