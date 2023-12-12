import React from "react";
import { MainView, View } from "./styles";
import { data } from "../api/apisPlayers";
import { FlatList, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Teste from "./teste";

export default function Players(){

    const navigation = useNavigation();


    return(
        <MainView>
           <FlatList
           data={data}
           scrollEnabled
           showsVerticalScrollIndicator={false}
           renderItem={({ item }) => (
            <View style={styles.area}>
                <View>
                    <Image
                    source={{uri:item.imageURL}}
                    style={styles.imageLogo}
                    />
                </View>
                <View>

                    <Text style={styles.Title}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <Text style={styles.team}>{item.team}</Text>
                    {/** add this to link external inside flatlist 
                    <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.cta}>
                        <Text style={{color:'#fff'}}>Usando openURL</Text>
                    </TouchableOpacity>
                    */}
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
      //  justifyContent:"space-around",
        width:400,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        margin:5,
        backgroundColor:'#000'
        
    },
    imageLogo:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#000',
        marginRight:10
    },
    cta:{
        backgroundColor:'#000',
        padding:4,
        justifyContent:"center",
        alignItems:"center"
    },
    Title:{
        fontWeight:"bold",
        fontSize:25,
        color:'#fff'
    },
    position:{
        fontWeight:"bold",
        color:'#fff000',
        fontSize:18,
        margin:3
    },
    team:{
        color:'#fff',
        fontWeight:'600'
    }
})