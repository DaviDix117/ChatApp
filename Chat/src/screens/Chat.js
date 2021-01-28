import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, LogBox, ScrollView } from 'react-native';
import moment from 'moment';
import { Header, Body, Title } from "native-base";
import { map } from 'lodash';

import Input from '../components/Input';
import Message from '../components/Message';
import firebase from '../utils/fireBase';
import 'firebase/database';

LogBox.ignoreLogs(['Warning: Setting a timer']);

export default function Chat(props) {
    const { userName } = props;

    const [messages, setMessages] = useState([])//Hook para guardar los mensajes traídos

    //UseRef???????
    const chatScrollRef = useRef();

    //efecto para bajar al final cada vez que llegue un nuevo mensaje
    useEffect(() => {
        chatScrollRef.current.scrollTo({y:100000000000000});
    }, [messages])

    useEffect(() => {
        const chat = firebase.database().ref("general");
        chat.on('value', (snapShot)=>{
            setMessages(snapShot.val());
        })
        
    }, [])

    const sendMessage = (message) =>{ //Función que recibe el mensaje
        const time = moment().format('hh:mm a');    //obtener la hora

        firebase
            .database()
            .ref("general")         //Nombre de la tabla
            .push({ 
                userName,
                text: message,
                time
            })
    }

    return (
        <>  
            <Header style={styles.header} iosBarStyle='light-content' >
                <Body>
                    <Title style={{ color: '#fff' }}>Chat APP</Title>
                </Body>
            </Header>

            <View style={styles.content}>                
                <ScrollView style={styles.chatView} ref={chatScrollRef}>
                    {map(messages, (message, index)=>(
                        <Message key={index} message={message} name={userName} />
                    ))}
                </ScrollView>
                <Input sendMessage={sendMessage} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        backgroundColor: '#16202b'
    },
    chatView: {
        backgroundColor: '#1b2734'
    }
})
