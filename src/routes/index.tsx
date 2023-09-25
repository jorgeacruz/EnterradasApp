import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppIndex from "../pages/Home/Index";
import LoginPage from "../pages/Home/login";
import NewAccount from "../pages/Home/NewAccount";
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
          <Stack.Screen name="NewAccount" component={NewAccount}
          options={{
            headerShown:true,
            title:'',
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor:'#006837'
            }
          }}
          />
          <Stack.Screen name="LoginPage" component={LoginPage}
          options={{
            headerShown:true,
            title:'',
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor:'#006837'
            }
          }}
          />
          <Stack.Screen name="LostPassword" component={LostPassword}
          options={{
            headerShown:true,
            title:'',
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor:'#006837'
            }
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }