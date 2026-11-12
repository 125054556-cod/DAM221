import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  Alert,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  
  const agregarLibro = () => {
  
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    
    setIsSaving(true);

    
    setTimeout(() => {
    
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };
      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');
      
      setIsSaving(false);

      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000); // 4000 milisegundos = 4 segundos
  };

  if (isSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
        <Text style={styles.splashSubText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable style={styles.button} onPress={agregarLibro}>
          <Text style={styles.buttonText}>Agregar Libro</Text>
        </Pressable>

        <Text style={styles.contadorText}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardText}>Autor: {item.autor}</Text>
              <Text style={styles.cardText}>Género: {item.genero}</Text>
            </View>
          )}
        />

        {isSaving && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Guardando...</Text>
            <Text style={styles.loadingSubText}>Guardando libro...</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  splashText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1c4c96'
  },
  splashSubText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10
  },
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
  overlay: {
    flex: 1,
    padding: 20,
    paddingTop: 60, 
    backgroundColor: 'rgba(0,0,0,0.2)', 
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#f2f2f2', 
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: '#1c4c96', 
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  contadorText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000'
  },
  cardText: {
    fontSize: 14,
    color: '#333'
  },
  loadingOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  loadingText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15
  },
  loadingSubText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5
  }
});