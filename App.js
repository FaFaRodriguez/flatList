import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from "react";
 



export default function App() {
  let arrayUsuarios= []
  const [Nombre,SetNombre] = useState("");
  const [Edad,SetEdad] = useState(0);

  function CrearUsuario(){

    let Usuario= {

      Nombre: Nombre,
      Edad: Edad,
    }

    arrayUsuarios.push(Usuario);
    console.log(arrayUsuarios)

  }
  
 
  return (
    <>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={texto=> SetNombre(texto)}
        />
        <TextInput
          style={styles.input}
          onChangeText={texto=> SetEdad(texto)}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />

        <Button
          title="Press me"
          onPress={() => CrearUsuario()}
        />
      </SafeAreaView>

    </>
    




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
