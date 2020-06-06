const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(morgan(':method test :status :response-time ms - :res[content-length] :body'))


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

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);

  res.status(204).end();

});

const generateId = () => {
  const randomId = Math.floor(Math.random() * 1000) + 1;
  return randomId;
}

app.post('/api/persons', (req, res) => {
  const body = req.body;
  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "Incorrect/missing fields"
    });
  }
  
  const values = Object.values(persons);
  
  for (let i = 0; i < persons.length; i++){
    if (values[i].name === body.name){
      return res.status(400).json({
        error: 'name must be unique'
      });
    }
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }
  persons = persons.concat(person)

  console.log(person);
  res.json(person)

});

  morgan.token('body', function (req, res) { return JSON.stringify(req.body) });


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
