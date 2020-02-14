function validarFormulario(e) {
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var correo = document.getElementById("correo").value;
  var contrasena = document.getElementById("contrasena").value;
  var usuario = document.getElementById("usuario").value;
  var telefono = document.getElementById("telefono").value;
  var ok = true;

  expresion = /\w+@\w+\.+[a-z]/;

  if (nombre == "" || apellido == "") {
    alert("Debes escribir tu nombre y apellido");
    ok = false;
    return false;
  } else if (nombre.length > 30) {
    alert("Tu nombre es muy largo");
    ok = false;
    return false;
  } else if (apellido.length > 80) {
    alert("Tu apellido es muy largo");
    ok = false;
    return false;
  }

  if (correo == "") {
    alert("Debes ingresar tu correo");
    ok = false;
    return false;
  } else if (correo.length > 100 || !expresion.test(correo)) {
    alert("Tu correo no es válido");
    ok = false;
    return false;
  }

  if (usuario == "" || contrasena == "") {
    alert("Debes ingresar tu usuario y contraseña");
    ok = false;
    return false;
  } else if (usuario.length > 20) {
    alert("Tu usuario es muy largo");
    ok = false;
    return false;
  }

  if (telefono == "") {
    alert("Debes ingresar tu teléfono");
    ok = false;
    return false;
  } else if (telefono.length > 15 || isNaN(telefono)) {
    alert("Tu teléfono no es válido");
    ok = false;
    return false;
  }

  if (ok) {
    alert(
      "¡Felicidades " +
        nombre +
        " " +
        apellido +
        ", te has registrado exitosamente!" +
        " " +
        "Tu usuario es" +
        " " +
        usuario +
        ", y tu contraseña es" +
        " " +
        contrasena +
        "."
    );
  }
}
