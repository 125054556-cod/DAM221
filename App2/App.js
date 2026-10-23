import { StyleSheet, View} from 'react-native';
import TarjetasScreen from './screens/TarjetaScreen';
import ManuScreen from './screens/ManuScreen';
export default function App() { 
  return (
    <View style={styles.container}>
      <ManuScreen></ManuScreen>
      
    </View>
  );
}


//poner color a cada tarjeta
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
