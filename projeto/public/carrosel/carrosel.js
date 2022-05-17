var balls = document.querySelector('.balls');
var quant = document.querySelectorAll('.slides .image');
var atual = 0
var imagem = document.getElementById('atual');
var next = document.getElementById('next');
var voltar = document.getElementById('voltar');
var rolar = true


for(let i = 0; i < quant.clientHeight; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}

document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for(let i = 0; i < pos.length; i++){
    pos[i].addEventListener('click', function(){
        atual = pos[i].id
        rolar = false
        slide()
    })
}

voltar.addEventListener('click', () =>{
    atual--
    rolar = false
    slide()
})
next.addEventListener('click', () =>{
    atual++
    rolar = false
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('.imgAtual')
    imagem.style.marginLeft = -1200*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(() =>{
    if(rolar){
        atual++
        slide()
    }else{
        rolar = true
    }
}, 4000)