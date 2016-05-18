/**
 * Created by caelumtian on 16/5/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router.js';
import './less/reset.less';
import './less/base.less';
import './less/test.less';

document.title = "SI-UI组件库";
ReactDOM.render(routes, document.getElementById("react-container"));


