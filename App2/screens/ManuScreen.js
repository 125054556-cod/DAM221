import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import TarjetaScreen from './TarjetaScreen';
import SafeScreen from './SafeScreen';
import InputScreen from './InputScreen';
import ListScreen from './ListScreen';
import ImageScreen from './ImageScreen';
import PressableScreen from './PresableScreen';
import ModalScreen from './ModalScreeb';
import IndicatorScreen from './IndicatorScreen';
import ActivityScreen from './ActivityScreen';

export default function ManuScreen() { 
    const [screen, setScreen] = useState('menu');

    switch(screen) {
        case 'tarjetas':
            return <TarjetaScreen />;
        case 'safe':
            return <SafeScreen />;
        case 'input':
            return <InputScreen />;
        case 'list':
            return <ListScreen />;
        case 'image':
            return <ImageScreen />;
        case 'pressable':
            return <PressableScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'indicator':
            return <IndicatorScreen />;
        case 'activity':
            return <ActivityScreen />;
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                    <Text>Menu de practica</Text>
                    <Button title="Pract:Tarjetas" onPress={() => setScreen('tarjetas')} />
                    <Button title="Pract:SafeAreaView" onPress={() => setScreen('safe')} />
                    <Button title="Pract:Pressable" onPress={() => setScreen('pressable')} />
                    <Button title="Pract:input" onPress={() => setScreen('input')} />
                    <Button title="Pract:list" onPress={() => setScreen('list')} />
                    <Button title="Pract:image" onPress={() => setScreen('image')} />
                    <Button title="Pract:Modal" onPress={() => setScreen('modal')} />
                    <Button title="Pract:Indicator" onPress={() => setScreen('indicator')} />
                    <Button title="Pract:Activity" onPress={() => setScreen('activity')} />
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
});