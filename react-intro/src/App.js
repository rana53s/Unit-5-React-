import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android", "balckbery", "iphone", "window phone"];
  const mobiles = ["samsung", "Htc", "MI", "Apple"]
  return (
    <div className="App">
      <h1>Mobile operating sytem</h1>
      <ul> 
        {os.map((el) => (
          <li>{ el}</li>
        ))}
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul> 
        {mobiles.map((el) => (
          <li>{ el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
