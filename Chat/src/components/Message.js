import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import letterColors from '../utils/letterColors';

export default function Message(props) {
    const { message: { userName, text, time }, name } = props;

    const [bgLetter, setBgLetter] = useState(null);

    //Efect para cambiar el color 
    useEffect(() => {
        const char = userName.trim()[0].toUpperCase();
        const indexLetter = char.charCodeAt() - 65;
        setBgLetter(letterColors[indexLetter])
    }, [])

    const ThisIsMe = name === userName // ? true : false. Para determinar si el mensaje es mio o no

    const conditionalStyle ={
        container: {
            justifyContent: ThisIsMe ? "flex-end" : "flex-start",            
        },
        viewMessage: {
            backgroundColor: ThisIsMe ? "#f0f0f1" : '#4b86f0',
        },
        message: {
            color: ThisIsMe ? "#000" : '#fff',
            textAlign: ThisIsMe ? 'right' : "left",
        },
    };

    return (
        <View style={[styles.container, conditionalStyle.container]}>
 
            {/* si yo envié el mensaje np mostrar (si this false) */}
            {!ThisIsMe &&(
                //Contenedor para escribir la letra 
                <View style={[{backgroundColor: `rgb(${bgLetter})`, height: 35, width: 35, borderRadius: 50, marginRight: 10 },styles.letterView]}>
                    <Text style={styles.letter}>
                        {userName.substr(0, 1)}
                    </Text>
                </View>
            )}

            {/* Contenedor o caja del mensaje en pantalla */}
            <View style={[styles.viewMessage, conditionalStyle.viewMessage]}>

                {/* Muestra contenido del mensaje */}
                <Text style={[styles.message,conditionalStyle.message]}>{text}</Text>

                {/* Mostrar la hora o tiempo de enviado */}
                <Text style={[styles.time, ThisIsMe ? styles.timeLeft : styles.timeRight]}>{time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    viewMessage: {
        borderRadius: 10,
        minHeight: 35,
        minWidth: '40%', //Máximo de agrandar la caja
        maxWidth: '80%'
    },
    message: {
        padding: 5,
        paddingBottom: 25
    },
    time: {
        fontSize: 10,
        position: 'absolute',
        bottom: 5,
    },
    timeRight: {
        right: 8,
        color: '#fff',
    },
    timeLeft: {
        left: 8,
        color: 'grey'
    },
    letterView: {
        height: 35,
        width: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    letter: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'uppercase',
    }
})
