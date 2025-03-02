import React, { useState, useRef, useEffect } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import { useNavigation } from "@react-navigation/native";
import { MainView, Inputs, Logo, Button, Text, Link, Title } from './styles';

import LoginPage from "./Login";
import { ColorSpace } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function NewAccount(){
   
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    function gotoNextPage(){ navigation.navigate("LoginPage")}
    function createNewAccount(){
        if( name === '' || email === ''){
            Toast.error('Preencha todos os campos');
            return;
        } else {
            Toast.success('Conta criada com sucesso')
            navigation.navigate("LoginPage")
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
            onChangeText={(texto) => setEmail(texto)}
            autoCapitalize="none" />
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
                <Text style={{fontWeight:"bold", fontSize:20}}> Já possuo conta! Fazer Login.</Text>
            </Link>
            {/** Toastify Props */}
            <ToastManager
            width={300}
            hasBackdrop={true}
            backdropColor='#006837'
            backdropOpacity={0.9}
            position='center'
            //positionValue='120'
            animationStyle='zoomInOut'
            duration={3000}
            style={{
                backgroundColor:'#FFFF00'
            }}
            textStyle={{
                fontSize:14,
                fontWeight:'bold'
            }}
            
            />
        </MainView>
    )
}

