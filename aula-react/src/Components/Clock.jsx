import { useState } from 'react'

function Clock(){
    let time = new Date().toLocaleTimeString()

    const [hora, atualizaHora] = useState(time)

    function upDateTime(){
        time = new Date().toLocaleTimeString()
        atualizaHora(time)
    }

    
    setInterval(upDateTime, 1000)


    return(
        <div>
            <h1>Meu relógio</h1>
            <h2>Horário brasileiro de verão: {hora}</h2>
        </div>
    )

}

export default Clock