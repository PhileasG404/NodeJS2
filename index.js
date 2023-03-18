const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<a href="/ma-page">Cliquez-ici</a>');
})

app.get('/ma-page', (req, res) => {
  res.send('<form action="/new-fichier" method="GET"><input name="mon_input" type="text"></input></form>')
})

app.get('/new-fichier', (req, res) => {
  const fs = require('fs');
  const content = req.query.mon_input;
  const date = new Date();
  const heure = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const jour = date.getDate();
  const mois = Math.floor(date.getMonth()+1);
  const ans = date.getFullYear();
  const time= `${ans}_le_${jour}_${mois}_à_${heure}h_${min}min_${sec}sec`;
  try {
      fs.writeFileSync('fichiers_test/test_en_'+time+'.txt', content);
      res.send("Fichier créé !");
  } catch (err) {
      console.error(err);
      res.send("Echec de création du fichier.");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})