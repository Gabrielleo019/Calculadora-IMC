function calcula(){
    var massa = document.getElementById("massa").value
    var altura = document.getElementById("altura").value 
    var imc = massa / (altura*altura)
    document.getElementById("imc").value = imc.toFixed(2)
    status()
    imagem()
}

function status(){
    var imc = document.getElementById("imc").value 
    if(imc < 16){
        document.getElementById("status").value = "Magreza Grave"
    }
    else if(imc <= 16.9){
        document.getElementById("status").value = "Magreza Moderada"
    }
    else if(imc <= 18.5){
        document.getElementById("status").value = "Magreza Leve"
    }
    else if(imc <= 24.9){
        document.getElementById("status").value = "Peso Ideal"
    }
    else if(imc <= 29.9){
        document.getElementById("status").value = "Sobrepeso"
    }
    else if(imc <= 34.9){
        document.getElementById("status").value = "Obesidade grau I"
    }
    else if(imc <= 39.9){
        document.getElementById("status").value = "Obesidade grau II"
    }
    else{
        document.getElementById("status").value = "Obesidade grau III"
    }
}

function imagem(){
    var box = document.getElementById("imagem")
    var imc = document.getElementById("imc").value

    if(imc < 16){
        box.src = "magrezagrave.png"
    }
    else if(imc <= 16.9){
        box.src = "magrezamoderada.png"
    }
    else if(imc <= 18.5){
        box.src = "magrezaleve.png"
    }
    else if(imc <= 24.9){
        box.src = "pesoideal.png"
    }
    else if(imc <= 29.9){
        box.src = "sobrepeso.png"
    }
    else if(imc <= 34.9){
        box.src = "obesidade1.png"
    }
    else if(imc <= 39.9){
        box.src = "obesidade2.png"
    }
    else{
        box.src = "obesidade3.png"
    }
}

function limpar(){
    document.getElementById("massa").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("imc").value = ""
    document.getElementById("status").value = ""
    document.getElementById("imagem").src = ""
}
