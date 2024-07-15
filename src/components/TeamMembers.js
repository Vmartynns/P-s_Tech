import React, { useState } from 'react';

const TeamMembers = ({ addTeamMember }) => {
  const [name, setName] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (!name) return;
    // Create new team member object
    const newTeamMember = {
      name
    };
    // Pass new team member to parent component
    addTeamMember(newTeamMember);
    // Save to local storage
    const teamMembers = JSON.parse(localStorage.getItem('teamMembers')) || [];
    localStorage.setItem('teamMembers', JSON.stringify([...teamMembers, newTeamMember]));
    // Reset form
    setName('');

    // Refresh page
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Team member name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default TeamMembers;
