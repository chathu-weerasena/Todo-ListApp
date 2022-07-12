const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItems = require("./models").todoItem;

const listwithUser = async () => {
  try {
    const lists = await TodoList.findAll({ raw: true });
    console.log(lists);
  } catch (e) {
    console.log(e.message);
  }
};

const userById = async (id) => {
  try {
    const user = await TodoItems.findByPk(id);
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};
userById(2);
//listwithUser();
