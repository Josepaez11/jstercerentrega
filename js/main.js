listaPropiedadesJSON = []; 
let contenedorFiltros = document.querySelector("#contenedorFiltros");
contenedorFiltros.style.display = "none";

let panelFiltros = document.querySelector("#filtros")
let comboFiltros = document.querySelector("#combos")
let panelFiltrosActivos = document.querySelector("#filtrosActivos");
let aIndex = document.querySelectorAll(".aIndex");
console.log(aIndex[0]);


function CambiarColorLink(){
    aIndex[0].style.color = "#00000098";
    aIndex[1].style.color = "#00000098";
    aIndex[2].style.color = "#00000098";
    aIndex[3].style.color = "#00000098";
}


$(() => { 
    $.getJSON("data/propiedades.json", (respuesta) => { 
        listaPropiedadesJSON = respuesta;
        console.log(listaPropiedadesJSON);

    })
})

function DesCheckTipo(){
    cbox1.checked = false;
    cbox2.checked = false;
    cbox3.checked = false;
    cbox4.checked = false;
}

function DesCheckDorm(){
    cboxTalle1.checked = false;
cboxTalle2.checked = false;
cboxTalle3.checked = false;
cboxTalle4.checked = false;
}


let comboTemporada = document.querySelector('#comboTemporada');
comboTemporada.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { 
        case "Verano":
            renderIndex("Verano");
            break;
        case "Invierno":
            renderIndex("Invierno");
            break;
        case "Media estacion":
            renderIndex("Media estacion");
            break;
    }
})


const renderIndex = (tipoTemporada) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");

    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == tipoTemporada) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            </div>
            </div>
            <br> `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        contenedor.style.border = "1px solid black";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo Temporada: ${tipoTemporada}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();

}



let comboTipoprenda = document.querySelector('#comboTipoprenda');
comboTipoprenda.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { 
        case "Pantalon":
            renderIndexPrenda("Pantalon");
            break;
        case "Remera":
            renderIndexPrenda("Remera");
            break;
        case "Campera":
            renderIndexPrenda("campera");
            break
    }
})


const renderIndexPrenda = (tipoPrenda) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.operacion == tipoPrenda) { 
            console.log('entro al if');
            console.log(contenedorFiltros.style);
            console.log(contenedorFiltros.style);
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo Prenda: ${tipoPrenda}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();

}



let comboTalles = document.querySelector('#comboTalles');

comboTalles.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { 
        case "1":
            renderIndexDorm("1");
            break;
        case "2":
            renderIndexDorm("2");
            break;
        case "3":
            renderIndexDorm("3");
            break
        case "4":
            renderIndexDorm("4");
            break;
    }
})


const renderIndexDorm = (numtalles) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios == numtalles) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo: ${numtalles} Talles</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();
}

let pDesde = '';
let pHasta = '';
let bAplicar = document.querySelector('#baplicar');
bAplicar.addEventListener('click', (evt) => {
    if (iDesde != '' && iHasta != '') {
        pDesde = iDesde.value;
        pHasta = iHasta.value;
        console.log(iDesde.value);
        console.log(iHasta.value);
        renderIndexPrecio(pDesde, pHasta);


    } else {
        alert("Complete ambos campos Desde y Hasta");
    }
})


const renderIndexPrecio = (Desde, Hasta) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.precio >= Desde && elemento.precio <= Hasta) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Desde: ${Desde} </p>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Hasta: ${Hasta} </p>`;
    panelFiltrosActivos.style.color = "red";
}

let cboxVerano = document.querySelector('#cboxVerano');
cboxVerano.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'Verano') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Temporada: Verano </p>`;
    panelFiltrosActivos.style.color = "red";
    cboxVerano.checked = false;
    cboxInvierno.checked = false;
    cboxMediaestacion.checked = false;
    DesCheckTipo();
    
})


let cboxInvierno = document.querySelector('#cboxInvierno');
cboxInvierno.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'Invierno') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Invierno</p>`;
    panelFiltrosActivos.style.color = "red";
    cboxVerano.checked = false;
    cboxInvierno.checked = false;
    cboxMediaestacion.checked = false;
    DesCheckTipo();


})


let cboxMediaestacion = document.querySelector('#cboxMediaestacion');
cboxMediaestacion.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == 'casa') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Talle: ${elemento.Talles}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Prenda: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
        panelFiltros.style.margin = "20px";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#c0c0c0";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Temporada: Media estacion </p>`;
    panelFiltrosActivos.style.color = "red";
    cboxVerano.checked = false;
    cboxInvierno.checked = false;
    cboxMediaestacion.checked = false;
    DesCheckTipo();

})






