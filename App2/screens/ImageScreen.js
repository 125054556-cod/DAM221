import { StyleSheet, View,Text} from 'react-native';


export default function ImageScreen() { 
  return (
    <View style={styles.container}>
        <Text>PARCTICA 10</Text>
        <Text>DIEGO Y SAUL</Text>

    </View>
  );
}


//poner color a cada tarjeta
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
