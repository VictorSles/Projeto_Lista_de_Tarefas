let entrada1 = document.getElementById("texto1");
let botao = document.getElementById("botao");
let main = document.getElementById("areaLista");

function Enviar(){
    let entrada = entrada1.value
    if((entrada !== "") && (entrada !== null) && (entrada !== undefined)){
        let newitem = `<div class="item">
        <div class="item-icone">
            <span class="material-symbols-outlined">circle</span>
        </div>
        <div class="item-nome">
            ${entrada}
        </div>
        <div class="item-botao">
            <button class="delete"><span class="material-symbols-outlined" class="span1">delete_forever</span></button>
        </div>`;
        main.innerHTML+=newitem;
        entrada1.value = "";
        entrada1.focus();
    }
}