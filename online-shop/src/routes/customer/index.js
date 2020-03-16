import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'dva';
import ReactToPrint from "react-to-print";
import { Modal, Button } from 'antd';
import CustomerList from '../../components/customer/customerList';
import CustomerForm from '../../components/customer/customerForm';
import styles from "./index.css";

class Customers extends Component {
    state = {
        visible: false,
        currentCustomer: {},
    };
    componentDidMount() {
        this.props.dispatch({
            type: 'customer/get',
        })
    }

    handleOk = e => {
        console.log(e);
        const { form } = this.formRef.props;
        form.validateFields((err, value) => {
            if (err) {
                return;
            }
            
            console.log('Received values of form: ', value);
            const { currentCustomer } = this.state;
            this.props.dispatch({
                type: 'customer/add',
                payload: {
                    id: currentCustomer.id,
                    value,
                }
            })
            form.resetFields();
            this.setState({ visible: false, currentCustomer: {} });
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            currentCustomer: {},
        });
    };

    onEdit = (record) => {
        this.setState({
            visible: true,
            currentCustomer: record,
        });
    }

    onAdd = () => {
        this.setState({
            visible: true,
        });
    }

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    renderForm() {
        return <CustomerForm
            wrappedComponentRef={this.saveFormRef}
            initData={this.state.currentCustomer}
        />
    }

    renderModel() {
        return <Modal
            title="Customer Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
            {this.renderForm()}
        </Modal>
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
            <h3 className={styles.title}>List of Customers</h3>
            {this.renderAdd()}
            {this.renderModel()}
            <ReactToPrint
                trigger={() => <Button
                type="second"
                style={{
                    width: 128,
                }}
                >Print</Button>}
                content={() => this.componentRef}
            />
            <CustomerList
                ref={el => (this.componentRef = el)}
                onEdit={this.onEdit}
                customers={this.props.customers}
            />
        </div>;
    }
}

function mapStateToProps(state) {
    const { customer: customers } = state.customer;
    return {
        customers
    }
}

export default connect(mapStateToProps)(Customers);
