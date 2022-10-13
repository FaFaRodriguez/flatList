import React from "react";
import {View, Text, StyleSheet} from 'react-native'


const ListUsuario  = ({item}) =>{

    return(

        <View style= {styles.container}>
            <Text style = {styles.datos}> {item.Nombre}</Text>
            <Text style = {styles.datos}> {item.Edad}</Text>
        </View>

    ) 
}

const styles = StyleSheet.create({

    container: {
        padding: 10
    },
    datos:{
        padding: 10
    }

})

export default ListUsuario;