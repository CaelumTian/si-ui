/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {List, ListItem} from '../../components/si-list';
import {Link} from 'react-router';
import Icon from '../../components/si-icon';
import Drawer from '../../components/si-drawer'

class HomePage extends React.Component {
    drawState = false;
    handleTouchEnd = (event) => {
        event.stopPropagation();
        if(this.drawState) {
            this.refs.drawer.closePannel();
            this.drawState = false;
        }else {
            this.refs.drawer.openPannel();
            this.drawState = true;
        }
    };
    render() {
        document.title = "SI-UI DEMO";
        let items = [
            {
                id: 0,
                prev: "layout布局",
                next: <Icon name="right"/>,
                href: "/layout"
            },
            {
                id: 1,
                prev: "卡片(Card)组件",
                next: <Icon name="right"/>,
                href: "/card"
            },
            {
                id: 2,
                prev: "ICON图标组件",
                next: <Icon name="right"/>,
                href: "/icon"
            },
            {
                id: 3,
                prev: "Button按钮组件",
                next: <Icon name="right"/>,
                href: "/button"
            }
        ];
        return (
            <div className="hui-page home" onTouchEnd={this.handleTouchEnd}>
                <Drawer
                    effect="cover"
                    ref="drawer"
                >
                    <header className="bar bar-nav">
                        <h1 className="title">SI-UI</h1>
                        <a href="#" className="button pull-right">
                            <Icon name="info"/>
                        </a>
                        <a href="#" className="button pull-left" onTouchEnd={this.handleTouchEnd}>
                            <Icon name="menu"/>
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
                </Drawer>
            </div>
        )
    }
}

export default HomePage;