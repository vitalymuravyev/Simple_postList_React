import './search-panel.css';

import React, { Component } from 'react';

export default class SearchPanel extends Component {

    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="for filter type here"
                onChange={(evt) => this.props.updateSearch(evt.target.value)}

            />
        )
    }
    
}
