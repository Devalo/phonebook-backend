const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Person = require('./models/person');


app.use(express.json());
app.use(cors());
app.use(express.static('build'));
app.use(morgan(':method test :status :response-time ms - :res[content-length] :body'))



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
  Person.find({}).then(persons => {
    res.json(persons);
  });

});

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      next(err);
    });



});

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(err => {
      next(err);
    });
  res.status(204).end();
});

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body;

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(req.params.id, person, {new: true})
    .then(updated => {
      res.json(updated)
    })
    .catch(err => next(err));
});

const generateId = () => {
  const randomId = Math.floor(Math.random() * 1000) + 1;
  return randomId;
}

app.post('/api/persons', (req, res) => {
  const body = req.body;
  if (body.name === undefined || body.number === undefined) {
    return res.status(400).json({
      error: "Incorrect/missing fields"
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number

  });

  person.save().then(entry => {
    res.json(entry)
  });

});

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });

const errorHandler = (error, req, res, next) => {
  console.log(error.message);

  if (error.name === 'CastError') {
    return res.status(400).send({error: 'malformatted id'});
  }
}


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
