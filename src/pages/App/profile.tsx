import React, { useState } from "react";
import { ScrollView } from 'react-native'
import { MainView, PerfilFoto, View, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Profile(){

    const navigation = useNavigation();

    const [name, setName] = useState('Jorge Cruz');
    const [slogan, setSlogan] = useState('Bumm Shakalaka')
    const [sobremim, setSobreMim] = useState('Bumm Shakalaka')

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop:30}}>
            <MainView>
                <PerfilFoto source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgBVKmJ9vU0MnmE9v5XoLoJNvOkI8Bpn1IQ&usqp=CAU'}} />
                <View style={{width:300, alignItems:'center', gap:10, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>{name}</Text>
                    <Text style={{fontWeight:'bold', fontSize:25}}>{slogan}</Text>
                </View>
                <View style={{width:300, alignItems:'center', gap:10, marginTop:20}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>{sobremim}</Text>
                </View>
            </MainView>
        </ScrollView>
    )
}