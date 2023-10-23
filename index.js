// Write your solution here!

let cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}


function appendCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.unshift(name)
    return copyOfCats
}

function removeLastCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.pop(name)
    return copyOfCats
}

function removeFirstCat(name) {
    let copyOfCats = [...cats];
    copyOfCats.shift(name)
    return copyOfCats
}