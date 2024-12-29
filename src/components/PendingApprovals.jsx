// PendingApprovals.js
import React from 'react';
import './PendingApprovals.css';

function PendingApprovals() {
    const pendingRequests = [
        { id: 1, vendor: 'Vendor A', payee: 'Payee X', invoiceNumber: '1400220' },
        { id: 2, vendor: 'Vendor B', payee: 'Payee Y', invoiceNumber: '28742' },
        { id: 3, vendor: 'Vendor C', payee: 'Payee Z', invoiceNumber: '28947' },
        { id: 4, vendor: 'Vendor D', payee: 'Payee A', invoiceNumber: '759173' },
    ];

    return (
        <div className="pending-approvals">
            <h2>Pending Approvals</h2>
            <div className="list-container">
                {pendingRequests.map(request => (
                    <div key={request.id} className="list-item">
                        <span className="list-column">{request.vendor}</span> | 
                        <span className="list-column">{request.payee}</span> | 
                        <span className="list-column">{request.invoiceNumber}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PendingApprovals;
