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
  // Estados de la aplicación
  const [isSplash, setIsSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  // Requerimiento: Mostrar una pantalla de bienvenida durante 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 2000); // 2000 milisegundos = 2 segundos
    return () => clearTimeout(timer);
  }, []);

  // Función del botón Agregar Libro
  const agregarLibro = () => {
    // 1. Validar que todos los campos estén llenos
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

    // Mostrar el ActivityIndicator
    setIsSaving(true);

    // 2. Simular espera antes de guardar, 4 segundos
    setTimeout(() => {
      // 3. Agregar el libro a la lista
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo,
        autor: autor,
        genero: genero
      };
      setLibros([...libros, nuevoLibro]);

      // 4. Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');
      
      // Ocultar el ActivityIndicator
      setIsSaving(false);

      // 5. Notificar con un Alert
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000); // 4000 milisegundos = 4 segundos
  };

  // Renderizado del SplashScreen
  if (isSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Bienvenido a la App</Text>
        <Text style={styles.splashSubText}>Cargando...</Text>
      </View>
    );
  }

  // Renderizado de la Pantalla Principal
  return (
    // Requerimiento: Fondo con una imagen usando ImageBackground
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.headerTitle}>Catálogo de Libros</Text>

        {/* Formulario */}
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

        {/* Requerimiento: Botón Pressable */}
        <Pressable style={styles.button} onPress={agregarLibro}>
          <Text style={styles.buttonText}>Agregar Libro</Text>
        </Pressable>

        <Text style={styles.contadorText}>Total de libros: {libros.length}</Text>

        {/* Requerimiento: FlatList para visualizar la lista */}
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

        {/* Overlay con Activity Indicator que se muestra solo al guardar */}
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

// Estilos básicos
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
    paddingTop: 60, // Espacio para la barra de estado
    backgroundColor: 'rgba(0,0,0,0.2)', // Ligero oscurecimiento para que el texto resalte
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#f2f2f2', // Fondo gris muy claro como en la imagen
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: '#1c4c96', // Azul oscuro
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
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Blanco semi-transparente
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
    position: 'absolute', // Sobrepone el indicador a todo lo demás
    top: 0,
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