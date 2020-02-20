import React from 'react';
import { connect } from 'dva';
import { message } from 'antd';
import Login from '../../components/login';
import styles from "./index.css";

const LoginRoute = ({ dispatch, users }) => {

    const loginIn = (user) => {
        const currentUser = users.filter(item => (item.username === user.username) && (item.password === user.password));
        if (currentUser.length === 1) {
            window.location.href = "#/home";
        }
        if (currentUser.length === 0) {
            message.error("Please check your account number!")
        }
    }

    return (
        <div className={styles['bg']}>
            <div className={styles['header']}>
                <h1>Welcome Comouter Whiz Store!</h1>
            </div>
            <Login onLogin={loginIn} users={users} />
        </div>
    );
};

// export default Products;
export default connect(({ users }) => ({
    users,
}))(LoginRoute);