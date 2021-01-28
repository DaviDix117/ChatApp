import React, { useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Item, Input as InputNB, Icon } from "native-base";

export default function Input(props) {
    const {sendMessage} = props;

    const [message, setMessage] = useState(''); //Estado para guardar el mensaje

    const onSubmit = () => {
        if(message.length > 0){
            sendMessage(message);   //Enviá el mensaje a la función
            setMessage('');         //Limpia el input
        }
    }

    return (
        <View style={styles.container} >
            <Item style={styles.ItemInput}>
                {/* //Input para escribir el mensaje */}
                <InputNB 
                    style={styles.input} 
                    placeholder="Mensaje..."
                    placeholderTextColor="grey"
                    value={message}
                    onChange={(e)=>setMessage(e.nativeEvent.text)} />

                {/* Botón para enviar el mensaje escrito */}
                <TouchableOpacity onPress={onSubmit}>
                    <Icon name="send" style={styles.iconSend} />
                </TouchableOpacity>                
            </Item>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16202b',
        paddingBottom: Platform .OS === "ios" ? 20 : 0,
        paddingHorizontal: 20
    },
    ItemInput: {
        borderColor: '#16202b',
    },
    input: {
        color: '#fff',
    },
    iconSend: {
        color: '#fff'
    }
})
