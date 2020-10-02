const Joi = require("joi");
const express = require("express");
const helmet = require('helmet');
const morgan = require('morgan')
const app = express();
const log = require('./logger');
const auth = require('./authentication');

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(log);
app.use(auth);
app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan is enabled');
}


const courses = [
  { id: 1, name: "node" },
  { id: 2, name: "python" },
  { id: 3, name: "Ruby" },
];
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course you are looking for was not found");
  res.send(course);
});

app.post("/api/courses/", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };

  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  //look up the course
  // if not existing, return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course you are looking for was not found");

  // validate
  // if invalid, return 400 bad request
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //update course
  // Return the updated course

  course.name = req.body.name;
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  // look up the course
  // not existing, return 404 error
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course you are looking for was not found");

  // delete the record
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
  // Return the same course
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

// Using an environment variable to set the port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port ${port}.....`);
});
