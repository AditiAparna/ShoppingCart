import React from 'react';

export default class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      };
      render(){
          return(
              <div style={{padding:'20px', border: 'solid', borderColor:'black', borderWidth: '2px', height: '200px', margin: '20px'}}>
                  <img src={this.props.url} alt={this.props.name} style={{height: '150px', width: '150px'}}/>
                  <div style={{flexDirection:'row'}}>
                    <text>{this.props.name}</text>
                    <text>Rs. {this.props.price}</text>
                  </div>
                  <text>Add to cart</text>
              </div>
          )
      }
}