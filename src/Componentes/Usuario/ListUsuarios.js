import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { Context } from '../../../App';

const ListUsuario  = ({item}) =>{

    
    function EliminarUsuario() {
        
    }



    return(

        <View style= {styles.container}>
            <Text style = {styles.datos}> {item.Nombre}</Text>
            <Text style = {styles.datos}> {item.Edad}</Text>
        </View>

    ) 
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: '#f1f2f1',
        marginHorizontal: 10,
        borderRadius: 10
    },
    datos:{
        padding: 10
    }

})

export default ListUsuario;