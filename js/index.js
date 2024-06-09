let listaProductos = document.querySelector('#listaProductos');
let listaCategorias = document.querySelector("#listaCategorias");

//Obtener producto
function obtieneProductos() {
    //Promise
    fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(productosObtenidos => {
            console.log("Productos obtenidos: ", productosObtenidos);

            productosObtenidos.forEach((producto, indice) => {
                console.log("Producto: ", producto);

                listaProductos.innerHTML += `
                
                <div class="col-12 col-md-3">
                    <div class="card">
                    <img src="${producto.image}" class="imagenProducto card-img-top py-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${producto.title} </h5>
                        <p class="card-text"> ${producto.description.slice(0,100)}</p>
                        <p class="text-danger"> ${producto.price} </p>
                        <a href="#" class="btn btn-primary"> Comprar </a>
                    </div>
                    </div>
                </div>
                `;
            });
        });
};

let obtieneCategorias = () => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(categoriasObtenidas => {
            console.log("Categorias obtenidas", categoriasObtenidas);
            categoriasObtenidas.forEach((categoria,indice) => {
                console.log("Categoria" + categoria);

                categoria = categoria.replace("'", ""); //Reemplaza las comillas simples por guiones

                listaCategorias.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="muestraProductos('${ categoria}')" >${ categoria.toUpperCase() }</a>
                    </li>
                `;
            });
        });
}

obtieneCategorias();

let muestraProductos = (categoria) => {
    console.log("Categoria seleccionada", categoria);

    let productosMostrar = productos.slice();
    if(categoria != '') {
        productosMostrar = productos.filter(producto => producto.category == categoria);
    }

    renderProductos();
}

let renderProductos = () => {
    
}
 
function obtieneProductos() {
    //Promise o Promesa
    fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then( productosObtenidos => {
            console.log("Productos obtenidos", productosObtenidos);

        
            productosObtenidos.forEach((producto,indice) => {
                console.log("Producto" + producto);

                listaProductos.innerHTML += `
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <img src="${ producto.image }" class="imagenProducto card-img-top py-2" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${ producto.title }</h5>
                                <p class="card-text">${ producto.description.slice(0,100) }</p>
                                <p class="text-danger">$ ${ producto.price }</p>
                                <a href="#" class="btn btn-primary">Comprar</a>
                            </div>
                        </div>
                    </div>
                `;
            });
        });
};

obtieneProductos();




/*
<img src="${producto.image}">
<p> ${producto.title} </p>
<p> ${producto.description} </p>
<p class="text-danger"> ${producto.price} </p>
*/

//slice(0,100) - sirve para mandar a llamar solo ciertos caracteres
