import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'dva';
import { Table, Descriptions } from 'antd';
import Invoice from "./invoice";
import PackingSlip from "./packing-slip";
import styles from "./index.css";

class CustomerSales extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'customer/getInfo',
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

    renderBasicInfo() {
        const { info } = this.props;
        const { name, category, phone, address, city, country, zipCode } = info;
        return <Descriptions
            title="User Info"
            bordered
            style={{
                marginTop: 20,
                borderBottom: '1px solid #e8e8e8',
                paddingBottom: 20,
            }}>
            <Descriptions.Item label="Customer Name: ">{name}</Descriptions.Item>
            <Descriptions.Item label="Category: ">{category}</Descriptions.Item>
            <Descriptions.Item label="Phone: ">{phone}</Descriptions.Item>
            <Descriptions.Item label="Address: ">{`${address} ${city}, ${country}`}</Descriptions.Item>
            <Descriptions.Item label="Zip Code">
                {zipCode}
            </Descriptions.Item>
        </Descriptions>;
    }

    renderTable() {

        const { purchase } = this.props.info;
        const columns = [{
            title: 'Product Name',
            dataIndex: 'name',
        }, {
            title: 'Customer Id',
            dataIndex: 'customerId',
        }, {
            title: 'Unit price',
            dataIndex: 'price',
        }, {
            title: 'Sales Quantity',
            dataIndex: 'count',
        }, {
            title: 'Create Time',
            dataIndex: 'createTime',
        }];
        return <Table
            dataSource={purchase}
            columns={columns}
        />;
    }

    render() {
        return <div className={styles.container}>
            { this.renderHead()}
            { this.renderBasicInfo() }
            <h3 className={styles.title}>List of Sales</h3>
            {this.renderTable()}
            <Invoice info={this.props.info} />,
            <PackingSlip info={this.props.info} />,
        </div>;
    }
}

function mapStateToProps(state) {
    const { info } = state.customer;
    return {
        info
    }
}

export default connect(mapStateToProps)(CustomerSales);
