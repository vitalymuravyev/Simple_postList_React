import "./post-add-form.css";
import React, { Component } from 'react';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    _onFormSubmit(evt) {
        evt.preventDefault();
        const text = this.inputRef.current.value;
        this.props.onAddClick(text);
        this.inputRef.current.value = '';
    }

    render() {
        return (
            <form className="bottom-panel d-flex"
                onSubmit={this._onFormSubmit}>
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="Type new post here"
                    required
                    ref={this.inputRef}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"   
                >Add post</button>
            </form>
        )
    }
    
}
