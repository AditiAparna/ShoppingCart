import React from 'react';
import './productCard.css';

export default class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            pressed: false,
        };
    };

    render(){
        return(
            <div className="card" onClick={()=>this.setState({modalVisible: !this.state.modalVisible})}>
                <img src={this.props.url} alt={this.props.name} className="image"/>
                <div style={{flexDirection:'row', paddingTop:'5px'}}>
                    <div>
                        <text style={{fontWeight:'500'}}>{this.props.name}</text>
                    </div>
                    <div style={{paddingTop:'5px'}}>
                        <text>Rs. {this.props.price}</text>
                    </div>
                </div>
                {this.props.data.addedToCart?
                <div className="addCart" onClick={null}>
                  <div><text>Added</text></div>
                  <div><img alt='cart' src="https://as2.ftcdn.net/v2/jpg/03/10/70/79/500_F_310707936_iickgWF7S3Gd3EXm6pyFCKA7gYSzI5Tr.jpg" style={{height: '20px', width: '20px', color:'white'}} /></div>
                </div>
                :
                <div className="addCart" onClick={()=>{
                    this.props.addToCart(this.props.data)
                    this.setState({pressed: true})
                }}>
                  <div><text>Add to cart</text></div>
                  <div><img alt='cart' src="https://image.flaticon.com/icons/png/512/3144/3144456.png" style={{height: '20px', width: '20px', color:'white'}} /></div>
                </div>
                }
            </div>
        )
    }
}