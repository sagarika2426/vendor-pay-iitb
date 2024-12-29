import { useState } from 'react';
import '../components/Navbar.css';
import CreatePayRequest from './CreatePayRequest'; // Assuming you already have this component

function Navbar() {
    const [activeTab, setActiveTab] = useState('create');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <ul className="nav-list">
                    <li
                        className={`nav-item ${activeTab === 'create' ? 'active' : ''}`}
                        onClick={() => handleTabClick('create')}
                    >
                        Create Pay Request
                    </li>
                    <li
                        className={`nav-item ${activeTab === 'view' ? 'active' : ''}`}
                        onClick={() => handleTabClick('view')}
                    >
                        View Pay Requests
                    </li>
                </ul>
            </nav>

            {/* Content */}
            <div className="tab-content">
                {activeTab === 'create' && <CreatePayRequest />}
                {activeTab === 'view'}
            </div>
        </div>
    );
}

export default Navbar;
