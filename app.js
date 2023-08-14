const express = require('express')
const app = express()
const port =  3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  app.render('index.html')
})
app.get('/about', (req, res) => {
  app.render('about.html')
})
app.get('/contact-me', (req, res) => {
  app.render('contact-me.html')
})
app.all('*', (req, res) => {
  res.status(404).send('Page not found')
});

app.listen(port, () => {
  console.log('App listening to port 3000');
})