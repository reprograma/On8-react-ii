import { useState } from 'react'

function Contador(){
    const [contador, setContador] = useState(0)

    function handleDecrement(){
        setContador(contador-1)
    }

    function handleIncrement(){
        setContador(contador+1)
    }
    

    return(
        <>
            <button onClick={handleDecrement}>-</button>
            <h1>{contador}</h1>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}

export default Contador 