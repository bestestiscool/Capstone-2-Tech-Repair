// import React, { useState } from 'react';
// import { supabase } from '.././supabaseClient';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     const { user, error } = await supabase.auth.signUp({ email, password });

//     if (error) {
//       setError(error.message);
//     } else {
//       setSuccess('Registered successfully!');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Register</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {success && <div className="alert alert-success">{success}</div>}

//       <form onSubmit={handleRegister} className="border p-4 rounded">
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
//             minLength="6"
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
