/**
 * Created by caelumtian on 16/5/15.
 */
import React from 'react';
import {PropTypes, Link} from 'react-router'
import classnames from 'classnames';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    };
    /** 直接跳转,绑定内容
     * handleTouchEnd(event) {
     *     if(!this.props.href) {
     *         return;
     *     }
     *     this.context.router.push(this.props.href);
     * };
     */
    render() {
        let {className} = this.props;
        let classes = classnames({
            "list-item": true,
            "flex": true,
            [className]: className
        });
        let childsJSX = (
            <div className="item-inner flex">
                <div className="item-prev">{this.props.prev}</div>
                <div className="item-back">{this.props.next}</div>
            </div>
        );
        if(this.props.href) {
            return (
                <li className={classes}>
                    <Link to={`${this.props.href}`}>
                        {this.props.img ? <div className="item"><img src={this.props.img}/></div> : null}
                        {childsJSX}
                    </Link>
                </li>
            )
        }
        return (
            <li className={classes}>
                {childsJSX}
            </li>
        );
    }

}
ListItem.defaultProps = {
    img: null,
    prev: "",
    next: ""
};
/**
 * ListItem.contextTypes = {
 *     router: React.PropTypes.object.isRequired
 * };
 */

export default ListItem;