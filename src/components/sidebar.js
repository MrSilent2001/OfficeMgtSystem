import React from 'react'
import '../App.css';
import {BsPeopleFill} from 'react-icons/bs';
import {useNavigate} from "react-router-dom";

function Sidebar({openSidebarToggle, OpenSidebar }) {
    const navigate = useNavigate();

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title' onClick={()=> navigate('/admin-dashboard')} style={{cursor: 'pointer'}}>
                <div className='sidebar-brand'>
                    <img  src='/Logo.png' alt='' className='icon_header'/> Ru Fashion
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item' onClick={()=>navigate('/employee-handling')}>
                    <BsPeopleFill className='icon'/> Employee Handling
                </li>

                <li className='sidebar-list-item' onClick={()=>navigate('/attendance-mgt')}>
                    <BsPeopleFill className='icon'/> Attendance Management
                </li>

                <li className='sidebar-list-item' onClick={()=>navigate('/supplier-handling')}>
                    <BsPeopleFill className='icon'/> Supplier Handling
                </li>

                <li className='sidebar-list-item' onClick={()=>navigate('/order-controlling')}>
                        <BsPeopleFill className='icon'/> Order Controlling
                </li>

                <li className='sidebar-list-item' onClick={()=>navigate('/inventory-controlling')}>
                        <BsPeopleFill className='icon'/> Inventory Controlling
                </li>

                <li className='sidebar-list-item' onClick={()=>navigate('/wage-mgt')}>
                        <BsPeopleFill className='icon'/> Wage Management
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar