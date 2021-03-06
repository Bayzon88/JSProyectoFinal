//Data para web
const dataTipoComida = {
  desayuno: {
    omeletteDeJamon: {
      nombre: "Omelette de Jamon",
      id: 1,
      precio: 10,
      descripcion: "Delicioso Omelette relleno de jamon y queso",
      source: "./assets/img/omelette_jamon.jpeg",
      cantidad: 0,
    },

    croissantDeJamon: {
      nombre: "Croissant de Jamon",
      id: 2,
      precio: 12,
      descripcion: "Acompañado con jamón inglés.",
      source: "./assets/img/croissant_jamon.jpeg",
      cantidad: 0,
    },
    avocadoToast: {
      nombre: "Avocado Toast",
      id: 3,
      precio: 10,
      descripcion:
        "Pan campesino de granos tostado servido con guacamole, huevo y champiñones encurtidos.",
      source: "./assets/img/avocado_toast.jpeg",
      cantidad: 0,
    },
    panqueques: {
      nombre: "Panqueques",
      id: 4,
      precio: 10,
      descripcion:
        "Hechos en casa, acompañados con dos frutas a escoger servidos con miel de maple",
      source: "./assets/img/panqueques.jpeg",
      cantidad: 0,
    },
    huevosToscanos: {
      nombre: "Huevos Toscanos",
      id: 5,
      precio: 12,
      descripcion:
        "Huevos revueltos con tomate concasse, queso parmesano rallado y aceite de oliva. ",
      source: "./assets/img/huevos_toscanos.jpeg",
      cantidad: 0,
    },
  },
  almuerzo: {
    cagliari: {
      nombre: "Cagliari",
      id: 1,
      precio: 25,
      descripcion:
        "Pasta salteada con berenjena, un toque de aceite de oliva y ajos.",
      source: "./assets/img/cagliari.jpeg",
      cantidad: 0,
    },
    clubSandwich: {
      nombre: "Club Sandwich",
      id: 2,
      precio: 32.0,
      descripcion: "El clasico de siempre",
      source: "./assets/img/club_sandwich.jpeg",
      cantidad: 0,
    },
    frontera: {
      nombre: "Ensalada Frontera",
      id: 3,
      precio: 25.0,
      descripcion:
        "Lechugas orgánicas , pechuga de pollo deshilachada, palta y huevo duro",
      source: "./assets/img/ensalada_frontera.jpeg",
      cantidad: 0,
    },
    milanesa: {
      nombre: "Milanesa Napolitana",
      id: 4,
      precio: 20.0,
      descripcion:
        "Media milanesa napolitana con acompañamiento y bebida a elección.",
      source: "./assets/img/milanesa_napolitana.jpeg",
      cantidad: 0,
    },
  },
  cena: {
    empanada: {
      nombre: "Empanada Aji de Gallina",
      id: 1,
      precio: 10,
      descripcion:
        "Rellena con criollísimo ají de gallina en masa hojaldre y huevo duro.",
      source: "./assets/img/empanada_aji.jpeg",
      cantidad: 0,
    },
    pastel_acelga: {
      nombre: "Pastel de acelga",
      id: 2,
      precio: 12.0,
      descripcion: "Tradicional pastel de acelgas con masa hojaldre.",
      source: "./assets/img/pastel_acelga.jpeg",
      cantidad: 0,
    },
    milhojas_fresa: {
      nombre: "Mil hojas de fresa",
      id: 2,
      precio: 15.0,
      descripcion:
        "Capas de masa hojaldre intercaladas con capas de fresas naturales y manjar blanco.",
      source: "./assets/img/milhojas_fresa.jpeg",
      cantidad: 0,
    },
  },
};

//*********************  START: FUNCION DE CREACION TIPOS DE COMIDA  *********************/
/**
 *? Add listeners para los cards de productos al hacer click se crearan
 *? los cards de la seccion seleccionada (desayuno,almuerzo, cena)
 */

const CARDPRODUCTOS = document.querySelectorAll(".card-product-custom");

CARDPRODUCTOS.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    let tipoComida = evento.target.getAttribute("id"); //? Consigue el atributo de cada producto

    addItems(tipoComida, dataTipoComida[tipoComida]);
  });
});

//**********************  END: FUNCION DE CREACION TIPOS DE COMIDA  *********************/

//*********************  START: FUNCION DE CREACION DE CARDS CON DATOS  *********************/
//TODO AL PRESIONAR NUEVO TIPO DE COMIDA, DEBE ELIMINARSE LOS CARDS ACTUALES

const PRODUCTOS = document.querySelector("#productos");

function addItems(tipoComida, data) {
  if (document.querySelector(`#row-container`)) {
    console.log("existe");
  } else {
    PRODUCTOS.innerHTML += `
    <h2 class="titulo-comida">${tipoComida}:</h2>
    <div id="row-container" class="row container container-custom"></div>
    `;
    const ROWCONTAINER = document.querySelector(`#row-container`);

    for (elemento in data) {
      ROWCONTAINER.innerHTML += `
      <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-custom">
        <div id="${tipoComida}"class="card" style="width: 15rem">
          <img class="card-img-top" src='${data[elemento].source}' />
          <div class="card-body" id="${elemento}">
          <h5 id="${data[elemento].id}"class="card-title">${data[elemento].nombre}</h5>
          <p class="card-text">${data[elemento].descripcion}</p>
          <div class="precioProd">
          <p>S/.${data[elemento].precio}</p>
          <a href="" id="btn-menos" class="btn-menos">
          <i class="far fa-minus-circle"></i>
          </a>
          <p class="cant-items" id="cant-items">0</p>
          <a href="" id="btn-mas" class="btn-mas">
          <i class="far fa-plus-circle"></i>
          </a>
          </div>
          <a class="btn btn-primary btn-card-custom btn-outline-secondary" >Add</a>
          </div>
        </div>
      </div>
        
        `;
    }
  }
  getButtons();
  addBtnListener();
}
//**********************  END: FUNCION DE CREACION DE CARDS CON DATOS  *********************/

//*********************  START: FUNCIONALIDAD DE BOTON MAS Y MENOS  *********************/
function getButtons() {
  let btnMas = document.querySelectorAll(".btn-mas");
  let btnMenos = document.querySelectorAll(".btn-menos");

  btnMas.forEach((elemento) => {
    elemento.onclick = (btn) => {
      btn.preventDefault();

      let boton = btn.target.parentElement.parentElement;
      let contador = boton.querySelector("#cant-items").innerHTML;

      if (contador >= 0) {
        //? prettier ignore Incrementar si mayor igual a 0
        let contadorNuevo = parseInt(contador) + 1;
        boton.querySelector("#cant-items").innerHTML = contadorNuevo;
      }
    };
  });

  btnMenos.forEach((elemento) => {
    elemento.onclick = (btn) => {
      btn.preventDefault();
      let boton = btn.target.parentElement.parentElement;
      let contador = boton.querySelector("#cant-items").innerHTML;
      if (contador > 0) {
        //? Previene cantidades negativas
        let contadorNuevo = parseInt(contador) - 1;
        boton.querySelector("#cant-items").innerHTML = contadorNuevo;
      }
    };
  });
}
//**********************  END: FUNCIONALIDAD DE BOTON MAS Y MENOS  *********************/

//*********************  START: BOTON DE AGREGAR A CARRITO COMPRAS  *********************/
let shoppingCart = [];

//Agrega listeners a los botones "Add"
function addBtnListener() {
  let btn = document.querySelectorAll(".btn-card-custom");
  btn.forEach((elemento) => {
    elemento.onclick = (btn) => {
      let tipoComida =
        btn.target.parentElement.parentElement.getAttribute("id");
      let comida = btn.target.parentElement.getAttribute("id");

      let cantidadProductos =
        btn.target.previousElementSibling.querySelector(
          "#cant-items"
        ).innerHTML;
      addToCount(cantidadProductos); //Agrega cantidad al logo del shopping cart
      addItemToCart(tipoComida, comida, cantidadProductos); //pasa informacion del objeto que se agregara
    };
  });
}
//Agrega catnidades al logo del shopping cart
function addToCount(cantidadProductos) {
  let cartCount = document.querySelector("#cart-count");
  let newCartCount =
    parseInt(cartCount.innerHTML) + parseInt(cantidadProductos);
  cartCount.innerHTML = newCartCount;
}

//Agrega items al listado del shopping cart y pasa informacion necesaria
function addItemToCart(tipoComida, comida, cantidadProductos) {
  let data = dataTipoComida[tipoComida][comida];

  {
    data.cantidad = cantidadProductos;
    shoppingCart.push(dataTipoComida[tipoComida][comida]); //Agrega item al array del carrito de compras
    let shoppingCartItem = document.getElementById("shopping-cart");
    //TODO if para verificar si el producto ya esta en carrito, si esta, agregar la cantidad solamente
    //TODO puedo usar un foreach para revisar que no haya nada con el mismo nombre en el shopping cart
    //Append html, con informacion del item, al carrito de compras
    $(".offcanvas-header").append(`
          <div class="shopping-cart">
            <div class="d-flex shopping-cart__item">
              <div class="shopping-cart__item--container">
                <img
                  src="${data.source}"
                  alt="imagen del producto"
                  class="shopping-cart__item--image"/>
                  <h5 class="name">${data.nombre}</h5>
                <div class="information">
                  <h3 id="cant-items-cart" class="detail">Cant: ${
                    data.cantidad
                  }</h3>
                  <h3 id="precio-items-total" class="detail">S/.${
                    data.precio * data.cantidad
                  }</h3>
                </div>
              </div>
              <button id="btn-remove-item" type="button" class="btn btn-remove-item" onclick="removeItemsFromCart()">X</button>
            </div>
          </div>
      `);
    totalToPay(data.precio, data.cantidad);
  }
}
function totalToPay(precio, cantidad) {
  let totalActual = document.getElementById("total-to-pay").innerHTML;

  let nuevoTotal = parseInt(totalActual) + precio * cantidad;

  document.querySelector("#total-to-pay").innerHTML = nuevoTotal;
}

//**********************  END: BOTON DE AGREGAR A CARRITO COMPRAS  *********************/

//******************  START: BOTON DE BORRAR ITEM DE CARRITO COMPRAS  ******************/

function removeItemsFromCart() {
  console.log(document.getElementsByClassName("btn-remove-item"));
  let itemToRemove = document.querySelectorAll(".btn-remove-item");
  itemToRemove.forEach((elemento) => {
    elemento.onclick = (btn) => {
      let cantToReduce =
        btn.target.previousElementSibling.lastElementChild.firstElementChild.innerHTML.replace(
          "Cant: ",
          ""
        );
      //? Restar items del contador del Carrito de Compras
      addToCount(parseInt(cantToReduce) * -1);

      //? Restar del total a pagar luego de eliminar un item
      let precio =
        btn.target.previousElementSibling.lastElementChild.lastElementChild.innerHTML.replace(
          "S/.",
          ""
        );
      console.log(precio);
      totalToPay(parseInt(precio) * -1, 1);
      btn.target.parentElement.parentElement.remove();
    };
  });
  // itemToRemove.forEach(
  //   (itemToRemove.onclick = (btn) => {
  //     btn.target.parentElement.parentElement.remove();
  //   })
  // );
}

//******************  END: BOTON DE BORRAR ITEM DE CARRITO COMPRAS  ********************/
//TODO MODIFICAR CANTIDADES DENTRO DEL CARRITO DE COMPRAS
