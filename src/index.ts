let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let pNumero = Number(dato1.value);
  let sNumero = Number(dato2.value);
  let tNumero = Number(dato3.value);

  function dibujarGuiones() {
    let guion: string = "-";
    for (let i = 0; i <= 40; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  }

  if (tNumero === 1) {
    dibujarGuiones();
    console.log(" El resultado de la operacion es: ", pNumero + sNumero);
    dibujarGuiones();
  } else {
    if (tNumero === 2) {
      dibujarGuiones();
      console.log(" El resultado de la operacion es: ", pNumero - sNumero);
      dibujarGuiones();
    } else console.log("Fin del algoritmo");
  }
});
