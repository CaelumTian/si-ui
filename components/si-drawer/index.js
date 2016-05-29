/**
 * Created by caelumtian on 16/5/29.
 */
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import './index.less';

class Drawer extends Component {
    static defaultProps = {
        overlay: false,
        effect: "reveal",
        direction: "left"
    };
    openPannel = (event) => {
        let node = this.refs.drawer;
        if(node === undefined || node.classList.contains("active")) {
            return;
        }
        node.style.display = "block";
        node.classList.add("active");
        node.offsetWidth;
        document.body.classList.add("with-offcanvas-" + this.props.direction + "-" + this.props.effect);
    };
    closePannel = () => {
        let node = this.refs.drawer;
        if(node === undefined || !node.classList.contains("active")) {
            return;
        }
        let transitionTarget = this.props.effect === "reveal" ? document.querySelector(".page") : node;
        node.addEventListener("transitionend", closeFunc, false);
        node.classList.remove("active");
        function closeFunc() {
            node.style.display = "none";
            document.body.classList.remove("offcanvas-closing");
            node.removeEventListener("transitionend", closeFunc, false);
        }
        document.body.classList.add("offcanvas-closing");
        document.body.classList.remove("with-offcanvas-" + this.props.direction + "-" + this.props.effect);
    };
    render() {
        let {overlay, effect, className} = this.props;
        let classes = classnames({
            ["offcanvas"]: true,
            ["offcanvas-" + this.props.direction]: true,
            ["offcanvas-" + this.props.effect]: true,
            [className]: className
        });
        return (
            <div className="drawer">
                {overlay ? <div className="overlay"></div> : null}
                <div className={classes} ref="drawer"></div>
                <div className="page">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Drawer;

