import React, { useState, useEffect } from 'react';
import '../styleSheets/adminDashboard.css';
import '../../App.css';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

const OrderControlling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from backend
        fetch('http://localhost/Office_Management/Hadler/OrderManagement.php')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    setOrders(data.data);
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => console.error('Error fetching orders:', error));
    }, []);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className='row' style={{ marginRight: '1%' }}>
                        <div className='col-10' style={{ width: '78vw' }}>
                            <div className='row my-4'>
                                <div className='col'>
                                    <h6 className='text-secondary my-2'>
                                        Office Project Management > Order Management
                                    </h6>
                                </div>
                            </div>
                            <div className=''>
                                <div className='row row-cols-1 row-cols-md-3 g-4'>
                                    {orders.map((order, idx) => (
                                        <div className='col' key={idx}>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <div className='p-1 row'>
                                                        <div className='col-8'>
                                                            <p>Order ID - #{order.order_id}</p>
                                                        </div>
                                                        <div className='col-4 text-end'>
                                                            <span className={`badge bg-${order.status === 'Pending' ? 'secondary' : 'primary'}`}>{order.status}</span>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <table className='table table-bordered'>
                                                        <thead
                                                            className='text-white'
                                                            style={{ backgroundColor: '#C19A6B' }}
                                                        >
                                                        <tr>
                                                            <th scope='col' style={{ width: '12%' }}>
                                                                Item Name
                                                            </th>
                                                            <th scope='col' style={{ width: '20%' }}>
                                                                Quantity
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td style={{ width: '12%' }}>{order.item_name}</td>
                                                            <td style={{ width: '20%' }}>{order.quantity}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Ordered Date - {order.ordered_date}</p>
                                                    <p>Supplier Name - {order.supplier_name}</p>
                                                    <div className='text-center'>
                                                        <button type='button' className='btn btn-success'>
                                                            Success
                                                        </button>
                                                        <button type='button' className='btn btn-danger'>
                                                            Danger
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderControlling;
