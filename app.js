// Import del framework di express
const express = require("express");

const app = express();

const port = 3000;

// Middleware per servire file statici
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("<h1>Server del mio Blog</h1>")
})





// ascolto della porta
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
