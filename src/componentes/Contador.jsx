import React, { useState } from 'react'

export const Contador = () => {

    const [count, setCount]=useState(0);

    function sumar() {
        setCount(count+1);
    }

    function resta() {
        setCount(count-1)
    }

    function reset() {
        setCount(count-count);
    }


  return (
    <>
    <div><h1>{count}</h1></div>
    <button onClick={sumar}>SUMAR</button>
    <button onClick={resta}>RESTA</button>
    <button onClick={reset}>RESET</button>
    </>
  )
}
