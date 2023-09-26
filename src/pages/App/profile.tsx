import React from "react";
import { MainView, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Profile(){

    const navigation = useNavigation();

    return(
        <MainView>
            <Text>Dentro do App</Text>
        </MainView>
    )
}