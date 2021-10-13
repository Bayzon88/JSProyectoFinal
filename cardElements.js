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
  },
  cena: {
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
          <p>${data[elemento].precio}</p>
          <a href="" id="btn-menos" class="btn-menos">
          <i class="far fa-minus-circle"></i>
          </a>
          <p class="cant-items" id="cant-items">0</p>
          <a href="" id="btn-mas" class="btn-mas">
          <i class="far fa-plus-circle"></i>
          </a>
          </div>
          <a class="btn btn-primary btn-card-custom" >Add</a>
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
      addToCount(cantidadProductos);
      addItemToCart(tipoComida, comida, cantidadProductos);
    };
  });
}

function addToCount(cantidadProductos) {
  let cartCount = document.querySelector("#cart-count");
  let newCartCount =
    parseInt(cartCount.innerHTML) + parseInt(cantidadProductos);
  cartCount.innerHTML = newCartCount;
}

function addItemToCart(tipoComida, comida, cantidadProductos) {
  if (
    !shoppingCart.some(
      (elementoComida) => elementoComida == dataTipoComida[tipoComida][comida]
    )
  ) {
    let data = dataTipoComida[tipoComida][comida];
    data.cantidad = cantidadProductos;
    shoppingCart.push(dataTipoComida[tipoComida][comida]);
    let shoppingCartItem = document.getElementById("shopping-cart");
    console.log(shoppingCartItem);

    $(".offcanvas-header").append(`
    <div class="shopping-cart ">
    <div class="d-flex shopping-cart__item ">
        <img src="${
          data.source
        }" alt="imagen del producto" class="shopping-cart__item--image" />
        <h5>${data.nombre}</h5>
        <div class="d-flex">
          <h3>${data.cantidad}</h3>
          <h3>x</h3>
          <h3>${data.precio}</h3>
          <h3>:</h3>
          <h3>${data.precio * data.cantidad}</h3>
        </div>
        <button type="button">X</button>
      </div>
    </div>
    `);

    console.log("crear item");
    console.log(shoppingCart);
  } else {
    console.log("agregar item");
  }

  // console.log(tipoComida);
  // console.log(comida);
}

//TODO CREAR BOTON QUE AGREGUE EL ITEM AL CARRITO DE COMPRAS
//**********************  END: BOTON DE AGREGAR A CARRITO COMPRAS  *********************/

//TODO BOTON EN NAVBAR(CARRITO), AL HACER CLICK RENDERIZAR LOS ITEMS DEL CARRITO DE COMPRAS (JSON.LOCALSTORAGE)
//TODO MODIFICAR CANTIDADES DENTRO DEL CARRITO DE COMPRAS
//TODO ELIMINAR ITEMS DEL CARRITO DE COMPRAS
