import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import showListData from '../assets/data.json';
import * as actions from '../actions';

class ShowDetails extends Component {

    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        const {match} = this.props;
        const {params} = match;
        const {shows = []} = showListData || {};
        const imdbid = params.id;
        this.props.fetchShowList(shows);
        this.props.getIMDBDatadetails(imdbid);
    }

    handleBack(e) {
        e.stopPropagation();
        this.props.clearDetails();
    }

    render() {
        const {showDetails = {}} = this.props;
        const {title, imdbRating, description, trailer, year, poster} = showDetails || {};
        return (
            <div className="list__container">
                <Link  to="/" onClick={this.handleBack}>
                    <span className="back_button"> Back </span>
                </Link>
                <div className="iframe__wrapper">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0`} frameBorder="0" allowFullScreen="" className="iframe"></iframe>  
                </div>
                <div className="details__wrapper">
                    <img className="details_img" src={`/posters/${poster}`}></img>
                    <div className="inner_wrapper--details">
                        <h3 className="detail_title"> {title} </h3>
                        <span className="year"> ({year}) </span>
                        <span className="rating"> Rating: {imdbRating} </span>
                        <p className="desciption"> {description} </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ showList, showDetails }) => {
    const {imdbID} = showDetails;
    const {shows = []} = showList;
    const filteredShowDetails = shows.find((item) => {
        return item.imdbID === imdbID;
    }) || {};
    return { showList, showDetails: {...showDetails, ...filteredShowDetails} }; 
}

export default connect(mapStateToProps, actions)(ShowDetails);
