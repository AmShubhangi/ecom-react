import React, { Component } from 'react';
import { connect } from 'react-redux'

class Checkout extends Component {

    handleClick = () => {
        if (window.confirm("Do you want to proceed?")) {
            alert("The payment will be done using cash on delivery. Thank you!")
        }
    }

    render() {
        var val = 0;
        console.log(this.props.items)
        for (let i = 0; i < this.props.items.length; i++) {
            val += (this.props.items[i].unit_price * this.props.items[i].tItem);
        }

        var addedItems = (
            this.props.items.map(item => {
                return (
                    <div className="container m-5">
                        <div className="tile">
                            <li className="d-flex" key={item.product_id}>
                                <div className="item-img">
                                    <img src={item.image} className="my-img" alt={item.image} />
                                </div>
                                <div className="item-desc d-flex">
                                    <span className="name p-4">{item.product_name}</span>
                                    <p className="name p-4"><b>Price: {'₹' + item.unit_price}$</b></p>
                                    <p className="name p-4">
                                        <b>Quantity: {item.tItem}</b>
                                    </p>
                                    <div className="name p-4">
                                        Total Product price: {'₹' + item.unit_price * item.tItem}
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>

                )
            })
        )

        return (
            <div className="container">
                <div className="">
                    <ul className="pl-0">
                        {addedItems}
                    </ul>
                    {this.props.items.length > 0 ? <h1>Total Price : {'₹' + val}</h1> : ''}
                </div>
                {this.props.items.length > 0 ? <button type="submit" onClick={this.handleClick} className="btn btn-success">Buy now</button> : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}

export default connect(mapStateToProps)(Checkout);