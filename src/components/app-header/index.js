import React from 'react';

import "./app-header.css"


const AppHeader = ({data}) => {
    let likesCount = data.filter(item => item.isLiked).length;
    let postCount = data.length;
    return (
        <div className='app-header d-flex'> 
            <p className='user-name'>Vitaly Muravyev</p>
            <p className='header-info'>You have {postCount} posts, only {likesCount} posts liked</p>
        </div>
    )
}

export default AppHeader;