
const Evento = () =>{

function handleClick(e) {
    console.log("Estou sendo clicado!", e.target)
}

    return(
        <>
            <button 
                onClick={handleClick}
            >ClickMe</button>
        </>
    )
}

export default Evento