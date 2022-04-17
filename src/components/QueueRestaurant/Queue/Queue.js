import React from 'react';
import styles from "./Queue.module.scss";

const Queue = props => {

    const ordersList = props.orderData;

    return (
        <div className={styles.continer}>
           <div className={styles.text}> Mobile: {ordersList.Mobile}</div>
           <div className={styles.text}> Diners: {ordersList.Diners}</div>
        </div>
    );
};

export default Queue;