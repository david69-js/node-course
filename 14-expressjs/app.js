const express = require('express')
const app = express();
app.use(express.static('./10-cargar-files/public'));
app.listen(3000);
console.log('Express iniciado')