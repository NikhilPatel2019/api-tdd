var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const todos = [
    { id: 1, name: 'Buy groceries', completed: false },
    { id: 2, name: 'Walk the dog', completed: true },
];

// GET /todos
router.get('/', function(req, res, next) {
  res.json(todos);
});

// GET /todos/:id
router.get('/:id', function(req, res, next) {
  const foundTodo = todos.find(todo => todo.id === parseInt(req.params.id));

  if(!foundTodo) {
    return next(createError(404, 'Todo not found'));
  }

  res.json(foundTodo);
})

// POST /todos
router.post('/', function(req, res, next) {
  const { name } = req.body;

  if(typeof name !== 'string' || name.trim() === '') {
    return next(createError(422, 'Invalid todo name'));
  }

  const newTodo = {
    id: todos.length + 1,
    name,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

module.exports = router;
