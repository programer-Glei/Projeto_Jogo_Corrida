
var carroCorrida = [];
var game;
var soma = randomize(10,20);
var botao = document.querySelector("#botao");


var carro1 = [document.querySelector("#carro1"),document.querySelector("#carro2"),document.querySelector("#carro3"),document.querySelector("#carro4")];

carro1[0].style.left = '0px';
carro1[1].style.left = '0px';
carro1[2].style.left = '0px';

botao.addEventListener("click", () =>{
    setCarro();
    game = setInterval(moveImage, 100);
})


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
        carro1[i].style.left = (parseInt(carro1[i].style.left) + carroCorrida[i].velocidade) + 'px';
        /*if(parseInt(carro.style.left.substr(0, carro.style.left.indexOf("px"))) >= 660){
            fim(i);
        }*/
    }

    soma += soma1
}

function fim(vencedor){
    alert("acabou")
}
