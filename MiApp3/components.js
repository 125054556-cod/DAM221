import React from 'react';
import { View, Text, ScrollView, TextInput, Pressable, SafeAreaView } from 'react-native';
import { colores as c } from './theme';

export const NavigationContext = React.createContext(null);

export function Pantalla({ titulo, admin, children }) {
  const onBack = React.useContext(NavigationContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.fondo }}>
      <View style={{ backgroundColor: admin ? c.azulHeader : c.gris, padding: 20, paddingTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, color: admin ? c.blanco : c.texto }}>{titulo}</Text>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Volver al menú principal"
            onPress={onBack}
            style={{ padding: 8 }}
          >
            <Text style={{ color: admin ? c.blanco : c.azul, fontWeight: 'bold' }}>Menú</Text>
          </Pressable>
        ) : null}
      </View>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>{children}</ScrollView>
    </SafeAreaView>
  );
}

export function Tarjeta({ children, oscura }) {
  return (
    <View style={{ backgroundColor: oscura ? '#6E6E6E' : c.blanco, borderRadius: 10, padding: 14, marginBottom: 14 }}>
      {children}
    </View>
  );
}

export function Fila({ children, centro }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: centro ? 'center' : 'space-between', gap: 10 }}>
      {children}
    </View>
  );
}

export function Boton({ texto, fondo = c.azul, color = c.blanco, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={{ backgroundColor: fondo, padding: 14, borderRadius: 8, alignItems: 'center', flex: 1, marginBottom: 10 }}
    >
      <Text style={{ color, fontWeight: 'bold' }}>{texto}</Text>
    </Pressable>
  );
}

export function BotonGris({ texto, color }) {
  return (
    <Pressable style={{ backgroundColor: c.gris, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 }}>
      <Text style={{ color, fontWeight: 'bold' }}>{texto}</Text>
    </Pressable>
  );
}

export function Campo({ label, grande }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={{ color: c.blanco, marginBottom: 6 }}>{label}</Text>
      <TextInput
        multiline={grande}
        style={{ borderWidth: 1, borderColor: c.blanco, borderRadius: 6, padding: 10, color: c.blanco, height: grande ? 110 : 42 }}
      />
    </View>
  );
}

export function Avatar({ tam = 44 }) {
  return <View style={{ width: tam, height: tam, borderRadius: tam / 2, backgroundColor: '#B8B8B8', marginRight: 10 }} />;
}

export function Dato({ nombre, valor, color = c.azul }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 }}>
      <Text style={{ color: c.suave }}>{nombre}</Text>
      <Text style={{ color, fontWeight: 'bold' }}>{valor}</Text>
    </View>
  );
}

export function Numero({ titulo, valor, fondo, color }) {
  return (
    <View style={{ width: '48%', backgroundColor: fondo, borderLeftWidth: 4, borderLeftColor: color, borderRadius: 10, padding: 12, marginBottom: 12 }}>
      <Text style={{ color: c.suave, fontSize: 12 }}>{titulo}</Text>
      <Text style={{ color, fontSize: 26, fontWeight: 'bold' }}>{valor}</Text>
    </View>
  );
}

export function Barra({ nombre, valor, porcentaje, color }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Fila><Text style={{ color: c.texto }}>{nombre}</Text><Text style={{ color, fontWeight: 'bold' }}>{valor}</Text></Fila>
      <View style={{ height: 5, backgroundColor: '#E6E6E6', borderRadius: 3, marginTop: 4 }}>
        <View style={{ height: 5, width: `${porcentaje}%`, backgroundColor: color, borderRadius: 3 }} />
      </View>
    </View>
  );
}

export function Pestanas({ items }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
      {items.map(([texto, color], i) => (
        <View key={i} style={{ backgroundColor: c.gris, padding: 8, borderRadius: 8, borderWidth: i === 0 ? 2 : 0, borderColor: c.azul }}>
          <Text style={{ color, fontWeight: 'bold' }}>{texto}</Text>
        </View>
      ))}
    </View>
  );
}
