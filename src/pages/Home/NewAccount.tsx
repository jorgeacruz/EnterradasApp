import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MainView, Inputs, Logo, Button, Text, Link, Title } from './styles';

import LoginPage from "./login";

export default function NewAccount(){
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function gotoNextPage(){ navigation.navigate("LoginPage")}
    function createNewAccount(){
        if( name === '' || email === ''){
            alert('Nome ou Email não pode estar vazio')
        }
    }
    return(
        <MainView style={{backgroundColor:'#006837'}}>
            <Logo source={require('../../images/logo.png')} style={{width:250, height:250}}/>
            <Title> Criar sua Conta Enterradas</Title>
            <Inputs 
            placeholder='Digite seu Nome' 
            placeholderTextColor='#fff'
            value={name}
            onChangeText={(name) => setName(name)} />
            <Inputs 
            placeholder='Digite seu Email' 
            placeholderTextColor='#fff'
            value={email}
            onChangeText={(texto) => setEmail(texto)} />
            <Inputs 
            placeholder='Digite sua senha' 
            placeholderTextColor='#fff'
            secureTextEntry={true}
            value={password}
            onChangeText={(texto) => setPassword(texto)} />

            <Button style={{marginTop:10}} onPress={createNewAccount}>
                <Text style={{color:'#000', fontWeight:'bold'}}>Criar nova conta</Text>
            </Button>
            <Link style={{margin:20}} onPress={gotoNextPage}>
                <Text> Já possuo conta. Fazer Login.</Text>
            </Link>
        </MainView>
    )
}

