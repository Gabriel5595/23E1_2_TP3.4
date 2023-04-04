const estadosUF = [];
const cidadesDoUF = [];
const selectUF = document.getElementById("selectUF");
const selectCid = document.getElementById("selectCid");


async function obterEstado() {
    console.log("Função 'obterEstado' iniciada")
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    const resposta = await fetch(url);
    const estados = await resposta.json();
    estados.forEach(item => estadosUF.push(item.sigla));
    console.log(estadosUF);
    mostraListaUF();
}

async function obterCidade() {
    console.log("Função 'obterCidade' iniciada");
    let estadoSelecionado = selectUF.value;
    console.log(`O estado selecionado foi ${estadoSelecionado}`);
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/distritos`;
    const resposta = await fetch(url);
    const cidades = await resposta.json();
    cidades.forEach(item => cidadesDoUF.push(item.nome));
    console.log(cidadesDoUF.sort());
    mostraListaCid();
}

function mostraListaUF() {
    estadosUF.sort()
    for(i=0; i<estadosUF.length; i++){
        console.log("for iniciado");
        selectUF.innerHTML += `<option value='${estadosUF[i]}'>${estadosUF[i]}</option>`;
    }
}

function mostraListaCid() {
    cidadesDoUF.sort()
    for(i=0; i<cidadesDoUF.length; i++){
        console.log("for iniciado");
        selectCid.innerHTML += `<option value='${cidadesDoUF[i]}'>${cidadesDoUF[i]}</option>`;
    }
}

obterEstado();