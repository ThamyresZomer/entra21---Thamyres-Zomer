import { Aluno } from "../Aluno";

const alunos = [
    { id: 1, nome: "Arthur", media: 9.5 },
    { id: 2, nome: "Joao", media: 8.0 },
    { id: 3, nome: "Josuè", media: 4.5 },
    { id: 4, nome: "Carlos", media: 5.5 },
    { id: 5, nome: "Jonas", media: 7.0 }
];

export function ListaAlunos() {
    return (
        <>
            {
                alunos.map(aluno => {
                    return (
                        <Aluno key={aluno.id} aluno={aluno.nome} media={aluno.media} />
                    );
                })
            }
        </>
    );
}