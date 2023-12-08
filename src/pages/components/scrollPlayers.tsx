import React from "react";
import { Button, PlayerImage, Title,  } from './styles';
import { View, Text, ScrollView, StyleSheet,  } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Players from "../App/Players";

export default function ScrollPlayers(){
    

    return(
        <View style={{paddingHorizontal:5, paddingVertical:20}}>
            <Text style={{color:'#000', fontWeight:"bold", fontSize:25, paddingLeft:12, textAlign:"center"}}>Top 10 MVP</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
                <Button>
                    <PlayerImage source={require('../../images/players/player1.png')} />
                    <Text>Curry</Text>
                </Button>     
                <Button>
                    <PlayerImage source={require('../../images/players/player2.png')} />
                    <Text>Lebron</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player3.png')} />
                    <Text>Mamba</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player4.png')} />
                    <Text>Jordan</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player5.png')} />
                    <Text>Shaq</Text>
                </Button>
                <Button>
                    <PlayerImage source={require('../../images/players/player6.png')} />
                    <Text>Harden</Text>
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