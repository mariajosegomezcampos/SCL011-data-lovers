

/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window



window.filter = {
  
  species: (data,condition) =>{
    const speciesResult = data.filter(element => {
      return element.species == condition;
    });
    return speciesResult;
  }

}

window.sort = {
 order: (data,sortOrder) =>{
   if (sortOrder=="az"){
     const sortData = data.sort((a,b)=>{
       return a.name.localeCompare(b.name);
     })
     return sortData;
   }
   else {
     const sortDataZ = data.sort((a,b)=>{
       return b.name.localeCompare(a.name);
     })
     return sortDataZ;        
   }
 } 
}
