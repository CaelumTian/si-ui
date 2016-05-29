/**
 * Created by caelumtian on 16/5/16.
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

class Icon extends React.Component {
    render() {
        let {className, name, size, color} = this.props;
        let classes = classnames({
            "icon": true,
            ["icon-" + name]: name,
            [className]: className
        });
        let styles = {
            "color": color,
            "fontSize": size
        };
        return(
            <i className={classes} style={styles}></i>
        )
    }
}

export default Icon;