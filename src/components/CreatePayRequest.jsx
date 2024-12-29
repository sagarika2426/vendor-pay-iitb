import '../components/CreatePayRequest.css';

function CreatePayRequest() {
    return (
        <div className="app-container">
          <h1>Vendor Payment Request</h1>
          <form className="form-container">
            <div className="input-row">
              <div className="input-field">
                <label>Vendor Name</label>
                <input type="text" placeholder="Vendor name" />
              </div>
              <div className="input-field">
                <label>Project Name</label>
                <input type="text" placeholder="Project name" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-field">
                <label>Invoice Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-field">
                <label>Account Head</label>
                <input type="text" placeholder="Account head" />
              </div>
              <div className="input-field">
                <label>Invoice Number</label>
                <input type="text" placeholder="Invoice number" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-field">
                <label>Invoice Value</label>
                <input type="number" placeholder="Invoice value" />
              </div>
            </div>
            <div className="button-container">
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
      );
}

export default CreatePayRequest;
