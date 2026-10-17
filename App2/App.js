import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, requireNativeComponent} from 'react-native';
import {Perfil} from './Componentes/Perfil';
export default function App() { 
  return (
    <View style={styles.container}>
      <Perfil nombre ="lulu" carrera="TID" materia="DAM" cuatri="4to"></Perfil>
      <Perfil nombre ="obed" carrera="TID" materia="DAM" cuatri="4to"></Perfil>
      <Perfil nombre ="juan" carrera="TID" materia="DAM" cuatri="4to"></Perfil>

      <StatusBar style="auto"></StatusBar>
    </View>

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
