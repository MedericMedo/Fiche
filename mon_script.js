function compteur (){
  var blablabla = document.getElementById("compteur-click");
  var nombre = parseInt(blablabla.innerHTML);
  blablabla.innerHTML = nombre + 1;
}

function afficherPhoto (obj){
  console.log("je comprend pas tout mais ce n'est pas grave");
  if (obj.className == "zoom-image") {
    obj.className = ""
  }
  else {
  obj.className = "zoom-image";
  }
}
