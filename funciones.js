//Data para web
const dataBase = [
  {
    nombre: "omelette_jamon",
    id: 1,
    precio: 10.5,
    descripcion: "descripcion",
  },
  {
    nombre: "croissant_jamon",
    id: 2,
    precio: 12,
    descripcion: "descripcion",
  },
  {
    nombre: "avocado_toast",
    id: 3,
    precio: 10.5,
    descripcion: "descripcion",
  },
  {
    nombre: "panqueques",
    id: 4,
    precio: 10.5,
    descripcion: "descripcion",
  },
  {
    nombre: "empanada",
    id: 5,
    precio: 10.5,
    descripcion: "descripcion",
  },
];

//Variables para funciones
const cardSize = "18rem";

//elementos del DOM
const productos = document.getElementById("productos");

//instrucciones
const crearDiv = document.createElement("div");

//funciones de elementos
const createCards = () => {
  const cards = productos.appendChild(document.createElement("div"));

  //crear cards de bootstrap
  for (const items of dataBase) {
    //contenedor de bootstrap para card
    const cardItem = cards.appendChild(document.createElement("div"));
    cardItem.classList.add("card");
    cardItem.style.width = cardSize;
    //img
    cardItem
      .appendChild(document.createElement("img"))
      .classList.add("card-img-top");

    // Inicio de Crear card-body y elementos dentro
    const cardBody = cardItem.appendChild(document.createElement("div"));
    cardBody.classList.add("card-body");
    cardBody.setAttribute("id", "card-body");

    const cardTitle = cardBody.appendChild(document.createElement("h5"));
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = "Card Title";

    const cardText = cardBody.appendChild(document.createElement("p"));
    cardText.classList.add("card-text");
    cardText.innerHTML =
      "Some quick example text to build on the card title and make up the bulk of the cards content.";

    const cardButton = cardBody.appendChild(document.createElement("a"));
    cardButton.classList.add("btn", "btn-primary");
    cardButton.innerHTML = "Go Somewhere";

    //fin de crear card-body y elementos otros
  }
};
createCards();
