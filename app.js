
// Import del framework di express
const express = require("express");

const app = express();

const port = 3000;

// Middleware per servire file statici
app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Richiesta arrivata su /");
    res.send("<h1>Server del mio Blog</h1>")
});


app.get("/bacheca", (req, res) => {

    const posts = [
    {
        title: "Ciambellone",
        image: "http://localhost:3000/images/ciambellone.jpeg",
        tags: ["", "", ""]
    },
    {
        title: "Cracker Barbabietola",
        image: "http://localhost:3000/images/cracker_barbabietola.jpeg",
        tags: ["", "", ""]
    },
    {
        title: "Pane fritto dolce",
        image: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
        tags: ["", "", ""]
    },
    {
        title: "Pasta Barbabietola",
        image: "http://localhost:3000/images/pasta_barbabietola.jpeg",
        tags: ["", "", ""]
    },
    {
        title: "Torta Paesana",
        image: "/images/torta_paesana.jpeg",
        tags: ["", "", ""]
    }
];
    // Invio della risposta con il json relativo
    res.json( posts );
});


// Ascolto della porta
app.listen(port, () => {
    console.log(`Server del Blog attivo su http://localhost:${port}`)
});
