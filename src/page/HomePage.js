/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {List, ListItem} from '../../components/si-list';
import {Link} from 'react-router';
import Icon from '../../components/si-icon';

class HomePage extends React.Component {
    handleTouchEnd(event) {
        console.log("1");
    };
    render() {
        document.title = "SI-UI DEMO";
        let items = [
            {
                id: 0,
                prev: "layout布局",
                next: <Icon className="icon-right"/>,
                href: "/layout"
            },
            {
                id: 1,
                prev: "卡片(Card)组件",
                next: <Icon className="icon-right"/>,
                href: "/card"
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
                    <List items={items} title="示例">
                        {items.map(item => {
                            return (
                                <ListItem key={item["id"] } prev={item["prev"]} next={item["next"]} href={item["href"]}/>
                            )
                        })}
                    </List>
                </div>
            </div>
        )
    }
}

export default HomePage;