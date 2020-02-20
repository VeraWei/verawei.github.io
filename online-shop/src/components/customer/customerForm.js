import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Select } from 'antd';
import './index.css';

const { Option } = Select;

class CustomerForm extends React.Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        const { name, phone, category, address, city, country, zipCode } = this.props.initData;
        return (
            <Form className="customer-form">
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: "Please input your customer's name!" }],
                        initialValue: name,
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Customer Name"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: "Please input your customer's Password!" }],
                        initialValue: phone,
                    })(
                        <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Phone Number"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('category', {
                        rules: [{ required: true, message: "Please input your customer's category!" }],
                        initialValue: category,
                    })(
                        <Select
                            prefix={<Icon type="apartment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Category"
                        >
                            <Option value="Home">Home User</Option>
                            <Option value="End">End User</Option>
                            <Option value="corporation">Corporation</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: "Please input your customer's address!" }],
                        initialValue: address,
                    })(
                        <Input
                            prefix={<Icon type="apartment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Address"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('city', {
                        rules: [{ required: true, message: "Please input your customer's City!" }],
                        initialValue: city,
                    })(
                        <Input
                            prefix={<Icon type="apartment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="City"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('country', {
                        rules: [{ required: true, message: "Please input your customer's Country!" }],
                        initialValue: country,
                    })(
                        <Input
                            prefix={<Icon type="apartment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Country"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('zipCode', {
                        rules: [{ required: true, message: "Please input your customer's zip code!" }],
                        initialValue: zipCode,
                    })(
                        <Input
                            prefix={<Icon type="apartment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Zip Code eg: J32 A43"
                        />,
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const WrappedCustomerForm = Form.create({ name: 'customer_edit' })(CustomerForm);

export default WrappedCustomerForm;
