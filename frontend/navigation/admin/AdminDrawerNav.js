import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import FullProfile from '@screens/FullProfile';
import AdminSideProfile from '../../sideProfile/admin/AdminSideProfile';
import AdminMainStack from '../admin/AdminMainStack';

const Drawer = createDrawerNavigator();

const AdminDrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <AdminSideProfile {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeScreen" component={AdminMainStack} />
    </Drawer.Navigator>
  );
};

export default AdminDrawerNav;
