import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MainView, Inputs, Logo, Button, Text, Link, Title } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//Go to
import LostPassword from "./LostPassword";
import IndexApp from "../App/index";

// Define the navigation type
type RootStackParamList = {
    LostPassword: undefined;
    IndexApp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LoginPage(){
    const navigation = useNavigation<NavigationProp>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function createNewAccount(){
        if(email === '' || password === ''){
            alert('Email ou Password não pode estar vazio')
        } else {
            navigation.navigate('IndexApp')
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
                onChangeText={(texto) => setEmail(texto)}
                autoCapitalize="none"
            />
            <Inputs 
                placeholder='Digite sua senha' 
                placeholderTextColor='#fff'
                secureTextEntry={true}
                value={password}
                onChangeText={(texto) => setPassword(texto)}
                autoCapitalize="none"
            />

            <Button style={{marginTop:10}} onPress={createNewAccount}>
                <Text style={{color:'#000', fontWeight:'bold'}}>Logar Conta</Text>
            </Button>
            <Link style={{margin:20}} onPress={() => navigation.navigate('LostPassword')}>
                <Text> Esqueci minha senha</Text>
            </Link>
        </MainView>
    )
}

