var nombre = prompt("Escribe tu nombre: "); //Guardamos mediante un prompt el valor del nombre
while (true) {
  //Este bucle pide indefinidamente al usuario un nombre hasta que este nombre sea válido, es decir que no sea un número
  if (!isNaN(nombre)) {
    nombre = prompt("Nombre incorrecto\nEscribe tu nombre: ");
  } else {
    break; //Si el nombre es válido, rompe el bulce infinito
  }
}

var apellidos = prompt("Escribe tus apellidos: "); //Guardamos mediante un prompt el valor de los apellidos
while (true) {
  //Este bucle pide indefinidamente al usuario unos apellidos hasta que estos apellidos sean válidos, es decir que no sean un número
  if (!isNaN(apellidos)) {
    apellidos = prompt("Apellidos incorrecto\nEscribe tus apellidos: ");
  } else {
    break; //Si los apellidos son válidos, rompe el bulce infinito
  }
}

var edad = parseInt(prompt("Escribe tu edad: ")); //Guardamos mediante un prompt el valor de la edad y lo transformamos a un tipo integer
while (true) {
  //Este bucle pide indefinidamente al usuario una edad hasta que esta edad sea válida, es decir que sea un número
  if (isNaN(edad)) {
    edad = parseInt(prompt("Edad incorrecta\nEscribe tu edad: "));
  } else {
    break; //Si la edad es válida, rompe el bulce infinito
  }
}

var ciclo = prompt("Escribe tu ciclo formativo: ", "DAW").toUpperCase(); //Guardamos mediante un prompt el valor del ciclo, determinamos como dato predefinido "DAW" y lo transformamos a mayúsculas mediante el método string .toUpperCase()
while (true) {
  //Este bucle pide indefinidamente al usuario un ciclo hasta que este ciclo sea válido, es decir que no sea un número
  if (!isNaN(ciclo)) {
    ciclo = prompt(
      "Ciclo incorrecto\nEscribe tu ciclo formativo: ",
      "DAW"
    ).toUpperCase();
  } else {
    break; //Si el ciclo es válido, rompe el bulce infinito
  }
}

document.write(
  //Se muestran escribiendo en el html mediante el método .write los valores de las variables que contienen los datos introducidos por el usuario
  `Nombre: ${nombre}<br>Apellidos: ${apellidos}<br>Edad: ${edad}<br>Ciclo: ${ciclo}`
);
