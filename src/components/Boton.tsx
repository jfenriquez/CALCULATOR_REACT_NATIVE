import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numText: string) => void;
}

const Boton = ({texto, color = '#0f704b', ancho = false, accion}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: `${color}`,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={[
            styles.botonTexto,
            {color: color === '#9B9B9B' ? '#000000' : 'white'},
          ]}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Boton;
