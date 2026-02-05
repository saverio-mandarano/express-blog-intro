const express = require("express");
const app = express();
const port = 3000;

//attivazione della cartella public per uso file statici
app.use(express.static("public"));

app.get("/", (req, res) => {
  //creo oggetto js da inviare nella res
  const person = {
    name: "Ted",
    lastname: "Lasso",
    img: "http://localhost:3000/images/ciambellone.jpeg",
  };

  //   res.send(`Server del mio blog`);
  res.type("json").send(person);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
