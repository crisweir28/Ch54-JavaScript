function saludar(){
    alert("ya casi nos vamos juasjuas xD ");
}

function bodyColor (){
    document.body.style.backgroundColor = "#6600FF" ;
}

function color(b) {
    document.body.style.backgroundColor = b;
}

function changeToGreenColor(){
    const element = document.getElementById("greenParagraph");
    console.log(element);
    element.style.color= "green";
}

function changeColor(element, color){
    element.style.color = color;
}

function setUp(){
    document.getElementById("title").style.color ="blue";
    document.getElementById("title").style.fontSize= "50px";

}

setUp();

function cambiarNombre() {
            let newName = prompt("¿Cuál es tu nombre?");
            if (newName) {
                document.getElementById("name").textContent = "Hola " + newName;
            }
}