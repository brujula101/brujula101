// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
	
}

function w3_close_i_mes() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
	document.getElementById('future-clicked').innerHTML = 'Future World';
	
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
function w3_imatge_maternitat() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
	document.getElementById('Image_main').src='src/maternitat.png'
	document.getElementById('Titol').innerHTML = 'Separacions, divorcis, guàrdia i custòdia';
	document.getElementById('Text1').innerHTML = 'Punts d’Informació i Atenció a les Dones (PIAD) (titularitat pública) Informació i atenció en tots aquells temes que interessen i preocupen a les dones. Assessorament jurídic i psicològic gratuïts. Accés a diferents recursos de la ciutat (laborals,associatius, culturals, educatius...). Tallers i activitats per a la millora de l’autonomia i l’autoestima';
	
	
}

function w3_imatge_realcions_igualitaries() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
	document.getElementById('Titol').innerHTML = 'Relacions igualitàries';
	document.getElementById('Image_main').src='src/relacions_igualitaries.png'
	document.getElementById('Text1').innerHTML = 'Servei d’Atenció a Homes per a la promoció de relacions no violentes (SAH) (titularitat pública) Informació, assessorament i atenció a homes que vulguin viure les seves relacions afectives d’una manera positiva, saludable i lliure de violència. Ofereix atenció terapèutica personalitzada que inclou acollida, tractament individual i/o grupal i seguiment.';
	
	
}