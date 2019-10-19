import React, { Component } from 'react';


class ShowListItem extends Component {

    constructor(props){
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick(showDetailsJSON) {
        const {getIMDBData, history} = this.props;

        getIMDBData(showDetailsJSON, history);
    }


    render() {
        const {showDetailsJSON = {}} = this.props;
        const {title, description, year, poster} = showDetailsJSON;
        return (
            <div className="card__side card__side--front" onClick={() => {this.handleCardClick(showDetailsJSON); }}>
                <div className="card__picture" >            
                    <img src={`posters/${poster}`} className="card__image" alt="Display Pic"/>
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span">{title}</span>
                </h4>
                <div className="card__details">
                    ({year})
                </div>
                <div className="card__details">
                    {description}
                </div>
            </div>
        );
    }
}

export default ShowListItem;