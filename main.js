const form = document.getElementById('form-contato')
const nome = document.getElementById('nome')
const tele = document.getElementById('tele')
const email = document.getElementById('email')
const Nomes = [];
const numeros = [];
const emails = [];

let linhas = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {

    if(Nomes.includes(nome.value) || numeros.includes(tele.value) || emails.includes(email.value)) {
        alert(`Algum desses dados já foram cadastrados!`)
    }else {
        Nomes.push(nome.value);
        numeros.push(parseFloat(tele.value));
        emails.push(email.value);
    
        let linha = '<tr>';
        linha += `<td>${nome.value}</td>`;
        linha += `<td>${tele.value}</td>`;
        linha += `<td>${email.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    nome.value = '';
    tele.value = '';
    email.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}