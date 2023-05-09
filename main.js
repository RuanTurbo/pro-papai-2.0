var motivos = [
	"Sempre me ajudou",
	"Sempre me apoiou",
	"Joga e se diverte comigo",
	"Sempre me defendi",
	"E acima de tudo smepre me amou",
	];
	
	
	
	var images = [
	  "",
	  "",
	  "",
	  ""
	];
	
	var i = 0;
	function proximoslide() {
	document.getElementById("textomotivos").innerHTML = motivos [i];
	document.getElementById("album").src = images [i];
	i++;
	document.getElementById("audio").play () ;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var i = 0;
	function proximoslide() {  
		document.getElementById("textomotivos").innerHTML = motivos[i];
		document.getElementById("album").src = images[i];
		i++;
		document.getElementById("audio").play();
	  
	}
	