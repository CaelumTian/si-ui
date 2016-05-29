import React, {Component} from 'react';
import classnames from 'classnames';
import { findDOMNode } from 'react-dom';
import Icon from '../si-icon';
import "./index.less";

class Button extends Component {
    static defaultProps = {
        loading: false,
        handleTouchEnd(){}

    };
    static propTypes = {
        iconName: React.PropTypes.string,
        className: React.PropTypes.string,
        loading: React.PropTypes.bool,
        type: React.PropTypes.oneOf(["primary", "danger", "success", "warning"]),
        size: React.PropTypes.oneOf(["large", "small"]),
        handleTouchEnd: React.PropTypes.func
    };
    handleTouchEnd = (event) => {
        this.props.handleTouchEnd(event);
    };
    render() {
        let {iconName, className, loading, type, size, round} = this.props;
        let sizeCls = ({
                large: "lg-button",
                small: "sl-button"
            })[size] || "";
        let classes = classnames({
            "active": loading,
            "si-button": true,
            "button-round": round,
            [sizeCls]: sizeCls,
            ["button-" + type]: type,
            [className]: className
        });
        iconName = loading ? 'loading' : iconName;
        return (
            <button
                className={classes}
                onTouchEnd={this.handleTouchEnd}
            >
                {iconName ? <Icon name={iconName} /> : null}
                {this.props.children}
            </button>
        )
    }
}

export default Button;