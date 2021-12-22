import React from "react";
import "./users.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Users() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:7000/admin/users")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <>
      <div className="users">
        <table>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
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
                    {row.user_email}
                  </NavLink>
                </td>
                <td>{row.user_password}</td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}

export default Users;
