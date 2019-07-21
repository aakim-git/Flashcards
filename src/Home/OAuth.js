"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = _interopRequireDefault(require("react-fontawesome"));

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cookies = new _universalCookie.default();

var OAuth =
/*#__PURE__*/
function (_React$Component) {
    _inherits(OAuth, _React$Component);

    function OAuth(props) {
        var _this;

        _classCallCheck(this, OAuth);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(OAuth).call(this, props));
        _this.state = {
            user: {},
            popup_open: false
        };
        _this.startAuth = _this.startAuth.bind(_assertThisInitialized(_this));
        _this.launchPopup = _this.launchPopup.bind(_assertThisInitialized(_this));
        _this.checkPopup = _this.checkPopup.bind(_assertThisInitialized(_this));
        _this.closeCard = _this.closeCard.bind(_assertThisInitialized(_this));
        return _this;
    } // in componentDidMount, we:
    //    set up socket


    _createClass(OAuth, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var socket = this.props.socket;
            var provider = this.props.provider; // receives info when user finishes logging in. 

            socket.on(provider, function (user) {
                _this2.popup.close();

                var date = new Date();
                date.setMinutes(date.getSeconds() + 30);
                cookies.set('Lingo-Session', {
                    UserID: user.id
                }, {
                    path: '/',
                    expires: date
                });
                window.location.replace('/review');
            });
        } // if popup is not currently opened,
        // launchPopup. Then, begin checkPopup.  

    }, {
        key: "startAuth",
        value: function startAuth() {
            if (this.state.popup_open == false) {
                this.popup = this.launchPopup();
                this.checkPopup();
                this.setState({
                    popup_open: true
                });
            }
        } // Launches popup using the viewport to reference dimensions
        // the popup serves a url to ./provider/socketId. 
        // the server can use the information in the popup knowing the socket.id. 
        // returns the instance of the popup

    }, {
        key: "launchPopup",
        value: function launchPopup() {
            var width = 600;
            var height = 600;
            var left = window.innerWidth / 2 - width / 2;
            var top = window.innerHeight / 2 - height / 2;
            console.log(this.props.socket.id);
            var url = "http://localhost:8080/login/".concat(this.props.provider, "?socketId=").concat(this.props.socket.id);
            return window.open(url, '', "toolbar=no, location=no, directories=no, status=no, menubar=no, \n\t\t\tscrollbars=no, resizable=no, copyhistory=no, width=".concat(width, ", \n\t\t\theight=").concat(height, ", top=").concat(top, ", left=").concat(left));
        } // sets Timer that fires every 1 second. 
        // if popup is closed and user did not login, setstate to popup = closed and restart timer. 
        // used to check if login button should be active. 

    }, {
        key: "checkPopup",
        value: function checkPopup() {
            var Timer = setInterval(function () {
                var popup = this.popup;

                if (!popup || popup.closed || popup.closed === undefined) {
                    clearInterval(Timer);
                    this.setState({
                        popup_open: false
                    });
                }
            }.bind(this), 1000);
        } // self explanatory

    }, {
        key: "closeCard",
        value: function closeCard() {
            this.setState({
                user: {}
            });
        }
    }, {
        key: "render",
        value: function render() {
            var name = this.state.user;
            var provider = this.props.provider;
            var disabled = this.state.popup_open;
            return _react.default.createElement("button", {
                onClick: this.startAuth
            }, _react.default.createElement(_reactFontawesome.default, {
                name: provider
            }), "Log in with Google");
        }
    }]);

    return OAuth;
}(_react.default.Component);

exports.default = OAuth;