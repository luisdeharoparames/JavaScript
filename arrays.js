const array = [
 "Patty O’Furniture",
 "Paddy O’Furniture",
 "Olive Yew",
 "Aida Bugg",
 "Maureen Biologist",
 "Teri Dactyl",
 "Peg Legge",
 "Allie Grater",
 "Liz Erd",
 "A. Mused",
 "Constance Noring",
 "Lois Di Nominator"
];

//  let arrayPractica = [
//      ["Hola","Adios","Que tal"],
//  ];
//  console.log(arrayPractica[0][2]);

let juegos = ["Zelda","Mario","Chrono","Zelda"];
// // console.log(juegos.length);
// // console.log(juegos[juegos.length - 1]);

/*
creo un nuevo array para guardar lo que no esten repetido
recorro el array juegos
si no esta el elemento que itero lo meto el el array  nuevo
*/

let nuevosJuegos = [];
juegos.forEach(e => {
    if(!nuevosJuegos.includes(e)){
        nuevosJuegos.push(e);
    }
})
//console.log(nuevosJuegos);
//console.log(new Set(juegos))
const juegosUnicos = Array.from(new Set(juegos))
//console.log(juegosUnicos)

const users = [
    {name: "pepe"},
    {name: "antonio"},
    {name: "maria"},
    {name: "pepe"},
    {name: "luis"},
]
//console.log(new Set(users))
//Segun el mes que sea 
const user1 = {name: "pepe"} // espacio memoria 73
const user2 = {...user1} // user2 tiene el mismo espacio en memoria (73)

user2.name = "manolo"

console.log({user1, user2})

const num1 = 1
let num2 = num1
num2 = 2

console.log({num1, num2})

console.log(user1 === user2)
console.log(num1 === num2)

/* const namesWithP = []
array.forEach(e => {
    if(e.includes("P")){
        namesWithP.push(e)
    }
}) */


// juegos.forEach((elemento,indice,arr) => {
//     console.log({elemento,indice,arr});
// })

// let nuevoPush = juegos.push("CACA");
// console.log({nuevoPush,juegos});
// nuevoPush = juegos.unshift("Hola que tal");
// console.log({nuevoPush,juegos});

// let juegoBorrado = juegos.pop();
// console.log(juegoBorrado);
// console.log({juegos});

// let posicion = 1;

// let juegosBorrados = juegos.splice(posicion, 2);
// console.log({juegosBorrados});
// console.log({juegos});

// let Chrono = juegos.indexOf("chrono");
// console.log(Chrono);

let personaje = {
    nombre: "Tony",
    apellido: "Stark",
    cords: {
        lat:11111,
        lng:22222
    },
    trajes: ["Mark 1", "Mark 2"],
    nombre: "pepe"
};

console.log(personaje);






/* const namesWithP = []
array.forEach(e => {
    if(e.includes("P")){
        namesWithP.push(e)
    }
}) */

// const namesWithP = array.filter((e) => e.includes("P")).map((e) => ({ name: e, age: 0 }) )
// const isNamesWithZ = array.some((e) => e.includes("z"))
// const isNamesNotWithZ = array.every((e) => e.includes("z"))

// console.log({namesWithP, isNamesWithZ, isNamesNotWithZ})

// const num = 0;
// const str = "names"
// const stringNum = "1.1p"
// const type = typeof array;
// const numToString = String(num)
// console.log(typeof numToString)
// console.log(Number(stringNum))
// console.log(parseInt(stringNum))
// console.log(parseFloat(stringNum))
// console.log({type})
// if(typeof str === "number"){
//     console.log(`${str} is a number`)
// } else{
//     console.log(`${str} not a number`)
// }
// if(typeof str === "string"){
//     console.log(`${str} is a string`)
// }