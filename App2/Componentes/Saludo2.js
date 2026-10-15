import { Button } from "react-native";
import { Text,Image, View } from "react-native";

export const Saludo2 = () => {
    return (
       
        <View>
            <Text>hola desde saludo2</Text>
            <Image source={require("../assets/wave.png")}></Image>
            <Button title="presiona para saludar"></Button>
        </View>
    );
};