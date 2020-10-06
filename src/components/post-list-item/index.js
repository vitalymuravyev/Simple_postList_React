import './post-list-item.css';

import React, { Component } from 'react';

export default class PostListItem extends Component {

    render() {
        const {label, onDeleteClick, onLikeToggle, onImportantToggle, isLiked, important} = this.props;
        
        let postClassNames = "app-list-item d-flex justify-content-between"
        if (important) {
            postClassNames += " important";
        }
        if (isLiked) {
            postClassNames += " like";
        }

        return (
            <div className={postClassNames}>
                <span className="app-list-item-label" onClick={onLikeToggle}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={onImportantToggle}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDeleteClick}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
   
}
