const link = document.getElementById("link");
console.log(link);

link.addEventListener("click", (event) => {
  event.preventDefault();
  //window.location.href = "./contact.html";
  //window.location.href = "https://google.com"; // redirección por click
  //window.location.replace("https://google.com"); // redireccón de ventana
  //window.open("https://google.com", "_blank"); // abrir una nueva pestaña [_blank,_self]
  window.open(
    "https://google.com",
    "popUpWindow",
    "height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes"
  ); // Abre una ventana customizable
});