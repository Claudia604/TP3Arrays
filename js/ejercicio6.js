/* Solicitar por pantalla al usuario ingresar el valor de los lados 
de un rectángulo, luego crear una función para calcular su perímetro 
y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58 */

function sumaPerimetro() {
  try {
    const ladoA = parseFloat(prompt("Ingrese el valor del lado a:"));
    const ladoB = parseFloat(prompt("Ingrese el valor del lado b:"));

    const perimetro = 2 * (ladoA + ladoB);

    document.write(`El perímetro del rectángulo es: ${perimetro}`);
  } catch (error) {
    document.write("Ingrese valores numéricos válidos para los lados.");
  }
}

sumaPerimetro();
