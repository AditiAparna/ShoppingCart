import React from 'react';
import {data} from '../Data/data'
import './navBar.css'

const shopdata = data;
var uniqueCategory=[];
export var selectedCategory='all';
export class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory='',
        };
      };
    render(){
        return(
            <div style={{width:'200px'}}>
            {
                uniqueCategory=[...new Set(shopdata.map((val)=>{
                    return(
                       val.type
                    )
                }))],
                uniqueCategory.map((val)=>{
                    return(
                        <div className='category' onClick={()=>{selectedCategory = `${val}`}}>
                            <text>
                                {val}
                            </text>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}