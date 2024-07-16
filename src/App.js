import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TeamsPage from './pages/TeamsPage';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/tasks">
            <TasksPage />
          </Route>
          <Route path="/teams">
            <TeamsPage />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;