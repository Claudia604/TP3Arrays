/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en 
un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las 
siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, 
‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, 
Egipto’]

Output:
El arreglo de ciudades tiene 10 elementos
Elemento 1er posicion: Nueva York, Estados Unidos
Elemento 3er posicion: Tokio, Japón
Elemento ultima posicion: El Cairo, Egipto

Elemento ultima posicion: Paris

Arreglo de ciudades
Elemento: Nueva York, Estados Unidos
Elemento: Barcelona
Elemento: Barcelona, España
Elemento: Tokio, Japón
Elemento: Londres, Reino Unido
Elemento: Roma, Italia
Elemento: Pekin, China
Elemento: Rio de Janeiro, Brasil
Elemento: Ámsterdam, Países Bajos
Elemento: Sídney, Australia
Elemento: El Cairo, Egipto
Elemento: Paris */

const ciudades = [];

let seguir = true;

while (seguir) {
  const ciudad = prompt("Ingrese el nombre de una ciudad");
  if (ciudad === null) {
    seguir = false;
  } else {
    ciudades.push(ciudad);
  }
}

document.write(
  `<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`
);
document.write(`<p>Elemento 1er posicion: ${ciudades[0]}</p>`);
document.write(`<p>Elemento 3er posicion: ${ciudades[2]}</p>`);
document.write(
  `<p>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</p>`
);
document.write(`<p>Elemento 2da posicion: ${ciudades[1]}</p>`);

document.write("<h2>Arreglo de ciudades:</h2>");
document.write(`<ul>`);
for (let posicion = 0; posicion < ciudades.length; posicion++) {
  document.write(`<li>${ciudades[posicion]}</li>`);
}
document.write(`</ul>`);

ciudades.push("Paris");
document.write(
  `<p>Elemento ultima posicion: ${ciudades[ciudades.length - 1]}</p>`
);

ciudades[1] = "Barcelona";
document.write(`<p>Elemento 2da posicion: ${ciudades[1]}</p>`);

document.write("<h2>Arreglo de ciudades:</h2>");
document.write(`<ul>`);
for (let posicion = 0; posicion < ciudades.length; posicion++) {
  document.write(`<li>${ciudades[posicion]}</li>`);
}
document.write(`</ul>`);
