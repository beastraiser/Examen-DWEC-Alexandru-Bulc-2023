class Aula {
  //Se crea la clase Aula
  constructor(numero, capacidad) {
    //Los parámetros del constructor serán 2, numero y capacidad
    //Los atributos serán iguales a los parámetros introducidos en el constructor
    this.numero = numero;
    this.capacidad = capacidad;
  }
  presentarMateriales() {
    //Se crea un método que muestra por pantalla una frase que contiene los atributos mediante un console.log
    console.log(
      `Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`
    );
  }
}

class Musica extends Aula {
  //Se crea una clase Musica que hereda de la clase Aula
  constructor(numero, capacidad, instrumento) {
    //Los parámetros del constructor serán 3, numero y capacidad e instrumento
    super(numero, capacidad); //El método super() heredará los parámetros numero y capacidad de Aula
    this.instrumento = instrumento; //El atributo será igual al introducido en el constructor
  }
  presentarMateriales() {
    //Se sobreescribe el método de Aula para que muestre por pantalla una frase que contiene los atributos de Musica mediante un console.log
    console.log(
      `Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`
    );
  }
}

class Tecnologia extends Aula {
  //Se crea una clase Tecnologia que hereda de la clase Aula
  constructor(numero, capacidad, cantidadOrdenadores) {
    //Los parámetros del constructor serán 3, numero y capacidad y cantidadOrdenadores
    super(numero, capacidad); //El método super() heredará los parámetros numero y capacidad de Aula
    this.cantidadOrdenadores = cantidadOrdenadores; //El atributo será igual al introducido en el constructor
  }
  presentarMateriales() {
    //Se sobreescribe el método de Aula para que muestre por pantalla una frase que contiene los atributos de Tecnologia mediante un console.log
    console.log(
      `Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprado ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`
    );
  }
}
//Se crean 3 objetos que instanciarán cada una de las clases creadas
var aula1 = new Aula(1, 20);
var musica1 = new Musica(2, 15, "violin");
var tecno1 = new Tecnologia(3, 10, 5);

//Se prueban los métodos de cada una de las clases invocando el método .presentarMateriales(). Las salidas serán diferentes, mostrando así la propiedad de polimorfismo de las clases.
aula1.presentarMateriales();
musica1.presentarMateriales();
tecno1.presentarMateriales();
console.log(
  "La propiedad que permite sobreescribir métodos en herencia se llama polimorfismo"
);
