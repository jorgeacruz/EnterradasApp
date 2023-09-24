import React from "react";
import { View, Text, StyleSheet, } from 'react-native';
import { MainView } from "./styles";

export default function AppIndex(){
    return(
        <MainView>
            <Text>Developer with TypeScript</Text>
        </MainView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})