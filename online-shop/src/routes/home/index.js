import React, { Component } from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import { Descriptions } from 'antd';
import styles from "./index.css";

class IndexPage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'company/get'
        })
    }

    renderHeader() {
        return [
            <h1 className={styles.title}>Yay! Welcome to Computer Whiz Store!</h1>,
            <div className={styles.welcome} />
        ]
    }

    renderCompanyInfo() {
        const { name, phone, address, city, country, zipCode } = this.props.company;
        return <Descriptions title="Company Info" bordered>
            <Descriptions.Item label="Company Name: ">{name}</Descriptions.Item>
            <Descriptions.Item label="Phone: ">{phone}</Descriptions.Item>
            <Descriptions.Item label="Zip Code">
                {zipCode}
            </Descriptions.Item>
            <Descriptions.Item label="Address: ">{`${address} ${city}, ${country}`}</Descriptions.Item>
        </Descriptions>;
    }

    renderContent() {
        return <div className={styles.content}>
            <h2>Where do you want to go?</h2>
            <ul className={styles.list}>
                <li>
                    <Link to="/customer">Customers</Link>
                </li>
                <li>
                    <Link to="/product">Products</Link>
                </li>
            </ul>
        </div>
    }

    render() {
        return <div className={styles.container}>
            {this.renderHeader()}
            {this.renderCompanyInfo()}
            {this.renderContent()}
        </div>;
    }
}

IndexPage.propTypes = {};

function mapStateToProps({company}) {
    return {
        company
    }
}

export default connect(mapStateToProps)(IndexPage);
