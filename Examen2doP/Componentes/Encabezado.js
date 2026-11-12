import { Text,View,StyleSheet } from 'react-native';
import { styles } from '../App';
import { Encabezado } from './Componentes/Encabezado';
    return (
        <View>
            <Text>!Hola estudiante¡</Text>
            <Text>Hoy es un buen dia para cumplir tus objetivos</Text>
        </View>

    );export default function App() {
  return (
    <View style={styles.container}>
      <Text>MI DIA UNIVERSITARIO</Text>
      <Encabezado></Encabezado>
    </View>);

  const TarjetaActividad = [
    'Estudiar ReactNative',
    'Realizar practica JavaScript',
    'Entregar proyecto escolar'
  ];

  const [mensaje, setMensaje] = useState('');

  return (
    <SafeAreaView style={styles.container}>
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

