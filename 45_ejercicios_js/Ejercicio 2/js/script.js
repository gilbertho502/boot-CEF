function agregar(){
    const table = document.querySelector("#tabla");
    const row = table.insertRow(0);
    row.innerHTML = "<td> New Cell 1</td><td>New Cell 2</td>";
    }

    document.querySelector("#btn").onclick = function(){
    agregar();
    }

    console.log(tabla);