"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _reactRouterDom = require("react-router-dom");

require("../CSS/CardCreationPage.css");

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

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

var cookies = new _universalCookie.default();
var User = cookies.get('Lingo-Session'); // -------------------------------------------------------------------

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
                to: "/review"
            }, _react.default.createElement("button", {
                type: "button",
                id: "Start-Review-Button"
            }, "Start Review"));
        }
    }]);

    return ContinueButton;
}(_react.default.Component); // -------------------------------------------------------------------


function Footer(props) {
    return _react.default.createElement("div", {
        id: "footer"
    }, " $", User.username, " ");
} // -------------------------------------------------------------------


var FrontCard =
/*#__PURE__*/
function (_React$Component3) {
    _inherits(FrontCard, _React$Component3);

    function FrontCard(props) {
        var _this;

        _classCallCheck(this, FrontCard);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FrontCard).call(this, props));
        _this.checkReturn = _this.checkReturn.bind(_assertThisInitialized(_this));
        _this.TextArea = _react.default.createRef();
        return _this;
    }

    _createClass(FrontCard, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                className: "textCard",
                id: "FrontCard"
            }, _react.default.createElement("textarea", {
                onKeyPress: this.checkReturn,
                ref: this.TextArea
            }));
        }
    }, {
        key: "checkReturn",
        value: function checkReturn(event) {
            if (event.charCode == 13) {
                this.props.TranslateInput(this.TextArea.current.value);
            }
        }
    }]);

    return FrontCard;
}(_react.default.Component);

var BackCard =
/*#__PURE__*/
function (_React$Component4) {
    _inherits(BackCard, _React$Component4);

    function BackCard(props) {
        _classCallCheck(this, BackCard);

        return _possibleConstructorReturn(this, _getPrototypeOf(BackCard).call(this, props));
    }

    _createClass(BackCard, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                className: "textCard",
                id: "BackCard"
            }, _react.default.createElement("p", null, this.props.TranslatedText));
        }
    }]);

    return BackCard;
}(_react.default.Component);

var SaveButton =
/*#__PURE__*/
function (_React$Component5) {
    _inherits(SaveButton, _React$Component5);

    function SaveButton(props) {
        var _this2;

        _classCallCheck(this, SaveButton);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SaveButton).call(this, props));
        _this2.storeCard = _this2.storeCard.bind(_assertThisInitialized(_this2));
        return _this2;
    }

    _createClass(SaveButton, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("button", {
                type: "button",
                id: "Save-Button",
                onClick: this.storeCard
            }, "Save");
        }
    }, {
        key: "storeCard",
        value: function storeCard() {
            var input = document.getElementById('InputCard');
            var translated = document.getElementById('TranslatedCard');
        }
    }]);

    return SaveButton;
}(_react.default.Component);

var CardCreationBody =
/*#__PURE__*/
function (_React$Component6) {
    _inherits(CardCreationBody, _React$Component6);

    function CardCreationBody(props) {
        var _this3;

        _classCallCheck(this, CardCreationBody);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(CardCreationBody).call(this, props));
        _this3.TranslateInput = _this3.TranslateInput.bind(_assertThisInitialized(_this3));
        _this3.SaveCard = _this3.SaveCard.bind(_assertThisInitialized(_this3));
        _this3.state = {
            FrontText: "",
            BackText: "Type a word, and hit ENTER to translate!"
        };
        return _this3;
    }

    _createClass(CardCreationBody, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "body"
            }, _react.default.createElement("div", {
                id: "Card-View-Pane"
            }, _react.default.createElement(FrontCard, {
                TranslateInput: this.TranslateInput
            }), _react.default.createElement("div", {
                id: "spacer"
            }), _react.default.createElement(BackCard, {
                TranslatedText: this.state.BackText
            })), _react.default.createElement(SaveButton, {
                SaveCard: this.SaveCard
            }));
        }
    }, {
        key: "SaveCard",
        value: function SaveCard() {
            var url = "./store?front=" + this.state.FrontText + "?back=" + this.state.BackText + "?id=" + User.id;

            var request = _jquery.default.ajax({
                type: "POST",
                url: url,
                success: function success(data) {
                    alert("Card saved!");
                },
                error: function error(_error) {
                    alert("Error");
                }
            });
        }
    }, {
        key: "TranslateInput",
        value: function TranslateInput(data) {
            var url = "./translate?english=" + data;
            this.setState({
                BackText: "Translating..."
            });
            var self = this;

            var request = _jquery.default.ajax({
                type: "GET",
                dataType: "json",
                url: url,
                success: function success(data) {
                    self.setState({
                        BackText: data["translated"]
                    });
                },
                error: function error(_error2) {
                    self.setState({
                        BackText: "Error"
                    });
                }
            });
        }
    }]);

    return CardCreationBody;
}(_react.default.Component); // -------------------------------------------------------------------


var CardCreationMain =
/*#__PURE__*/
function (_React$Component7) {
    _inherits(CardCreationMain, _React$Component7);

    function CardCreationMain(props) {
        _classCallCheck(this, CardCreationMain);

        return _possibleConstructorReturn(this, _getPrototypeOf(CardCreationMain).call(this, props));
    }

    _createClass(CardCreationMain, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("main", null, _react.default.createElement(Header, null), _react.default.createElement(CardCreationBody, null), _react.default.createElement(Footer, null));
        }
    }]);

    return CardCreationMain;
}(_react.default.Component);

var _default = CardCreationMain;
exports.default = _default;