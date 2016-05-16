/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {List, ListItem} from '../../components/si-list';
import {Link} from 'react-router';
import Icon from '../../components/si-icon';

class HomePage extends React.Component {
    render() {
        document.title = "SI-UI DEMO";
        let items = [
            {
                id: 0,
                prev: "测试第二个",
                next: <Icon className="icon-right"/>
            },
            {
                id: 1,
                prev: "测试第三个",
                next: <Icon className="icon-right"/>
            }
        ];
        return (
            <div className="hui-page home">
                <header className="bar bar-nav">
                    <h1 className="title">SI-UI</h1>
                    <a href="#" className="button pull-right">
                        <Icon className="icon-info" />
                    </a>
                </header>
                <div className="content">
                    <List items={items} title="示例" />
                </div>
            </div>
        )
    }
}

export default HomePage;