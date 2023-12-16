import React from "react";
//import { MainView, View } from "./styles";
import { data } from "../api/apisPlayers";
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";


export default function Players(){

    const navigation = useNavigation();


    return(
        <View style={styles.container}>
        <TextInput
        placeholder="Buscar os Melhores Players"
        placeholderTextColor={'#FFF'}
        style={styles.SearchInput}
        />
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#006837',
        paddingTop:10,
    },
    area:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
      //  justifyContent:"space-around",
        width:400,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        margin:3,
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
        fontSize:20,
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
    },
    SearchInput:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:8,
        padding:2,
        margin:5,
        width:'80%',
        height:40,
        textAlign:"center",
        color:'#fff',
        marginBottom:20
    }
})