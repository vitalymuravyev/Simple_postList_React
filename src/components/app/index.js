import React, { Component } from 'react';
import './app.css';
import AddHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {label: 'first post text', important: true, isLiked: false, id: Math.random().toString(32).substr(2, 12) },
                {label: 'second post text', important: false, isLiked: false, id: Math.random().toString(32).substr(2, 12)},
                {label: 'third post text', important: false, isLiked: true, id: Math.random().toString(32).substr(2, 12)},
                {label: 'forth post text', important: true, isLiked: false, id: Math.random().toString(32).substr(2, 12)}
            ],
            searchText: '',
            filter: 'all'
        }

        this._removeItem = this._removeItem.bind(this);
        this._addNewPost = this._addNewPost.bind(this);
        this._onImportantToggle = this._onImportantToggle.bind(this);
        this._onLikeToggle = this._onLikeToggle.bind(this);
        this._onLikedClick = this._onLikedClick.bind(this);
        this._onAllClick = this._onAllClick.bind(this);
        this._onUpdateSearch = this._onUpdateSearch.bind(this);
        this._onFilterChange = this._onFilterChange.bind(this);
    }

    _removeItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const newData = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newData
            }
        });
    }

    _addNewPost(text) {
        const newPost = {
            label: text,
            important: false,
            isLiked: false,
            id: Math.random().toString(32).substr(2, 12)
        }

        this.setState(({data}) => {
            const newData = [...data, newPost];

            return {
                data: newData
            }
        })
    }

    _changeBooleanValue(id, property) {
        this.setState(({data}) => {
            
            const index = data.findIndex(item => item.id === id);
            const tempObj = {};
            tempObj[property] = !data[index][property];

            const newData = [...data.slice(0, index),
                            Object.assign({}, data[index], tempObj),
                            ...data.slice(index + 1)];
            
            return {
                data: newData
            }
        }) 
    }

    _onImportantToggle(id) {
      
        this._changeBooleanValue(id, 'important');
    }

    _onLikeToggle(id) {

        this._changeBooleanValue(id, 'isLiked');

    }

    _onLikedClick() {
        this.setState(({data}) => {
            const newData = data.slice().filter((item) => item.isLiked);

            return {
                data: newData
            }
        })
    }

    _onAllClick() {
        this.setState(({data}) => {
            console.log(`click`);
            return {data: data}})
    }

    _onUpdateSearch(searchText) {
        this.setState({searchText});
    }

    _onFilterChange(filter) {
        this.setState({filter});
    }

    _searchPost(items, searchText) {
        if (searchText === 0) {
            return items;
        }

        return items.filter((item) => item.label.indexOf(searchText) > -1);
    }

    _filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.isLiked);
        }

        return items;
    }



    render() {
        const {data, searchText, filter} = this.state;

        const visiblePosts = this._filterPost(this._searchPost(data, searchText), filter);
        return (
            <div className="app">
                <AddHeader data={data}/>
                <div className="search-panel d-flex">
                    <SearchPanel 
                        updateSearch={this._onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterChange={this._onFilterChange}
                    />
                </div>
                <PostList 
                    data={visiblePosts}
                    onDeleteClick={this._removeItem}
                    onImportantToggle={this._onImportantToggle}
                    onLikeToggle={this._onLikeToggle}
                />
                <PostAddForm
                    onAddClick={this._addNewPost}
                />
            </div>
        )
    }

}