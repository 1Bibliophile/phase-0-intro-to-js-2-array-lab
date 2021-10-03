// Write your solution here!
const cats = []
//const appendCats = []
const prependCats = []
const removeLastCats = []
const removeFirstCats = []

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');


function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

const appendCats = [...cats, "Broom"]
  
/*
function prependCat(name){
    return prependCats = [name, ...cats]
}

function removeLastCat(){
    removeLastCats = cats.slice()
    return removeLastCats.pop()
}

function removeFirstCat(){
    removeFirstCats = cats.slice()
    return removeFirstCats.shift()
}
*/

//appendCat("Broom")
//prependCat("Arnold")