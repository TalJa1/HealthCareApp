/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {vh, vw} from './services/styleSheets';
import {StyleSheet, View} from 'react-native';
import {
  homeActiveIcon,
  homeIcon,
  listActiveIcon,
  listIcon,
  newsActiveIcon,
  newsIcon,
  userActiveIcon,
  userIcon,
} from './assets/svgXml';
import Home from './views/bottomTab/Home';
import ListScreen from './views/bottomTab/ListScreen';
import News from './views/bottomTab/News';
import UserScreen from './views/bottomTab/UserScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const TabNavigator = () => {
    return (
      <View style={styles.tabnavigationStyle}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarInactiveTintColor: '#8098F9',
            tabBarActiveTintColor: '#2D31A6',
            tabBarShowLabel: false,
            tabBarStyle: {
              borderTopColor: 'white',
              backgroundColor: 'white',
              height: vh(8),
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? homeActiveIcon(iconSize, iconSize, color)
                      : homeIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="ListScreen"
            component={ListScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? listActiveIcon(iconSize, iconSize, color)
                      : listIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="News"
            component={News}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? newsActiveIcon(iconSize, iconSize, color)
                      : newsIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => {
                const iconSize = focused ? vw(7) : vw(6);
                return (
                  <View style={[styles.iconContainer]}>
                    {focused
                      ? userActiveIcon(iconSize, iconSize, color)
                      : userIcon(iconSize, iconSize, color)}
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  };
  return (
    <NavigationContainer>
      {/* Main || Login */}
      <Stack.Navigator initialRouteName="Login">
        {/* Tab Navigator */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        {/* End Tab Navigator */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabnavigationStyle: {backgroundColor: 'white', flex: 1},
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
