import React, { useState } from 'react';
import TeamMembers from '../components/TeamMembers';
import TeamList from '../components/TeamList';
import {Link} from 'react-router-dom';

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);

  const addTeamMember = (newTeamMember) => {
    // Logic to add team member to existing team or create new team
  };

  return (
    <div>
      <h1>Team Management</h1>
      <TeamMembers addTeamMember={addTeamMember} />
      <TeamList teams={teams} />
      <Link to="/"><button>Home Page</button></Link>
    </div>

  );
};

export default TeamsPage;
