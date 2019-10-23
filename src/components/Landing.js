import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowList from './ShowList';
import * as actions from '../actions';

class Landing extends Component {

    render() {
        return (
            <main className="list__container">
                <ShowList {...this.props} />
            </main>
        );
    }
}

const mapStateToProps = ({ showList, showDetails }) => {
    const {searchKey = '', shows = []} = showList;
    const searchResults = shows.filter((item) => {
        const title = item.title.toUpperCase();
        return title.search(searchKey) >=0 || title.search(searchKey.toUpperCase()) >= 0;
    });

    return { showList: {searchResults}, showDetails }; 
}

export default connect(mapStateToProps, actions)(Landing);