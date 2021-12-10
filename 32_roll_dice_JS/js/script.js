let random = Math.random(); // 0.01 ... 0.99
let suerte = random * 6; //  numero aletorio (1.??-5.??) -> 1 .. 5
let dado2 = parseInt(suerte) + 1; //( 1 ... 5) + 1
let dado =0
let obj1
//(0,1) * 10 = 0 - 9.?? +1
// let dado = parseInt(Math.random() * 10) + 1;
// (0,1) * 10 = 9.74 = 10
let opcion =""
while (dado ==0){
   dado = Math.round(Math.random() * 6);
   obj1 = document.getElementById("salida");
}
opcion = prompt("Seguir jugando?")

if (opcion == "si"){
    if (dado > 3) {
        obj1.innerHTML = ` Has ganado, ha salido  el número ${dado} `;

        if (dado ==4){
          obj1.innerHTML = `<br><img src="images/cara4.jpg" alt=""> ${dado}`
        }
        if (dado ==5){
      
          obj1.innerHTML = `<br><img src="images/cara5.jpg" alt=""> ${dado}`
        }
        if (dado ==6){
      
          obj1.innerHTML = `<br><img src="images/cara6.jpg" alt=""> ${dado}`
        }
      } 
      
      else {
        obj1.innerHTML = ` Lo siento, ha salido el número ${dado} `;
        
        if (dado ==1){
          obj1.innerHTML = `<br><img src="images/cara1.jpg" alt=""> ${dado}`
        }
        if (dado ==2){
      
          obj1.innerHTML = `<br><img src="images/cara2.jpg" alt=""> ${dado}`
        }
        if (dado ==3){
      
          obj1.innerHTML = `<br><img src="images/cara3.jpg" alt=""> ${dado}`
        }
      }

}
else{
    obj1.innerHTML = `El juego ha terminado!`
}

