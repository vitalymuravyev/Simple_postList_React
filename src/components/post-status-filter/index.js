import './post-status-filter.css';

import React, { Component } from 'react';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);

        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]

    }

    _createButtons({name, label}, currentClass) {
        return (
            <button
                    key={name}
                    type="button" 
                    className={currentClass}
                    onClick={() => this.props.onFilterChange(name)}
                >{label}</button>
        )
    }

    render() {
        const buttons = this.buttons.map((item) => {
            const currentClass = this.props.filter === item.name ? "btn btn-info" : "btn btn-outline-secondary";
            return this._createButtons(item, currentClass)});
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

