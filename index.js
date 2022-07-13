const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;
const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

// request the users with an email

app.post("/userbyemail", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === "") {
      res.status(400).send("Please provide an email address!");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// get all the users from DB
app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get user with all todo lists

app.get("/users/:id", async (req, res, next) => {
  try {
    const userId = req.params.id; //request params
    //find by PK
    const theUser = await User.findByPk(userId, {
      include: { model: TodoList, include: TodoItem },
    });
    if (!theUser) {
      res.status(404).send("User not found");
    } else {
      res.send(theUser);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//implement a get endpoint to show all todolists
app.get("/todolist", async (req, res, next) => {
  try {
    const todolist = await TodoList.findAll({ include: { model: TodoItem } });
    res.json(todolist);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//implement a post handler for the "todoLists"

app.post("add/todolist", async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const newList = await TodoList.create({ id, name });
    res.send(newList);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//patch request for todolist
app.patch("todolist/:listId", async (req, res, next) => {
  try {
    const { listId } = req.params;
    const { name } = req.body;
    const updatedlist = await TodoList.findByPk(listId);
    const updated = await updatedlist.update({ name });
    res.send(updated);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//axios post ("/signup", {name: 'Katie', email:'kpearson@gmail.com'})

app.post("/signup", async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.send(newUser);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

//update user
app.patch("/user/:id", async (req, res, next) => {
  try {
    //get the id from params
    const { id } = req.params;

    //get the infor from the body
    const { name, phone } = req.body;
    //find the user to updata
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    }
    //update the user
    const updated = await userToUpdate.update({ name, phone });

    res.send(updated);

    //send a response
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//delete user

app.delete("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await userToDelete.destroy();
    res.send("User  Deleted");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

app.listen(PORT, () => console.log("Listening on port 4000"));
