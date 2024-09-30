// import React, { useState } from 'react';
// import { supabase } from '.././supabaseClient';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email, 
//       password 
//     });

//     if (error) {
//       setError(error.message);
//     } else if (data) {
//       setSuccess('Logged in successfully!');
      
//       // Check if session and user data are available
//       const { session, user } = data;
      
//       if (session) {
//         localStorage.setItem('supabase-auth-token', session.access_token);  // Store session token
//       }
  
//       if (user) {
//         console.log('User:', user);  // You can access user details here
//       }
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {success && <div className="alert alert-success">{success}</div>}

//       <form onSubmit={handleLogin} className="border p-4 rounded">
//         <div className="form-group mb-3">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group mb-3">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
