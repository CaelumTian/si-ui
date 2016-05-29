/**
 * Created by caelumtian on 16/5/28.
 */
import React from 'react';
import Icon from '../../components/si-icon';
import {Link} from 'react-router';
import Button from '../../components/si-button';

class IconPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    handleTouchEnd = () => {
        this.setState({
            loading: true
        })
    };
    render() {
        document.title= "ICON 图标";
        return (
            <div className="hui-page">
                <header className="bar bar-nav">
                    <h1 className="title">ICON图标</h1>
                    <Link className="button pull-left" to="/">
                        <Icon name="left"/>
                    </Link>
                </header>
                <div className="content content-padd">
                    <Icon name="right" className="icon-style"/>
                    <Icon name="left" className="icon-style"/>
                    <Icon name="info" className="icon-style"/>
                    <Icon name="loading" className="icon-style"/>
                    <Icon name="mark" className="icon-style"/>
                    <Icon name="more" className="icon-style"/>
                    <Icon name="wifi" className="icon-style"/>
                </div>
            </div>
        )
    }
}

export default IconPage;