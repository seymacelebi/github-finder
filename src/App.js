// import Alert from "./components/Alert";
// import Navbar from "./components/Navbar";
// import Search from "./components/Search";
// import UserList from "./components/UserList";
// import React, { Component } from "react";

// export class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: false,
//       users: [],
//       error: null,
//     };
//   }

//   searchUsers = (keyword) => {
//     this.setState({ loading: true });
//     fetch("https://api.github.com/search/users?q=" + keyword)
//       .then((response) => response.json())
//       .then((data) => this.setState({ users: data.items, loading: false }));
//   };
//   clearResults = () => {
//     this.setState({ users: [] });
//   };
//   displayAlert = (msg, type) => {
//     this.setState({ error: { msg: msg, type: type } });
//     setTimeout(() => {
//       this.setState({ error: null });
//     }, 3000);
//   };

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Search
//           searchUsers={this.searchUsers}
//           clearResults={this.clearResults}
//           showClearButton={this.state.users.length > 0 ? true : false}
//           displayAlert={this.displayAlert}
//         />
//         <Alert error={this.state.error} />
//         <div className="container mt-3">
//           <UserList users={this.state.users} loading={this.state.loading} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import React from 'react'
import Search from './components/Search';
import Alert from './components/Alert';
import { useState } from 'react';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  
  
  const searchUsers = (keyword) => {
    setLoading(true);

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => {
          setUsers(data.items);
          setLoading(false);
        });
    }, 1000);
  }

  const clearResults = () => {
    setUsers([]);
  }

  const displayAlert = (msg, type) => {
    setError({ msg: msg, type: type });

    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  return (
    <div>
      <Navbar />
      <Search 
          searchUsers={searchUsers} 
          clearResults={clearResults} 
          showClearButton={ users.length > 0 ? true:false }
          displayAlert = {displayAlert} />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList users={ users } loading={loading}/>
      </div>
  </div>
  )
}

export default App