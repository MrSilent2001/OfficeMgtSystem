import React from 'react'
import '../App.css';
import {BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs';

function Home() {

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='admin-panel-card' >
                    <div className='card-inner'>
                        <h3>PRODUCTS</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1></h1>
                </div>

                <div className='admin-panel-card' >
                    <div className='card-inner'>
                        <h3>SALES ORDERS</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1></h1>
                </div>

                <div className='admin-panel-card' >
                    <div className='card-inner'>
                        <h3>ACTIVE CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1></h1>
                </div>

                <div className='admin-panel-card' >
                    <div className='card-inner'>
                        <h3>REFUND REQUEST</h3>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h1></h1>
                </div>
            </div>
        </main>
    )
}

export default Home