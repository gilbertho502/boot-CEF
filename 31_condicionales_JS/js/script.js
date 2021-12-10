var nota = 9
console.log("He realizado mi examen, Mi resultado es el siguiente: ")

switch(nota){
    case 10:
        calificacion = "sobresaliente"
        break
    case 9:
    case 8:
        calificacion = "notable"
        break
    case 7:
    case 6:
        calificacion = "bien"
        break
    case 5:
        calificacion = "suficiente"
        break
    case 4:
    case 3:
    case 2:
    case 1:
        calificacion = "insuficiente"
        break
    default:
        calificacion = "nota erronea"
        break

}
console.log("He obtenido un: ", calificacion)