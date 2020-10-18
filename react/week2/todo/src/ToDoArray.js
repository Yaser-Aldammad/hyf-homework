import React, { useState } from "react";

const toDosList = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

const ToDosArr = () => {
  const [toDos, setToDos] = useState(toDosList);
  const [isChecked, setIsChecked] = useState(false);

  const onChangeHandle = (id) => {
    const completedItem = toDos.map((elem) => {
      setIsChecked(true);
      if (elem.id === id) {
        elem.isChecked = !elem.isChecked;
      }
      console.log(elem);
      return elem;
    });
    setToDos(completedItem);
  };
  console.log(isChecked);

  const clickToAdd = () => {
    const arryLen = toDos.length;
    console.log(arryLen);
    const newToDo = {
      id: arryLen + 1,
      description: "random to do",
    };
    const newArray = toDos.concat(newToDo);
    setToDos(newArray);
  };
  console.log(toDos);

  const deleteItem = (id) => {
    const deletedItem = toDos.filter((todo) => {
      return todo.id !== id;
    });
    console.log(deletedItem);

    setToDos(deletedItem);
  };

  return (
    <div>
      {toDos.length === 0 && <div>no items </div>}

      {toDos.map((todo) => {
        return (
          <div>
            <span className={todo.isChecked ? "complete" : ""}>
              {todo.id} -{todo.description}
            </span>

            <input type="checkbox" onChange={() => onChangeHandle(todo.id)} />
            <button onClick={() => deleteItem(todo.id)}>Delete</button>
          </div>
        );
      })}

      <button onClick={clickToAdd}>Add to do</button>
    </div>
  );
};

export default ToDosArr;
