import React from "react";
import { ScrollView } from 'react-native'
import { MainView, Title } from "./styles";

import SwiperCards from "../components/swiperCards";
import ScrollPlayers from "../components/scrollPlayers";



export default function Home(){
    return(
        <MainView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ScrollPlayers/>
                <SwiperCards/> 
            </ScrollView>
        </MainView>
    )
}