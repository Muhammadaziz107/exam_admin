import React from "react";
import "./orders.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Orders() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:7000/admin/orders")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="orders">
      <table>
        <tr>
          <th>Full Name</th>
          <th>Order Body</th>
          <th>Sended time</th>
          <th>User Phone</th>
          <th>Confirm Order</th>
        </tr>
        {data &&
          data.map(row => (
            <tr>
              <td>
                <NavLink className="users__link" to={`/users/${row.user_id}`}>
                  {row.user_name}
                </NavLink>
              </td>
              <td>
                <NavLink className="users__link" to={`/users/${row.user_id}`}>
                  {row.order_body}
                </NavLink>
              </td>
              <td>{row.sended_time}</td>
              <td>{row.user_phone}</td>
              <th>
                <button className="confirmation" type="button">
                  confirmation
                </button>
              </th>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default Orders;
