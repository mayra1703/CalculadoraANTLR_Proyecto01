'use client'
import React, { useState } from 'react';
import { calcular } from '@/module/generador';

const Page = () => {
  const [expresion, setExpression] = useState('');
  const [result, setResult] = useState('');

  const cambiarExpresion = (e) => {
    const input= (e.target.value);
    setExpression(input);
    
  };

  const addNum = (value) => {
    setExpression((prevOutput) => prevOutput + value);
  }

  const analizar = () => {
      const calculatedResult = calcular(expresion);
      setResult(calculatedResult.toString());
  };

  const clearArea= ()=>{
    setExpression('');
    setResult('');
  };

  return (
    <main className='font-sans bg-sky-100 place-content-center'>

      <section className='text-blue-950 font-bold text-center m-4'>
        <h1 className='m-3 text-2xl'>Calculadora Gramática</h1>
        <p className='m-2 text-sm font-normal'>Ingresa una operación aritmética y observa el resultado</p>
      </section>

      <section className='relative bg-darkBlue h-44'>
        <textarea className='resize-none absolute w-full h-full text-lightYellow text-4xl text-right font-bold bg-darkBlue p-2 pr-5 bottom-0 right-0' placeholder='0' value={expresion}
          onChange={cambiarExpresion}></textarea>
      </section>
      
      <textarea className='resize-none w-full text-darkBlue text-xl text-center font-bold p-2 pr-5' value={`El resultado es: ${result}`} readOnly></textarea>
        
      <section>
        <div className='grid grid-cols-4 gap-5 mx-14 m-5 text-xl'>
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
            <button className='bg-darkYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={analizar}>=</button>
        </div>
      </section>
    </main>
  );
};

export default Page;