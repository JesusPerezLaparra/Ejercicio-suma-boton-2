/*alert("Hola, " + nombre + "!");
let color = prompt("Escribe tu color favorito");

const elemento = document.getElementById("titulo");

elemento.style.background = color;
elemento.innerText = "Hola, " + nombre + "!";*/

const boton = document.getElementById("boton");
const boton2 = document.getElementById("boton2");

let suma = 0;

function Agregar() {
  const inputValue = document.getElementById("Numero").value;

  const listaUl = document.getElementById("lista");
  const elementoLista = document.createElement("li");
  elementoLista.innerText = "El numero es: " + inputValue;
  listaUl.appendChild(elementoLista);

  suma += Number(inputValue);
}

function Resultado() {
  const elemento = document.getElementById("titulo");
  elemento.innerText = "La suma de los valores es: " + suma;
}

boton.addEventListener("click", Agregar);
boton2.addEventListener("click", Resultado);
/* 
const elemento = document.getElementById("titulo"); //
elemento.innerHTML = "La suma de los valores es <span>" + suma + "</span>"; //

const elemento = document.getElementById("titulo"); //
elemento.innerHTML = "La suma de los valores es <span>" + suma + "</span>"; //

boton.addEventListener("click", Presionaboton); //
 */
