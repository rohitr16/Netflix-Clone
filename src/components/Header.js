import  React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import logo from '../assets/img/logo.png';
import svgIcon from '../assets/img/sprite.svg';
import '../css/App.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const value = e.target.value;
        const {shows = []} = this.props.showList || {};
        this.props.filterSearchItem(value, shows);
    }


    render() {
        const {showDetails = {}} = this.props;
        const hideSerachBar = Object.keys(showDetails).length > 0;
        return (
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
                {!hideSerachBar && <form className="search">
                    <input type="text" className="search__input" placeholder="Search Shows" onChange={this.handleChange}/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref={`${svgIcon}#icon-magnifying-glass`}></use>
                        </svg>
                    </button>
                </form>}
            </header>
        );
    }

}

const mapStateToProps = ({  showList, showDetails }) => {
    return {  showList, showDetails }; 
}

export default connect(mapStateToProps, actions)(Header);