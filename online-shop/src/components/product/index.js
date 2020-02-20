import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SaleList from "./saleList";
import InventoryList from "./inventoryList";

class ProductList extends Component {
    render() {
        return [
            <SaleList {...this.props} />,
            <InventoryList {...this.props} />,
        ]
    }
}

ProductList.propTypes = {
    sale: PropTypes.array.isRequired,
    inventory: PropTypes.array.isRequired,
};

export default ProductList;