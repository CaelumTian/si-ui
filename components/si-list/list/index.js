/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import classnames from 'classnames';
import ListItem from '../listItem';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
    };
    render() {
        let {className, title} = this.props;
        let classes = classnames({
            "list-content": true,
            [className]: className
        });
        /**{this.state.items.map(item => {
         *  return <ListItem key={item["id"]} img={item["img"]} prev={item["prev"]} next={item["next"]} href={item["href"]}/>
         *})}
         */
        return (
            <div className={classes}>
                {title ? <div className="list-content-title">{title}</div> : null}
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    };
}
List.defaultProps = {
    items: []
};

export default List;
