import './post-list.css';

import React from 'react';
import PostListItem from "../post-list-item";

const PostList = ({data, onDeleteClick, onImportantToggle, onLikeToggle}) => {

    const posts = 
    data.map(({label, id, isLiked, important}) => {
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    label={label}
                    isLiked={isLiked}
                    important={important}
                    onDeleteClick={() => onDeleteClick(id)}
                    onImportantToggle={() => onImportantToggle(id)}
                    onLikeToggle={() => onLikeToggle(id)}
                />
            </li>
        )
    });
    
    
    return (
        
        <ul className="app-list list-group">
            {posts}
        </ul>
    )
}

export default PostList;