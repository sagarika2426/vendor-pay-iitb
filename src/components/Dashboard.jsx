// Dashboard.js
import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import './Dashboard.css';

function Dashboard() {
    const [value, setValue] = useState(0); // For controlling tab selection

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Dummy data for Pending and Approved Approvals
    const pendingData = [
        { id: 1, vendor: 'Vendor A', payee: 'Payee X', invoiceNumber: 1400220 },
        { id: 2, vendor: 'Vendor B', payee: 'Payee Y', invoiceNumber: 28742 },
        { id: 3, vendor: 'Vendor C', payee: 'Payee Z', invoiceNumber: 28947 },
        { id: 4, vendor: 'Vendor D', payee: 'Payee A', invoiceNumber: 759173 },
    ];

    const approvedData = [
        { id: 5, vendor: 'Vendor E', payee: 'Payee B', invoiceNumber: 123456 },
        { id: 6, vendor: 'Vendor F', payee: 'Payee C', invoiceNumber: 987654 },
        { id: 7, vendor: 'Vendor G', payee: 'Payee D', invoiceNumber: 123789 },
        { id: 8, vendor: 'Vendor H', payee: 'Payee E', invoiceNumber: 456123 },
    ];

    // Columns definition
    const columns = [
        { field: 'vendor', headerName: 'Vendor', width: 150 },
        { field: 'payee', headerName: 'Payee', width: 150 },
        { field: 'invoiceNumber', headerName: 'Invoice Number', width: 180 },
    ];

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div style={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="Pending" />
                    <Tab label="Approved" />
                </Tabs>

                <div className="data-grid-container">
                    {value === 0 && (
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={pendingData}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                // checkboxSelection
                            />
                        </div>
                    )}

                    {value === 1 && (
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={approvedData}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                // checkboxSelection
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
