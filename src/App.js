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
    data.addedToCart=true
    data.quantity=1
    this.state.cartArray.push(data)
    this.setState({badgeNumber: this.state.cartArray.length})
  }

  addItem=(val)=>{
    return(
      val.quantity=val.quantity+1
    )
  }

  subItem=(val)=>{
    if(val.quantity>1){
      return(
        val.quantity=val.quantity-1
      )
    } else{
      return val.quantity
    }
  }

  removeItem=(data)=>{
    data.addedToCart=false
    data.quantity=1
    this.setState({cartArray: this.state.cartArray.filter((val)=>{
      return(
        val!==data
      )
    }), badgeNumber: this.state.badgeNumber-1})
  }

  render(){
  return (
    <div className="App">
      <Header cartData={this.state.cartArray} badgeNumber={this.state.badgeNumber} subItem={this.subItem} addItem={this.addItem} remove={this.removeItem} />
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
