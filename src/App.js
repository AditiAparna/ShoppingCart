import './App.css';
import React from 'react';
import {NavBar} from './Components/navBar';
import ProductFilter from './Components/productFilter';
import Header from './Components/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      cartArray:[],
      badgeNumber: 0,
      dropDown: true,
    };
  };

  setCategory=(data)=>{
    this.setState({selectedCategory: data})
  }

  addToCart=(data)=>{
    data.quantity=1
    this.state.cartArray.push(data)
    this.setState({badgeNumber: this.state.cartArray.length})
  }

  render(){
  return (
    <div className="App">
      <Header cartData={this.state.cartArray} badgeNumber={this.state.badgeNumber} />
      <div style={{display: 'flex',flexDirection:'row', paddingTop: '20px'}}>
        <div className="sideNav">
          <NavBar clickAction={this.setCategory} />
        </div>
        <div className="productTile">
          <ProductFilter filter={this.state.selectedCategory} addToCart={this.addToCart} />
        </div>
      </div>
    </div>
  );
}
}
