import React from 'react';
import './header.css';
import Badge from '@material-ui/core/Badge';
import logo from '../Assets/logo.png'

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            badgeNumber: this.props.badgeNumber,
            dropDown: true,
        };
      };

      render(){
          return(
              <div className="header">
                  <div>
                    <img alt="logo" src={logo} style={{height: '100px', width: '200px', color:'white'}} />
                  </div>
                  <div className="rightSide">
                      <div>
                          <Badge badgeContent={this.props.badgeNumber} color="primary">
                            <img alt="cart" onClick={console.log('dropdown')} src="https://img-premium.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1628106377~hmac=9a5cf7221ce3e85abd6cb4b4f439a3d5" style={{height: '30px', width: '30px', color:'white', cursor:'pointer'}} />
                          </Badge>
                      </div>
                      <div>
                          <text>Hello, User</text>
                      </div>
                  </div>
              </div>
          )
      }
}