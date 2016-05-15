/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        document.title = "SI-UI DEMO";
        return (
            <div className="hui-page home">
                <header className="bar bar-nav">
                    <h1 className="title">SI-UI</h1>
                </header>
                <div className="content">
                    <p>这是正文</p>
                    <Link to="/test">跳转</Link>
                </div>
            </div>
        )
    }
}

export default HomePage;