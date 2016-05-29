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
                    <Icon name="icon-right" className="style"/>
                    <div>
                        <Button round={true} type="danger">我的天</Button>
                        <Button size="small" handleTouchEnd={this.handleTouchEnd} loading={this.state.loading} type="primary">我的天大</Button>
                        <Button size="large" loading={true}>我的天大</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IconPage;