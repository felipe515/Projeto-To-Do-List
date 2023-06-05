const button = document.querySelector('.adicionar-tarefa')
const input = document.querySelector('.input-tarefa')
const listaCompleta = document.querySelector('.lista-tarefas')


let minhaLista = []

function adicionarTarefa() {
    minhaLista.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefa();
}

function mostrarTarefa() {
    let novaLi = ''

    minhaLista.forEach((item, index) => {

        novaLi = novaLi + `
        <li class="tarefas ${item.concluida && "concluida"}">
                <img src="img/checked.png" alt="check-tarefa" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="tarefa-lixeira" onclick="deletetarTarefa(${index})">
            </li>
        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaLista))
}


function deletetarTarefa(index){
    minhaLista.splice(index, 1)

    mostrarTarefa();
}


function concluirTarefa(index){
    minhaLista[index].concluida = !minhaLista[index].concluida;

    mostrarTarefa();
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
        minhaLista = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefa();
}

recarregarTarefas();
button.addEventListener('click', adicionarTarefa)