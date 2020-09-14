import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.items);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <div className="row p-4">
                        {this.props.items.map(product => {
                            return (
                                <div className="col-md-3 detail-box" key={product.product_id}>
                                    <div className="image">
                                        {product.image ? <img src={product.image} alt={product.image} /> : "loding.."}
                                    </div>
                                    <div className="name">{product.product_name}</div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="price float-left">
                                                {'₹' + product.unit_price}
                                            </div>
                                        </div>
                                        <div className="col-md-8"><button type="submit" className="btn btn-primary float-right">
                                            <Link to={{
                                                pathname: `product-detail/${product.product_id}`,
                                                pData: product
                                            }}><span className="text-color">View</span></Link>
                                        </button></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Products);
