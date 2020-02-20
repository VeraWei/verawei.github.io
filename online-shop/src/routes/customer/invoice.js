import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { Drawer, Table, Button } from "antd";
import styles from "./index.css";

class CustomerInvoice extends Component {
  state = {
    visible: false
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  renderDrawer() {
    return (
      <Drawer
        width={800}
        title="Invioce"
        placement="right"
        onClose={this.onClose}
        visible={this.state.visible}
      >
        {this.renderInovice()}
      </Drawer>
    );
  }

  renderPrice() {
        const { purchase=[] } = this.props.info;
        let money = 0;
        purchase.map((item)=>{
            money += item.total;
            return item;
        });
        const tax = money * 0.0625;
        const total = money + tax;
        return <div style={{display: "flex", marginTop: 10}}>
            <div style={{flex: 1}}></div>
            <div style={{flex: 1}}>
            <p className={styles["cols"]}>
                <span className={styles["col1"]}>Sub Total: </span>
                <span className={styles["col2"]}>{`$${money}`}</span>
            </p>
            <p className={styles["cols"]}>
                <span className={styles["col1"]}>Sales Tax 6.25%: </span>
                <span className={styles["col2"]}>{`$${tax}`}</span>
            </p>
            <p className={styles["cols"]}>
                <span className={styles["col1"]}>Total:</span>
                <span className={styles["col2"]}>{`$${total}`}</span>
            </p>
        </div>
        </div>
    }

  renderInovice() {
    const { info } = this.props;
    const { name, address, city, country, zipCode } = info;
    return (
        <div>
            <div ref={el => (this.componentRef = el)} className={styles.invoice}>
            <div className={styles["invoice-header"]}>
                <h2>Computer Whiz Store Inc.</h2>
                <p>7878 Kingsway St.</p>
                <p>Vancouver Canada V6J TP3</p>
                <p>Phone: (010) 603-4698</p>
            </div>
            <div className={styles["client-info"]}>
                <div className={styles["bill-address"]}>
                    <h3>Bill To</h3>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{city}, {country}, {zipCode}</p>
                </div>
                <div className={styles["ship-address"]}>
                    <h3>Ship To</h3>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{city}, {country}, {zipCode}</p>
                </div>
                <div className={styles["bill"]}>
                    <p className={styles["cols"]}>
                        <span className={styles["col1"]}>Invioce #</span>
                        <span className={styles["col2"]}>US-001</span>
                    </p>
                    <p className={styles["cols"]}>
                        <span className={styles["col1"]}>Invioce Date</span>
                        <span className={styles["col2"]}>31/03/2020</span>
                    </p>
                    <p className={styles["cols"]}>
                        <span className={styles["col1"]}>P.O.#</span>
                        <span className={styles["col2"]}>11/02/2020</span>
                    </p>
                    <p className={styles["cols"]}>
                        <span className={styles["col1"]}>Due Date</span>
                        <span className={styles["col2"]}>31/04/2020</span>
                    </p>
                </div>
            </div>
            {this.renderTable()}
            {this.renderPrice()}
            </div>
            <ReactToPrint
                trigger={() => <Button type="primary" style={{width: 128}}>Print</Button>}
                content={() => this.componentRef}
            />
            ,
        </div>
    );
  }

  renderTable() {
    const { purchase } = this.props.info;
    const columns = [
      {
        title: "Product Name",
        dataIndex: "name"
      },
      {
        title: "Customer Id",
        dataIndex: "customerId"
      },
      {
        title: "Unit price",
        dataIndex: "price"
      },
      {
        title: "Sales Quantity",
        dataIndex: "count"
      },
      {
        title: "Create Time",
        dataIndex: "createTime"
      }
    ];
    return <Table dataSource={purchase} columns={columns} pagination={false} />;
  }

  render() {
    return [
      <Button
        style={{ marginRight: 8 }}
        type="primary"
        onClick={() => this.setState({ visible: true })}
      >
        Preview Invoice
      </Button>,
      this.renderDrawer()
    ];
  }
}

export default CustomerInvoice;
