import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

const ListUsuario  = ({item}) =>{

    
    function EliminarUsuario() {
        
    }



    return(
        <>
            <View style= {styles.container}>
                <View style={{flex:5}}>
                    <Text style = {styles.datos}> {item.Nombre}</Text>
                    <Text style = {styles.datos}> {item.Edad}</Text>
                </View>

                <View style={{flex:4, marginVertical: 3}}>
                    <Button
                        title="Eliminar usuario"
                        color="red"
                        onPress={() => EliminarUsuario()}
                    />
                    <View style= {{marginVertical: 4}}/>
                    <Button
                        title="Cambiar datos"
                        color="grey"
                        onPress={() => CambiarUsuario()}
                    />
                </View>
                
            </View>
        </>
        


    ) 
}

const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: '#f1f2f1',
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
    },
    datos:{
        padding: 10
    }

})

export default ListUsuario;