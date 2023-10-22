import * as React from 'react';
import { Navigation } from "react-native-navigation";
import { Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./screens/home"
import Medicine from "./screens/medicine"
import Reminders from "./screens/reminders"
import Profile from "./screens/profile"

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeTintColor="#000000"
      activeColor="#078CDA"
      inactiveColor='#74C9FB'
      safeAreaInsets={{ bottom: 0 }}
      labelStyle={{ fontSize: 2 }}
      barStyle={{ backgroundColor: '#006494' }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={Medicine}
        options={{
          tabBarLabel: 'Medicamentos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="medical-bag" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reminders"
        component={Reminders}
        options={{
          tabBarLabel: 'Recordatorios',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="alarm" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Sobre ti',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
