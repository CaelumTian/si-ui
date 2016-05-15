/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import classnames from 'classnames';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        let {className} = this.props;
        let classes = classnames({
            "list-item": true,
            "flex": true,
            [className]: className
        });
        return (
            <li className={classes}>
                {this.props.img ? <div className="item"><img src={this.props.img} /></div> : null}
                <div className="item-inner flex">
                    <div className="item-prev">{this.props.prev}</div>
                    <div className="item-back">{this.props.next}</div>
                </div>
            </li>
        )
    }
}
ListItem.defaultProps = {
    img: null,
    prev: "",
    next: ""
};

export default ListItem;