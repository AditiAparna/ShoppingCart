import React from 'react';
import './header.css';

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      };
      render(){
          return(
              <div className="header">
                  <text>Hello, Welcome</text>
              </div>
          )
      }
}