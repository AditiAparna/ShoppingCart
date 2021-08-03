import React from 'react';
import {data} from '../Data/data';
import ProductCard from './productCard';

const shopdata = data;
export default class ProductFilter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      };
    render(){
    return(
        <div style={{display: 'grid',gridTemplateColumns: 'auto auto auto auto'}}>
            {
                shopdata.map((val)=>{
                    return(
                        <ProductCard
                            name={val.name}
                            price={val.price}
                            url={val.url}
                        />
                    )
                })
            }
        </div>
        )
    }
}