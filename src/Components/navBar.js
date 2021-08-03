import React from 'react';
import {data} from '../Data/data'

const shopdata = data;
var uniqueCategory=[];
export default class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
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
                        <div>
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