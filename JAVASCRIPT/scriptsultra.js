//Obtener el boton por su ID que le puse
const canciones = [
  "Cruel World",
  "Ultraviolence",
  "Shades of Cool",
  "Brooklyn Baby",
  "West Coast",
  "Sad Girl",
  "Pretty When You Cry",
  "Money Power Glory",
  "Fucked My Way Up to the Top",
  "Old Money",
  "The Other Woman"
];

function mostrarCancionAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * canciones.length);
  const cancionAleatoria = canciones[indiceAleatorio];
  alert("Eres la canción: " + cancionAleatoria);
}

// Obtener el botón por su ID
const boton = document.getElementById("botoncito");

// Agregar un event listener al botón
boton.addEventListener("click", mostrarCancionAleatoria);