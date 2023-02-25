import React, { useState } from 'react';

import { data } from './data';
import Item from './components/Item';

const ItemList = () => {
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
    <>
      <button onClick={addItem}>Add</button>
      <section className='itemList'>
        {items.map((el) => {
          return <Item key={el.id} {...el}></Item>;
        })}
      </section>
      <button onClick={() => setItems([])}>Clear</button>
    </>
  );
};

export default ItemList;
