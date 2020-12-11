import React from 'react'
const List = ({ posts }) => {
    return (
        <ul>
            {posts.map((post, i) =>
                <li key={i}>{post.title}</li>
            )}
        </ul>
    )
}

export default List