import { useState } from 'react'


const CountClick = ()=>{
    const [ counter, setCounter ] = useState(0)

    function handleCounter(){
        setCounter(counter+1)
    }

    return(
        <>
            <h1>{counter}</h1>
            <button 
                onClick={handleCounter}
            >Click para add</button>
        </>
    )

}

export default CountClick