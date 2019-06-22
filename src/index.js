"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _Home = _interopRequireDefault(require("./Home/Home"));

var _CardCreationPage = _interopRequireDefault(require("./Create/CardCreationPage"));

var _CardReviewPage = _interopRequireDefault(require("./Review/CardReviewPage"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Main() {
    return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
        path: "/",
        exact: true,
        component: _Home.default
    }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/create",
        component: _CardCreationPage.default
    }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/review",
        component: _CardReviewPage.default
    })));
}

_reactDom.default.render(_react.default.createElement(Main, null), document.getElementById('root'));

serviceWorker.unregister();