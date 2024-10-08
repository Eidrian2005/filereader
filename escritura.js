const fs = require("fs");
const filePatch = "./archivo2.txt";

const contenido = "este es el nuevo contenido del archivo2.";

fs.writeFile(filePatch, contenido, "utf8", (err) => {
    if (err) {
        console.error("Error al escribir el archivo:",  err);
        return;
    }
    console.log("el archivo ha sido sobreescrito con exito");
});
