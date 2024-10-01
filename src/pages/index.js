import Head from 'next/head';
import { useState } from 'react';

const data = [
  { id: '#20462', name: 'Ramesh Pal', phone: '8527419634', email: 'rameshPAL@gmail.com', date: '13/05/2022', subscription: 'Active' },
  { id: '#45169', name: 'Rahul Prakash', phone: '1234785236', email: 'RAhul23@gmail.com', date: '15/06/2022', subscription: 'Not Active' },
  { id: '#17188', name: 'Arun Mehta', phone: '4776165664', email: 'Arun32@gamil.com', date: '25/09/2022', subscription: 'Expired' },
];

export default function Subscriptions() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Submission To Priyanshu Sir</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="sidebar">
        <h2>EARTHFIELDS</h2>
        <a href="#" className="active">Dashboard</a>
        <a href="#">Overview</a>
        <a href="#">Users</a>
        <a href="#">Demand Side</a>
        <a href="#">Supply Side</a>
        <a href="#">LMP requests</a>
        <a href="#">Subscriptions</a>
        <a href="#">Payments</a>
        <a href="#">Contact us details</a>
        <a href="#">Services</a>
        <a href="#">Service Requests</a>
      </div>
      <div className="content">
        <div className="header">
          <div>Settings</div>
          <div>
            <input type="text" placeholder="Search content..." />
            <i className="fas fa-bell"></i>
          </div>
        </div>
        <div className="table-container">
          <button className="add-customer-btn">+ Add Customer</button>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Date</th>
                <th>Subscription</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr key={item.id}>
                  <td><input type="checkbox" /></td>
                  <td><a href="#">{item.id}</a></td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.date}</td>
                  <td>
                    <span
                      className={
                        item.subscription === 'Active'
                          ? 'status-active'
                          : item.subscription === 'Not Active'
                          ? 'status-not-active'
                          : 'status-expired'
                      }
                    >
                      {item.subscription}
                    </span>
                  </td>
                  <td className="action-icons">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash-alt"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <span onClick={handlePrevious} className={currentPage === 0 ? 'disabled' : ''}>
              Previous
            </span>
            <span className="page-number">{currentPage + 1}</span>
            <span onClick={handleNext} className={endIndex >= data.length ? 'disabled' : ''}>
              Next
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .sidebar {
          width: 250px;
          background-color: #333;
          color: #fff;
          position: fixed;
          height: 100%;
          padding-top: 20px;
        }
        .sidebar h2 {
          text-align: center;
          color: #00aaff;
        }
        .sidebar a {
          display: block;
          color: #fff;
          padding: 15px;
          text-decoration: none;
        }
        .sidebar a:hover {
          background-color: #575757;
        }
        .sidebar .active {
          background-color: #000;
        }
        .content {
          margin-left: 250px;
          padding: 20px;
        }
        .header {
          background-color: #000;
          color: #fff;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header input {
          padding: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .header .fa-bell {
          font-size: 20px;
        }
        .table-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .table-container table {
          width: 100%;
          border-collapse: collapse;
        }
        .table-container th, .table-container td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        .table-container th {
          background-color: #f2f2f2;
        }
        .table-container .status-active {
          color: green;
          font-weight: bold;
        }
        .table-container .status-not-active {
          color: orange;
          font-weight: bold;
        }
        .table-container .status-expired {
          color: red;
          font-weight: bold;
        }
        .table-container .action-icons i {
          margin: 0 5px;
          cursor: pointer;
        }
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }
        .pagination span {
          margin: 0 10px;
          cursor: pointer;
        }
        .pagination .disabled {
          color: gray;
          cursor: not-allowed;
        }
        .pagination .page-number {
          background-color: #6200ea;
          color: #fff;
          padding: 5px 10px;
          border-radius: 5px;
        }
        .add-customer-btn {
          background-color: #6200ea;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          float: right;
        }
      `}</style>
    </>
  );
}

