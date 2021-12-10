var a = 1
console.log(a) //accedemos a la "a" global que vale 1

function x(){
    console.log(a) // ek vakir de a es undefiined
    a = 5 //creamos una variable a a nivel de funcion

    console.log(a) //el valor de a es 5 (a nivel de funcion)
    console.log(window.a) // el valor de a es 1 (ambito global)
}
x() //se ejecuta el codigo de la funcion x()
console.log(a) //en esta linea el valor de a es 1

//Opcion 1: bucle con let
console.log("antes: ", p)
for (let p = 0; p<3; p++)
    console.log("-", p)
console.log("despues: ", p)

//Opcion 2: bucle con var
console.log("antes: ", p)
for (var p = 0; p<3; p++)
    console.log("-", p)
console.log("despues: ", p)

