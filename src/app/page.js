'use client'
import React, { useState } from 'react';
import { calcular } from '@/module/generador';

const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [result, setResult] = useState('');

  const inputChange = (e) => {
    const input = e.target.value;

    setExpressions(input);
  };

  const addNum = (value) => {
    setExpressions((prevOutput) => prevOutput + value);
  }


  const analizador = () => {
    const inputWithOutComments = expressions.replace(/(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g, '')
    const inputLines = inputWithOutComments.split('\n'); // Dividir el input en líneas
    const validLines = inputLines.filter(line => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join('\n'); // Unir las líneas limpias nuevamente
    console.log(cleanInput);
    console.log(inputWithOutComments);
    if(/^[a-zA-Z0-9+\-*/().= \n\r]+$/.test(cleanInput)){
      const calculatedResult = calcular(cleanInput);
      console.log(calculatedResult);
      setResult(calculatedResult.toString());
    }else{
      setResult('Error de sintaxis')
    }
      
    
  };
  const clearArea= ()=>{
    setExpressions('');
    setResult('');
  };

  return (
    <main className='font-sans bg-sky-100 place-content-center'>

      <section className='text-blue-950 font-bold text-center m-4'>
        <h1 className='m-2 text-2xl'>Calculadora Gramática</h1>
        <p className='m-1 text-sm font-normal'>Ingresa una operación aritmética y observa el resultado</p>
      </section>

      <section className='relative bg-darkBlue h-44'>
        <textarea className='resize-none absolute w-full h-full text-lightYellow text-4xl text-right font-bold bg-darkBlue p-2 pr-5 bottom-0 right-0' placeholder='0' value={expressions}
          onChange={inputChange}></textarea>
      </section>
      
      <textarea className='resize-none w-full text-darkBlue text-xl text-center font-bold pt-3' value={`El resultado es: ${result}`} readOnly></textarea>
        
      <section>
        <div className='grid grid-cols-4 gap-5 mx-14 text-xl'>
        <button className='bg-darkYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={clearArea}>CA</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addNum('(')}>(</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addNum(')')}>)</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addNum('/')}>/</button>
            
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('7')}>7</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('8')}>8</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('9')}>9</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addNum('*')}>*</button>

            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('4')}>4</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('5')}>5</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('6')}>6</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addNum('-')}>-</button>

            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('1')}>1</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('2')}>2</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addNum('3')}>3</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addNum('+')}>+</button>

            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold col-span-2' onClick={() => addNum('0')}>0</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold'>.</button>
            <button className='bg-darkYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={analizador}>=</button>
        </div>
      </section>
    </main>
  );
};

export default Page;