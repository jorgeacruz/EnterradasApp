import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon  from 'react-native-vector-icons/FontAwesome5'


//Drawer Pages
import Home from "../pages/App/Home";
import Profile from "../pages/App/profile";
import userDrawer from '../pages/components/userDrawer';

import SearchPage from '../pages/App/Search';
import Players from '../pages/App/Players';
import Times from '../pages/App/Times';

const Drawer = createDrawerNavigator();

//define Drawer Icons

const HomeIcon =({color, size}) => <Icon name={'home'} size={18} color={color}/>
const profileIcon =({color, size}) => <Icon name={'user'} size={18} color={color}/>
const searchIcon =({color, size}) => <Icon name={'search'} size={18} color={color}/>
const playerIcon =({color, size}) => <Icon name={'basketball-ball'} size={18} color={color}/>
const timesIcon =({color, size}) => <Icon name={'flag'} size={18} color={color}/>

export default function NavDrawer(){
    
    return(
            <Drawer.Navigator
            
            //get components
            drawerContent={userDrawer}

            screenOptions={{
            drawerActiveTintColor:'#000',
            drawerActiveBackgroundColor:'#ff0',
            drawerInactiveBackgroundColor:'#6f977385',  
            drawerInactiveTintColor:'#000',
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
                        fontWeight:'bold'
                    },
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:HomeIcon
                }}
                />
                <Drawer.Screen name="Seu Perfil" component={Profile}
                options={{
                  //  headerTitle:'Seu Perfil',
                    headerTintColor:'#ff0',
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:profileIcon,
                }}
                />
                <Drawer.Screen name='Pesquisar' component={SearchPage}
                options={{
                    headerTintColor:'#ff0',
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:searchIcon,
                }}
                />
                
                <Drawer.Screen name='Jogadores' component={Players}
                options={{
                    headerTintColor:'#ff0',
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:playerIcon,
                }}
                />
                
                <Drawer.Screen name='Times' component={Times}
                options={{
                    headerTintColor:'#FF0',
                    headerStyle:{
                        backgroundColor:'#006837'
                    },
                    drawerIcon:timesIcon,
                }}
                />
                
            </Drawer.Navigator>
    )
}