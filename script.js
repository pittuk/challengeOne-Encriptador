var textoIngresado = document.querySelector("#texto-ingresado");



function encriptar() {
  const regex=/^[a-zñ]+$/;

  if (regex.test(textoIngresado.value)) {
    var arrayTextoIngresado = Array.from(textoIngresado.value);
    for (let i = 0; i < arrayTextoIngresado.length; i++) {
      if (arrayTextoIngresado[i] == "a") {
        arrayTextoIngresado[i] = "ai";
      }
      if (arrayTextoIngresado[i] == "e") {
        arrayTextoIngresado[i] = "enter";
      }
      if (arrayTextoIngresado[i] == "i") {
        arrayTextoIngresado[i] = "imes";
      }
      if (arrayTextoIngresado[i] == "o") {
        arrayTextoIngresado[i] = "ober";
      }
      if (arrayTextoIngresado[i] == "u") {
        arrayTextoIngresado[i] = "ufat";
      }
    }
    //convertimos el array en string nuevamente
    var fraseEncriptada = arrayTextoIngresado.join("");

    textoIngresado.value = "";
    textoIngresado.focus();

    document.querySelector("#mostrar-texto").innerHTML = fraseEncriptada;
  } else if(textoIngresado.value==""){
    document.querySelector("#mostrar-texto").innerHTML ="<span>Debe ingresar una frase o palabra</span>";
  }else{
    document.querySelector("#mostrar-texto").innerHTML ="<span>No puede contener mayusculas o acentos</span>";
  }
}
function desencriptar() {
  var textDesencriptar = textoIngresado.value;
  var textoDesencriptado = textDesencriptar
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.querySelector("#mostrar-texto").innerHTML = textoDesencriptado;
}
function mostrarBoton() {
  const boton = document.querySelector("#boton-copiar");
  boton.style.display = "block";
}

function copiarContenido() {
  var contenido = document.querySelector("#mostrar-texto").innerText;
  navigator.clipboard.writeText(contenido);
  // .then(() => {
  //     console.log('Texto copiado al portapapeles');
  // })
  // .catch(err => {
  //     console.error('Error al copiar al portapapeles: ', err);
  // });
}

document.querySelector("#boton-encriptar").addEventListener("click", () => {
  encriptar();
  mostrarBoton();
});
document
  .querySelector("#boton-desencriptar")
  .addEventListener("click", desencriptar);
document
  .querySelector("#boton-copiar")
  .addEventListener("click", copiarContenido);
