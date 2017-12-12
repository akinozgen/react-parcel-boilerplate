import React from 'react';
import logo from '../../images/package.svg';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <img src={logo}/>
            </div>
        );
    }
}