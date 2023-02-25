import React from 'react';

const Item = ({ name = 'Item' }) => {
  const deleteItem = () => {
    console.log('hello delete');
  };
  return (
    // react fragment

    <>
      <h2>{name}</h2>
      <button onClick={deleteItem}>Delete</button>
    </>
  );
};

export default Item;
