import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from "react";
import ListUsuario from './src/Componentes/Usuario/ListUsuarios';
 



export default function App() {
  let arrayUsuarios= [{Nombre: "Jorge", Edad: 23, id: 0}]
  const [Nombre,SetNombre] = useState("");
  const [Edad,SetEdad] = useState(0);
  let IdUsuario = 1;
  function CrearUsuario(){

    let Usuario= {

      Nombre: Nombre,
      Edad: Edad,
      id: IdUsuario
    }

    arrayUsuarios.push(Usuario);
    console.log(arrayUsuarios)
    IdUsuario++;
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

      <SafeAreaView>
        <FlatList 
          data = {arrayUsuarios}
          keyExtractor= {(item) => item.id}
          renderItem = { ({item, index}) => <ListUsuario item = {item}/> }
        
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
