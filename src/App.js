import './App.css';
import NavBar from './Components/navBar';
import ProductFilter from './Components/productFilter';
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: 'flex',flexDirection:'row'}}>
        <div className="sideNav">
          <NavBar />
        </div>
        <div className="productTile">
          <ProductFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
