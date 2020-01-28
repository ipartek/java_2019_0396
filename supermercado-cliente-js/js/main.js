console.trace('empieza script');

const ENDPOINT = 'http://localhost:8080/supermercado-rest/producto/';
document.getElementById('endpoint').innerHTML = ENDPOINT;

//selecionar elementos por id
let inputEL = document.getElementById('idProducto');
let botonEL = document.getElementById('boton');
let listaEL = document.getElementById('listaProductos');
let resultadoEL = document.getElementById('resultado');


window.onload = function() {
    console.trace('DOM Ready, hemos esperado a que carge todo el HTML, CSS y JS !!!!');
    cargarProductos();
};


function cargarProductos(){
    console.log('cargarProductos');

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 && xhr.status === 200 ){
            let productos = JSON.parse(xhr.responseText);
            console.debug("producto en json %o" , productos);
            listaEL.innerHTML = "";  // limpiar lista
            for( let p of productos ){                
                listaEL.innerHTML += `<li class="list-group-item"><b>${p.id}</b> ${p.nombre}</li>`;
            }

        }
    }
    xhr.open('Get', `${ENDPOINT}` );
    xhr.send();    
    console.debug(`GET ${ENDPOINT}`);

   
    
}// cargarProductos



// registrar evento click para el boton
botonEL.addEventListener("click", ()=> {

    console.debug('click boton');
    if( inputEL.value === "" ){
        resultadoEL.innerHTML = 'Escribe algo por favor';
    }else{
        // llamada Ajax
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if ( xhr.readyState === 4 ){  // esperar a completar la peticion

                if ( xhr.status === 200 ){ 

                    //convetir de texto a json
                    let producto = JSON.parse(xhr.responseText);

                    document.getElementById('nombre').innerHTML = producto.nombre;
                    document.getElementById('imagen').src = producto.imagen;
                    document.getElementById('descripcion').innerHTML = producto.descripcion;
                    resultadoEL.innerHTML = 'producto cargado desde el servicio rest';

                }
                
                if (xhr.status === 404 ){ 
                    resultadoEL.innerHTML = `No encontrado`;
                }    

            }
           
        }// onreadystatechange
           
        xhr.open('Get', `${ENDPOINT}${inputEL.value}` );
        xhr.send();  // Cuidado es ASINCRONO !!!!!
        console.debug(`GET ${ENDPOINT}${inputEL.value}`);

    }


});// botonEL.addEventListener

