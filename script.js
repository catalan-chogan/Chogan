/*document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('printButton').addEventListener('click', function() {
      var image = document.getElementById('imageToPrint').src;
      printImage(image);
  });
});

function printImage(url) {
  var win = window.open('', '_blank');
  win.document.write('<img src="' + url + '" onload="window.print();window.close()" style="display:none" />');
  win.document.close();
}*/






function printImage(imageUrl) { // Définition d'une fonction nommée printImage prenant l'URL de l'image à imprimer comme argument
  var win = window.open('', '_blank'); // Ouvre une nouvelle fenêtre vide 
  win.document.write('<img src="' + imageUrl + '" style="width:100%;">'); // Écrit une balise <img> dans la nouvelle fenêtre, avec l'URL de l'image spécifiée et une largeur de 100%
  win.document.close(); // Ferme l'écriture dans la nouvelle fenêtre
  win.print();// Déclenche le processus d'impression de la nouvelle fenêtre
  win.close();
  window.location.reload(); // Actualise la page après la fermeture de la fenêtre d'impression

}


var btnImprimer = document.getElementById("btnImprimer"); // Récupère le bouton d'impression par son ID

btnImprimer.addEventListener("click", function(){  // Ajoute un écouteur d'événements "click" sur le bouton d'impression
  var imageUrl = document.getElementById('imageAImprimer').src; // Récupère l'URL de l'image à imprimer à partir de son élément IMG dans le document
  printImage(imageUrl); // Appelle la fonction printImage avec l'URL de l'image comme argument
});