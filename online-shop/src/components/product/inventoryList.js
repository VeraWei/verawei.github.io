import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import { Table, Button, Modal, Input, Icon } from 'antd';
import InventoryForm from './inventoryForm';
import Highlighter from 'react-highlight-words';
import styles from './index.css';

class InventoryList extends Component {
    state = {
        visible: false,
        currentInventory: {},
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

    handleOk = e => {
        console.log(e);
        const { form } = this.formRef.props;
        form.validateFields((err, value) => {
            if (err) {
                return;
            }
            
            console.log('Received values of form: ', value);
            const { currentInventory } = this.state;
            this.props.dispatch({
                type: 'product/add',
                payload: {
                    id: currentInventory.id,
                    value,
                }
            })
            form.resetFields();
            this.setState({ visible: false, currentInventory: {} });
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            currentInventory: {},
        });
    };

    onEdit = (record) => {
        this.setState({
            visible: true,
            currentInventory: record,
        });
    }

    onAdd = () => {
        this.setState({
            visible: true,
        });
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    }

    onSubmit = () => {

    }

    renderForm() {
        return <InventoryForm
            wrappedComponentRef={this.saveFormRef}
            initData={this.state.currentInventory}
        />
    }

    renderModel() {
        return <Modal
            title="Product"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
            {this.renderForm()}
        </Modal>
    }

    renderTest() {
        return <div
            ref={(ref)=>this.testRef = ref}
            >
            Test
        </div>
    }

    renderTable() {

        let columns = [{
            title: 'Product Name',
            dataIndex: 'name',
            ...this.getColumnSearchProps('name'),
        }, {
            title: 'Unit price',
            dataIndex: 'price',
        }, {
            title: 'Quantity',
            dataIndex: 'count',
        }, {
            title: 'Update Time',
            dataIndex: 'updateTime',
        }, {
            title: 'Actions',
            render: (text, record) => {
                return (
                    <Button
                        type="link"
                        onClick={() => this.onEdit(record)}
                    >Edit</Button>
                );
            },
        }];
        return [
            <ReactToPrint
                trigger={() => <Button
                    type="second"
                    style={{
                        width: 128,
                    }}>Print</Button>}
                content={() => this.componentRef}
            />,
            <Table
                ref={el => (this.componentRef = el)}
                dataSource={this.props.inventory}
                columns={columns}
                style={{padding: 20}}
                pagination={false}
            />
        ];
    }

    renderAdd() {
        return <Button
            type="primary"
            onClick={this.onAdd}
            style={{
                width: 128,
                marginRight: 8,
                marginBottom: 20,
            }}
        >
            Add
        </Button>
    }

    render() {
        return [
            <h3 className={styles.title}>List of Inventories</h3>,
            this.renderAdd(),
            this.renderTable(),
            this.renderModel(),
        ]
    }
}

export default InventoryList;