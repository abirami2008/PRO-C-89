import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet } from "react-native"

const Tab = createBottomTabNavigator();

const BottomTabNavigator= () => {


 

  return (
   
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
    let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "document-attach": "document-attach-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'tomato',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
   
  );
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "blue",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
export default BottomTabNavigator