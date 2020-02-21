import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'dva';
import ProductList from '../../components/product';
import styles from "./index.css";

class Products extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'product/sale',
        });

        this.props.dispatch({
            type: 'product/inventory',
        })
    }

    renderHead() {
        return <div className={styles.head}>
            <h1 style={{flex: 1, marginBottom: 0}}>Welcome Computer Whiz Store!</h1>
            <div style={{marginRight: 8}}><Link to="/home">Home</Link></div>
            <div style={{marginRight: 8}}><Link to="/product">Products</Link></div>
            <Link to="/customer">Customers</Link>
        </div>
    }

    render() {
        return <div className={styles.container}>
            {this.renderHead()}
            <ProductList {...this.props} />
        </div>;
    }
}

function mapStateToProps(state) {
    const { sale, inventory } = state.product;
    return {
        sale,
        inventory,
    }
}

export default connect(mapStateToProps)(Products);
