import React from "react";
import { Button, PlayerImage } from './styles';
import { View, Text, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Players from "../App/Players";

export default function ScrollPlayers(){
    
    const Navigation = useNavigation();
    //Lista de Jogadores
    const players = [
        {
            id:'0',
            name:'Jordan',
            img:require('../../images/players/player1.png'),
            btn:'navigation.navigate(Players)'
        },
        {
            id:'1',
            name:'Curry',
            img:require('../../images/players/player1.png'),
            btn:'navigation.navigate(Players)'
        },
        {
            id:'2',
            name:'Lebron',
            img:require('../../images/players/player1.png'),
            btn:'navigation.navigate(Players)'
        },
    ]

    return(
        <View>
            
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={players}
                renderItem={({ item, index, separators }) => 
                    <TouchableOpacity >
                        <View style={styles.imageList}>
                                <Image source={{ uri: item.img }} key={index} style={{width:100, height:100}}></Image>
                            <Text>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />


            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
                <Button>
                    <PlayerImage source={require('../../images/players/player1.png')} />
                    <Text>Curry</Text>
                </Button>     
                <Button>
                    <PlayerImage source={require('../../images/players/player2.png')} />
                    <Text>Curry</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player3.png')} />
                    <Text>Curry</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player4.png')} />
                    <Text>Curry</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player5.png')} />
                    <Text>Curry</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player6.png')} />
                    <Text>Curry</Text>
                </Button>
                                     
                   
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imageList:{
        width:200,
        height:200,
        borderWidth:1,
        borderColor:'#000',
        justifyContent:"center",
        alignItems:"center"
    }
})