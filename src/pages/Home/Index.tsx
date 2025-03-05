import React, { useRef } from "react";
import { Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FrontView, MainView, Button, Text, Logo } from "./styles";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//video Dimensions
const { width, height } = Dimensions.get('window');

type RootStackParamList = {
    NewAccount: undefined;
    // Add other screen names as needed
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function IndexHome(){
    const navigation = useNavigation<NavigationProp>();
    const videoRef = useRef<Video>(null);
    
    const handleButtonPress = () => {
        navigation.navigate('NewAccount');
    };

    return(
        <MainView>
            <Video
                ref={videoRef}
                source={require('../../video/dunks2.mp4')}
                resizeMode={ResizeMode.COVER}
                style={{width:width, height:height, opacity:0.8}}
                isLooping={true}
                shouldPlay={true}
                isMuted={true}
            />
            <FrontView>
                <Logo source={require('../../images/fly.png')}/>
            
                <Button 
                    underlayColor="#006837"
                    onPress={handleButtonPress}
                >
                    <Text style={{color:'#000', fontWeight:'bold'}}>NUNCA DESISTA DE VOAR</Text>
                </Button>
            </FrontView>
        </MainView>
    )
}

