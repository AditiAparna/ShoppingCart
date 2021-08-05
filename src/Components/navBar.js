import React from 'react';
import {data} from '../Data/data'
import './navBar.css'

const shopdata = data;
var uniqueCategory=[];
export class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory:'',
        };
      };
    render(){
        return(
            <div style={{width:'200px', paddingTop:5, paddingBottom:5}}>
                <text style={{fontSize: 18, fontWeight:'500'}}> Available Categories:</text>
            {
                uniqueCategory=[...new Set(shopdata.map((val)=>{
                    return(
                       val.type
                    )
                }))],
                uniqueCategory.unshift("All"),
                uniqueCategory.map((val)=>{
                    return(
                        <div className='category' onClick={()=>this.props.clickAction(val)}>
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