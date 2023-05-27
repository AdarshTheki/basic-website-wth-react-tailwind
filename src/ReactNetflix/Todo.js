import React, { useState } from 'react';
// import Header from './components/Header';
import "./App.css";
// firebase : https://netflix-59621.web.app/
// API Key  : aef1d66a58269885e6bf92bc2e46ed15
// firebase login 
// firebase init 
// firebase deploy





function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk.","Take the rubbish out.", "qazi want to livestream today."]);
  const [input , setInput] = useState("");
  console.log("🔫", input);

  const addTodo = (event) => {
    // This will fire off when event we click the button.
    event.preventDefault();  // Will refresh stop 
    console.log("👽", "Im working!!!");
    setTodos([...todos, input]);
    setInput("");
  }

  fetch(`https://api.themoviedb.org/3/movie/550?api_key=aef1d66a58269885e6bf92bc2e46ed15`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
    async function funcName(url){
      const response = await fetch(url);
      var data = await response.json();
      console.log(data)
    }
    funcName('https://api.themoviedb.org/3/movie/550?api_key=aef1d66a58269885e6bf92bc2e46ed15');

  

  return (
    <div className='App'>
      <h1>Hello Clover Programming 🚀🚀</h1>
      <form>
        <input className='mx-3'  value={input} onChange={event => setInput(event.target.value)} />
        <button className='mx-3' disabled={!input} type='submit' onClick={addTodo}>Add TODO</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li className='mb-2'>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
