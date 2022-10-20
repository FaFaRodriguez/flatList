
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from "react";
import Swal from 'sweetalert2'

export default function Inputs(params) {

  function EjecutarSwal() {

    Swal.fire({
      icon: 'error',
      title: 'Ingrese los datos que faltan',
      
    })
    
    
  }

    const [Nombre,SetNombre] = useState("");
    const [Edad,SetEdad] = useState(0);
    const [IdUsuario,SetIdUsuario] = useState(2);
    
    function CrearUsuario(){

      if (!Nombre||!Edad) {
        EjecutarSwal()
        
      }else{
      let Usuario= {
  
        Nombre: Nombre,
        Edad: Edad,
        id: IdUsuario
      }
      params.SetArrayUsuario([...params.arrayUsuario,Usuario])
      SetIdUsuario(IdUsuario+1)
      }
    }

    return(
    
        <SafeAreaView style= {styles.container}>
            <View style ={styles.inputContainer}>
                <TextInput
                style={styles.input}
                onChangeText={texto=> SetNombre(texto)}
                placeholder="Ingrese el nombre"
                />
                <TextInput
                style={styles.input}
                onChangeText={texto=> SetEdad(texto)}
                placeholder="Ingrese la edad"
                keyboardType="numeric"
                />

            </View>
            
            <Button
            title="Crear Usuario"
            onPress={() => CrearUsuario()}
            />
        </SafeAreaView>
      
    )



}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      backgroundColor: '#fff',
      marginVertical: 20
    },
    inputContainer: {
        marginVertical: 10

    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      
    }
  });
  