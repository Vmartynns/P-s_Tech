import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Task Manager App</h1>
      <p>Manage your tasks and teams efficiently!</p>
      
    <Link to="/teams"><button>Teams Page</button></Link>
    <Link to="/tasks"><button>Tasks Page</button></Link>
    <Link to="/test"><button>Firebase Page</button></Link>

    </div>
  );
};

export default HomePage;