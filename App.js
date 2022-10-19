import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from "react";
import ListUsuario from './src/Componentes/Usuario/ListUsuarios';
import Inputs from './src/Componentes/Inputs/Inputs';
import Listadousuarios from './src/Componentes/ListadoUsuarios/ListadoUsuarios';

export default function App() {
  const [arrayUsuario,SetArrayUsuario] = useState([{Nombre: "Jorge", Edad: 23, id: 0}, {Nombre: "Maria", Edad: 19, id: 1}]);

 
  return (
    <>
        <Inputs arrayUsuario={arrayUsuario} SetArrayUsuario={SetArrayUsuario}/>
        <Listadousuarios arrayUsuario= {arrayUsuario} SetArrayUsuario= {SetArrayUsuario}/>  
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
