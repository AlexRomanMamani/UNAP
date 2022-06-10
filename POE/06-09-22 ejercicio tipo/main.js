function agregarUrl(){
    let newLink = document.createElement("a");
    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    newLink.href = cuadroUrl.value;
    newLink.textContent = cuadroNombre.value;

    let newLi = document.createElement("li");
    newLi.appendChild(newLink);

    cuadroUrl.value = "";
    cuadroNombre.value = "";

    let oldUl = document.getElementById("paginas");
    oldUl.prepend(newLi);
}

function buscarUrl(){
    let infoBuscar = document.getElementById("buscar");
    let ptoBusqueda = document.getElementById("paginas");
    let ptoResultado = document.getElementById("resultado");

    let hijo = ptoBusqueda.firstElementChild; // nos posicionamos en el li
    do{
        if(hijo.firstElementChild.textContent == infoBuscar.value){
            ptoResultado.textContent = hijo.firstElementChild.href;// linea de resultado
            infoBuscar.value = "";
            return;
        }
        hijo = hijo.nextElementSibling;
    }while(hijo != null);

    infoBuscar.value = "";
    ptoResultado.textContent = "No se encontró resultado.";
}

function borrarUrl(){
    let infoBuscar = document.getElementById("buscar");
    let ptoBusqueda = document.getElementById("paginas");
    let ptoResultado = document.getElementById("resultado");

    let hijo = ptoBusqueda.firstElementChild; // nos posicionamos en el li
    do{
        if(hijo.firstElementChild.textContent == infoBuscar.value){
            hijo.parentNode.removeChild(hijo); // linea de borrar
            infoBuscar.value = "";
            return;
        }
        hijo = hijo.nextElementSibling;
    }while(hijo != null);

    infoBuscar.value = "";
    ptoResultado.textContent = "No se borro nada.";
}