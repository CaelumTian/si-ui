/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {List, ListItem} from '../../components/si-list';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        document.title = "SI-UI DEMO";
        let items = [
            {
                id: 0,
                prev: "测试第二个"
            },
            {
                id: 1,
                prev: "测试第三个"
            }
        ];
        return (
            <div className="hui-page home">
                <header className="bar bar-nav">
                    <h1 className="title">SI-UI</h1>
                </header>
                <div className="content">
                    <List items={items} />
                </div>
            </div>
        )
    }
}

export default HomePage;