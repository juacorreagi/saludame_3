const express = require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.static('static'));

app.post('/hello', (req, res) => {
    res.send(`<h1>Hola ${req.body.name}!</h1>`)
});

app.listen(3000, () => console.log('Listening on port 3000!'));