//BOTON
var boton = document.getElementById("b");
boton.addEventListener("click", tuPeso);

//FUNCION
function tuPeso(){
  var t_peso = document.getElementById("masa");
  m_peso = parseInt(masa.value);
  var t_planeta = document.getElementById("planeta");
  m_planeta = planeta.value;
  var g_tierra=9.8;
  var g_marte=24.8;
  var g_jupiter = 3.7;

 if(m_planeta == "Marte"){
   peso_final = (m_peso*g_marte)/g_tierra;
   alert("Tu peso es: " + peso_final);
 }
 if(m_planeta=="Jupiter"){
   peso_final = (m_peso*g_jupiter)/g_tierra;
   alert("Tu peso es: " + peso_final);
 }
 else
 alert("Introduce los datos correctos");
}
