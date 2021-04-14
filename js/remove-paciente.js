var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);


var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	
	var alvoEvento = event.target;
/*Versão opcional sem var >>
var paiDoAlvo = alvoEvento.parentNode; // TR = Paciente = remover
		paiDoAlvo.remove();*/
	 event.target.parentNode.classList.add("fadeOut");
 	 	
 	 setTimeout(function(){
 	 	event.target.parentNode.remove();
 	 }, 400); 

});
