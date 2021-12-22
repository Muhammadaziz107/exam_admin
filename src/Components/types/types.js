import React from "react";
import "./types.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Types() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:7000/types")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="types">
      <table>
        <tr>
          <th>Type Name</th>
        </tr>

        {data &&
          data.map(row => (
            <tr>
              <td>
                <NavLink className="users__link" to={`/types/${row.types_id}`}>
                  {row.types_name}
                </NavLink>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
export default Types;
