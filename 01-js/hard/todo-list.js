/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(defaultList = []) {
    this.list = defaultList;
  }

  add(todo) {
    this.list.push(todo);
  }

  remove(indexOfTodo) {
    this.list = this.list.filter((item, index) => index !== indexOfTodo);
  }

  update(index, updatedTodo) {
    for (let i = 0; i < this.list.length; i += 1) {
      if (i === index) {
        this.list[index] = updatedTodo;
      }
    }
  }

  getAll() {
    return this.list;
  }

  get(indexOfTodo) {
    return this.list[indexOfTodo] ?? null;
  }

  clear() {
    this.list = [];
  }
}

module.exports = Todo;
