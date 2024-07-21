import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

const SalesMgt = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [items, setItems] = useState([]);

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost/Office_Management/Hadler/itemsManagement.php');
            setItems(response.data.data); // Ensure you're accessing the 'data' property correctly
        } catch (error) {
            console.error("There was an error fetching the items!", error);
        }
    };

    useEffect(() => {
        fetchItems();
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
                                        Office Project Management > Sales Management
                                    </h6>
                                </div>
                            </div>
                            <div className=''>
                                <div className='row row-cols-1 row-cols-md-3 g-4'>
                                    {items.map(item => (
                                        <div className='col' key={item.itemCode}>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <div className='p-1 row'>
                                                        <div className='col-8'>
                                                            <p>Item Code - {item.itemCode}</p>
                                                        </div>
                                                        <div className='col-4 text-end'>
                                                            <span className='badge bg-secondary'>Pending</span>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <table className='table table-bordered'>
                                                        <thead
                                                            className='text-white'
                                                            style={{ backgroundColor: '#C19A6B' }}
                                                        >
                                                        <tr>
                                                            <th scope='col' style={{ width: '12%' }}>Item Name</th>
                                                            <th scope='col' style={{ width: '20%' }}>Quantity</th>
                                                            <th scope='col' style={{ width: '20%' }}>Price</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td style={{ width: '12%' }}>{item.itemName}</td>
                                                            <td style={{ width: '20%' }}>{item.quantity}</td>
                                                            <td style={{ width: '20%' }}>{item.price}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Date - 30 / 06/ 2024</p>
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

export default SalesMgt;
