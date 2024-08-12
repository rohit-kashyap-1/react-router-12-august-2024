import React from 'react'
import { Link } from 'react-router-dom'

export default function PostListItem({title,body,views,id}) {
    return (
        <div>
            <div className="post-preview">
                <Link to={"/post/"+id}>
                    <h2 className="post-title">{title}</h2>
                    <h3 className="post-subtitle">{body}</h3>
                </Link>
                <p className="post-meta">
                    <strong> {views} Views</strong>
                </p>
            </div>
            <hr className="my-4" />
        </div>
    )
}
