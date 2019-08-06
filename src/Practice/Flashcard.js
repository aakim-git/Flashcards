"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

var cardContainer = document.querySelector('.react-card'); // React component for form inputs

var CardInput =
/*#__PURE__*/
function (_React$Component) {
    _inherits(CardInput, _React$Component);

    function CardInput() {
        _classCallCheck(this, CardInput);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardInput).apply(this, arguments));
    }

    _createClass(CardInput, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("fieldset", null, _react.default.createElement("input", {
                name: this.props.name,
                id: this.props.id,
                type: this.props.type || 'text',
                placeholder: this.props.placeholder,
                required: true
            }));
        }
    }]);

    return CardInput;
}(_react.default.Component); // React component for textarea


var CardTextarea =
/*#__PURE__*/
function (_React$Component2) {
    _inherits(CardTextarea, _React$Component2);

    function CardTextarea() {
        _classCallCheck(this, CardTextarea);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardTextarea).apply(this, arguments));
    }

    _createClass(CardTextarea, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("fieldset", null, _react.default.createElement("textarea", {
                name: this.props.name,
                id: this.props.id,
                placeholder: this.props.placeholder,
                required: true
            }));
        }
    }]);

    return CardTextarea;
}(_react.default.Component); // React component for the front side of the card


var CardFront =
/*#__PURE__*/
function (_React$Component3) {
    _inherits(CardFront, _React$Component3);

    function CardFront() {
        _classCallCheck(this, CardFront);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardFront).apply(this, arguments));
    }

    _createClass(CardFront, [{
        key: "render",
        value: function render(props) {
            return _react.default.createElement("div", {
                className: "card-side side-front"
            }, _react.default.createElement("div", {
                className: "card-side-container"
            }, _react.default.createElement("h2", {
                id: "trans"
            }, this.props.text)));
        }
    }]);

    return CardFront;
}(_react.default.Component); // React component for the back side of the card


var CardBack =
/*#__PURE__*/
function (_React$Component4) {
    _inherits(CardBack, _React$Component4);

    function CardBack() {
        _classCallCheck(this, CardBack);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardBack).apply(this, arguments));
    }

    _createClass(CardBack, [{
        key: "render",
        value: function render(props) {
            return _react.default.createElement("div", {
                className: "card-side side-back"
            }, _react.default.createElement("div", {
                className: "card-side-container"
            }, _react.default.createElement("h2", {
                id: "congrats"
            }, this.props.text)));
        }
    }]);

    return CardBack;
}(_react.default.Component); // React component for the card (main component)


var Practice =
/*#__PURE__*/
function (_React$Component5) {
    _inherits(Practice, _React$Component5);

    function Practice() {
        _classCallCheck(this, Practice);

        return _possibleConstructorReturn(this, _getPrototypeOf(Practice).apply(this, arguments));
    }

    _createClass(Practice, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                className: "card-container"
            }, _react.default.createElement("div", {
                className: "card-body"
            }, _react.default.createElement(CardBack, {
                text: "Correct!"
            }), _react.default.createElement(CardFront, {
                text: "Volare"
            })));
        }
    }]);

    return Practice;
}(_react.default.Component);

var _default = Practice;
exports.default = _default;