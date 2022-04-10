import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import { IsState } from './interfaces';


function App() {
  const [people, setPeople] = useState<IsState['people']>([
    {
      name: 'Ashfika Lira',
      url: 'https://i.ibb.co/3hD5DDm/rsz-34703-1.jpg',
      age: 22,
      note: "Likes Music"
    }
  ]);


  return (
    <div className="App">
      <h1>Welcome to Keep Notes</h1>
      <Todo people={people}></Todo>
      <TodoList people={people} setPeople={setPeople}></TodoList>
    </div >
  );
}

export default App;