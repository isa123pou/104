// valor aleatorio generado
  var y = Math.floor(Math.random() * 10  + 1);

  playername= localStorage.getItem("player_name")
// contar el número de intentos
// crear para el intento correcto
var guess = 1;

function submit(){
    var x = document.getElementById("guessField").value;

    if(x == y)
    {
        alert("!!!Felicidades!!!"+playername+" Lo adivinaste bien" + guess + "Intento");
        guess= 1;
    }
    else if(x > y)
    {
        guess++;
        alert("!Oops lo siento! Intenta un nu mero más pequeño")
    }
    else
    {
        guess++;
        alert("!Oops lo siento! Intenta un nu mero más grande")
    }
}
  function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
  }
// función para el número adivinado por el usuario     
