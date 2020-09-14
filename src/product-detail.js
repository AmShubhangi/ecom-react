import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        this.props.addToCart(id);
        alert("Added Item Successfully!");
    }

    render() {
        var pData;
        if (this.props.location.pData) {
            localStorage.setItem('data', JSON.stringify(this.props.location.pData));
            pData = this.props.location.pData;
        } else {
            pData = localStorage.getItem('data')
            if (pData) pData = JSON.parse(pData);
        }
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">  <div className="detail">
                            <div className="image p-3">
                                <img src={pData.image} alt={pData.image} className="p-image" />
                            </div>
                        </div></div>
                        <div className="col-md-6 detail-box">
                            <div className="p-2"><label className="label-name"> Name<div className="name">{pData.product_name}</div></label></div>
                            <div className="p-2"><label className="label-name">Item Left<div className={pData.quantity > 20000 ? 'left-only-green' : 'left-only-red'}>left {pData.quantity} Only</div></label></div>
                            <div className="p-2"><label className="label-name">Category<div className="category">{pData.category}</div></label></div>
                            <div className="p-2"><label className="label-name">Price<div className="category">{'₹' + pData.unit_price}</div></label></div>
                            <div className="p-2">
                                <Link to='/products' ><div className="btn"><button className="btn btn-warning" type="submit">
                                    Back</button></div></Link>
                                <div className="btn"><button className="btn btn-success" type="submit">Buy Now</button></div>
                                <div className="btn"><button className="btn btn-primary" type="submit"
                                    onClick={() => this.handleClick(pData.product_id)}>Add to Cart</button></div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect('', mapDispatchToProps)(ProductDetail)
