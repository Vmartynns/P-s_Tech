import React, { useEffect, useState } from 'react';

const TeamList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const storedTeamMembers = JSON.parse(localStorage.getItem('teamMembers')) || [];
    // Group team members into teams based on team ID
    const groupedTeams = groupByTeam(storedTeamMembers);
    setTeams(groupedTeams);
  }, []);

  // Function to group team members into teams
  const groupByTeam = (teamMembers) => {
    const groupedTeams = {};
    teamMembers.forEach(member => {
      if (!groupedTeams[member.teamId]) {
        groupedTeams[member.teamId] = {
          id: member.teamId,
          name: `Team ${member.teamId}`,
          members: []
        };
      }
      groupedTeams[member.teamId].members.push(member);
    });
    return Object.values(groupedTeams);
  };

  return (
    <div>
      <h2>Team List</h2>
      {teams.map((team) => (
        <div key={team.id}>
          <h3>{team.name}</h3>
          <ul>
            {team.members.map((member) => (
              <li key={member.id}>{member.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
