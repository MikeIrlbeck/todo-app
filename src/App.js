import React, { useState } from 'react';

import './App.css';
import { data } from './data';
import Item from './components/Item';
function App() {
  const [items, setItems] = useState(data);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: 'New todo',
      },
    ]);
  };

  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <button onClick={addItem}>Add</button>
      <Item></Item>
      <Item></Item>
      <section className='itemList'>
        {items.map((el) => {
          return <Item key={el.id} {...el}></Item>;
        })}
      </section>
      <button onClick={() => setItems([])}>Clear</button>
    </div>
  );
}

export default App;
