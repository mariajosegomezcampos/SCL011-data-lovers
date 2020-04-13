
// //1.guardamos elementos para poder trabajar( guardar data)
const data = window.RICKANDMORTY.results;
//data filtrada

//Crear variables para los selectores 
const select = document.getElementById("selectores");
select.style.display = "none";

const textoSelect = document.getElementById("texto-select");
textoSelect.style.display = "none";

const contenedorPersonajes = document.getElementById("printScreenCharacters");
const filterSpecies = document.getElementById("filterSelector");
const contentWelcome = document.getElementById("content-welcome");

// FUNCION CARD Y MOSTARR 
function cards(data){
  data.forEach(show=>{
 
  contenedorPersonajes.innerHTML += 
     `<div class= "card">
       <img src="${show.image}" alt="">
       <h3>${show.name}</h3
       <p>${show.species}</p>
       <p>${show.status}</p>
       <p>${show.gender}</p>
        </div>`
    });  
  
  } 

  // FUNCION MOSTRAR PERSONAJES 
const characters = document.getElementById("characters");
characters.addEventListener("click", ()=>{

contentWelcome.style.display="none"
select.style.display="block"
textoSelect.style.display = "block";
contenedorPersonajes.innerHTML = " ";

cards(data); 

});  








