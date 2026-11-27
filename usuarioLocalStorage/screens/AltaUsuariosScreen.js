 import React, { useState } from 'react';
import {View,SafeAreaView,Text,TextInput,Pressable,StyleSheet,} from 'react-native';
import { validarDatos } from '../services/usuariosService';
import { obtenerDatos } from '../storage/localStorage';
import { guardarDatos } from '../storage/localStorage';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const handleGuardar = async()=>{
    const validar = validarDatos(nombre,edad);
    if(!validar.valido){
      alert(validar.mensaje);
      return;
    }
    const listaUsuarios = (await obtenerDatos("usuarios")) || [];

    const nuevoUsuario ={
      id: Date.now().toString(),
      nombre: nombre,
      edad: edad

    };
    listaUsuarios.push(nuevoUsuario);

    await guardarDatos("usuarios", listaUsuarios);
    setNombre('');
    setEdad('');
  
};
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Registro de Usuarios
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable style={styles.boton} onPress={handleGuardar}>
          <Text style={styles.textoBoton}>
            Agregar Usuario
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5, 
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#29bb0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});