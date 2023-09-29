import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 20,
    //backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultadoPequeño: {
    color: 'rgba(255,255,255,0.5))',
    fontSize: 60,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  boton: {
    height: 80,
    width: 80,
    //backgroundColor: '#a32525',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    //color: 'black',
    fontWeight: '300',
  },
});
