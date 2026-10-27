import { StyleSheet, View,Text, ScrollView,SafeAreaView, SafeAreaViewBase} from 'react-native';


export default function SafeScreen() { 
    const canciones = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7'
  ];
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.titulo}>MUSICA</Text>
        <View style = {styles.reproductor}>
          <Text style = {styles.texto}>Lista de musica</Text>
          <Text>la musica mas escuchada es:</Text>

        </View>
      <Text style = {styles.subtitulo}>CANCIONES DISPONIBLES</Text>
      <ScrollView style = {styles.lista}

      contentContainerStyle = {styles = {styles.contenidoLista}}

      showsHorizontalScrollIndicator = {true}
      
      >
        {canciones.map((item,index)=>
      <View style = {styles.tarjeta} key={index}>
        <Text style = {styles.textoLista}>{item}</Text>
      </View>)}
      </ScrollView>
  </SafeAreaView>
  );
}


//poner color a cada tarjeta
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ca1717',
    padding: 20,
  },
  titulo:{
    fontSize: 26,
    fontWeight:"bold",
    textAlign: "center",
    marginBottom: 20,
  },
  reproductor:{
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  texto:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom: 10,
  },
  subtitulo:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:10,
    marginBottom:10,
    textAlign:"center",
  },
  lista:{
    flex:1,

  },
  tarjeta:{
    backgroundColor:"white",
    padding:20,
    marginBottom:10,
    borderEndEndRadius:15,

  },
  textoLista:{
    fontSize:18,
    textAlign:"center",
  },
  contenidoLista:{
    padding:10,
  }


});
