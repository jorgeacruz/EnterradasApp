import React from "react";
import { MainView, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function IndexApp(){

    const navigation = useNavigation();

    return(
        <MainView>
            <Text>Dentro do App</Text>
        </MainView>
    )
}