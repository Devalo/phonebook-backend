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


app.get('/info', (req, res) => {
  let entriesCount = Object.keys(persons).length;
  console.log(entriesCount);
  res.send(`<p>Phonebook has info for ${entriesCount} people</p>
            <p>${Date()}</p>`);
})

app.get('/api/persons', (req, res) => {
  res.json(persons);

});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});




const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
