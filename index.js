const express = require("express");
const app = express();
const port = 3000;

//attivazione della cartella public per uso file statici
app.use(express.static("public"));

// rotta index APP
app.get("/", (req, res) => {
  res.send(`<h1>Server del mio blog</h1>`);
});

// rotta bacheca APP
app.get("/bacheca", (req, res) => {
  // Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo,
  // contenuto, immagine e tags (tags è un array di stringhe)
  const posts = [
    {
      id: 1,
      title: `Ciambellone`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/ciambellone.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 2,
      title: `Ciambellone`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/ciambellone.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 3,
      title: `Ciambellone`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/ciambellone.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 4,
      title: `Ciambellone`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/ciambellone.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
    {
      id: 5,
      title: `Ciambellone`,
      content: `Si presenta come una torta forata al centro, o con la forma di uno sfilatino di pane.
        Per prepararlo bisogna mescolare uova, zucchero, latte, fecola di patate, lievito e limone, 
        versare l'amalgama nella teglia da ciambellone, cospargere di zucchero il dolce e infornarlo.
        La ciambella può essere insaporita con il liquore, il cacao, i canditi o della frutta secca a piacere.`,
      image: `imgs/ciambellone.jpeg`,
      tags: [
        `uova`,
        `zucchero`,
        `latte`,
        `fecola di patate`,
        `lievito`,
        `limone`,
      ],
    },
  ];

  // ritorno res con json array di oggetti
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
