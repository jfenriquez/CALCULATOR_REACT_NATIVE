import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const ArmarNum = (numText: string) => {
    if (numero.includes('.') && numText === '.') return;
    setNumero(numero + numText);

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numText === '.') {
        setNumero(numero + numText); //evaluar si es otro 0 y hay un punto
      } else if (numText === '0' && numero.includes('.')) {
        setNumero(numero + numText);
      } else if (numText !== '0' && !numero.includes('.')) {
        setNumero(numText);
      } else if (numText === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numText);
      }
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    if (numero.length === 1 || (numero.length === 2 && numero.includes('-'))) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumero(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }
    //setNumeroAnterior('0');
  };

  return {
    numeroAnterior,
    numero,
    setNumero,
    ultimaOperacion,
    limpiar,
    ArmarNum,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
  };
};
