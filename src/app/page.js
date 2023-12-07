'use client'
import React, { useState } from 'react';
import { calcular } from '@/module/generador';

const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [result, setResult] = useState('');

  const inputChange = (e) => {
    const input= (e.target.value);

  if(/^[0-9+\-*/(). \n\r]+$/.test(input)){
    setExpressions(input);
  }else{
    setResult('Error de sintaxis')
  }
  };

  const analizador = () => {
      const calculatedResult = calcular(expressions);
      setResult(calculatedResult.toString());
    
  };
  const clearArea= ()=>{
    setExpressions('');
    setResult('');
  };

  return (
    <main className='h-screen w-screen font-sans bg-sky-100 place-content-center'>
      <section className='text-blue-950 font-bold text-center m-4'>
        <h1 className='text-3xl'>Analizador Sintáctico</h1>
        <h1 className='m-2 text-2xl'>Calculadora con ANTLR4</h1>
        <h1 className='m-3 text-2xl'>Ilse Machado</h1>
        <p className='bg-sky-300'>
          Instrucciones de uso: Ingresa cualquier expresión aritmética dentro del cuadro de texto.
          Solo reconoce números. Puedes calcular múltiples expresiones.
        </p>
        <p className='bg-sky-200'>¡Haz tu primer cálculo!</p>
      </section>
      <section className='flex justify-center items-center'>
        <textarea
          className='  border-dashed border-2 border-sky-700 w-full mt-4 ml-4 mr-4 pt-3 pr-3 pl-3'
          value={expressions}
          onChange={inputChange}
          placeholder='Ingresa tus expresiones matemáticas separadas por un Enter'
        />
      </section>
      <section className='flex justify-center items-center'>
        <h2 className='text-blue-950 font-bold mt-4'>Resultados</h2>
      </section>
      <section className='flex justify-center items-center m-3 rounded-md'>
        <textarea className=' border-dashed border-2 border-sky-700 w-full mt-4 ml-4 mr-4 pt-3 pr-3 pl-3 ' value={result} readOnly />
      </section>

      <section className='flex justify-center items-center'>
        <button
          className='bg-sky-900 rounded-md p-3 shadow-lg hover:bg-sky-300 text-white m-3'
          onClick={analizador}
        >
          Calcular
        </button>
        <button  className='bg-sky-900 rounded-md p-3 shadow-lg hover:bg-sky-300 text-white m-3'
          onClick={clearArea}> 
          Limpiar
        </button>
      </section>
    </main>
  );
};

export default Page;