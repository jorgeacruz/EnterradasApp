import React from "react";
import { MainView, View } from "./styles";
import { data } from "../api/apisPlayers";
import { FlatList, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Players(){

    const navigation = useNavigation();

    return(
        <MainView>
           <FlatList
           data={data}
           renderItem={({ item }) => (
            <View style={styles.area}>
                <View>
                    <Image
                    source={{uri:item.imageURL}}
                    style={styles.imageLogo}
                    />
                </View>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.position}</Text>
                </View>
               
            </View>
           )}/>
        </MainView>
    )
}

const styles = StyleSheet.create({
    area:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:400,
        borderWidth:1,
        padding:8
    },
    imageLogo:{
        width:100,
        height:100,
        borderRadius:20
    }
})