import React from "react";

const TopHeader = (props) => {
  const { text } = props;

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
export default TopHeader;
