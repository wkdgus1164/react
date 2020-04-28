import React from "react";

const profileData = {
  velopert: {
    name: "한장현",
    desecription: "Frontend Engineer",
  },
  homer: {
    name: "asdf",
    desecription: "asdfasdf",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return <div>
    <h3>{username} ({profile.name})</h3>
    <p>{profile.desecription}</p>
  </div>;
}

export default Profile;
