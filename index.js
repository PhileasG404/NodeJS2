const { time, timeStamp } = require('console');
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.set('views',  __dirname + "/views"); //Quel est le dossier dans lequel on range les views
app.set('view engine', 'mustache'); // Variable de config.
app.engine('mustache', mustacheExpress());// Quest-ce que Mustache ? => instance de mustacheExpress

app.get('/', function(request, response)  {
  response.render('mon-template',{MyName: "Phileas"});
});

//app.get('/ma-page', (req, res) => {
//  res.send('<form action="/new-fichier" method="GET"><input name="mon_input" type="text"></input></form>')
//})

//app.get('/new-fichier', (req, res) => {
//  const content = req.query.mon_input;
//  const date = new Date();
//  const heure = date.getHours();
//  const min = date.getMinutes();
//  const sec = date.getSeconds();
//  const jour = date.getDate();
//  const mois = Math.floor(date.getMonth()+1);
//  const ans = date.getFullYear();
//  const time= `${ans}_le_${jour}_${mois}_à_${heure}h_${min}min_${sec}sec`;
//  try {
//      fs.writeFileSync('fichiers_test/test_en_'+time+'.txt', content);
//      res.send("Fichier créé !");
//  } catch (err) {
//      console.error(err);
//      res.send("Echec de création du fichier.");
//  }
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})