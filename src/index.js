const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  console.log('hellooo');
  res.send('Hello World!')
})

app.post('/position', (req,res)=>{
    console.log(req.body);

    return res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})