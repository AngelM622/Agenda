var Nombre;
var Apellido;
var Telefono;
var a = 0;

function guardar(){
    Nombre= document.getElementById("nombre").value;
    Apellido= document.getElementById("apellido").value;
    Telefono= document.getElementById("telefono").value;
    
    let objeto ={
        nombre: Nombre,
        apellido: Apellido,
        telefono: Telefono
    };

    console.log(objeto);
    fetch("http://www.raydelto.org/agenda.php", {
        method: 'POST',
        body: JSON.stringify(objeto)
        })
        .then(function(response) {
            if(response.ok) {
                return response.text()
            } else {
                throw "Error en la llamada Ajax";
            }
         
         })
         .then(function(texto) {
            console.log(texto);
         })
         .catch(function(err) {
            console.log(err);
         });
}

function listar(){
    fetch("http://www.raydelto.org/agenda.php").then(function(datos){
        return datos.json();
    }).then (function(listado){
        var listaCompleta ="";
        listas = document.getElementById("listas");
        for(contacto of listado){
            a+=1;
            listaCompleta = "<span>"+a+"</span>"+"-"+contacto.nombre + " " + contacto.apellido + " " +contacto.telefono +"<br/>\n";  
            listas.innerHTML+=listaCompleta;
        }
    });   
}