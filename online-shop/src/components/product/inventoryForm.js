import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input } from 'antd';
import './index.css';

class InventoryForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { name, price, count} = this.props.initData;
        return (
            <Form className="inventory-form">
                <Form.Item label="Product Name">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: "Please input your product's name!" }],
                        initialValue: name,
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Product Name"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Unit Price">
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: "Please input your product's unit price!" }],
                        initialValue: price,
                    })(
                        <Input
                            type="number"
                            min="0"
                            prefix={<Icon type="money-collect" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Unit Price"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Overall count">
                    {getFieldDecorator('count', {
                        rules: [{ required: true, message: "Please input your product's storage!" }],
                        initialValue: count,
                    })(
                        <Input
                            type="number"
                            min="0"
                            prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Overall count"
                        />,
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedInventoryForm = Form.create({ name: 'inventory_edit' })(InventoryForm);

export default WrappedInventoryForm;
