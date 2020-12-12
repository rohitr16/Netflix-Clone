import  React, {Component} from 'react';
import footerLogo from '../assets/img/download.jfif'
import '../css/App.css'

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <img alt="Logo" src={footerLogo} />
                </div>
            </footer>
        );
    }

}
