body {
    font-family: "Open Sans", sans-serif;
    background-color: #F9FBFD;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body, h1, h2 {
    margin: 0;
    overflow: hidden;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul.marks li {
    width: 100px;
    height: 100px;
    position: absolute;
    transition: transform 2s;
    border-radius: 100%;
  }
  ul.marks li:nth-child(1) {
    background-color: red;
  }
  ul.marks li:nth-child(2) {
    background-color: blue;
  }
  ul.marks li:nth-child(3) {
    background-color: green;
  }
  ul.targets li {
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border: solid 1px;
    position: absolute;
    transition: box-shadow 0.3s;
    text-align: center;
    line-height: 100px;
  }
  ul.targets li.fulfilled {
    box-shadow: green 0px 0px 25px;
  }
  ul.targets li:nth-child(1) {
    top: 300px;
    left: 20px;
  }
  ul.targets li:nth-child(2) {
    top: 300px;
    left: 400px;
  }
  ul.targets li:nth-child(3) {
    top: 20px;
    left: 400px;
  }
  span {
      display: none;
  }
  
  @keyframes bounceIn {
      from,
      20%,
      40%,
      60%,
      80%,
      to {
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
  
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale3d(0.3, 0.3, 0.3);
      }
  
      20% {
        transform: translate(-50%, -50%) scale3d(1.1, 1.1, 1.1);
      }
  
      40% {
        transform: translate(-50%, -50%) scale3d(0.9, 0.9, 0.9);
      }
  
      60% {
        opacity: 1;
        transform: translate(-50%, -50%) scale3d(1.03, 1.03, 1.03);
      }
  
      80% {
        transform: translate(-50%, -50%) scale3d(0.97, 0.97, 0.97);
      }
  
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
      }
    }
  
  span.shown {
      display: block;
      animation-duration: 0.75s;
      animation-name: bounceIn;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
  // @ts-nocheck

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const span = document.querySelector("span");

const boxes = document.querySelectorAll("ul.marks li");

// remove random start postions from boxes
 for (let box of boxes) {
    box.style.left = 0;
    box.style.top = 0;
  }
// movement one by one function 
const translateOneByOne = () => {

  const redboxMovment = moveElement(redBox, { x: 20, y: 300 });
  const blueboxMovment = redboxMovment.then((move) =>
    moveElement(blueBox, { x: 400, y: 300 })
  );
  const greenboxMovment = blueboxMovment
    .then((move) => moveElement(greenBox, { x: 400, y: 20 }))



};
//translateOneByOne();


// movement all at once function 
const translateAllAtOnce = () => {
    moveElement(redBox, { x: 20, y: 300 });
     moveElement(blueBox, { x: 400, y: 300 });
     moveElement(greenBox, { x: 400, y: 20 });


};
translateAllAtOnce(); 
