function agregarUrl(){
    let newLink = document.createElement("a");
    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    let lastId = document.getElementById("lastId");

    window.alert(lastId);

    newLink.href = cuadroUrl.value;
    newLink.textContent = cuadroNombre.value.toUpperCase();

    let newLi = document.createElement("li");
    newLi.appendChild(newLink);

    newLi.id = lastId.value;
    lastId.value++;

    cuadroUrl.value = "";
    cuadroNombre.value = "";

    let oldUl = document.getElementById("paginas");
    oldUl.prepend(newLi);
}

function agregarUrl2(){
    let newLink = document.createElement("a");
    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    let lastId = document.getElementById("lastId");

    newLink.href = cuadroUrl.value;
    newLink.textContent = cuadroUrl.value;

    let newTr = document.createElement("tr");
    let newTd = document.createElement("td");
    let newTd2 = document.createElement("td");
    let newTd3 = document.createElement("td");

    newTd2.innerText = cuadroNombre.value.toUpperCase();
    newTd3.innerText = lastId.value;

    let letraIns = cuadroNombre.value.toUpperCase().charAt(0);

    newTd.appendChild(newLink);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd);

    newTr.id = lastId.value;
    lastId.value++; // lastId.value = lastId.value + 1

    let tablaIns = document.getElementById("tabla"+letraIns);
    tablaIns.appendChild(newTr);

    cuadroUrl.value = "";
    cuadroNombre.value = "";
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