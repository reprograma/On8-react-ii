import { useState } from 'react' 

function Nomes() {
  const [ textos, setTextos] = useState([
    {id:1, nome:"Ana"},
    {id:2, nome:"Bia"},
    {id:3, nome:"Adri"} 
  ])

  function handleTextos(){
    setTextos([...textos,{id:4, nome:"Simarinha da Bahia"}])
  }

  return (
    <div>     
      {textos.map(texto => 
        <li key={texto.id}>{texto.nome}</li>
      )}
      <button onClick={handleTextos}>Click</button>         
    </div>
  )
}

export default Nomes;
