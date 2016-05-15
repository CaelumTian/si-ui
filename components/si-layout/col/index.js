/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import classnames from 'classnames';

class Col extends React.Component {
    render() {
        var {item, offset, order, ...other} = this.props;
        var classes = classnames({
            ["flex-item-" + item]: item,
            ["flex-offset-" + offset]: offset,
            ["flex-order-" + order]: order
        });
        return (
            <div className={classes} {...other}>
                {this.props.children}
            </div>
        )
    }
}

export default Col;
