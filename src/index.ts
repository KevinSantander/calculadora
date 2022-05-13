let btnSend = document.getElementById("send");

btnSend?.addEventListener("click", () => {
  let pNumero = Number(dato1.value);
  let sNumero = Number(dato2.value);
  let tNumero = Number(dato3.value);

  function guiones() {
    let i: number;
    let guiones: string = "-";
    for (i = 0; i <= 40; i++) {
      guiones = guiones + "-";
    }
  }

  console.log(guiones);
  if (tNumero === 1) {
    console.log(pNumero + sNumero);
  } else {
    if (tNumero === 2) {
      console.log(pNumero - sNumero);
    } else console.log("Fin del algoritmo");
  }
});
