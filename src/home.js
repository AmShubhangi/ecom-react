import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
    return (
        <React.Fragment>
            <nav>
                <div className="container bgcolo">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="float-left">
                                <div className="p-3">
                                    <Link to="/home">Ecomm</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="float-right">
                                <div className="row ">
                                    <div className="p-3">
                                        <Link to="/">Home</Link>
                                    </div>
                                    <div className="p-3">
                                        <Link to="/products">Shop</Link>
                                    </div>
                                    <div className="p-3">
                                        <Link to="/cart">My Cart ({props.items.length})</Link>
                                    </div>
                                    <div className="p-3">
                                        <Link to="/login">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}

export default connect(mapStateToProps)(Home);