import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import {Encabezado} from './Componentes/Encabezado';
// Si quieres usar TarjetaActividad como componente, asegúrate de importarlo bien
// import {TarjetaActividad} from './Componentes/TarjetActividad';

export default function App() {
  const MisActividades = [
    'Estudiar ReactNative',
    'Realizar practica JavaScript',
    'Entregar proyecto escolar'
  ];

  const [mensaje, setMensaje] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>MI DIA UNIVERSITARIO</Text>
      <Encabezado />
      <Text style={styles.titulo}>Mis Actividades</Text>
      <ScrollView>
        {MisActividades.map((actividad, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.textoActividad}>{actividad}</Text>
            <Pressable
              style={({ pressed }) => [
                styles.boton,
                pressed && styles.botonPresionado
              ]}
              onPress={() => setMensaje(`Ver actividad: ${actividad}`)}
            >
              <Text style={styles.textoBoton}>Ver actividad</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      {mensaje ? <Text style={styles.mensaje}>{mensaje}</Text> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
  },
  textoActividad: {
    fontSize: 18,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  botonPresionado: {
    backgroundColor: "#0056b3",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
  },
  mensaje: {
    marginTop: 15,
    fontSize: 16,
    color: "green",
    textAlign: "center",
  },
});
