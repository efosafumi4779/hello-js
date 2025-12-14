require("dotenv").config();

const express = require('express')
const app = express()
const port = process.env.PORT;


app.use(express.json());


app.get('/' , (req, res) => res.send('My Week 2 API'));

app.post('/user', (req, res) => {
  const {name, email} = req.body;
 if (!name || !email) return res.status(400).json({error : 'Missing fileds'});
 // Stimulate DB Save
 res.status(201).json({message: 'Hello, ${name} (${email})'});
});


app.get('/user/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'User[id] profile' });
});

//Dynamic port: falls back to 3000 if PORT env var not set
const PORT = process.env.POST || 3000;
app.listen(PORT, () => console.log('API live on port ${PORT}'));




