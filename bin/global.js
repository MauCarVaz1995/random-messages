#!/usr/bin/env node
//Elemento que se ejecuta dentro del sistema bash

//Crear variable para requerir alo que acabo de crear dentro de mi paquete
let random = require("../src/index");

//Con esto se ejecuta en la terminal
random.randomMsg();
