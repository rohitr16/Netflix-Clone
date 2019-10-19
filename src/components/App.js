import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import ShowDetails from './ShowDetails';
import showListData from '../assets/data.json';


class App extends Component {
  componentDidMount() {
    const {shows = []} = showListData || {};
    this.props.fetchShowList(shows);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/showDetails" component={ShowDetails} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null , actions)(App);
