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
      setResult('Solo se aceptan números')
    }
  };

  const addToOutput = (value) => {
    setExpressions((prevOutput) => prevOutput + value);
  }

  const analizador = () => {
    
      console.log(expressions);
      const calculatedResult = calcular(expressions);
      setResult(calculatedResult.toString());
    
  };

  const clearArea= ()=>{
    setExpressions('');
    setResult('');
  };

  return (
    <main className='font-sans bg-sky-100 place-content-center'>
      <section className='relative bg-darkBlue h-44'>
        <textarea className='resize-none w-full text-light text-4xl text-right font-bold bg-darkBlue p-2 pr-5' value={result} readOnly></textarea>
        <textarea className='resize-none absolute w-full text-lightYellow text-4xl text-right font-bold bg-darkBlue p-2 pr-5 bottom-0 right-0' placeholder='0' value={expressions}
          onChange={inputChange}></textarea>
      </section>

      <section className='text-blue-950 font-bold text-center m-4'>
        <h1 className='m-3 text-2xl'>Calculadora Gramática</h1>
        <p className='m-2 text-sm font-normal'>Ingresa una operacion aritmetica y observa el resultado</p>
      </section>
      
      <section>
        <div className='grid grid-cols-4 gap-5 mx-14 m-5 text-xl'>
            <button className='bg-darkYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={clearArea}>CA</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addToOutput('(')}>(</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addToOutput(')')}>)</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addToOutput('/')}>/</button>
            
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('7')}>7</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('8')}>8</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('9')}>9</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addToOutput('*')}>*</button>

            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('4')}>4</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('5')}>5</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('6')}>6</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addToOutput('-')}>-</button>

            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('1')}>1</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('2')}>2</button>
            <button className='bg-darkBlue rounded-md h-14 shadow-md text-lightYellow font-extrabold' onClick={() => addToOutput('3')}>3</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={() => addToOutput('+')}>+</button>

            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold col-span-2' onClick={() => addToOutput('0')}>0</button>
            <button className='bg-lightYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold'>.</button>
            <button className='bg-darkYellow rounded-md h-14 shadow-md text-darkBlue font-extrabold' onClick={analizador}>=</button>
        </div>
      </section>
    </main>
  );
};

export default Page;