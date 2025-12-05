import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../../screens/admin/AdminHome";
import { COLORS, SIZE } from "../../constants/Theme";


const BottomTab = createBottomTabNavigator();

const TabIcon = ({ focused, iconName }) => (
  <Ionicons
    name={focused ? iconName : `${iconName}-outline`}
    size={focused ? 26 : 22}
    color={focused ? COLORS.secondary : COLORS.gray}
  />
);

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          height: 65,
          borderTopWidth: 0,
          borderRadius: 50,
          overflow: "hidden",
          backgroundColor: COLORS.primary,
          paddingHorizontal: 10,
          marginHorizontal: 20,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelStyle: {
          fontSize: SIZE.small,
          fontWeight: "500",
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconName="home" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
