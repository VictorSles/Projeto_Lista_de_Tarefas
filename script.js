//Aqui eu crio meu contador

let cont = 0;

//

let entrada1 = document.getElementById("texto1");
let botao = document.getElementById("botao");
let main = document.getElementById("areaLista");

function Enviar() {
    // Aqui eu executo meu contador, junto a funcao do botao.

    cont++

    //
    let entrada = entrada1.value
    if ((entrada !== "") && (entrada !== null) && (entrada !== undefined)) {
        let newitem = `<div class="item" id ="${cont}">
        <div class="item-icone" onclick="Marcar(${cont})">
            <span id="icone_${cont}" class="material-symbols-outlined">circle</span>
        </div>
        <div class="item-nome" onclick="Marcar(${cont})">
            ${entrada}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${cont})"><span class="material-symbols-outlined" class="span1">delete_forever</span></button>
        </div>`;
        main.innerHTML += newitem;
        entrada1.value = "";
        entrada1.focus();
    }
}
function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}
function Marcar(id){
    let item = document.getElementById(id);
    let classes = item.getAttribute("class");
    if(classes == "item"){
        item.classList.add("clicado");
        let icone = document.getElementById(`icone_`+id);
        icone.classList.remove("material-symbols-outlined");
        icone.classList.add("material-symbols-outlined")
    }
}
entrada1.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        botao.click()
    }
})
