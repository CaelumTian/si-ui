/**
 * Created by caelumtian on 16/5/29.
 */
import React from 'react';
import Icon from '../../components/si-icon';
import {Link} from 'react-router';
import Button from '../../components/si-button';
import {Row, Col} from '../../components/si-layout'

class ButtonPage extends React.Component {
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
        document.title= "Button按钮";
        return (
            <div className="hui-page">
                <header className="bar bar-nav">
                    <h1 className="title">Button按钮</h1>
                    <Link className="button pull-left" to="/">
                        <Icon name="left"/>
                    </Link>
                </header>
                <div className="content content-padd">
                    <div className="btn-content">
                        <Button className="block-btn">普通按钮</Button>
                        <Button className="block-btn" type="primary">基本按钮</Button>
                        <Button className="block-btn" type="success">成功按钮</Button>
                        <Button className="block-btn" type="warning">警告按钮</Button>
                        <Button className="block-btn" type="danger">危险按钮</Button>
                        <Row>
                            <Col item="5">
                                <Button className="block-btn" size="large" iconName="apps" type="primary">菜单</Button>
                            </Col>
                            <Col item="5" offset="2">
                                <Button className="block-btn" size="large" type="success" loading={this.state.loading} handleTouchEnd={this.handleTouchEnd}>loading</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonPage;