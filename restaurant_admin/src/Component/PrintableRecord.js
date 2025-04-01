import React, { forwardRef } from 'react';

const PrintableRecord = forwardRef(({ record }, ref) => {
    var qnt = record.all.quantity.split(',');

    // Define GST rate
    const gstRate = 0.18; // 18%

    // Calculate subtotal
    let subtotal = 0;
    record.menu.forEach((item, index) => {
        subtotal += qnt[index] * item.price;
    });

    // Calculate GST and total amount
    const gstAmount = subtotal * gstRate;
    const totalAmount = subtotal + gstAmount;

    return (
        <div ref={ref} className="container my-4 p-4 bg-light border border-primary rounded shadow-lg">
            <h1 className="mb-4 text-primary">Customer Information</h1>
            <div className="mb-4">
                <h4>Name: <span className="text-dark">{record.all.name}</span></h4>
                <h4>Email: <span className="text-dark">{record.all.email}</span></h4>
                <h4>Contact: <span className="text-dark">{record.all.contact}</span></h4>
            </div>

            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th colSpan={5} className="text-center bg-danger text-white">All Menu</th>
                    </tr>
                    <tr>
                        <th>Menu Name</th>
                        <th>Price</th>
                        <th>Information</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.menu.map((v, k) => (
                            <tr key={k}>
                                <td>{v.mname}</td>
                                <td>{v.price} ₹</td>
                                <td>{v.info}</td>
                                <td>{qnt[k]}</td>
                                <td>{(qnt[k] * v.price).toFixed(2)} ₹</td>
                            </tr>
                        ))
                    }
                    <tr className="table">
                        <td colSpan={4} className="text-end fw-bold">Subtotal:</td>
                        <td>{subtotal.toFixed(2)} ₹</td>
                    </tr>
                    <tr className="table">
                        <td colSpan={4} className="text-end fw-bold">GST (18%):</td>
                        <td>{gstAmount.toFixed(2)} ₹</td>
                    </tr>
                    <tr className="table">
                        <td colSpan={4} className="text-end fw-bold">Payable Amount:</td>
                        <td className='fw-bold text-danger fs-6'>{totalAmount.toFixed(2)} ₹</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});

export default PrintableRecord;
