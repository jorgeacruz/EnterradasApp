import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MainView, Inputs, Logo, Button, Text, Link, Title } from './styles';

//Go to
import LostPassword from "./LostPassword";
import IndexApp from "../App/index"

export default function LoginPage(){
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

   // function gotoNextPage(){ navigation.navigate(LostPassword)}
    function createNewAccount(){
        if( email === '' || password === ''){
            alert('Email ou Password não pode estar vazio')
        } else {
         //   navigation.navigate(IndexApp)
        }
    }
    return(
        <MainView style={{backgroundColor:'#006837', paddingBottom:50}}>
            <Logo source={require('../../images/logo.png')} style={{width:250, height:250}}/>
            
            <Title> Fazer Login na minha conta</Title>
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
                <Text style={{color:'#000', fontWeight:'bold'}}>Logar Conta</Text>
            </Button>
            <Link style={{margin:20}} onPress={() => navigation.navigate(IndexApp)}>
                <Text> Esqueci minha senha</Text>
            </Link>
        </MainView>
    )
}

