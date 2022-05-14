//Arreglo de strings para el random
const messages = [
    "Mauricio",
    "Daniela",
    "Isis",
    "Carolina",
    "Paola",
    "Yolanda",
    "Kevin",
    "Joselin"
];

//Función para hacer el random
const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg};