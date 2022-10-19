import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native';
import React, { useState } from "react";
import ListUsuario from '../Usuario/ListUsuarios'

export default function Listadousuarios(params) {

    return(

        <SafeAreaView>
            <FlatList 
            data = {params.arrayUsuario}
            extraData= {params.arrayUsuario}
            keyExtractor= {(item) => item.id}
            renderItem = { ({item, index}) => <ListUsuario arrayUsuario={params.arrayUsuario} SetArrayUsuario={params.SetArrayUsuario} item = {item}/> }
            ItemSeparatorComponent = {() => <View style= {{ marginVertical: 10, borderColor: '#00000020', borderWidth: 1, marginHorizontal: 10,}}/>}
            ListHeaderComponent = {()=><Text style = {{fontWeight: 'bold', marginBottom: 10, marginHorizontal: 10, fontSize: 15}}>Usuarios</Text>}
            />
        </SafeAreaView>


    )
    
}