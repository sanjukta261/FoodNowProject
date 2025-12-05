import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminDrawerNav from './admin/AdminDrawerNav' ;

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoggedIn = true

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' }, }}>
        {!isLoggedIn ? (
          <>
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
          </>
        ) : (
          <Stack.Screen name="Main" component={AdminDrawerNav} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;