//Data para web
const dataBase = [
  {
    nombre: "Omelette de Jamon",
    id: 1,
    precio: 10.5,
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
    precio: 12,
    descripcion:
      "Huevos revueltos con tomate concasse, queso parmesano rallado y aceite de oliva. ",
    source: "./assets/img/huevos_toscanos.jpeg",
  },
];

//Variables para funciones
const cardSize = "18rem";
const cardColSize = "col-xl-3";

//elementos del DOM
const productos = document.getElementById("productos");

//instrucciones
const crearDiv = document.createElement("div");

//funciones de elementos
const createCards = () => {
  const cardContainer = productos.appendChild(document.createElement("div"));
  cardContainer.classList.add("row", "container-fluid");

  //crear cards de bootstrap
  for (let loop = 0; loop < dataBase.length; loop++) {
    const cards = cardContainer.appendChild(document.createElement("div"));
    cards.classList.add(cardColSize);
    //contenedor de bootstrap para card
    const cardItem = cards.appendChild(document.createElement("div"));
    cardItem.classList.add("card");
    cardItem.style.width = cardSize;
    //img
    const cardImage = cardItem.appendChild(document.createElement("img"));
    cardImage.classList.add("card-img-top");
    cardImage.setAttribute("src", dataBase[loop]["source"]);

    // Inicio de Crear card-body y elementos dentro
    const cardBody = cardItem.appendChild(document.createElement("div"));
    cardBody.classList.add("card-body", "btn-custom");
    cardBody.setAttribute("id", "card-body");

    const cardTitle = cardBody.appendChild(document.createElement("h5"));
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = dataBase[loop]["nombre"];

    const cardText = cardBody.appendChild(document.createElement("p"));
    cardText.classList.add("card-text");
    cardText.innerHTML = dataBase[loop]["descripcion"];
    const cardButton = cardBody.appendChild(document.createElement("a"));
    cardButton.classList.add("btn", "btn-primary");
    cardButton.innerHTML = "Go Somewhere";

    //fin de crear card-body y elementos otros
  }
};
createCards();
