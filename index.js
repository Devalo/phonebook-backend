const express = require('express');
const app = express()

app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Stephan",
    number: "1234",
  },
  {
    id: 2,
    name: "Arthas",
    number: "4321"
  },
  {
    id: 3,
    name: "Doomtrader",
    number: "98432"
  }
]

app.get('/', (req, res) => {
  res.send("Api");
});

app.get('/api/persons', (req, res) => {
  res.json(persons);

});




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
