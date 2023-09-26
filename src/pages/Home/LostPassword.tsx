import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MainView, Inputs, Logo, Button, Text, Link, Title } from './styles';

//Go to
import LoginPage from "./Login";

export default function LostPassword(){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    function gotoNextPage(){ navigation.navigate("LoginPage")}
    function createNewAccount(){
        if( email === '' ){
            alert('Nome ou Email não pode estar vazio')
        }
    }
    return(
        <MainView style={{backgroundColor:'#006837', paddingBottom:50}}>
            <Logo source={require('../../images/logo.png')} style={{width:250, height:250}}/>
            
            <Title> Recuperar sua senha</Title>
            <Inputs 
            placeholder='Digite seu Email Cadastrado' 
            placeholderTextColor='#fff'
            value={email}
            onChangeText={(texto) => setEmail(texto)} />
           
            <Button style={{marginTop:10}} onPress={createNewAccount}>
                <Text style={{color:'#000', fontWeight:'bold'}}>Resetar Senha</Text>
            </Button>
            <Link style={{margin:20}} onPress={gotoNextPage}>
                <Text> Fazer Login</Text>
            </Link>
        </MainView>
    )
}

