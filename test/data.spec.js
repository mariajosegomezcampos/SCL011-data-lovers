global.window = global;
global.assert = require('chai').assert;
// require('../src/data/rickandmorty.js');
require('../src/data');
require('./data.spec.js');

describe('species', () => {

   const show = [
 
  { 
    
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",

   },

   {
    "name": "Aqua Morty",
    "status": "unknown",
    "species": "Humanoid",
  },

   { 
    "name": "Alien Morty",
    "status": "unknown",
    "species": "Alien",
   },

   ];
  it('debería ser una función', () => {
    assert.equal(typeof window.filter.species, 'function');
  });

  it('debería retornar "Rick Sanchez" al filtrar por species "Human"', () => {
    assert.deepEqual(window.filter.species(show,"Human"), [{"name": "Rick Sanchez",
    "status": "Alive","species": "Human",}]);

  });

  it('debería ser una función', () => {
    assert.equal(typeof window.filter.species, 'function');
  });
  it('debería retornar "Aqua Morty" al filtrar por species "Humanoid"', () => {
    assert.deepEqual(window.filter.species(show,"Humanoid"), [{"name": "Aqua Morty",
    "status": "unknown","species": "Humanoid",}]);
  
});

});
