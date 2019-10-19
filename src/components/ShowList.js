import React, { Component } from 'react';
import ShowListItem from './ShowListItem';

class ShowList extends Component {

    render() {
        const {getIMDBData, showList = {}, history} = this.props;
        const {shows = [], searchResults = []} = showList;
        return (
            <div className="showlist__wrapper">
                {searchResults.map((item) => {
                    return (
                        <ShowListItem showDetailsJSON ={item} getIMDBData={getIMDBData} history={history} />  
                    )
                })}
            </div>
        );
    }
}

export default ShowList;
