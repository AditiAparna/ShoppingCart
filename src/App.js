import './App.css';
import {NavBar, selectedCategory} from './Components/navBar';
import ProductFilter from './Components/productFilter';
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      {console.log(selectedCategory)}
      <Header />
      <div style={{display: 'flex',flexDirection:'row', paddingTop: '20px'}}>
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
