/**
 * Created by caelumtian on 16/5/28.
 */
import React from 'react';
import Icon from '../../components/si-icon';
import {Link} from 'react-router';

class Layout extends React.Component {
    render() {
        document.title= "ICON 图标";
        return (
            <div className="hui-page">
                <header className="bar bar-nav">
                    <h1 className="title">ICON图标</h1>
                    <Link className="button pull-left" to="/">
                        <Icon name="icon-left"/>
                    </Link>
                </header>
                <div className="content content-padd">
                    <Icon name="icon-right" className="icon-style"/>
                </div>
            </div>
        )
    }
}

export default Layout;