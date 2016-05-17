/**
 * Created by caelumtian on 16/5/16.
 */
import React from 'react';
import Icon from '../../components/si-icon';
import {Row, Col} from '../../components/si-layout';

class Layout extends React.Component {
    render() {
        document.title= "flex 布局"
        return (
            <div className="hui-page">
                <header className="bar bar-nav">
                    <h1 className="title">SI-UI</h1>
                    <a href="#" className="button pull-left">
                        <Icon className="icon-left"/>
                    </a>
                </header>
                <div className="content content-padd">
                    234
                </div>
            </div>
        )
    }
}

export default Layout;