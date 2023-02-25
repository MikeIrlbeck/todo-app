import logo from './logo.svg';
import './App.css';

function App() {
  const addItem = () => {
    console.log('hello add');
  };
  const deleteItem = () => {
    console.log('hello delete');
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
      <button onClick={addItem}>Add</button>
      <h2>Item</h2>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default App;
