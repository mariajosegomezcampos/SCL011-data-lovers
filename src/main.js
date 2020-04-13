
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
// FUNCION MOSTRAR PERSONAJES 
const characters = document.getElementById("characters");
characters.addEventListener("click", ()=>{

contentWelcome.style.display="none"
select.style.display="block"
textoSelect.style.display = "block";
contenedorPersonajes.innerHTML = " ";

cards(data); 

});  

 //FUNCION FILTRAR
// 1 Le asigno un evento al select
// 2 defino mi condicion,que sera el valor que seleccione el usuario en el select 

filterSpecies.addEventListener('change', () => {
  let condition = filterSpecies.options[filterSpecies.selectedIndex].value;
  let speciesResult = window.filter.species(data,condition);
 //  console.log(speciesResult)
  contenedorPersonajes.innerHTML = " ";
 cards(speciesResult);
  });
 
  /* funcion orden */
 
  const orderSelector = document.getElementById("orderSelector");
  orderSelector.addEventListener('change', () => {
 
   let sortOrder = orderSelector.options[orderSelector.selectedIndex].value;
   let orderResult = window.sort.order(data,sortOrder);
 
  document.getElementById("printScreenCharacters").innerHTML="";
  const finalOrder = orderResult.map((show)=>{
 
      contenedorPersonajes.innerHTML += 
    `<div class ="card">
      <img src="${show.image}" alt="imgCharacter">
      <h3>${show.name}</h3>
     <p>${show.status}</p>
     <p>${show.gender}</p>
  </div>`
  });
  cards(finalOrder);
  });
 
 








