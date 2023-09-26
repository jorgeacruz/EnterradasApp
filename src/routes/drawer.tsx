import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Drawer Pages
import Home from "../pages/App/Home";
import Profile from "../pages/App/profile";

const Drawer = createDrawerNavigator();

export default function NavDrawer(){
    return(
        
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen name="Profile" component={Profile}/>
            </Drawer.Navigator>
        
    )
}