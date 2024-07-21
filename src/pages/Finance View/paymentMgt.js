import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const PaymentMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [payments, setPayments] = useState([]);

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const fetchPayments = async () => {
        try {
            const response = await axios.get('http://localhost/Office_Management/Handler/PaymentManagement.php');
            setPayments(response.data.data); // Ensure you're accessing the 'data' property correctly
        } catch (error) {
            console.error("There was an error fetching the payments!", error);
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    return (
        <div className='grid-container'>
            <Header OpenSidebar={toggleSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={toggleSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className='row' style={{ marginRight: '1%' }}>
                        <div className='col-10' style={{ width: '78vw' }}>
                            <div className='row my-4'>
                                <div className='col'>
                                    <h6 className='text-secondary my-2'>
                                        Office Management > Payments Management
                                    </h6>
                                </div>
                            </div>
                            <table className='table table-bordered'>
                                <thead className='text-white' style={{ backgroundColor: '#C19A6B' }}>
                                <tr>
                                    <th scope='col' style={{ width: '12%' }}>Sales ID</th>
                                    <th scope='col' style={{ width: '20%' }}>Sales Items</th>
                                    <th scope='col' style={{ width: '20%' }}>Qty</th>
                                    <th scope='col' style={{ width: '28%' }}>Amount</th>
                                    <th scope='col' style={{ width: '14%' }}>Date</th>
                                    <th scope='col' style={{ width: '14%' }}>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {payments.map(payment => (
                                    <tr key={payment.sales_id}>
                                        <td>{payment.sales_id}</td>
                                        <td>{payment.sales_items}</td>
                                        <td>{payment.qty}</td>
                                        <td>{payment.amount}</td>
                                        <td>{payment.date}</td>
                                        <td>{payment.status}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PaymentMgt;
