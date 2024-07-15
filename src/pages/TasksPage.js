import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import {Link} from 'react-router-dom';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    // Update local storage when adding a new task
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  return (
    <div>
      <h1>Task Management</h1>
      <TaskForm teams={[]} addTask={addTask} /> {/* Pass teams as prop */}
      <TaskList tasks={tasks} />

      <Link to="/"><button>Home Page</button></Link>
    </div>
  );
};

export default TasksPage;
