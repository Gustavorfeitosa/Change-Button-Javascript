var botao = document.getElementById("botao")
var telaPreta = false

function trocarCor(){
    if(telaPreta == false){
        telaPreta = true
        document.body.style.background = "white"
    }else{
        telaPreta = false
        document.body.style.background = "Black"
    }
}
