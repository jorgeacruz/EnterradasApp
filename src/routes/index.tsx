//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Stack Pages
import IndexHome from "../pages/Home/Index";
import IndexApp from "../pages/App";
import LoginPage from "../pages/Home/Login";
import NewAccount from "../pages/Home/NewAccount";
import LostPassword from "../pages/Home/LostPassword";



const Stack = createNativeStackNavigator();

export default function NavStack() {
    return (
    
      <NavigationContainer>
        
        <Stack.Navigator>
          <Stack.Screen name="IndexHome" component={IndexHome}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen name="IndexApp" component={IndexApp}
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen name="NewAccount" component={NewAccount}
          options={{
            headerShown:false,
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