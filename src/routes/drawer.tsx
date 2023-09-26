import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";


//Drawer Pages
import Home from "../pages/App/Home";
import Profile from "../pages/App/profile";
import userDrawer from '../pages/components/userDrawer';
import Icon  from 'react-native-vector-icons/Feather'
import exitButtom from '../pages/components/exitButtom';
const Drawer = createDrawerNavigator();

//define Drawer Icons
const HomeIcon =({color, size}) => <Icon name={'home'} size={size} color={color}/>
const profileIcon =({color, size}) => <Icon name={'user'} size={size} color={color}/>

export default function NavDrawer(){
    
    return(
            <Drawer.Navigator
            
            //get components
            drawerContent={userDrawer}

            screenOptions={{
            drawerActiveTintColor:'#ff0',
            drawerActiveBackgroundColor:'#000',  
            drawerInactiveTintColor:'#fff',
            drawerStatusBarAnimation:'slide',
            drawerStyle:{
                backgroundColor:'#006837',
                width:'60%',
                paddingTop:20,
            }  
            }}
            >
                <Drawer.Screen name="Home" component={Home}
                options={{
                    headerTintColor:'#ff0',
                    headerTitle:'Boomm Shakalaka',
                    headerTitleStyle:{
                        fontWeight:'bold',
                        color:'#ff0'
                    },
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:HomeIcon
                }}
                />
                <Drawer.Screen name="Seu Perfil" component={Profile}
                options={{
                    headerTitle:'Seu Perfil',
                    headerTintColor:'#FFF',
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:profileIcon,
                }}
                />
               
                
            </Drawer.Navigator>
    )
}