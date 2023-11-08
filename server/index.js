const express = require('express')
const app = express()
const router = require('./router');
const cors = require('cors');

const port = 3000

app.use(express.json());
app.use(cors());
app.use(express.static('../client'));
app.use(router);


app.listen(port, () => {
  console.log(`SkiList app listening on port ${port}`)
})

