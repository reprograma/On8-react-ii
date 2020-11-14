const Event = ()=>{
    function handleText(e){
        console.log(e.target.value)
    }

    return(
        <>
            <input 
                type="texto" 
                placeholder="Digite seu nome"
                onChange={handleText}
            />
        </>
    )
}

export default Event