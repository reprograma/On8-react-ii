import { useState, useEffect } from 'react'


export default function Repositories(){

    const [repositories, setRepositories] = useState([])

   
    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/simaraconceicao/repos')
            const data = await response.json()

            setRepositories(data)
        }
        getData()        

    },[])

    return(
        <div>
            <h1>Portfólio retornado:{repositories.length} repos</h1>
            <ul>
                {repositories.map(repository=>{
                    return <li key={repository.id}>{repository.name}</li>
                })}
            </ul>
        </div>
    )

}