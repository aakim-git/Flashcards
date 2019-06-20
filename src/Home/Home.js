"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//import Route from "route-router-dom/Route";
// -------------------------------------------------------------------
var Title =
/*#__PURE__*/
function (_React$Component) {
    _inherits(Title, _React$Component);

    function Title(props) {
        _classCallCheck(this, Title);

        return _possibleConstructorReturn(this, _getPrototypeOf(Title).call(this, props));
    }

    _createClass(Title, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "TitlePanel"
            }, _react.default.createElement("h1", null, "Welcome to Lango"), _react.default.createElement("h2", null, "Customize your vocabulary"));
        }
    }]);

    return Title;
}(_react.default.Component);

var LoginPanel =
/*#__PURE__*/
function (_React$Component2) {
    _inherits(LoginPanel, _React$Component2);

    function LoginPanel(props) {
        _classCallCheck(this, LoginPanel);

        return _possibleConstructorReturn(this, _getPrototypeOf(LoginPanel).call(this, props));
    }

    _createClass(LoginPanel, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "LoginPanel"
            }, _react.default.createElement("div", null, " ", _react.default.createElement(_reactRouterDom.Link, {
                to: "/create"
            }, "Login"), " "));
        }
    }]);

    return LoginPanel;
}(_react.default.Component);

var Home =
/*#__PURE__*/
function (_React$Component3) {
    _inherits(Home, _React$Component3);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "body"
            }, _react.default.createElement(Title, null), _react.default.createElement(LoginPanel, null));
        }
    }]);

    return Home;
}(_react.default.Component);

var _default = Home; //ReactDOM.render(<Home/>, document.getElementById('root'));

exports.default = _default;