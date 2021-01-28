import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import { Item, Input, Text, Button } from "native-base";

import logoApp from '../assets/chatLogo.png';

export default function Login(props) {
    const { setUserName } = props;

    const [name, setName] = useState('');//Esatdo para guardar el nombre

    const onSubmit = () => {
        setUserName(name);
    }


    return (
        <SafeAreaView style={styles.container}> 
            <StatusBar barStyle='light-content' />
            
            <View>
                <Image source={logoApp} resizeMode='contain' style={styles.img} />
            </View>
            <Item>
                <Input 
                    placeholder="Nombre de Usuario"
                    placeholderTextColor='grey'
                    style={{color: '#fff'}}
                    value={name}//->
                    onChange={(e)=> setName(e.nativeEvent.text)}//Para Guardar el texto en el Set
                />
            </Item>
            <Button style={styles.loginBtn} onPress={onSubmit}>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 45,
    },
    img: {
        width: '100%',
        height: 200,
        marginBottom: 30,
    },
    loginBtn: {
        marginTop: 40,
        justifyContent: 'center',
        backgroundColor: '#0098d3',
    }
})
