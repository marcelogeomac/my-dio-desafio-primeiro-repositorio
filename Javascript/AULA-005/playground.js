//** Atividade Prática **/
const alunos = [{           // Array com objeto declarado
    nome: 'Marcelo',
    nota: 6,
    turma: 'A8',
},
{
    nome: 'Isadora',
    nota: 5,
    turma: 'C4'
},
{
    nome: 'Agnolio',
    nota: 3,
    turma: 'D10',
},
];

function analiseAprovados (alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        let {nota, nome} = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(analiseAprovados(alunos, 6));