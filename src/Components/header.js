import React from "react";
import "./header.css";
import Badge from "@material-ui/core/Badge";
import logo from "../Assets/logo.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badgeNumber: this.props.badgeNumber,
      dropDown: false,
      quantity:1,
    };
  }

  render() {
    return (
      <div className="header">
          {console.log('header', this.props)}
        <div>
          <img
            alt="logo"
            src={logo}
            style={{ height: "100px", width: "200px", color: "white" }}
          />
        </div>
        <div className="rightSide">
          <div className={this.state.dropDown ? "drop-down drop-down--active" : "drop-down "}>
            <div className="cart">
              <Badge badgeContent={this.props.badgeNumber} color="primary">
                <img
                  alt="cart"
                  onClick={()=>{this.setState({dropDown: !this.state.dropDown})}}
                  src="https://image.flaticon.com/icons/png/512/3144/3144456.png"
                  style={{
                    height: "30px",
                    width: "30px",
                    color: "white",
                    cursor: "pointer"
                  }}
                />
              </Badge>
            </div>
            <div class="drop-down__menu-box ">
              <ul class="drop-down__menu">
                  {
                      this.props.cartData.map((val)=>{
                          return(
                        <li class="drop-down__item">
                        <div className="dropContent">
                          <div className="imageDiv">
                            <img
                              alt="cart"
                              src={val.url}
                            />
                          </div>
                          <div className="product">
                            <h3>{val.name}</h3>
                            <p style={{fontSize: '18px'}}>Quantity: 
                                <img
                                onClick={()=>{this.setState({quantity:this.props.addItem(val)})}}
                                src="https://image.flaticon.com/icons/png/512/992/992651.png"
                                style={{height:'14px', width:'14px',margin:'2px', marginLeft:'4px', marginRight:'4px'}}
                                />
                                {console.log(val.quantity)}
                                {val.quantity}
                                <img
                                onClick={()=>{this.setState({quantity:this.props.subItem(val)})}}
                                src="https://image.flaticon.com/icons/png/512/992/992683.png"
                                style={{height:'14px', width:'14px', margin:'2px',marginLeft:'4px', marginRight:'4px'}}
                                />
                            </p>
                            <p>Rs: {val.quantity*val.price}</p>
                          </div>
                          <div className="remove" onClick={()=>{this.props.remove(val)}}>
                            <button>Remove</button>
                          </div>
                        </div>
                      </li>
                          )
                      })
                  }
             </ul>
            </div>
          </div>
          <div>
            <text>Hello, User</text>
          </div>
        </div>
      </div>
    );
  }
}
