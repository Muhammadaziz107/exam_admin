// import React from "react";
// import "./login.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// function Login() {
//   const navigate = useNavigate();
//   const emailInput = useRef(null);
//   const passwordInput = useRef(null);

//   const handleSubmit = async evt => {
//     evt.preventDefault();
//     const res = await fetch("http://localhost:7000/admin/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         userEmail: emailInput.current.value,
//         userPassword: passwordInput.current.value,
//       }),
//     });
//     if (res.status == 400) {
//       console.log("password or email is incorrect");
//     }
//     const { token } = await res.json();
//     if (token) {
//       navigate("/");
//     }
//   };
//   return (
//     <>
//       <body className="login__body">
//         <div className="login-page">
//           <div className="login">
//             <h1 className="login__heading">Login</h1>
//             <form action="http://localhost:7000/loginUser" method="POST">
//               <input
//                 className="login__email"
//                 type="text"
//                 placeholder="Email"
//                 name="user_email"
//               />
//               <input
//                 className="login__passwrod"
//                 type="password"
//                 placeholder="Password"
//                 name="user_password"
//               />
//               <NavLink to="/" className="login__btn">
//                 Sign in
//               </NavLink>
//             </form>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// }

// export default Login;
