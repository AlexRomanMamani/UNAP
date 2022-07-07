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
    let delNumber = document.getElementById("delNumber");

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
    if(lastId.value != 0){
        delNumber.max=lastId.value;
    }
    lastId.value++; // lastId.value = lastId.value + 1
    
    

    let tablaIns = document.getElementById("tabla"+letraIns);
    tablaIns.appendChild(newTr);

    cuadroUrl.value = "";
    cuadroNombre.value = "";
}

function fnLimpiar(){
    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    let btnAgregar = document.getElementById("btnAgregar");

    cuadroUrl.value = "";
    cuadroNombre.value = "";

    cuadroNombre.removeAttribute("disabled");
    cuadroUrl.removeAttribute("disabled");
    btnAgregar.removeAttribute("disabled");
}

function buscarUrl(){
    let infoBuscar = document.getElementById("buscar");
    let ptoBusqueda = document.getElementById("paginas");
    let ptoResultado = document.getElementById("resultado");

    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    let btnAgregar = document.getElementById("btnAgregar");

    let hijo = ptoBusqueda.firstElementChild; // nos posicionamos en el li
    do{
        if(hijo.firstElementChild.textContent == infoBuscar.value){
            //ptoResultado.textContent = hijo.firstElementChild.href;// linea de resultado
            cuadroUrl.value = hijo.firstElementChild.href;
            cuadroNombre.value = hijo.firstElementChild.textContent;
            infoBuscar.value = "";
            cuadroUrl.setAttribute("disabled", true);
            cuadroNombre.setAttribute("disabled", true);
            btnAgregar.setAttribute("disabled", true);
            return;
        }
        hijo = hijo.nextElementSibling;
    }while(hijo != null);

    infoBuscar.value = "";
    ptoResultado.textContent = "No se encontró resultado.";
}

function borrarUrl(){
    let delNumber = document.getElementById("delNumber");
    let trBorrar = document.getElementById(delNumber.value);

    trBorrar.parentNode.removeChild(trBorrar);
}

function buscarPorNombre(){
    let infoBuscar = document.getElementById("buscarDoble");
    let ptoBusqueda = document.getElementById("paginas");
    let ptoResultado = document.getElementById("resultado");

    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    let btnAgregar = document.getElementById("btnAgregar");

    let hijo = ptoBusqueda.firstElementChild; // nos posicionamos en el li
    do{
        if(hijo.firstElementChild.textContent == infoBuscar.value){
            //ptoResultado.textContent = hijo.firstElementChild.href;// linea de resultado
            cuadroUrl.value = hijo.firstElementChild.href;
            cuadroNombre.value = hijo.firstElementChild.textContent;
            infoBuscar.value = "";
            cuadroUrl.setAttribute("disabled", true);
            cuadroNombre.setAttribute("disabled", true);
            btnAgregar.setAttribute("disabled", true);
            return true;
        }
        hijo = hijo.nextElementSibling;
    }while(hijo != null);

    
    return false;
}

function buscarPorUrl(){
    let infoBuscar = document.getElementById("buscarDoble");
    let ptoBusqueda = document.getElementById("paginas");
    let ptoResultado = document.getElementById("resultado");

    let cuadroUrl = document.getElementById("urlPagina");
    let cuadroNombre = document.getElementById("nombrePagina");
    let btnAgregar = document.getElementById("btnAgregar");

    let hijo = ptoBusqueda.firstElementChild; // nos posicionamos en el li
    do{
        //console.log("hijo:"+hijo.firstElementChild.href);
        //console.log("cuadro1:"+infoBuscar.value);
        if(hijo.firstElementChild.href == infoBuscar.value){
            //ptoResultado.textContent = hijo.firstElementChild.href;// linea de resultado
            cuadroUrl.value = hijo.firstElementChild.href;
            cuadroNombre.value = hijo.firstElementChild.textContent;
            infoBuscar.value = "";
            cuadroUrl.setAttribute("disabled", true);
            cuadroNombre.setAttribute("disabled", true);
            btnAgregar.setAttribute("disabled", true);
            return true;
        }
        hijo = hijo.nextElementSibling;
    }while(hijo != null);

    return false;
}

function buscarUrlDoble(){
    let infoBuscar = document.getElementById("buscarDoble");
    //console.log("cuadro0:"+infoBuscar.value);

    if(buscarPorNombre() == false){
        return buscarPorUrl();
    }

    infoBuscar.value = "";
    ptoResultado.textContent = "No se encontró resultado.";
}