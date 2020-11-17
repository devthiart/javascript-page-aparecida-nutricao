var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    
    var peso = paciente.querySelector(".info-peso");

    peso = peso.textContent;

    var altura = paciente.querySelector(".info-altura");

    altura = altura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        peso.textContent = "Peso inválido!";
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        altura.textContent = "Altura inválida!";
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);

        var tdImc = paciente.querySelector(".info-imc");

        tdImc.textContent = imc.toFixed(2);
    }
}

function validaPeso(peso){
    if(peso > 0 && peso < 600){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 2.5){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc;
}