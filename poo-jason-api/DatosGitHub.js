jsonString = new String( //Almacenamos en esta variable una cadena que contendrá datos de tipo JSON. Será una cadena JSON
  `{"login": "beastraiser", "id": "132942380", "email": "null", "public_repos": "9"}`
);

class DatosGitHub {
  //Se crea la clase DatosGitHub
  constructor(jsonString) {
    //El parámetro del constructor será la cadena JSON anteriormente creada
    this.jsonString = JSON.parse(jsonString); //En este atributo se almacena la cadena JSON convertida mediante .parse a un objeto JSON
    this.login = this.jsonString.login; //Se accede a cada uno de los atributos del objeto JSON y se iguala su valor a cada uno de los atributos de la clase DatosGitHub
    this.id = this.jsonString.id;
    this.email = this.jsonString.email;
    this.public_repos = this.jsonString.public_repos;
  }
  datosRecibidos() {
    //Este método muestra por pantalla los atributos de la clase
    console.log(
      `El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`
    );
  }
}

var datosGitHubInstancia = new DatosGitHub(jsonString); //Se crea un objeto que instancia la clase DatosGitHub
datosGitHubInstancia.datosRecibidos(); //probamos el método
datosGitHubInstancia.email = "al3xandru313@gmail.com"; //Ya que el email es null, se modifica su valor en el objeto
datosGitHubInstancia.datosRecibidos(); //Se vuelve a probar el método
