import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Table, Button } from 'antd';
import './index.css';

class CustomerList extends Component {

    renderTable() {

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Phone',
            dataIndex: 'phone',
        }, {
            title: 'Category',
            dataIndex: 'category',
        }, {
            title: 'Zip Code',
            dataIndex: 'zipCode',
        },  {
            title: 'Address',
            dataIndex: 'address',
            render: (value, record) => {
                return `${record.address} ${record.city}, ${record.country}`;
            }
        }, {
            title: 'Actions',
            render: (text, record) => {
                return [<Button
                    type="link"
                    onClick={() => this.props.onEdit(record)}
                >Edit</Button>,
                <Link to={`/customer/${record.id}`}>History</Link>];
            },
        }];
        return (
            <Table
                dataSource={this.props.customers}
                columns={columns}
                style={{padding: 20}}
                pagination={false}
            />
        );
    }

    render() {
        return [
            this.renderTable(),
        ]
    }
}

export default CustomerList;