import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styleSheets/adminDashboard.css';
import '../../App.css';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';

const OrderControlling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [orders, setOrders] = useState([]);
    const [userRole, setUserRole] = useState('');

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost/Office_Management/Hadler/OrderManagement.php');
            console.log("Fetched Orders:", response.data.data);
            setOrders(response.data.data);
        } catch (error) {
            console.error("There was an error fetching the orders!", error);
        }
    };

    const [newOrder, setNewOrder] = useState({
        item_name: '',
        quantity: '',
        ordered_date: '',
        supplier_name: '',
        status: '',
        epfNo: '',
        empno: '',
        nic: '',
        mobile: '',
        email: '',
        dob: '',
        designation: '',
        salary: ''
    });

    const [showAddOrderModal, setShowAddOrderModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);

    const viewAddOrderModal = () => {
        setShowAddOrderModal(true);
    };

    const closeAddOrderModal = () => {
        setShowAddOrderModal(false);
    };

    const addOrderConfirmed = async () => {
        try {
            const response = await axios.post('http://localhost/Office_Management/Hadler/OrderManagement.php', newOrder);
            console.log("Backend response:", response.data);
            setOrders([...orders, response.data]);
            console.log("Added Order:", response.data);
            setNewOrder({
                item_name: '',
                quantity: '',
                ordered_date: '',
                supplier_name: '',
                status: '',
                epfNo: '',
                empno: '',
                nic: '',
                mobile: '',
                email: '',
                dob: '',
                designation: '',
                salary: ''
            });
            closeAddOrderModal();
            fetchOrders();
        } catch (error) {
            console.error("There was an error adding the order!", error);
        }
    };

    const viewDeleteConfirmationModal = (id) => {
        setOrderToDelete(id);
        setShowDeleteModal(true);
    };

    const closeDeleteConfirmationModal = () => {
        setShowDeleteModal(false);
    };

    const deleteOrderConfirmed = async () => {
        try {
            await axios.delete(`http://localhost/Office_Management/Hadler/OrderManagement.php?id=${orderToDelete}`);
            setOrders(orders.filter(order => order.order_id !== orderToDelete));
            setShowDeleteModal(false);
            setOrderToDelete(null);
        } catch (error) {
            console.error("There was an error deleting the order!", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewOrder({ ...newOrder, [id]: value });
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        const role = localStorage.getItem('role');
        setUserRole(role);
        console.log(userRole);
    }, [userRole]);

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
                                        Office Project Management > Order Management
                                    </h6>
                                </div>
                                {userRole === 'HRManager' || userRole === 'FinanceManager' ? (
                                    <div className='col text-end'>
                                        <button
                                            type='button'
                                            className='btn btn-success'
                                            onClick={viewAddOrderModal}
                                        >
                                            + Add Order
                                        </button>
                                    </div>
                                ) : null}
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
                                                            Approve
                                                        </button>
                                                        <button type='button' className='btn btn-danger'>
                                                            Cancel
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

            {/* Add Order Modal */}
            <div
                className={`modal fade bd-example-modal-lg ${showAddOrderModal ? 'show' : ''}`}
                style={{ display: showAddOrderModal ? 'block' : 'none' }}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='myLargeModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4 className='modal-title fs-5' id='staticBackdropLabel'>
                                Add New Order
                            </h4>
                        </div>
                        <div className='modal-body'>
                            <div className='mb-3'>
                                <label className='form-label'>Order Name</label>
                                <input type='text' className='form-control' id='item_name' value={newOrder.item_name} onChange={handleInputChange} />
                                <small
                                    className='text-danger'
                                    id='warningAddOrder1'
                                    style={{ display: 'none' }}
                                >
                                    Please Enter Order Name
                                </small>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Address</label>
                                <input type='text' className='form-control' id='address' value={newOrder.address} onChange={handleInputChange} />
                                <small
                                    className='text-danger'
                                    id='warningAddOrder2'
                                    style={{ display: 'none' }}
                                >
                                    Please Enter Order Address
                                </small>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>EPF No</label>
                                        <input type='text' className='form-control' id='epfNo' value={newOrder.epfNo} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder3'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter EPF No
                                        </small>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Employee Number</label>
                                        <input type='number' className='form-control' id='empno' value={newOrder.empno} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder4'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter Employee Number
                                        </small>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>NIC</label>
                                        <input type='text' className='form-control' id='nic' value={newOrder.nic} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder5'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter NIC
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Mobile</label>
                                        <input type='tel' className='form-control' id='mobile' value={newOrder.mobile} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder6'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter Mobile
                                        </small>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Email</label>
                                        <input type='email' className='form-control' id='email' value={newOrder.email} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder7'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter Email
                                        </small>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Date of Order</label>
                                        <input type='date' className='form-control' id='ordered_date' value={newOrder.ordered_date} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder8'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter Date of Birth
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Designation</label>
                                        <input type='text' className='form-control' id='supplier_name' value={newOrder.supplier_name} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder9'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter Designation
                                        </small>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Quantity</label>
                                        <input type='number' className='form-control' id='quantity' value={newOrder.quantity} onChange={handleInputChange} />
                                        <small
                                            className='text-danger'
                                            id='warningAddOrder10'
                                            style={{ display: 'none' }}
                                        >
                                            Please Enter Salary
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' onClick={closeAddOrderModal}>
                                Close
                            </button>
                            <button type='button' className='btn btn-primary' onClick={addOrderConfirmed}>
                                Add Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <div
                className={`modal fade ${showDeleteModal ? 'show' : ''}`}
                style={{ display: showDeleteModal ? 'block' : 'none' }}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='deleteModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='deleteModalLabel'>
                                Confirm Delete
                            </h5>
                        </div>
                        <div className='modal-body'>
                            Are you sure you want to delete this order?
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' onClick={closeDeleteConfirmationModal}>
                                Close
                            </button>
                            <button type='button' className='btn btn-danger' onClick={deleteOrderConfirmed}>
                                Delete Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderControlling;
