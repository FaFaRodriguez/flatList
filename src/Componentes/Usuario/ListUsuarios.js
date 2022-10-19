import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react";
import {View, Text, StyleSheet, Button,  Alert, Modal, Pressable, useState} from 'react-native'

const ListUsuario  = (params) =>{

    function EliminarUsuario() {
        params.SetArrayUsuario(params.arrayUsuario.filter(item => item.id !== params.item.id));
    }
    function CambiarUsuario() {
        
    }

  return (
  
    <>


    
        <View style= {styles.container}>
            <View style={{flex:5}}>
                <Text style = {styles.datos}> {params.item.Nombre}</Text>
                <Text style = {styles.datos}> {params.item.Edad}</Text>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})

export default ListUsuario;