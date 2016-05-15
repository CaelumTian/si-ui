/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import classnames from 'classnames';

class Row extends React.Component {
    render() {
        var {justify, align, className, ...other} = this.props;
        var classes = classnames({
            'flex': true,
            ['flex-justify-' + justify]: justify,
            ['flex-align-' + align]: align,
            [className]: className
        });
        return (
            <div {...other} className={classes}>
                {this.props.children}
            </div>
        )
    }
}

export default Row;
