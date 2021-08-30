export function Notificacao(props) {
   
   const notificacoes = props.mensagens || [];
    return (
        <>
            {
               props.mensagens && props.mensagens.length > 0 &&
                <p>Você tem {props.mensagens.length} notificações</p>
            }
        </>
    );
}