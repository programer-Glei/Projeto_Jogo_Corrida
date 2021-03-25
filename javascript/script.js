
var carroCorrida = [];
var game;
var soma = randomize(10,20);

function iniciar(){
    setCarro();
    console.log("cheguei")
}

function carro(nome, imagem, velocidade){
    this.nome = nome;
    this.imagem = imagem;
    this.velocidade = velocidade;
}

function setCarro(){
    for(i = 0; i < 4; i++){
        carroCorrida[i] = new carro("carro" + (i+1), "carro" + (i+1),randomize(10,20));
    }
}

function randomize(min, max){
    return min + Math.round(Math.random() * (max - min));
}

function moveImage(){
    soma1 = randomize(10,20);
    for(i=0; i<4; i++){
        var carro = document.querySelector("#carro" + (i + 1));
        carro.style.left = carroCorrida[i].velocidade + "px";
        if(parseInt(carro.style.left.substr(0, carro.style.left.indexOf("px"))) >= 660){
            fim(i);
        }
    }

    soma += soma1
}

function fim(vencedor){
    alert("acabou")
}
