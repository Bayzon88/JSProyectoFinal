//Data para web
const dataDesayunos = [
  {
    nombre: "Omelette de Jamon",
    id: 1,
    precio: 10,
    descripcion: "Delicioso Omelette relleno de jamon y queso",
    source: "./assets/img/omelette_jamon.jpeg",
  },
  {
    nombre: "Croissant de Jamon",
    id: 2,
    precio: 12,
    descripcion: "Acompañado con jamón inglés.",
    source: "./assets/img/croissant_jamon.jpeg",
  },
  {
    nombre: "Avocado Toast",
    id: 3,
    precio: 10,
    descripcion:
      "Pan campesino de granos tostado servido con guacamole, huevo y champiñones encurtidos.",
    source: "./assets/img/avocado_toast.jpeg",
  },
  {
    nombre: "Panqueques",
    id: 4,
    precio: 10,
    descripcion:
      "Hechos en casa, acompañados con dos frutas a escoger servidos con miel de maple",
    source: "./assets/img/panqueques.jpeg",
  },
  {
    nombre: "Huevos Toscanos",
    id: 5,
    precio: 12,
    descripcion:
      "Huevos revueltos con tomate concasse, queso parmesano rallado y aceite de oliva. ",
    source: "./assets/img/huevos_toscanos.jpeg",
  },
];

const dataAlmuerzos = [
  {
    nombre: "Cagliari",
    id: 1,
    precio: 25,
    descripcion:
      "Pasta salteada con berenjena, un toque de aceite de oliva y ajos.",
    source: "./assets/img/cagliari.jpeg",
  },
  {
    nombre: "Club Sandwich",
    id: 2,
    precio: 32.0,
    descripcion: "El clasico de siempre",
    source: "./assets/img/club_sandwich.jpeg",
  },
  {
    nombre: "Avocado Toast",
    id: 3,
    precio: 10.5,
    descripcion:
      "Pan campesino de granos tostado servido con guacamole, huevo y champiñones encurtidos.",
    source: "./assets/img/avocado_toast.jpeg",
  },
  {
    nombre: "Panqueques",
    id: 4,
    precio: 10.5,
    descripcion:
      "Hechos en casa, acompañados con dos frutas a escoger servidos con miel de maple",
    source: "./assets/img/panqueques.jpeg",
  },
  {
    nombre: "Huevos Toscanos",
    id: 5,
    precio: 12.0,
    descripcion:
      "Huevos revueltos con tomate concasse, queso parmesano rallado y aceite de oliva. ",
    source: "./assets/img/huevos_toscanos.jpeg",
  },
];
const dataCenas = [
  {
    nombre: "Cagliari",
    id: 1,
    precio: 25,
    descripcion:
      "Pasta salteada con berenjena, un toque de aceite de oliva y ajos.",
    source: "./assets/img/cagliari.jpeg",
  },
  {
    nombre: "Club Sandwich",
    id: 2,
    precio: 32.0,
    descripcion: "El clasico de siempre",
    source: "./assets/img/club_sandwich.jpeg",
  },
  {
    nombre: "Avocado Toast",
    id: 3,
    precio: 10.5,
    descripcion:
      "Pan campesino de granos tostado servido con guacamole, huevo y champiñones encurtidos.",
    source: "./assets/img/avocado_toast.jpeg",
  },
  {
    nombre: "Panqueques",
    id: 4,
    precio: 10.5,
    descripcion:
      "Hechos en casa, acompañados con dos frutas a escoger servidos con miel de maple",
    source: "./assets/img/panqueques.jpeg",
  },
  {
    nombre: "huancaina",
    id: 5,
    precio: 15.0,
    descripcion:
      "Huevos revueltos con tomate concasse, queso parmesano rallado y aceite de oliva. ",
    source: "./assets/img/huevos_toscanos.jpeg",
  },
];

//Start of Card Functions
//Variables para funciones del Card
const cardSize = "15rem";
const cardColSize = [
  "col-xl-3",
  "col-lg-3",
  "col-md-6",
  "col-sm-6",
  "col-custom",
];
const cardContClass = ["row", "container", "container-custom"];

//elementos del DOM

//instrucciones
const crearDiv = document.createElement("div");

/*funciones de elementos, indicando tipo de producto 
y data de procedencia renderiza todos los cards*/
const createAllCards = (producto, data) => {
  const productos = document.getElementById(producto);
  const cardContainer = productos.appendChild(document.createElement("div"));
  cardContClass.forEach((container) => {
    cardContainer.classList.add(container);
  });

  //crear cards de bootstrap
  for (let loop = 0; loop < data.length; loop++) {
    const cards = cardContainer.appendChild(document.createElement("div"));
    cardColSize.forEach((clase) => {
      //clases variadas de bootstrap para responsive
      cards.classList.add(clase);
    });

    //contenedor de bootstrap para card
    const cardItem = cards.appendChild(document.createElement("div"));
    cardItem.classList.add("card");
    cardItem.style.width = cardSize;
    //img
    const cardImage = cardItem.appendChild(document.createElement("img"));
    cardImage.classList.add("card-img-top");
    cardImage.setAttribute("src", data[loop]["source"]);

    // Inicio de Crear card-body y elementos dentro
    const cardBody = cardItem.appendChild(document.createElement("div"));
    cardBody.classList.add("card-body");
    cardBody.setAttribute("id", "card-body");

    const cardTitle = cardBody.appendChild(document.createElement("h5"));
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = data[loop]["nombre"];

    const cardText = cardBody.appendChild(document.createElement("p"));
    cardText.classList.add("card-text");
    cardText.innerHTML = data[loop]["descripcion"];

    const seccionPrecios = cardBody.appendChild(document.createElement("div"));
    seccionPrecios.classList.add("precioProd");

    const precio = seccionPrecios.appendChild(document.createElement("p"));
    precio.innerHTML = "S/." + data[loop]["precio"];

    const menos = seccionPrecios.appendChild(document.createElement("a"));
    menos.setAttribute("href", "");
    menos.setAttribute("id", "btn-menos");
    menos.classList.add("btn-menos");
    menos
      .appendChild(document.createElement("i"))
      .classList.add("far", "fa-minus-circle"); //simbolo + del cardfooter

    const cantItems = seccionPrecios.appendChild(document.createElement("p"));
    cantItems.classList.add("cant-items");
    cantItems.innerHTML = 0;
    const mas = seccionPrecios.appendChild(document.createElement("a"));
    mas.setAttribute("href", "");
    mas.setAttribute("id", "btn-mas");
    mas.classList.add("btn-mas");
    mas
      .appendChild(document.createElement("i"))
      .classList.add("far", "fa-plus-circle"); //simbolo - del cardfooter
    const cardButton = cardBody.appendChild(document.createElement("a"));

    cardButton.classList.add("btn", "btn-primary", "btn-card-custom");
    cardButton.innerHTML = "Add";
    //fin de crear card-body y elementos otros
  }
};
createAllCards("desayunos", dataDesayunos);
createAllCards("almuerzos", dataAlmuerzos);

//End of Card Functions

//Funcionalidad de botones mas y menos
let btnMas = document.getElementsByClassName("btn-mas");
let btnMenos = document.getElementsByClassName("btn-menos");

Array.from(btnMas).forEach((eventoMas) => {
  eventoMas.onclick = (clickMas) => {
    clickMas.preventDefault();
    let contador = document.querySelector(".cant-items").innerHTML;
    let contadorNuevo = parseInt(contador) + 1;
    document.querySelector(".cant-items").innerHTML = contadorNuevo;
  };
});

Array.from(btnMenos).forEach((eventoMenos) => {
  eventoMenos.onclick = (clickMenos) => {
    clickMenos.preventDefault();
    let contadorMenos = document.querySelector(".cant-items").innerHTML;
    if (contadorMenos > 0) {
      let contadorNuevoMenos = parseInt(contadorMenos) - 1;
      document.querySelector(".cant-items").innerHTML = contadorNuevoMenos;
    }
  };
});
