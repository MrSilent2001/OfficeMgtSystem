import React, { useState, useRef } from 'react';
import "../styleSheets/adminDashboard.css";
import '../../App.css';
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Report from "../Admin View/report";

const ReportGeneration = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const [dateRange, setDateRange] = useState({ from: '', to: '' });
    const reportRef = useRef(null);

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setDateRange((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const downloadPDF = () => {
        const input = reportRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 10;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('report.pdf');
        });
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={toggleSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={toggleSidebar} />
            <main className='main-container'>
                <div className='main-title'>
                    <div className='row' style={{ marginRight: '1%' }}>
                        <div className='col-10' style={{width: '78vw'}}>
                            <div className='row my-4'>
                                <div className='col'>
                                    <h6 className='text-secondary my-2'>
                                        Office Management &gt; Report Generation
                                    </h6>
                                </div>
                            </div>
                            <div ref={reportRef}>
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="type" className="form-label">Type</label>
                                        <select className="form-select" id="type" onChange={handleInputChange}>
                                            <option value="Sales">Sales</option>
                                            <option value="Orders">Orders</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label htmlFor="from" className="form-label">From</label>
                                            <input type="date" className="form-control" id="from"
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-3">
                                            <label htmlFor="to" className="form-label">To</label>
                                            <input type="date" className="form-control" id="to"
                                                   onChange={handleInputChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{position: 'absolute', left: '-9999px'}}>
                                    <Report ref={reportRef} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <div className="mb-3">
                                        <button className="btn btn-primary btn-md" type="button"
                                                onClick={downloadPDF}>
                                            Generate Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ReportGeneration;
