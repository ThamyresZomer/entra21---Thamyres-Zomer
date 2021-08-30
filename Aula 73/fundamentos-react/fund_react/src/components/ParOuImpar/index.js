export function ParOuImpar (props) {
    return(
        <>
        {
            props.numero % 2 === 0? 
            <p>o numero {props.numero} é Par</p> :
            <p>o numero {props.numero} é Impar</p>
        }
        </>
    )
};