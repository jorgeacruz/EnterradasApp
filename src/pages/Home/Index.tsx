import React from "react";
import { Dimensions } from 'react-native';
import { MainView } from "./styles";
import { Video, ResizeMode } from "expo-av";

//video Dimensios
const { width, height } = Dimensions.get('window');

export default function AppIndex(){
    return(
        <MainView>
            <Video
            source={require('../../video/dunks.mp4')}
            resizeMode={ResizeMode.COVER}
            style={{width:width, height:height, opacity:0.6}}
            isLooping={true}
            shouldPlay={true}
            />
        </MainView>
    )
}

