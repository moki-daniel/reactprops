
import './App.css';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <h1> Hello World</h1>
      <Product
      name="Flash Disk" 
      description="Amazon Flash disk" 
      price={10}
      />
      <Product
      name="shirt" 
      description="Amazon V shirt" 
      price={55}
      />
      <Product
      name="iphone" 
      description="Amazon smart phone" 
      price={1000}
      />
    </div>
  );
}

export default App;
