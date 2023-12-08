import React from "react";
import { MainView, View } from "./styles";
import { data } from "../api/apisPlayers";
import { FlatList, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Players(){

    const navigation = useNavigation();

    return(
        <MainView>
            <FlatList
            data={data}
            renderItem={({ item }) => <ListPlayer data={item}/>}
            scrollEnabled
            showsVerticalScrollIndicator={false}
            />
        </MainView>
    )
}

{/** Players */}

function ListPlayer(props){
    return(
        <View>
            <Text>{props.data.name}</Text>
            <Text>{props.data.team}</Text>
            <Text>{props.data.image}</Text>
        </View>
    )
}