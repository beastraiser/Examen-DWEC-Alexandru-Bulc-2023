function saludarSegunHora() {
  let hora = new Date().getHours(); //Se guarda en una variable un nuevo objeto que tiene la hora del día actual
  if (hora >= 5 && hora <= 12) {
    //Si la hora se encuentra entre las 5 y las 12, escribirá en el documento HTML un párrafo con el mensaje "Buenos días"
    document.write("<p>Buenos días</p>");
  } else if (hora > 12 && hora <= 18) {
    //Si la hora se encuentra entre las 13 y las 18, escribirá en el documento HTML un párrafo con el mensaje "Buenos tardes"
    document.write("<p>Buenas tardes</p>");
  } else {
    //Si no cumple ninguna de las condiciones anteriores, escribirá en el documento HTML un párrafo con el mensaje "Buenos noches"
    document.write("<p>Buenas noches</p>");
  }
}

saludarSegunHora(); //Se invoca la función
