let pessoas = []

count = 0

function criarPessoa(nome, sobrenome, peso, altura){
    pessoas.push({
        id: count,
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura

    })
};


function enviar(){
    let nome = document.getElementById('nome')
    let sobrenome = document.getElementById('sobrenome')
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    const tabela = document.getElementById('tabela')

    criarPessoa(nome.value, sobrenome.value, peso.value,altura.value)

    
    let tr = tabela.insertRow();

    let td_id = tr.insertCell();
    let td_nome = tr.insertCell();
    let td_sobrenome = tr.insertCell();
    let td_peso = tr.insertCell();
    let td_altura = tr.insertCell();
    
    td_id.innerText = count
    td_nome.innerText = nome.value
    td_sobrenome.innerText = sobrenome.value
    td_peso.innerText = peso.value
    td_altura.innerText = altura.value


    nome.value = ''
    sobrenome.value = ''
    peso.value = ''
    altura.value = ''

    count ++
    
    console.log(pessoas)
    
}
