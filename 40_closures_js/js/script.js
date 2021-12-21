
//clausura: funcion incr()

const incr = (function(){
  let num = 0
  return function () {
    num++
    return num
  }
}

)()
console.log(typeof(incr))
console.log(incr())
console.log(incr())
console.log(incr())

//-----------------------------------------------------
function creaSumador(x) {
  return function (y) {
    return x + y
  }
}
var suma5 = creaSumador(5)
var suma10 = creaSumador(10)

console.log(suma5(2))
console.log(suma10(2))