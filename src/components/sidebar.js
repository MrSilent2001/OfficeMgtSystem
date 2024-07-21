import React, { useState, useEffect } from 'react';
import '../App.css';
import { BsPeopleFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const role = localStorage.getItem('role');
        setUserRole(role);
        console.log(userRole)
    }, []);

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title' onClick={() => navigate('/accounts-handling')} style={{ cursor: 'pointer' }}>
                <div className='sidebar-brand'>
                    <img src='/Logo.png' alt='' className='icon_header' /> Ru Fashion
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                {userRole === 'Admin' && (
                    <>
                        <li className='sidebar-list-item' onClick={() => navigate('/accounts-handling')}>
                            <BsPeopleFill className='icon'/> Account Handling
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/order-controlling')}>
                            <BsPeopleFill className='icon'/> Order Management
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/sales-mgt')}>
                            <BsPeopleFill className='icon'/> Sales Management
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/employee-mgt')}>
                            <BsPeopleFill className='icon'/> Employee Management
                        </li>
                    </>
                )}

                {userRole === 'HRManager' && (
                    <>
                        <li className='sidebar-list-item' onClick={() => navigate('/accounts-handling')}>
                            <BsPeopleFill className='icon'/> Account Handling
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/order-controlling')}>
                            <BsPeopleFill className='icon'/> Order Controlling
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/sales-mgt')}>
                            <BsPeopleFill className='icon'/> Sales Management
                        </li>
                    </>
                )}

                {userRole === 'FinanceManager' && (
                    <>
                        <li className='sidebar-list-item' onClick={() => navigate('/accounts-handling')}>
                            <BsPeopleFill className='icon'/> Account Handling
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/order-controlling')}>
                            <BsPeopleFill className='icon'/> Order Management
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/sales-mgt')}>
                            <BsPeopleFill className='icon'/> Sales Management
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/finance-inventory-mgt')}>
                            <BsPeopleFill className='icon'/> Inventory Management
                        </li>
                        <li className='sidebar-list-item' onClick={() => navigate('/finance-wage-mgt')}>
                            <BsPeopleFill className='icon'/> Payment Management
                        </li>
                    </>
                )}
            </ul>
        </aside>
    );
}

export default Sidebar;
