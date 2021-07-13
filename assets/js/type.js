
function myFunctiontype(x) {
  if (x.matches) {
    document.getElementById("hero-desk").innerHTML = 'Do You Need A New... <br><span class="typed" data-typed-items="E-Commerce Website, Business Website, Profesional Logo, Social Media Post"></span>' ;
  }}
var x = window.matchMedia("(max-width: 550px)")
myFunctiontype(x)
x.addListener(myFunctiontype);








