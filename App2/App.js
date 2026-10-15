import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, requireNativeComponent} from 'react-native';
import {Perfil} from './Componentes/Perfil';
import {Saludo} from './Componentes/Saludo';


import { Saludo2 } from './Componentes/Saludo2';

export default function App() { 
  return (
    <View style={styles.container}>
      <Text>hola mundo</Text>
      <Image source={require("./assets/wave.png")}></Image>
      <Text>--------------------------</Text>
      <Saludo></Saludo>
      <Text>--------------------------</Text>
      <Saludo2></Saludo2>
      <Text>--------------------------</Text>
      <Perfil></Perfil>
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
