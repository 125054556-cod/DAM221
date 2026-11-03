import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const manejarRegistro = () => {
    if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
      Alert.alert("campos incompletos", "tienes que llenar todos los campos");
      return;
    }

    if (isNaN(semestre)) {
      Alert.alert("Error", "El semestre debe ser un numero");
      return;
    }
    Alert.alert(
      "Registro enviado",
      `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${taller ? 'Si' : 'No'}\nConstancia: ${constancia ? 'Si' : 'No'}\nDeportes: ${deportes ? 'Si' : 'No'}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de evento Universitario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric" 
      />

      <Text style={styles.subtitle}>Opciones</Text>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>va a asistir al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>nececita constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>participara en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>
      <TouchableOpacity style={styles.button} onPress={manejarRegistro}>
        <Text style={styles.buttonText}>Enviar regitro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#000',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});