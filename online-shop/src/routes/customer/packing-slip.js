import React, { Component } from 'react';
import ReactToPrint from "react-to-print";
import { Drawer, Table, Button } from 'antd';
import Barcode from 'react-barcode';
import styles from "./index.css";

class CustomerInvoice extends Component {
    state = {
        visible: false,
    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    }

    renderShipInfo() {

        return <div className={styles['ship-info']}>
            <p><span>SKU: </span> GWP</p>
            <p><span>Weight: </span> 8lbs</p>
            <div className={styles["barcode"]}><Barcode value="4324682232126" /></div>
        </div>
    }

    renderDrawer() {
        return <Drawer
            width={800}
            title="Preview"
            placement="right"
            onClose={this.onClose}
            visible={this.state.visible}
        >
            {this.renderInovice()}
        </Drawer>
    }

    renderInovice() {
        const { info } = this.props;
        const { name, address, city, country, zipCode } = info;
        return <div>
            <div
                ref={el => (this.componentRef = el)}
                className={styles.invoice}
            >
                <h2 className={styles.header}>Packing Slip</h2>
                <div className={styles["invoice-header"]} style={{display: "flex", alignContent: "center"}}>
                    <div className={styles["company-info"]}>
                        <h3>Enterprise Co.</h3>
                        <p>7878 Kingsway St. Vancouver Canada</p>
                        <p>J2Q K89</p>
                        <p>Phone: (010) 603-4698</p>
                    </div>
                <div className={styles.logo}></div>
                </div>
                <div className={styles["client-info"]}>
                    <div className={styles["ship-address"]}>
                        <h3>Ship To</h3>
                        <p>{name}</p>
                        <p>{address}</p>
                        <p>{city}, {country}, {zipCode}</p>
                    </div>
                    <div className={styles["order-info"]}>
                        <h3>Order Info</h3>
                        <p className={styles["cols"]}>
                            <span className={styles["col1"]}>Order Number: </span>
                            <span className={styles["col2"]}>1234568</span>
                        </p>
                        <p className={styles["cols"]}>
                            <span className={styles["col1"]}>Order Date: </span>
                            <span className={styles["col2"]}>1/2/2019</span>
                        </p>
                        <p className={styles["cols"]}>
                            <span className={styles["col1"]}>Shipping Method: </span>
                            <span className={styles["col2"]}>Super Express Overnight</span>
                        </p>
                    </div>
                </div>
                {this.renderTable()}
                { this.renderShipInfo() }
            </div>
            <ReactToPrint
                trigger={() => <Button
                    type="primary"
                    style={{
                        width: 128,
                        float: "right",
                        marginTop: -80,
                    }}
                >Print</Button>}
                content={() => this.componentRef}
            />,
        </div>
    }

    renderTable() {

        const { purchase } = this.props.info;
        const columns = [{
            title: 'Item',
            dataIndex: 'name',
        }, {
            title: 'Qty',
            dataIndex: 'count',
        }];
        return <Table
            dataSource={purchase}
            columns={columns}
            pagination={false}
        />;
    }

    render() {
        return [
            <Button
                type="second"
                onClick={() => this.setState({ visible: true })}
            >Preview Packing Slip</Button>,
            this.renderDrawer(),
        ];
    }
}

export default CustomerInvoice;
