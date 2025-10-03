// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;





import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders") 
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

//   return (
//     <div className="orders">
//       <h2>My Orders</h2>

//       {orders.length === 0 ? (
//         <div className="no-orders">
//           <p>You haven't placed any orders today</p>
//         </div>
//       ) : (
//         <table border="1" cellPadding="8">
//           <thead>
//             <tr>
//               <th>Stock</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th>Mode</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order.name}</td>
//                 <td>{order.qty}</td>
//                 <td>{order.price}</td>
//                 <td>{order.mode}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };


return (
  <div className="orders" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>My Orders</h2>

    {orders.length === 0 ? (
      <div
        className="no-orders"
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#f8f9fa",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ color: "#666", fontSize: "16px" }}>You haven't placed any orders today</p>
      </div>
    ) : (
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ background: "#007bff", color: "white" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left" }}>Stock</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Qty</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Price</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order._id}
              style={{
                background: index % 2 === 0 ? "#f9f9f9" : "white",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#eaf4ff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = index % 2 === 0 ? "#f9f9f9" : "white")
              }
            >
              <td style={{ padding: "12px" }}>{order.name}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{order.qty}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{order.price}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>{order.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);
};


export default Orders;
