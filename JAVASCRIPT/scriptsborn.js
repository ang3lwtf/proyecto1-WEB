//Obtener el boton por su ID que le puse
const canciones = [
    "Born to Die",
    "Off to the Races",
    "Blue Jeans",
    "Video Games",
    "Diet Mountain Dew",
    "National Anthem",
    "Dark Paradise",
    "Radio",
    "Carmen",
    "Million Dollar Man",
    "Summertime Sadness",
    "Ride",
    "Lucky Ones",
    "Cola",
    "This Is What Makes Us Girls"
  ];
  
  function mostrarCancionAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    const cancionAleatoria = canciones[indiceAleatorio];
    alert("Tu canción es: " + cancionAleatoria);
  }
  
  // Obtener el botón por su ID
  const boton = document.getElementById("botoncito");
  
  // Agregar un event listener al botón
  boton.addEventListener("click", mostrarCancionAleatoria);