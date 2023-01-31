import React from "react";

const Invoice = () => {
  return (
    <div className="invoice text-center m-16">
      <h1 className="text-black text-3xl text-center">Complete your Payment</h1>

      <div className="form">
        <form className="flex flex-col align-middle text-center justify-center">
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
          <label>
            Email
            <p>The purchase receipt would be sent to this address</p>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <label>Address 1</label>
          <input
            type="text"
            name="address"
            placeholder="The address of the user goes here"
          />
          <label>Address2</label>
          <input type="text" name="address" placeholder="and here" />

          <label>Local Government</label>
          <input
            type="text"
            name="lga"
            placeholder="Enter your local government area"
          />
          <label className="state">State</label>
          <select value="state">
            <option value="State">State</option>
            <option value="Lagos">Lagos</option>
            <option value="Ibadan">Ibadan</option>
            <option value="portharcourt">Port Harcourt</option>
          </select>
          <div className="buttons">
            <button className="submit" type="submit">
              Next
            </button>
            <button type="reset" className="cancel">
              Cancel Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invoice;
