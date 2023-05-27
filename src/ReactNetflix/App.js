import { useState } from "react";
import "./App.css"

export default function App() {
  // Rendering lists
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((products) => (
    <li key={products.id} style={{ color: products.id <= 1 ? "red" : "blue" }}>
      {products.title}
    </li>
  ));

  //Responding to events
  function handleClick() {
    alert("You clicked me!");
  }

  // Updating the screen Using "useState"
  const [count, setCount] = useState(0);
  function handleClickOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      
      <div title="Rendering lists">
        <ul>{listItems}</ul>
      </div>

      <button onClick={handleClick}>Click me</button>

      <button onClick={handleClickOne}> Clicked {count} times </button>

      {/* use Outside function */}
      <MyButton Count={count} onClick={handleClickOne} />
    </div>
  );
}

function MyButton({ Count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {Count} times
    </button>
  );
}