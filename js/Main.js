
var ArregloImg = new Array();




function Bomba(){
	var i ;
	var Nose;
	for (var i =0 ; i < 16; i++) {
		
		ArregloImg[i] = "img/Nada.png";
	}
	/*Chale se repiten*/
	for (var i = 0; i <1; i++) {
		/*Math.floor int*/
		do{
		Nose = Math.floor(Math.random()*16);
		 }while (ArregloImg[ Nose] != "img/Nada.png"){
			ArregloImg[ Nose ]="img/Bomba.gif";
		}
		
	}
}



function Reiniciar(){

	var i;
	for (var i = 0; i<16; i++) {
		document.getElementById(i).src="img/Boton.jpg"
	}
}



function imagen_click( imagen ){
	imagen.src= ArregloImg[imagen.id];
	 if (ArregloImg [imagen.id]=="img/Bomba.gif") {
	 	alert("Juego terminado");
	 	Bomba();
	 	setTimeout(Reiniciar,3000);
	 	 
	 }
}