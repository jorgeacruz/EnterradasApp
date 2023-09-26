import React from "react";
import { MainView, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Players(){

    const navigation = useNavigation();

    return(
        <MainView>
            <Text>Players</Text>
        </MainView>
    )
}