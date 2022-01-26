import React from 'react';
import dashImg from '../../images/dashborad.png'
import './DashboardHome.css'
const DashboardHome = () => {
    return (
        <div>
            <div className="container">
                <h3 className='text-success'>Welcome to Dashboard</h3>
                <img src={dashImg} className='img-fluid w-75' alt="" />
            </div>
        </div>
    );
};

export default DashboardHome;