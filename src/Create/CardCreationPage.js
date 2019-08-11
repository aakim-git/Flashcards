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
            }, _react.default.createElement(ContinueButton, null), _react.default.createElement(_reactRouterDom.Link, {
                to: "/review",
                id: "logo-container"
            }, _react.default.createElement("h1", {
                id: "logo"
            }, "Lango!")), _react.default.createElement("div", {
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
                to: "/practice",
                id: "Start-Practice-Button"
            }, _react.default.createElement("button", {
                type: "button"
            }, "Practice"));
        }
    }]);

    return ContinueButton;
}(_react.default.Component); // -------------------------------------------------------------------


function Footer(props) {
    return _react.default.createElement("div", {
        id: "footer"
    }, User.Username);
} // -------------------------------------------------------------------


var FrontCard =
/*#__PURE__*/
function (_React$Component3) {
    _inherits(FrontCard, _React$Component3);

    function FrontCard(props) {
        var _this;

        _classCallCheck(this, FrontCard);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(FrontCard).call(this, props));
        _this.CheckReturn = _this.CheckReturn.bind(_assertThisInitialized(_this));
        _this.TextAreaResize = _this.TextAreaResize.bind(_assertThisInitialized(_this));
        _this.UpdateFrontText = _this.UpdateFrontText.bind(_assertThisInitialized(_this));
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
                onKeyPress: this.CheckReturn,
                onKeyUp: this.UpdateFrontText,
                onChange: this.TextAreaResize,
                ref: this.TextArea
            }));
        }
    }, {
        key: "TextAreaResize",
        value: function TextAreaResize() {
            this.TextArea.current.style.height = 'auto';
            this.TextArea.current.style.height = this.TextArea.current.scrollHeight + 'px';
        }
    }, {
        key: "UpdateFrontText",
        value: function UpdateFrontText() {
            this.props.UpdateFrontText(this.TextArea.current.value);
        }
    }, {
        key: "CheckReturn",
        value: function CheckReturn(event) {
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
        _classCallCheck(this, SaveButton);

        return _possibleConstructorReturn(this, _getPrototypeOf(SaveButton).call(this, props));
    }

    _createClass(SaveButton, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("button", {
                type: "button",
                id: "Save-Button",
                onClick: this.props.SaveCard
            }, "Save");
        }
    }]);

    return SaveButton;
}(_react.default.Component);

var CardCreationBody =
/*#__PURE__*/
function (_React$Component6) {
    _inherits(CardCreationBody, _React$Component6);

    function CardCreationBody(props) {
        var _this2;

        _classCallCheck(this, CardCreationBody);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CardCreationBody).call(this, props));
        _this2.TranslateInput = _this2.TranslateInput.bind(_assertThisInitialized(_this2));
        _this2.UpdateFrontText = _this2.UpdateFrontText.bind(_assertThisInitialized(_this2));
        _this2.UpdateBackText = _this2.UpdateBackText.bind(_assertThisInitialized(_this2));
        _this2.SaveCard = _this2.SaveCard.bind(_assertThisInitialized(_this2));
        _this2.FrontText = "";
        _this2.BackText = "Type a word, and hit ENTER to translate!";
        return _this2;
    }

    _createClass(CardCreationBody, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("div", {
                id: "body"
            }, _react.default.createElement("div", {
                id: "Card-View-Pane"
            }, _react.default.createElement(FrontCard, {
                UpdateFrontText: this.UpdateFrontText,
                TranslateInput: this.TranslateInput
            }), _react.default.createElement("div", {
                id: "spacer"
            }), _react.default.createElement(BackCard, {
                TranslatedText: this.BackText
            })), _react.default.createElement(SaveButton, {
                SaveCard: this.SaveCard
            }));
        }
    }, {
        key: "SaveCard",
        value: function SaveCard() {
            var url = "./store?front=" + this.FrontText + "&back=" + this.BackText + "&id=" + User.UserID;

            var request = _jquery.default.ajax({
                type: "POST",
                url: url,
                success: function success(data) {
                    //NEEDS TO RECIEVE ERROR CODE
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
            this.UpdateBackText("Translating...");
            var self = this;

            var request = _jquery.default.ajax({
                type: "GET",
                dataType: "json",
                url: url,
                success: function success(data) {
                    self.UpdateBackText(data["translated"]);
                },
                error: function error(_error2) {
                    self.UpdateBackText("Error");
                }
            });
        }
    }, {
        key: "UpdateFrontText",
        value: function UpdateFrontText(text) {
            this.FrontText = text;
        }
    }, {
        key: "UpdateBackText",
        value: function UpdateBackText(data) {
            this.BackText = data;
            this.forceUpdate();
        }
    }]);

    return CardCreationBody;
}(_react.default.Component); // -------------------------------------------------------------------


var Create =
/*#__PURE__*/
function (_React$Component7) {
    _inherits(Create, _React$Component7);

    function Create(props) {
        _classCallCheck(this, Create);

        return _possibleConstructorReturn(this, _getPrototypeOf(Create).call(this, props));
    }

    _createClass(Create, [{
        key: "render",
        value: function render() {
            return _react.default.createElement("main", null, _react.default.createElement(Header, null), _react.default.createElement(CardCreationBody, null), _react.default.createElement(Footer, null));
        }
    }]);

    return Create;
}(_react.default.Component);

var _default = Create;
exports.default = _default;