/**
 * Created by caelumtian on 16/5/16.
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

class Icon extends React.Component {
    render() {
        let {className} = this.props;
        let classes = classnames({
            "icon": true,
            [className]: className
        });
        return(
            <i className={classes}></i>
        )
    }
}

export default Icon;