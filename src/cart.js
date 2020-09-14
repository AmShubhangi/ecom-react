import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItemFromCart } from './actions/cartActions';

class Cart extends Component {

    handleRemove = (id) => {
        if (window.confirm("Do you want to delete this item?")) {
            this.props.removeItem(id);
        }
    }

    render() {
        var val = 0;
        console.log(this.props.items)
        for (let i = 0; i < this.props.items.length; i++) {
            val += (this.props.items[i].unit_price * this.props.items[i].tItem);
        }

        var addedItems = this.props.items.length ?
            (
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
                                        <p className="left-only-green name p-4">
                                            <b> {item.quantity > 10 ? 'Available' : 'Not in Stock'}</b>
                                        </p>
                                        <div className="name p-4">
                                            Total Product price: {'₹' + item.unit_price * item.tItem}
                                        </div>
                                        <button className="btn btn-danger" onClick={() => { this.handleRemove(item.product_id) }}>&#10007;</button>
                                    </div>

                                </li>
                            </div>

                        </div>

                    )
                })
            ) :
            (
                this.props.items.length === 0 ? (<div className=""><h2>Cart is Empty.</h2></div>) : ''
            )
        return (
            <div className="container">
                <div className="">
                    <ul className="pl-0">
                        {addedItems}
                    </ul>
                    {this.props.items.length > 0 ? <h1>Total Price : {'₹' + val}</h1> : ''}
                    {this.props.items.length > 0 ? <Link to="checkout" ><button type="submit" className="btn btn-success">Checkout</button> </Link> : ''}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItemFromCart(id)) },
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);