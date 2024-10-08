const fs = require("fs");

fs.readFile("archivo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("contenido de arhivo:", data);
});