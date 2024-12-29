import './ApprovedApprovals.css';

function ApprovedApprovals() {
    const approvedRequests = [
        { id: 1, vendor: 'Vendor E', payee: 'Payee B', invoiceNumber: '458923' },
        { id: 2, vendor: 'Vendor F', payee: 'Payee C', invoiceNumber: '782345' },
        { id: 3, vendor: 'Vendor G', payee: 'Payee D', invoiceNumber: '234876' },
        { id: 4, vendor: 'Vendor H', payee: 'Payee E', invoiceNumber: '561983' },
    ];

    return (
        <div className="approved-approvals">
            <h2>Approved Approvals</h2>
            <div className="list-container">
                {approvedRequests.map(request => (
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

export default ApprovedApprovals;
