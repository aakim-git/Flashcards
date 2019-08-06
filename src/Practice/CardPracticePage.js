"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flashcard = _interopRequireDefault(require("./Flashcard"));

var _reactRouterDom = require("react-router-dom");

require("../CSS/CardPracticePage.css");

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cookies = new _universalCookie.default();
var User = cookies.get('Lingo-Session');

var Header =
/*#__PURE__*/
function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "header"
            }, _react.default.createElement(ContinueButton, null), _react.default.createElement("h1", {
                id: "logo"
            }, "Lango!"), _react.default.createElement("div", {
                id: "spacer"
            }));
        }
    }]);

    return Header;
}(_react.default.Component);

var ContinueButton =
/*#__PURE__*/
function (_React$Component2) {
    _inherits(ContinueButton, _React$Component2);

    function ContinueButton(props) {
        _classCallCheck(this, ContinueButton);

        return _possibleConstructorReturn(this, _getPrototypeOf(ContinueButton).call(this, props));
    }

    _createClass(ContinueButton, [{
        key: "render",
        value: function render() {
            return _react.default.createElement(_reactRouterDom.Link, {
                to: "/create"
            }, _react.default.createElement("button", {
                type: "button",
                id: "Start-Create-Button"
            }, "Create More Cards"));
        }
    }]);

    return ContinueButton;
}(_react.default.Component); // -------------------------------------------------------------------


function Footer(props) {
    return _react.default.createElement("div", {
        id: "footer"
    }, " $", User.username, " ");
} // -------------------------------------------------------------------


var NextButton =
/*#__PURE__*/
function (_React$Component3) {
    _inherits(NextButton, _React$Component3);

    function NextButton(props) {
        var _this;

        _classCallCheck(this, NextButton);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(NextButton).call(this, props));
        _this.NextCard = _this.NextCard.bind(_assertThisInitialized(_this));
        return _this;
    }

    _createClass(NextButton, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("button", {
                type: "button",
                id: "NextButton",
                onClick: this.NextCard
            }, "Next");
        }
    }, {
        key: "NextCard",
        value: function NextCard() {
            console.log("ohohohoo");
        }
    }]);

    return NextButton;
}(_react.default.Component);

var CardPracticeBody =
/*#__PURE__*/
function (_React$Component4) {
    _inherits(CardPracticeBody, _React$Component4);

    function CardPracticeBody(props) {
        _classCallCheck(this, CardPracticeBody);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardPracticeBody).call(this, props));
    }

    _createClass(CardPracticeBody, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "body"
            }, _react.default.createElement(_Flashcard.default, null), _react.default.createElement(NextButton, null));
        }
    }]);

    return CardPracticeBody;
}(_react.default.Component); // -------------------------------------------------------------------


var Practice =
/*#__PURE__*/
function (_React$Component5) {
    _inherits(Practice, _React$Component5);

    function Practice(props) {
        _classCallCheck(this, Practice);

        return _possibleConstructorReturn(this, _getPrototypeOf(Practice).call(this, props));
    }

    _createClass(Practice, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("main", null, _react.default.createElement(Header, null), _react.default.createElement(CardPracticeBody, null), _react.default.createElement(Footer, null));
        }
    }]);

    return Practice;
}(_react.default.Component);

var _default = Practice;
exports.default = _default;