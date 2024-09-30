// import React, { useState } from 'react';
// import axios from 'axios';

// const AuthForm = ({ isLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const url = isLogin ? '/api/auth/login' : '/api/auth/register';
//     const data = isLogin ? { email, password } : { username, email, password };

//     axios.post(url, data)
//       .then((response) => {
//         if (isLogin) {
//           localStorage.setItem('token', response.data.token);
//           // Redirect to protected page or show a success message
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {!isLogin && (
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//       )}
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//     </form>
//   );
// };

// export default AuthForm;
