export function ManipulandoEventos() {
    function handleClick() {
        alert("Você clicou no botão");
    }
 
    function handleMouseOver() {
        console.log("você entrou no botão");
    }
 
    function handleMouseLeave() {
        console.log("você saiu do botão");
    }
 
    function handleSubmit(e) {
        e.preventDefault();
        alert("Formulário enviado!");
    }
 
    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">Enviar formulário</button>
            
            <button onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                Clique em mim!  
            </button>
            </form>
        </>
    );
}