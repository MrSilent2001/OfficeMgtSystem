import React, {useState} from 'react';
import "./styleSheets/adminDashboard.css";
import '../App.css';
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const SupplierHandling = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <main className='main-container'>
                <div className='main-title'>
                    <h1>SupplierHandling</h1>
                </div>
            </main>
        </div>
    );
};

export default SupplierHandling;