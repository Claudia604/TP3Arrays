/* Escriba un script que muestre la tabla de multiplicar de un 
número ingresado por pantalla, la creación de la tabla debe ser 
realizada con una función y mostrar solo los resultados del 1 al 10 
del número elegido por el usuario. */

const numero = prompt("Ingresa un número");
function tabla() {
  document.write("<ul>");

  for (i = 1; i <= 10; i++) {
    document.write("<li>");
    document.write(numero + "x " + i + "= " + numero * i);
    document.write("</li>");
  }

  document.write("</ul>");
}

tabla(numero);
