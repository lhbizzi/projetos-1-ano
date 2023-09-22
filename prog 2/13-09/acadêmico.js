    function principal() {
        let opcao
        let vetor = []
        let x = 2
        do {
            opcao = Number(prompt(`Informe uma opção:\n1-Cadastrar um curso:\n2-Cadastrar um aluno:\n3-Mostrar alunos de um curso:\n4-Mostrar cursos de exatas:\n5-Mostrar alunos de Franca:\n6-Encerrar programa:`))
            switch (opcao) {
                case 1: cadastraCurso(vetor, x)
                    break
                case 2: cadastraAluno(vetor, x)
                    break
                case 3: mostraAlunos(vetor, x)
                    break
                case 4: exatas(vetor, x)
                    break
                case 5: franca(vetor, x)
                    break
                case 6: alert(`Programa Finalizado!`)
                    break
                default: console.log(`Opção Inválida!`)
            }
        }
        while (opcao != 6)
    }
    function cadastraCurso(vetor) {
        let curso = {
            id: Number(prompt(`Informe o ID do curso: `)),
            nome: prompt(`Informe o nome do curso: `).toLowerCase(),
            area: prompt(`Informe a área do curso: `).toLowerCase()
        }
        let achou = false
        for (let i=0; i<vetor.length; i++) {
            if (vetor[i].id == curso.id) {
                achou = true
                break
            }
        }
        if (!achou) {
            alert(`Curso Inserido com Sucesso!`)
            vetor.push(curso)
        }
        else {
            alert(`Id já existente, curso não cadastrado!`)
        }
    }
    function cadastraAluno(vetor, x){
        let aluno = {
            idaluno: Number(prompt(`Informe o id do aluno: `)),
            nome: prompt(`Informe o nome do aluno: `).toLowerCase(),
            cpf: Number(prompt(`Informe o CPF do aluno: `)),
            cidade: prompt(`Informe cidade do aluno: `).toLowerCase(),
            curso: Number(prompt(`Informe o id do curso do aluno: `))
        }
        //confere se não há alunos com mesmo ID
        let achou = false
        for (let i=0; i<vetor.length; i++) {
            if (vetor[i].idaluno == aluno.idaluno) {
                achou = true
                break
            }
        }
        if (!achou) {
            alert(`Aluno cadastrado com sucesso!`)
            vetor.push(aluno)
            //confere se o ID do curso existe para cadastrar
            let achou_ = false
            for(let j=0; j<vetor.length; j++){
                if(vetor[j].id == aluno.curso){
                    achou = true
                    break
                }
            }
            if(achou){
                alert(`Aluno inserido no curso!`)
                vetor.push(aluno)
            }
            else{
                alert(`Id de curso inexistente!`)
            }
        }
        else {
            alert(`Id já existente, aluno não cadastrado!`)
        }
    }
    function mostraAlunos(vetor, x){
        let totalAlunos = {
            idcurso: Number(prompt(`Informe o id do curso que deseja ver os alunos: `))
        }
        
    }
    principal()