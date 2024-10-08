const readline = require('readline');
const fs = require("fs");
const filePatch = "./archivo2.txt";



const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
fs.writeFile(filePatch, answer, "utf8", (err) => {

    if (err) {
        console.error("Error al escribir el archivo:",  err);
        return;
    }
    console.log("el archivo ha sido sobreescrito con exito");
});


rl.close();
});






