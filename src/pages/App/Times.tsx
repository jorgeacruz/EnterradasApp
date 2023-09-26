import React from "react";
import { StatusBar } from "react-native";
import { MainView, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Times(){

    const navigation = useNavigation();

    return(
        <MainView>
            <Text>Times</Text>
        </MainView>
    )
}