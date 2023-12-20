import React from "react";
import {  Text,  StyleSheet, Image, TouchableOpacity } from "react-native";
import { MainView, View} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";


export default function Teams(){
    // navigation
    const navigation = useNavigation();
    
    return(
       <MainView>
        <ScrollView>
            <View style={{flex:1, width:'95%', justifyContent:'space-around', flexDirection:'row', paddingTop:20}}>
                <TouchableOpacity>
                    <Image source={{uri:'https://logos-world.net/wp-content/uploads/2020/05/Los-Angeles-Lakers-Symbol.png'}} style={{width:140, height:120}}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={{uri:'https://i.pinimg.com/originals/4b/2e/f8/4b2ef825eb108f47fa12d60ddfabb0f7.jpg'}} style={{width:140, height:120}}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
       </MainView>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:"center",
        alignItems:'center'
    }
})