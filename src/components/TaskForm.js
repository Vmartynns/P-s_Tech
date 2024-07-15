import React, { useState } from 'react';

const TaskForm = ({ teams }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (!description || !priority || !estimatedTime) return;

    // Generate unique ID (example: using timestamp)
    const id = new Date().getTime();

    // Create new task object
    const newTask = {
      id,
      description,
      priority,
      estimatedTime
    };

    // Update tasks in local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...storedTasks, newTask]));

    // Reset form
    setDescription('');
    setPriority('');
    setEstimatedTime('');
    
    // Refresh page
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estimated time"
        value={estimatedTime}
        onChange={(e) => setEstimatedTime(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
