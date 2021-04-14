
var titulo = document.querySelector(".titulo");
titulo.textContent = "* Aparecida Nutricionista *";

var tituloPacientes = document.querySelector(".tituloPacientes");
tituloPacientes.textContent = "Lista dos Meus Pacientes";

titulo.addEventListener("click", function mostraMensagem(){
	alert("Olá! Bem vindo ao site da Aparecida");

});
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
	
	var paciente = pacientes[i]; // pacientes[i] vai pegar do meu array de pacientes.

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	// Validações
	var pesoEhValido =  validaPeso(peso); //true ou false
	var alturaEhValida = validaAltura(altura); //true ou false

		// condicionais
	if (!pesoEhValido){
		pesoEhValido = false;
		tdPeso.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEhValida){
		console.log("Altura inválida");
		alturaEhValida = false;
		tdAltura.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}


	if (pesoEhValido && alturaEhValida){
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
		
	}else{
		tdImc.textContent = "Altura e/ou peso inválidos!";
	}

}


// validar dados

	function validaPeso(peso){
		if(peso >= 0 && peso < 1000){
			return true;
		}else{
			return false;
		}
	}

	function validaAltura(altura){
		if(altura >= 0 && altura <= 3.0){
			return true;
		}else{
			return false;
		}
	}

	//refatoração e aproveitamento de código

	function calculaImc(peso, altura){
		var imc= 0;

		imc = peso/(altura*altura);

		return imc.toFixed(2);
	}


