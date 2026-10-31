import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView, TextInput, Button } from 'react-native';

export default function InputScreen() { 
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [comentario, setComentario] = useState('');

  const alertaSimple = () => {
    Alert.alert('Hola, esta es la alerta');
  }

  const alertaBotones = () => {
    Alert.alert('Confirmar', 'Deseas continuar?', [
      { text: 'cancelar' },
      { text: 'aceptar' }
    ]);
  };

  const mostrarNombre = () => {
    Alert.alert('Tu nombre', nombre === '' ? 'NO escribiste nada' : nombre);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>TextInput y Alert</Text>
      
      <Text style={styles.subtitulo}>1. Text Input Basico</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Escribe tu nombre' 
        value={nombre} 
        onChangeText={setNombre} 
      />
      <Text>Escribiste: {nombre}</Text>
      
      <Text style={styles.subtitulo}>2. Teclado Numerico</Text>
      <TextInput 
        style={styles.input} 
        placeholder='edad' 
        keyboardType='numeric' 
        maxLength={3} 
        value={edad}
        onChangeText={setEdad}
      />
      
      <Text style={styles.subtitulo}>3. Constraseña (secureTextEntry)</Text>
      <TextInput 
        style={styles.input} 
        placeholder='contraseña' 
        secureTextEntry={true} 
        value={password} 
        onChangeText={setPassword} 
      />
      
      <Text style={styles.subtitulo}>4. Varias lineas</Text>
      <TextInput 
        style={[styles.input, styles.grande]} 
        placeholder='comentario' 
        multiline={true} 
        numberOfLines={4} 
        value={comentario} 
        onChangeText={setComentario} 
      />
      
      <Text style={styles.subtitulo}>5. Alertas</Text>
      <View style={styles.boton}>
        <Text style={styles.subtitulo}>5.1 Alerta simple</Text>
        <Button title='Alerta simple' onPress={alertaSimple}></Button>
      </View>

      <View style={styles.boton}>
        <Text style={styles.subtitulo}>5.2 Alerta con botones</Text>
        <Button title='Alerta con botones' onPress={alertaBotones}></Button>
      </View>
      
      <View style={styles.boton}>
        <Text style={styles.subtitulo}>5.3 Alerta con nombre</Text>
        <Button title='Alerta con nombre' onPress={mostrarNombre}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingTop: 60, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitulo: { fontSize: 16, fontWeight: 'bold', marginTop: 16, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
  },
  grande: { height: 90, textAlignVertical: 'top' },
  boton: { marginBottom: 10 },
});