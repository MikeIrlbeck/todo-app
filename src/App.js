import logo from './logo.svg';
import './App.css';
import { data } from './data';
import Item from './components/Item';
function App() {
  const addItem = () => {
    console.log('hello add');
  };
  data.forEach((element) => {
    console.log(element.name);
  });
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
      <section>
        {data.map((el) => {
          return <Item key={el.id} {...el}></Item>;
        })}
      </section>
    </div>
  );
}

export default App;
