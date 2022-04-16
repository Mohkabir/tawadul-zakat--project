import React from "react";

const ZakatCalc = () => {
  return (
    <div className="container">
      <div className="zakat_calc">
        <h1>Our Zakat Calculator</h1>
        <form className="" action="">
          <div>
            <h3>Gold and Silver</h3>
            <div className="flex_calc">
              <label htmlFor="">Value of Gold & Silver you possess</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <h3>Money</h3>
            <div className="flex_calc">
              <label htmlFor="">Cash at Home & Bank Accounts</label>
              <input type="text" />
            </div>
            <div className="flex_calc">
              <label htmlFor="">Other Savings</label>
              <input type="text" />
            </div>
            <div className="flex_calc">
              <label htmlFor="">Investment & Share Values</label>
              <input type="text" />
            </div>
            <div className="flex_calc">
              <label htmlFor="">Money owed to you</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <h3>Business Assets</h3>
            <div className="flex_calc">
              <label htmlFor="">Stock Value</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <h3>Short Term Liabilities</h3>
            <div className="flex_calc">
              <label htmlFor=""> Money You Owe value</label>
              <input type="text" />
            </div>
            <div className="flex_calc">
              <label htmlFor="">Other Outgoings Due</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <div className="flex_calc">
              <label htmlFor="">Net Assets</label>
              <input type="text" />
            </div>
            <div className="flex_calc">
              <label htmlFor="">Nisab Threshold:</label>
              <input type="text" />
            </div>
          </div>
          <div className="flex_calc">
            <label htmlFor="">TOTAL ZAKAT PAYABLE =</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ZakatCalc;
