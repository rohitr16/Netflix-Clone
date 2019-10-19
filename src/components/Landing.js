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
    return { showList, showDetails }; 
}

export default connect(mapStateToProps, actions)(Landing);