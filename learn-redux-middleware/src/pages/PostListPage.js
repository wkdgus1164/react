import React from 'react'
import PostListContainer from '../containers/PostListContainer'

function PostListPage({ match }) {
    const { id } = match.params
    return (
        <div>
            <PostListContainer id={id} />
        </div>
    )
}

export default PostListPage