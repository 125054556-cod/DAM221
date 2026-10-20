import {Text, View,Button,StyleSheet} from "react-native";
import {useState} from "react";
export const Perfil = ({nombre, carrera, materia, cuatri, style}) => {
    const [mostrar,setMostrar] = useState(false);
    return(
        <View style = {[estilos.tarjetas, style]}>
            <Text style = {estilos.nombre} >{nombre}</Text>
            {mostrar && 
            <>
            <Text style = {estilos.carrera}>{carrera}</Text>
            <Text style = {estilos.otrotexto}>{materia}</Text>
            <Text style = {estilos.otrotexto}>{cuatri}</Text>
            </>
            
            }
            <Button title="mostrar datos" onPress={()=>setMostrar(!mostrar)}></Button>
        </View>
    );
};
const estilos = StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:500,
        textTransform:'uppercase'
    },
    carrera:{
        fontSize:20,
        color: 'red',
        fontFamily: 'Roboto',
    },
    otrotexto:{
        fontSize:18,
        color: 'green',
        fontFamily: 'Courier',
        fontStyle:'italic'
    },
    tarjetas:{
        borderWidth: 3,
        borderRadius: 10,
        padding: 15 ,
        margin: 10 ,
    },


});