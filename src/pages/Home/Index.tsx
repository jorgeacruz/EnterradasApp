import React from "react";
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FrontView, MainView, Button, Text, Logo } from "./styles";
import { Video, ResizeMode } from "expo-av";

//Go to 
import NewAccount from "./NewAccount";

//video Dimensios
const { width, height } = Dimensions.get('window');

export default function IndexHome(){

    const navigation = useNavigation();
    
    function gotoNextPage(){ navigation.navigate("NewAccount")}

    return(
        <MainView>
            <Video
            source={require('../../video/dunks.mp4')}
            resizeMode={ResizeMode.COVER}
            style={{width:width, height:height, opacity:0.8}}
            isLooping={true}
            shouldPlay={true}
            />
            <FrontView>
                <Logo source={require('../../images/fly.png')}/>
                <Button onPress={gotoNextPage}>
                    <Text style={{color:'#000', fontWeight:'bold'}}>NUNCA DESISTA DE VOAR</Text>
                </Button>
            </FrontView>
        </MainView>
    )
}

