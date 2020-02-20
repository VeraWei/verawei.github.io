import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import { Table, Button, Input, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import styles from './index.css';

class InventoryList extends Component {
    state = {
      searchText: '',
      searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                    text
                ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    renderTable() {

        const columns = [{
            title: 'Product Name',
            dataIndex: 'name',
            ...this.getColumnSearchProps('name'),
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
            ...this.getColumnSearchProps('createTime'),
        }];
      
        return [
            <ReactToPrint
                trigger={() => <Button
                    type="second"
                    style={{
                        width: 128,
                        marginBottom: 20,
                    }}>Print</Button>}
                content={() => this.componentRef}
            />,
            <Table
                ref={el => (this.componentRef = el)}
                dataSource={this.props.sale}
                columns={columns}
                style={{padding: 20}}
                pagination={false}
            />
        ];
    }

    render() {
        return [
            <h3 className={styles.title}>List of Sales</h3>,
            this.renderTable(),
        ]
    }
}

export default InventoryList;