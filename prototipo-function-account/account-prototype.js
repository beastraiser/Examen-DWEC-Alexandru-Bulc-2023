function CuentaBancaria(nombre, dni, saldo = 0) {
  //Se crea la funcion prototipo CuentaBancaria con valores constructor nombre, dni y saldo, que tendrá un valor predeterminado de 0
  this.nombre = nombre;
  this.dni = dni;
  this.saldo = saldo;
  this.numeroCuenta =
    "ES" +
    Math.floor(Math.random() * 99999999999999999999)
      .toString()
      .padStart(20, "0"); //Este script crea un numero aleatorio de cuenta y lo almacena en el atributo
  this.mostrarDatos = function () {
    console.log(
      //muestra los atributos de la cuenta
      `Nombre: ${this.nombre}\nDni: ${this.dni}\nSaldo: ${this.saldo}\nnumeroCuenta: ${this.numeroCuenta}`
    );
  };
  this.realizarIngreso = function (monto) {
    //este método suma monto al atributo saldo de la clase solamente si monto es superior a 0 y muestra el valor de saldo por pantalla
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}`);
    } else {
      console.log("Ingreso no realizado, cantidad incorrecta.");
    }
  };
  this.realizarRetiro = function (monto) {
    //este método resta monto al atributo saldo de la clase solamente si monto es superior a 0 e inferior al saldo y muestra el valor de saldo por pantalla
    if (monto > 0 && monto < this.saldo) {
      this.saldo -= monto;
      console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}`);
    } else {
      console.log("Retiro no realizado, cantidad incorrecta.");
    }
  };
  this.realizarTransferencia = function (cuentaDestino, monto) {
    //este método resta monto mediante .realizarRetiro a la cuentaDestino (que será un objeto que instancia a la clase), suma monto al sueldo de la cuenta actual mediante .realizarIngreso y muestra por pantalla el valor de saldo
    if (monto > 0 && monto < this.saldo) {
      cuentaDestino.realizarIngreso(monto);
      this.realizarRetiro(monto);
      console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}`);
    } else {
      console.log("Transferencia no realizada. Saldo insuficiente");
    }
  };
}

cuentaJuan = new CuentaBancaria("Juan", "X45454555", 900); //creamos 2 objetos diferentes que instancian las clases
cuentaNuria = new CuentaBancaria("Nuria", "L5555555", 400);
cuentaJuan.mostrarDatos(); //porbamos el método .mostrarDatos() para comprobar que los objetos se han creado correctamente
console.log("----------------------");
cuentaNuria.mostrarDatos();
console.log("----------------------");
cuentaJuan.realizarTransferencia(cuentaNuria, 100); //Se prueba el método .realizarTransferencia(), que incluye los métodos .realizarIngreso y .realizarRetiro, con la cuenta destino de Nuria, desde la cuenta de Juan ya con la cantidad de 100
console.log("----------------------");
cuentaJuan.mostrarDatos(); //Se vuelven a ejecutar los métodos .mostrarDatos() para cada objeto para pobar que los saldos se han actualizado correctamente después de la transferencia
console.log("----------------------");
cuentaNuria.mostrarDatos();
