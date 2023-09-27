/*Ej1
  document.write('octavio duarte')
  document.write('<br>')
  document.write('25 anios')
  document.write('<br>')

  Ej2
  let nombre_empleado = "oscar";
  let sueldo_empleado = 150000;
  let mensaje = "<p>" + nombre_empleado + "</p>" + "<p>" + sueldo_empleado + "</p>";
  document.write(mensaje);

  Ej3
  let nombre;
  let mail;
  nombre = prompt('Ingrese su nombre');
  mail = prompt ('Ingrese su correo');
  document.write('Su nombre es: '+ nombre + "<br>");
  document.write('Su correo es: '+mail);*/

/*Ej4
  let cuadrado;
  cuadrado = prompt('Escriba el lado del cuadrado: ');
  let resultado = parseInt(cuadrado) * 4;
  document.write("Su resultado del perimetro es: " + resultado);*/

/*Ej5
  let nota1,nota2,nota3,promedio;
  nota1= parseInt(prompt("Ingrese la primer nota: "));
  nota2= parseInt(prompt("Ingrese la segunda nota: "));
  nota3= parseInt(prompt("Ingrese la tercer nota: "));
  promedio= (nota1+nota2+nota3)/3;
  if(promedio >=7){
      document.write("Promocionado");
  }
  else{
      document.write("No promocionado");
  }
  */

/*Operadores logicos .3
  let num1,num2,num3, resultado;
  num1 = parseInt(prompt("Ingrese el numero 1: "));
  num2 = parseInt(prompt("Ingrese el numero 2: "));
  num3 = parseInt(prompt("Ingrese el numero 3: "));
  if(num1<10 && num2<10 && num3<10){
      document.write("Todos los numeros son menores a 10")
  }
  else{
      document.write("Alguno no cumple la condicion");
  }
  */

/*Operadores logicos ||
  let num1,num2,num3, resultado;
  num1 = parseInt(prompt("Ingrese el numero 1: "));
  num2 = parseInt(prompt("Ingrese el numero 2: "));
  num3 = parseInt(prompt("Ingrese el numero 3: "));
  if(num1<10 || num2 <10 || num3<10){
      document.write("Algunos de los numeros son menores a 10")
  }
  */

/*switch
let palabra;
palabra = prompt(
  "Ingrese alguna de estas palabras para traducir a ingles(casa, mesa, perro, gato)"
);
switch (palabra) {
  case "casa":
    document.write("En ingles es home");
    break;
  case "mesa":
    document.write("En ingles es table");
    break;
  case "perro":
    document.write("En ingles es perro");
    break;
  case "gato":
    document.write("En ingles es gato");
    break;
  }
  */

/*while
  let valor = 11;
  let contador = 1;
  //valor= parseInt(valor);
  while (contador<=25){
      valor = valor + 11;
      document.write(valor);
      document.write("<br>")
      contador++;
  }
  */

/*for
let cantidad = 0;
for (let i = 1; i <= 3; i++) {
  let basei = parseInt(prompt("Ingrese la base " + i + ": "));
  let alturai = parseInt(prompt("Ingrese la altura " + i + ": "));
  let superficiei = basei * alturai;
  if (superficiei >= 12) {
    cantidad++;
  }
}
document.write("La cantidad de triangulos cuya superficie es mayor a 12 es: " + cantidad);
*/

/*funciones
function muestra(menor, mayor) {
    let menor = 0;
    let mayor = 0;
    for (let i = menor; i <= mayor; i++) {
        document.write("<p>" + i + "</p>");
    }
    return 0;
}

let menor;
let mayor;
menor = parseInt(prompt("Por favor ingrese el menor: "));
mayor = parseInt(prompt("Por favor ingrese el mayor: "));
muestra(menor, mayor);
*/

/*Controles form,button y text
    function mostrar(){
        let entero = parseInt (document.getElementById('entero').value);
        entero=(entero**3);
        alert("Su numero elevado al cubo es: " + entero);
    }
*/
/*Control Password
function verificar(){
    let clave1 = document.getElementById('clave1').value;
    let clave2 = document.getElementById('clave2').value;
    if(clave1==clave2){
        alert("Las claves son iguales boludo");
    }
}
*/
/*Control Select
function calcular(){
    let tipo = document.getElementById('select1').value;
    let cantidad = document.getElementById('cantidad').value;
    let importe = tipo*cantidad;
    document.getElementById('importe').value=importe;
}
*/
/*
function mostrarResultado(){
  if(document.getElementById('futbol').checked){
    alert("El deporte que elegiste es futbol")
  }
  else if(document.getElementById('basket').checked){
    alert("El deporte que elegiste es basket")
  }
  else if(document.getElementById('tenis').checked){
    alert("El deporte que elegiste es tenis")
  }
}
*/
/*
function vaciar(this){
  this.value=' ';
}
onMouseOut
function pintar(objeto, col) {
  objeto.style.backgroundColor = col;
}

onLoad
function mostrarMensaje() {
      alert('Mensaje');
    }
*/

/* Objeto window
function abrirParametros() {
  let ventana = open('', '', 'status=yes,width=600,height=300,menubar=yes');
}

 #propiedad location del objeto window
function generarAleatorio(){
  let num;
  num=Math.random()*3;
  num=parseInt(num);
  document.getElementById('numero').value= num;
  if(num==0){
    window.location='https://www.outlook.com';
  }
  
  if(num==1){
    window.location='https://www.gmail.com';
  }
  if(num==2){
    window.location='https://www.yahoo.com';
  }
}


function Suma() {
  this.valor1=0;
  this.valor2=0;
  this.cargarvalor1 = cargarvalor1;
  this.cargarvalor2 = cargarvalor2;
  this.retornarresultado = retornarresultado;
}

function cargarvalor1(valor1) {
  this.valor1 = valor1;

}
function cargarvalor2(valor2) {
  this.valor2 = valor2;

}

function retornarresultado(){
  let resultado = 0;
  resultado = this.valor1+this.valor2;
  return resultado;
}

let s = new Suma();
s.cargarvalor1(2);
s.cargarvalor2(3);
document.write('La suma de los dos valores da como resultado: ' + s.retornarresultado());

#Mayor

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.mayorEdad = mayorEdad;
}

function mayorEdad(vector) {
  let mayor = 0;
  for (let i = 0; i < 4; i++) {
    if (vector[i].edad > mayor) {
      mayor = vector[i].edad;
    }
  }
  return mayor;
}

let vector = new Array(4);
vector[0] = new Persona("Juan", 15);
vector[1] = new Persona("roberto", 35);
vector[2] = new Persona("Pedro", 10);
vector[3] = new Persona("Paula", 20);
let mayor = 0;
let persona;
let mayores = 0;
for (let i = 0; i < 4; i++) {
  if (vector[i].edad > mayor) {
    mayor = vector[i].edad;
    persona = vector[i].nombre;
    if (vector[i].edad > 18) {
      mayores = mayores + 1;
    }
  }
}
document.write(
  "El mayor de todos es: " +
    persona +
    " con una edad de: " +
    mayor +
    "<br> </br>"
);
document.write("La cantidad de personas mayores es: " + mayores);
 */
