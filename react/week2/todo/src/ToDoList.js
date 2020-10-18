import React from "react";
import TopHeader from "./Header";
import ToDosArr from "./ToDoArray";

const ToDoList = (props) => {
  const { headertext } = props;
  return (
    <div>
      <TopHeader text={headertext} />

      <ToDosArr />
    </div>
  );
};
export default ToDoList;
