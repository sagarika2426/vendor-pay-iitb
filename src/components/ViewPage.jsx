import React from 'react';
import './ViewPage.css';

const ViewPage = () => {
  return (
    <div className="medical-summary">
      <div className="details-section">
        <h3 className="section-header">Patient Details</h3>
        <div className="summary-row">
          <div className="summary-item">
            <strong>Patient Name:</strong>
            <span>John Doe</span>
          </div>
          <div className="summary-item">
            <strong>Blood Group:</strong>
            <span>O+</span>
          </div>
          <div className="summary-item">
            <strong>Gender:</strong>
            <span>Male</span>
          </div>
          <div className="summary-item">
            <strong>Contact Number:</strong>
            <span>+1-555-1234</span>
          </div>
        </div>
      </div>

      <div className="details-section">
        <h3 className="section-header emergency">Emergency Contact Details</h3>
        <div className="summary-row">
          <div className="summary-item">
            <strong>Emergency Contact Name:</strong>
            <span>Jane Doe</span>
          </div>
          <div className="summary-item">
            <strong>Relation:</strong>
            <span>Sister</span>
          </div>
          <div className="summary-item">
            <strong>Blood Group:</strong>
            <span>O-</span>
          </div>
          <div className="summary-item">
            <strong>Contact:</strong>
            <span>+1-555-5678</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
