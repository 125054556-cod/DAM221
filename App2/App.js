import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View , Image, requireNativeComponent} from 'react-native';

import { Saludo2 } from './Componentes/Saludo2';

import {Saludo} from './Componentes/Saludo';
export default function App() { 
  return (
    <View style={styles.container}>
      <Text></Text>
      <Image source={require("./assets/wave.png")}></Image>



      <Text>--------------------------</Text>
      <Saludo></Saludo>
      <Saludo2></Saludo2>
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
