'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideTab = function (_wepy$component) {
  _inherits(SideTab, _wepy$component);

  function SideTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SideTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideTab.__proto__ || Object.getPrototypeOf(SideTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: {
        twoWay: true
      }
    }, _this.data = {}, _this.methods = {
      switchTab: function switchTab(select) {
        this.tab.selectedId = select.id;
        this.$emit('change', select);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SideTab, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return SideTab;
}(_wepy2.default.component);

exports.default = SideTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVfdGFiLmpzIl0sIm5hbWVzIjpbIlNpZGVUYWIiLCJwcm9wcyIsInRhYiIsInR3b1dheSIsImRhdGEiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0Iiwic2VsZWN0ZWRJZCIsImlkIiwiJGVtaXQiLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEssR0FBUTtBQUNOQyxXQUFLO0FBQ0hDLGdCQUFRO0FBREw7QUFEQyxLLFFBS1JDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSQyxlQURRLHFCQUNFQyxNQURGLEVBQ1U7QUFDaEIsYUFBS0wsR0FBTCxDQUFTTSxVQUFULEdBQXNCRCxPQUFPRSxFQUE3QjtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSCxNQUFyQjtBQUNEO0FBSk8sSyxRQU1WSSxNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FDUjs7OztFQWZrQ0MsZUFBS0MsUzs7a0JBQXJCYixPIiwiZmlsZSI6InNpZGVfdGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVUYWIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICB0YWI6IHtcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgICBkYXRhID0ge307XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN3aXRjaFRhYihzZWxlY3QpIHtcbiAgICAgICAgdGhpcy50YWIuc2VsZWN0ZWRJZCA9IHNlbGVjdC5pZDtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgc2VsZWN0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gIH1cbiJdfQ==