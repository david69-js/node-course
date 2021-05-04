if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}
const app = require('http').createServer((req, res) => res.write('Hello'))
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
