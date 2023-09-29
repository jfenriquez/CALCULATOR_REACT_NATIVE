import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Boton from '../components/Boton';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreeen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    ArmarNum,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calculadoraContainer}>
      {/* Resultado */}
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      {/* Botones */}
      <View style={styles.fila}>
        <Boton texto="C" color="#9B9B9B" accion={limpiar} />
        <Boton texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <Boton texto="del" color="#9B9B9B" accion={btnDelete} />
        <Boton texto="/" color="#FF9427" accion={btnDividir} />
        {/* FF9427 */}
      </View>

      <View style={styles.fila}>
        <Boton texto="7" accion={ArmarNum} />
        <Boton texto="8" accion={ArmarNum} />
        <Boton texto="9" accion={ArmarNum} />
        <Boton texto="x" color="#FF9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <Boton texto="4" accion={ArmarNum} />
        <Boton texto="5" accion={ArmarNum} />
        <Boton texto="6" accion={ArmarNum} />
        <Boton texto="-" color="#FF9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <Boton texto="1" accion={ArmarNum} />
        <Boton texto="2" accion={ArmarNum} />
        <Boton texto="3" accion={ArmarNum} />
        <Boton texto="+" color="#FF9427" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        <Boton texto="0" accion={ArmarNum} ancho={true} />
        <Boton texto="." accion={ArmarNum} />
        <Boton texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreeen;
