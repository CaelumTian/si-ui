/**
 * Created by caelumtian on 16/5/18.
 */
import React from 'react';
import {Link} from 'react-router';
import Icon from '../../components/si-icon';
import Card from '../../components/si-card';

class CardPage extends React.Component {
    render() {
        document.title = "卡片组件";
        let items = [
            {
                key: 0,
                children: "-webkit-line-clamp 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中限制在一个块元素显示的文本的行数"
            },
            {
                key: 1,
                head: "webkit属性",
                children: "-webkit-line-clamp 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中限制在一个块元素显示的文本的行数",
                foot: "2016-05-17"
            }
        ];
        return (
            <div className="hui-page">
                <header className="bar bar-nav">
                    <h1 className="title">卡片组件</h1>
                    <Link className="button pull-left" to="/">
                        <Icon className="icon-left"/>
                    </Link>
                </header>
                <div className="content">
                    {items.map(item => {
                        return <Card {...item}/>
                    })}
                </div>
            </div>
        );
    }
}

export default CardPage;