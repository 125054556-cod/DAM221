import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{ title: "Inicio", href: null }}
            />
            <Tabs.Screen
                name="alta"
                options={{
                    title: "Formulario",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle" color={color} size={size} />
                    )
                }}
            />
            <Tabs.Screen
                name="consulta"
                options={{ title: "Listado" }}
            />
        </Tabs>
    );
}