import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.description}</strong> - Priority: {task.priority}, Estimated Time: {task.estimatedTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
