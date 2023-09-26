import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import Icon  from 'react-native-vector-icons/FontAwesome5'

//define icon buttom exit
const profileIcon =({}) => <Icon name={'sign-out-alt'} size={18} color={"#fff"}/>

export default function userDrawer(props){
    return(
        <DrawerContentScrollView {...props}>
            <View style={{
                width:'100%',
                height:160,
                justifyContent:"center",
                alignItems:"center",
            }}
            >
                <Image source={require('../../images/logo.png')} style={{
                    width:120,
                    height:120
                }}/>

                <Text style={{color:'#fff', marginTop:10, marginBottom:15}}>Seja Bem-vindo</Text>

            </View>
            <DrawerItemList {...props}/>
            
            <DrawerItem label="Sair" 
            icon={profileIcon}  
            onPress={() => {
                props.navigation.navigate("LoginPage");
                //alert('sair')
            }}
            labelStyle={{
                color:'#fff',
                fontWeight:"bold"
            }}
            style={styles.bt}/>
        </DrawerContentScrollView>
    )
}

//buttom style
const styles = StyleSheet.create({
    bt:{ backgroundColor:'#000' }
})