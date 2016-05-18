/**
 * Created by caelumtian on 16/5/16.
 */
import React from 'react';
import Icon from '../../components/si-icon';
import {Row, Col} from '../../components/si-layout';
import {Link} from 'react-router';

class Layout extends React.Component {
    render() {
        document.title= "flex 布局";
        return (
            <div className="hui-page">
                <header className="bar bar-nav">
                    <h1 className="title">Flex布局</h1>
                    <Link className="button pull-left" to="/">
                        <Icon className="icon-left"/>
                    </Link>
                </header>
                <div className="content content-padd list-bg">
                    <Row className="list-style">
                        <Col item="12">100%</Col>
                    </Row>
                    <Row className="list-style">
                        <Col item="3">25%</Col>
                        <Col item="3" offset="3">25%</Col>
                    </Row>
                    <Row className="list-style">
                        <Col item="4">33.33%</Col>
                        <Col item="4" offset="4">33.33%</Col>
                    </Row>
                    <Row className="list-style" justify="between">
                        <Col item="2">16.66%</Col>
                        <Col>自适应+between</Col>
                        <Col item="2">16.66%</Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Layout;