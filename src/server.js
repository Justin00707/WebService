const app = require('./app'); // Importez l'application Express
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Le serveur est opérationnel et écoute sur le port ${port}. Accédez-y localement ou via https://webservice-examenfinal.onrender.com`);
});
