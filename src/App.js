import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';
import { data } from './data';
import Item from './components/Item';
function App() {
  const [items, setItems] = useState(data);

  const addItem = () => {
    setItems(data.push({ id: data.length + 1, name: 'New item' }));
  };
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>TODO LIST</h1>
      <button onClick={addItem}>Add</button>
      <Item></Item>
      <Item></Item>
      <section className='itemList'>
        {data.map((el) => {
          return <Item key={el.id} {...el}></Item>;
        })}
      </section>
    </div>
  );
}

export default App;
