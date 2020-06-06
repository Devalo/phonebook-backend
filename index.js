const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Person = require('./models/person');


app.use(express.json());
app.use(cors());
app.use(express.static('build'));
app.use(morgan(':method test :status :response-time ms - :res[content-length] :body'));



app.get('/', (req, res) => {
  res.send('Api');
});



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
      console.log(result);
      res.status(204).end();
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
  };

  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updated => {
      res.json(updated);
    })
    .catch(err => next(err));
});

app.post('/api/persons', (req, res, next) => {
  const body = req.body;
  if (body.name === undefined || body.number === undefined) {
    return res.status(400).json({
      error: 'Incorrect/missing fields'
    });
  }

  const person = new Person({
    name: body.name,
    number: body.number

  });

  person.save()
    .then(savedEntry => savedEntry.toJSON())
    .then(savedAndFormatted => {
      res.json(savedAndFormatted);
    })
    .catch(error => next(error));

});

morgan.token('body', function (req) { return JSON.stringify(req.body); });

const errorHandler = (error, req, res) => {
  console.log(error.message);

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }
};
app.use(errorHandler);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
