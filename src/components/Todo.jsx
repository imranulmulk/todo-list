import React, { useState } from "react";
import "./todo.css";
import Img from "../assets/img.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [item, setItem] = useState([]);

  const getTodoInput = (e) => {
    const data = e.target.value;
    setTodoInput(data);
  };
  //   ADD items
  const addItem = () => {
    if (!todoInput) {
    } else {
      setItem([...item, todoInput]);
      setTodoInput("");
    }
  };
  // DELETE items
  const deleteItem = (id) => {
    const updatedData = item.filter((elem, ind) => {
      return ind != id;
    });

    setItem(updatedData);
  };
  return (
    <div>
      <div className="main">
        <div className="image">
          <img src={Img} alt="image" />
        </div>
        <h3>Add your Todos</h3>
        {/* TODO input */}
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter your todo"
            value={todoInput}
            onChange={getTodoInput}
          />
          <AiOutlinePlusCircle
            title="Add item"
            size={40}
            className="plus"
            onClick={addItem}
          />
        </div>
        {/* Todolist */}
        <div className="todo-list">
          {item.map((elem, ind) => {
            return (
              <div className="todo-item" key={ind}>
                <h3>{elem}</h3>
                <BsTrash3
                  title="Delete item"
                  size={32}
                  className="trash"
                  onClick={() => deleteItem(ind)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
