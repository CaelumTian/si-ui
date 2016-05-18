/**
 * Created by caelumtian on 16/5/18.
 */
import React from 'react';
import classnames from 'classnames';
import './index.less';

class Card extends React.Component {
    render() {
        let {head, foot, children, className, imgType, ...other} = this.props;
        let classes = classnames({
            "card": true,
            [className]: className
        });
        let header = head ? (
            <div className="card-header">
                {head}
            </div>
        ) : null;
        let footer = foot ? (
            <div className="card-footer">
                {foot}
            </div>
        ) : null;
        let content = imgType ? children : (
            <div className="card-content-inner">
                {children}
            </div>
        );
        return (
            <div className={classes} {...other}>
                {header}
                <div className="card-content">
                    {content}
                </div>
                {footer}
            </div>
        )
    }
}
Card.defaultProps = {
    imgType: false
};

export default Card;