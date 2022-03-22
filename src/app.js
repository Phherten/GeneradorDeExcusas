function excusaAleatoria() {
  var sujeto = [
    "MI PERRA ",
    "UN DINOSAURIO ",
    "AYUSO ",
    "MI TUTOR ",
    "MI PAREJA "
  ];
  var verbo = ["ME ROMPIÓ ", "SE COMIÓ ", "PERDIÓ ", "QUEMÓ ", "OLVIDÓ "];
  var predicado = [
    "EL ORDENADOR.",
    "MI COCHE.",
    "LAS LLAVES.",
    "MIS ILUSIONES.",
    "A MI ABUELA."
  ];

  console.log(
    sujeto[Math.floor(Math.random() * (5 - 1))] +
      verbo[Math.floor(Math.random() * (5 - 1))] +
      predicado[Math.floor(Math.random() * (5 - 1))]
  );

  return (
    sujeto[Math.floor(Math.random() * (5 - 1))] +
    verbo[Math.floor(Math.random() * (5 - 1))] +
    predicado[Math.floor(Math.random() * (5 - 1))]
  );
}
document.querySelector("#boton").addEventListener("click", () => {
  document.querySelector("#frase").innerHTML = excusaAleatoria();
});
