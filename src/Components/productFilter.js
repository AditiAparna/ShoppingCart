import React from 'react';
import {data} from '../Data/data';
import ProductCard from './productCard';

const shopdata = data;
var arr=[];
export default class ProductFilter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      };

    filterProduct=(value=this.props.filter)=>{
        arr = shopdata.filter((data)=>{
        if(value === "All"){
            return data
            }
        else if(data.type === value){
            return data
        }})
    }
    render(){
    return(
        <div>
            <div style={{display:'flex', paddingLeft: 20}}>
                <text>
                    Showing results for: '<text style={{color:'#800000',fontWeight:'bold'}}>{this.props.filter}</text>'
                </text>
            </div>
            <div style={{display: 'grid',gridTemplateColumns: 'auto auto auto auto'}}>
                
                {
                    this.filterProduct(),
                    arr.map((val)=>{
                        return(
                            <ProductCard
                                data={val}
                                name={val.name}
                                price={val.price}
                                url={val.url}
                                addToCart={this.props.addToCart}
                                key={val.id}
                            />
                        )
                    })
                }
            </div>
        </div>
        )
    }
}