import React from 'react'

const profileData = {
    han: {
        name: '한장현',
        description: '개발자',
    },
    dlwlrma: {
        name: '아이유',
        description: '세계 최대 아티스트',
    }
}

function Profile({ match }) {
    const { username } = match.params
    const profile = profileData[username]

    if (!profile) return <div>존재하지 않는 사용자입니다.</div>
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile