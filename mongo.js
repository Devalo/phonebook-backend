const mongoose = require('mongoose');

// mongodb+srv://fullstack:<password>@cluster0-qhn5k.mongodb.net/<dbname>?retryWrites=true&w=majority

if (process.argv.length < 3) {
  console.log("Please provide the password as an argument: node mongo.js <password>");
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@cluster0-qhn5k.mongodb.net/personsApp?retryWrites=true&w=majority`;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);


if (process.argv.length == 5){

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  console.log("storing...");

  person.save().then(result => {
    console.log(`Added ${process.argv[3]} number: ${process.argv[4]} to phonebook`);
    mongoose.connection.close();
  });

} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    mongoose.connection.close();
    });
  });

}

/*
*/