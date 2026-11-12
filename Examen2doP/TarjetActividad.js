import { StyleSheet, View,Text, ScrollView, SafeAreaView, Prerssable} from "react-native";

export default function TarjetaActividad(){
    const MisActividades = [
        'Estudiar ReactNaive',
        'Realizar practica JavaScript',
        'Entregr proyecto escolar '
    ];

    <SafeAreaView style={style.contaienr}>
        <Text style= {StyleSheet.titulo}>MisActividades</Text>
    </SafeAreaView>

</Pressable>

<View style = {styles. separador}>
<Text style = {styles.titulo}>Switch</Text>
<Text>

Estado: {activado ? 'Activado' : 'Desactivado'}
</Text>

<Switch value = {activado}
onValueChange = {setActivado}
disabled = {false}
trackColor = {{false: '#767577', true: '#81b0ff'}}
thumbColor = {activado ? '#f5dd4b' : '#f4f3f4'}>

</Switch>
}