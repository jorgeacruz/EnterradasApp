import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppIndex from "../pages/Home/Index";
import LoginPage from "../pages/Home/login";
import CreateAccount from "../pages/Home/CreateAccount";
import LostPassword from "../pages/Home/LostPassword";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={AppIndex}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Password" component={LostPassword} />
          <Stack.Screen name="Account" component={CreateAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }