var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
		event.preventDefault();

		var form = document.querySelector("#form-adiciona");

		// EXTRAINDO INFORMAÇÕES DO PACIENTE DO FORM
		var paciente = obtemPacienteDoFormulario(form);


		// CRIA A (tr) E A (td) DO PACIENTE

		

		var erros = validaPaciente(paciente);
		console.log(erros);
		if(erros.length > 0){
			exibeMensagensErro(erros);
			return;
		}
		
		// ADICIONANDO O PACIENTE NA TABELA
		adicionaPacienteNaTabela(paciente);
		
		form.reset();
		var mensagensDeErro = document.querySelector("#mensagens-erro");
		mensagensDeErro.innerHTML = "";
	
	});


function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);

}


function exibeMensagensErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML= "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);

	});
}

	function obtemPacienteDoFormulario(form){

		var paciente = {
			nome: form.nome.value,
			peso: form.peso.value,
			altura: form.altura.value,
			gordura: form.gordura.value,
			imc: calculaImc(form.peso.value, form.altura.value),
		}

		return paciente;
	}

	

	function montaTr(paciente){
		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");

		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
		pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
		pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
		pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
		pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

		return pacienteTr;
	}


	function montaTd(dado, classe){
		var td = document.createElement("td");
		td.textContent = dado;
		td.classList.add(classe);
		return td;
	}

	// VALIDA PACIENTE

	function validaPaciente(paciente){

		var erros = [];

		if(paciente.nome.length == 0){
			erros.push("Insira o nome do paciente!");
		}

		if(!validaPeso(paciente.peso)){
			erros.push("Peso é inválido!");
		}	

		if(!validaAltura(paciente.altura)){
			erros.push("Altura é inválida");
		}

		if(paciente.peso.length == 0){
			erros.push("Insira o peso do paciente!");
		}

		if(paciente.altura.length == 0){
			erros.push("insira a altura do paciente!");
		}

		if(paciente.gordura.length == 0){
			erros.push("Insira a porcentagem de gordura do paciente!");
		}

		return erros;
	}