
var carroCorrida = [];
var game;
var soma = randomize(10,20);
var botao = document.querySelector("#botao");
var btn_comeca = document.querySelector("#btn-ini")
var modal = document.querySelector('.modal-overaly')
var carro_selecionado;


var carro1 = [document.querySelector("#carro1"),document.querySelector("#carro2"),document.querySelector("#carro3"),document.querySelector("#carro4")];

carro1[0].style.left = '0px';
carro1[1].style.left = '0px';
carro1[2].style.left = '0px';
carro1[3].style.left = '0px';

botao.addEventListener("click", () =>{
    setCarro();
    modal.classList.add('visivel')
    //game = setInterval(moveImage, 100);
})

btn_comeca.addEventListener("click", () =>{
    modal.classList.remove('visivel')
    carro_selecionado = document.querySelector('input[name="carro"]:checked').value;
    console.log(carro_selecionado)
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
    for(i=0; i<4; i++){
        carro1[i].style.left = (parseInt(carro1[i].style.left) + carroCorrida[i].velocidade) + 'px';
        console.log(parseInt(carro1[1].style.left))
        if( parseInt(carro1[i].style.left) >= 1380){
            var vencedor = i
            var nome = carroCorrida[i].nome
            fim(vencedor,nome);
        }
    }
}

function fim(vencedor,nome){
    clearInterval(game);
    if(vencedor == carro_selecionado){
        alert("O "+nome+" venceu, você acertou viséravi")
    }else{
        alert("O "+vencedor+" venceu, tenta outra vez otário")
    }
}
