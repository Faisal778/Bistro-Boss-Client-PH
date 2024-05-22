import React from 'react';
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from '../../shared/cover/Cover';
const Order = () => {
    return (
        <div>
            <Cover image = {orderCoverImg} title={"Order Food"}></Cover>
        </div>
    );
};

export default Order;