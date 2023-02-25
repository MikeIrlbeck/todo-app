import React from 'react';

const Item = () => {
  const deleteItem = () => {
    console.log('hello delete');
  };
  return (
    // react fragment

    <>
      <h2>Item</h2>
      <button onClick={deleteItem}>Delete</button>
    </>
  );
};

export default Item;
