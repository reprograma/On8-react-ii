import { useState, useEffect } from 'react'
import filmes from '../Services/dados'


const ListaInterna = ()=>{
    const [busca, setBusca] = useState('') 
    const [filtroFilmes, setFiltroFilmes] = useState([])

    useEffect(()=>{
        setFiltroFilmes(
            filmes.filter(filme=>{
                return filme.nome.includes(busca)
            })
        )
    }        
    ,[busca])


    return(
        <div>
            <input 
                type="text" 
                placeholder="Digite um filme" 
                onChange={e=>{setBusca(e.target.value)}}
            />
            <ul>
               {filtroFilmes.map(filme=>{
                   return <li key={filme.id}>{filme.nome}</li>
               })} 
            </ul>
        </div>
    )
}

export default ListaInterna