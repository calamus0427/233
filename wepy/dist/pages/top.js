'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _ads = require('./../components/ads.js');

var _ads2 = _interopRequireDefault(_ads);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Top = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Top, _wepy$page);

  function Top() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Top.__proto__ || Object.getPrototypeOf(Top)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '追番推荐'
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "swipers", "height": "280" }, "Ads": { "v-bind:ads.once": "ads" }, "animeList": { "v-bind:list.sync": "list", "title": "追番推荐", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      group: _group2.default,
      toast: _wepyComToast2.default,
      Swiper: _swiper2.default,
      SearchBar: _searchbar2.default,
      Ads: _ads2.default,
      animeList: _animeList2.default
    }, _this.mixins = [_test2.default], _this.data = {
      swipers: [{ image: 'https://233.calamus.xyz/2.jpg', url: '' }, { image: 'https://233.calamus.xyz/3.jpg', url: '' }],
      ads: ['欢迎加群：575180837', '主站：www.calamus.xyz'],
      list: [{
        'name': 'overloadIII',
        'image': ['https://233.calamus.xyz/image/233/overload.jpg', '', ''],
        'description': '吾乃侍奉无上至尊之人',
        'content': '',
        'tag': ['装逼', '异世界'],
        'stars': '5',
        'createTime': '2018-07-10',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'id': ''
      }, {
        'name': '杀戮天使',
        'image': ['https://233.calamus.xyz/image/233/tianshi.jpg', '', ''],
        'description': '13岁的少女瑞吉儿，在某个大楼最底层苏醒后，瑞吉儿失去了所有的记忆，并试着从这里逃出去',
        'content': '',
        'tag': ['恐怖', '悬疑', '冒险'],
        'stars': '5',
        'createTime': '2018-07-06',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'id': ''
      }, {
        'name': '工作细胞',
        'image': ['https://233.calamus.xyz/image/233/%E5%B7%A5%E4%BD%9C%E7%BB%86%E8%83%9E.jpg', '', ''],
        'description': '夭寿了，我的细胞在我的体内谈恋爱了',
        'content': '',
        'tag': ['教育', '卖萌', '恋爱', '声优不要钱', '搞笑'],
        'stars': '5',
        'createTime': '2018-07-7',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'id': ''
      }, {
        'name': '后街女孩',
        'image': ['https://233.calamus.xyz/image/233/%E5%90%8E%E8%A1%97%E5%A5%B3%E5%AD%A9.jpg', '', ''],
        'description': '一起成为偶像吧233',
        'content': '',
        'tag': ['搞笑', '偶像'],
        'stars': '5',
        'createTime': '2018-07-4',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'id': ''
      }, {
        'name': '进击的巨人III',
        'image': ['https://233.calamus.xyz/image/233/%E5%B7%A8%E4%BA%BA.jpg', '', ''],
        'description': '那一天，人类想起来被巨人支配的恐怖',
        'content': '',
        'tag': ['热血', '战斗'],
        'stars': '5',
        'createTime': '2018-07-22',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'id': ''
      }, {
        'name': '命运石之门0',
        'image': ['http://233.calamus.xyz/image/233/%E5%91%BD%E8%BF%90%E7%9F%B3%E4%B9%8B%E9%97%A80.jpeg', '', ''],
        'description': '一切都是命运石之门的选择',
        'content': '',
        'tag': ['致郁', '时间穿越', '神作'],
        'stars': '5',
        'createTime': '2013-04-20',
        'flag': '1',
        'author': '',
        'type': 'game',
        'company': '',
        'id': ''
      }]
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {
      request: function request() {
        var self = this;
        var i = 10;
        var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
        while (i--) {
          _wepy2.default.request({
            url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
            success: function success(d) {
              self.netrst += d.data + '.';
              self.$apply();
            }
          });
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Top, [{
    key: 'onReadt',
    value: function onReadt() {
      this.initPageData();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 处理轮播图
      this.swipers.push({ image: 'https://233.calamus.xyz/2.jpg', url: '' });
    }
  }]);

  return Top;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Top , 'pages/top'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibW9kdWxlQSIsIlRvcCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImFzeW5jTnVtIiwic3VtTnVtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJTd2lwZXIiLCJTZWFyY2hCYXIiLCJBZHMiLCJhbmltZUxpc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwic3dpcGVycyIsImltYWdlIiwidXJsIiwiYWRzIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInJlcXVlc3QiLCJzZWxmIiwiaSIsIm1hcCIsIndlcHkiLCJzdWNjZXNzIiwiZCIsIm5ldHJzdCIsIiRhcHBseSIsImV2ZW50cyIsImluaXRQYWdlRGF0YSIsInB1c2giLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7a0JBR3lDO0FBQ1Q7QUFDUTtBQUNQOzs7QUFML0I7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEwQzs7SUFjckJDLEcsV0FacEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQXJCO0FBQ0QsR0FITTtBQUlQRyxVQUpPLG9CQUlHRixLQUpILEVBSVU7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLFFBQXJCO0FBQ0QsR0FOTTtBQU9Q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S0osT0FBTCxDQUFhO0FBQ1hOLGlCQUFLLDREQUE0RFMsSUFBSUQsQ0FBSixDQUE1RCxHQUFxRSxLQUFyRSxHQUE2RUEsQ0FEdkU7QUFFWEcscUJBQVMsaUJBQVVDLENBQVYsRUFBYTtBQUNwQkwsbUJBQUtNLE1BQUwsSUFBZUQsRUFBRWYsSUFBRixHQUFTLEdBQXhCO0FBQ0FVLG1CQUFLTyxNQUFMO0FBQ0Q7QUFMVSxXQUFiO0FBT0Q7QUFDRjtBQWRPLEssUUFpQlZDLE0sR0FBUyxFOzs7Ozs4QkFHQTtBQUNQLFdBQUtDLFlBQUw7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSVQsT0FBTyxJQUFYO0FBQ0Q7OzttQ0FDYTtBQUNaO0FBQ0EsV0FBS1QsT0FBTCxDQUFhbUIsSUFBYixDQUFrQixFQUFDbEIsT0FBTyx3Q0FBUixFQUFpREMsS0FBSSxFQUFyRCxFQUFsQjtBQUNEOzs7O0VBbEo4QlUsZUFBS1EsSTtrQkFBakJsRCxHIiwiZmlsZSI6InRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCcgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuICBpbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYScgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gIGltcG9ydCBTd2lwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zd2lwZXInXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBBZHMgZnJvbSAnLi4vY29tcG9uZW50cy9hZHMnXG4gIGltcG9ydCBhbmltZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hbmltZUxpc3QnXG5cblxuXG4gIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpIC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuICBAY29ubmVjdCh7XG4gICAgbnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gICAgfSxcbiAgICBhc3luY051bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfSxcbiAgICBzdW1OdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i/veeVquaOqOiNkCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJzd2lwZXJzXCIsXCJoZWlnaHRcIjpcIjI4MFwifSxcIkFkc1wiOntcInYtYmluZDphZHMub25jZVwiOlwiYWRzXCJ9LFwiYW5pbWVMaXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidGl0bGVcIjpcIui/veeVquaOqOiNkFwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vTW9yZS5zeW5jXCI6XCJub01vcmVMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgU3dpcGVyOlN3aXBlcixcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBBZHM6QWRzLFxuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgc3dpcGVyczogW1xuICAgICAgICB7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8yLmpwZycsIHVybDogJyd9LFxuICAgICAgICB7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8zLmpwZycsIHVybDogJyd9XG4gICAgICBdLFxuICAgICAgYWRzOlsn5qyi6L+O5Yqg576k77yaNTc1MTgwODM3Jywn5Li756uZ77yad3d3LmNhbGFtdXMueHl6J10sXG4gICAgICBsaXN0OltcbiAgICAgICAge1xuICAgICAgICAgICAgJ25hbWUnOidvdmVybG9hZElJSScsXG4gICAgICAgICAgICAnaW1hZ2UnOlsnaHR0cDovL3Bic3A2emR4aS5ia3QuY2xvdWRkbi5jb20vaW1hZ2UvMjMzL292ZXJsb2FkLmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzon5ZC+5LmD5L6N5aWJ5peg5LiK6Iez5bCK5LmL5Lq6JyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn6KOF6YC8Jywn5byC5LiW55WMJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxOC0wNy0xMCcsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOifmnYDmiK7lpKnkvb8nLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wYnNwNnpkeGkuYmt0LmNsb3VkZG4uY29tL2ltYWdlLzIzMy90aWFuc2hpLmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzonMTPlsoHnmoTlsJHlpbPnkZ7lkInlhL/vvIzlnKjmn5DkuKrlpKfmpbzmnIDlupXlsYLoi4/phpLlkI7vvIznkZ7lkInlhL/lpLHljrvkuobmiYDmnInnmoTorrDlv4bvvIzlubbor5XnnYDku47ov5nph4zpgIPlh7rljrsnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6WyfmgZDmgJYnLCfmgqznlpEnLCflhpLpmaknXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDE4LTA3LTA2JyxcbiAgICAgICAgICAgICdmbGFnJzonMScsXG4gICAgICAgICAgICAnYXV0aG9yJzonJyxcbiAgICAgICAgICAgICd0eXBlJzonZ2FtZScsXG4gICAgICAgICAgICAnY29tcGFueSc6JycsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICAnbmFtZSc6J+W3peS9nOe7huiDnicsXG4gICAgICAgICAgICAnaW1hZ2UnOlsnaHR0cDovL3Bic3A2emR4aS5ia3QuY2xvdWRkbi5jb20vaW1hZ2UvMjMzLyVFNSVCNyVBNSVFNCVCRCU5QyVFNyVCQiU4NiVFOCU4MyU5RS5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+WkreWvv+S6hu+8jOaIkeeahOe7huiDnuWcqOaIkeeahOS9k+WGheiwiOaBi+eIseS6hicsXG4gICAgICAgICAgICAnY29udGVudCc6JycsXG4gICAgICAgICAgICAndGFnJzpbJ+aVmeiCsicsJ+WNluiQjCcsJ+aBi+eIsScsJ+WjsOS8mOS4jeimgemSsScsJ+aQnueskSddLFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnY3JlYXRlVGltZSc6JzIwMTgtMDctNycsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOiflkI7ooZflpbPlraknLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wYnNwNnpkeGkuYmt0LmNsb3VkZG4uY29tL2ltYWdlLzIzMy8lRTUlOTAlOEUlRTglQTElOTclRTUlQTUlQjMlRTUlQUQlQTkuanBnJywnJywnJ10sXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOifkuIDotbfmiJDkuLrlgbblg4/lkKcyMzMnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6WyfmkJ7nrJEnLCflgbblg48nXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDE4LTA3LTQnLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdpZCc6JydcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgICduYW1lJzon6L+b5Ye755qE5beo5Lq6SUlJJyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcGJzcDZ6ZHhpLmJrdC5jbG91ZGRuLmNvbS9pbWFnZS8yMzMvJUU1JUI3JUE4JUU0JUJBJUJBLmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzon6YKj5LiA5aSp77yM5Lq657G75oOz6LW35p2l6KKr5beo5Lq65pSv6YWN55qE5oGQ5oCWJyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn54Ot6KGAJywn5oiY5paXJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxOC0wNy0yMicsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOiflkb3ov5Dnn7PkuYvpl6gwJyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8lRTclOUYlQjMlRTUlQTQlQjQlRTklOTclQTguanBnJywnJywnJ10sXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOifkuIDliIfpg73mmK/lkb3ov5Dnn7PkuYvpl6jnmoTpgInmi6knLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6Wyfoh7Tpg4EnLCfml7bpl7Tnqb/otoonLCfnpZ7kvZwnXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDEzLTA0LTIwJyxcbiAgICAgICAgICAgICdmbGFnJzonMScsXG4gICAgICAgICAgICAnYXV0aG9yJzonJyxcbiAgICAgICAgICAgICd0eXBlJzonZ2FtZScsXG4gICAgICAgICAgICAnY29tcGFueSc6JycsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICByZXF1ZXN0ICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGxldCBpID0gMTBcbiAgICAgICAgbGV0IG1hcCA9IFsnTUE9PScsICdNUW89JywgJ01nPT0nLCAnTXc9PScsICdOQT09JywgJ05RPT0nLCAnTmc9PScsICdOdz09JywgJ09BPT0nLCAnT1E9PSddXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubWFkY29kZXIuY24vdGVzdHMvc2xlZXAucGhwP3RpbWU9MSZ0PWNzcyZjPScgKyBtYXBbaV0gKyAnJmk9JyArIGksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICBzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG4gICAgb25SZWFkdCgpe1xuICAgICAgdGhpcy5pbml0UGFnZURhdGEoKTtcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgfVxuICAgIGluaXRQYWdlRGF0YSgpe1xuICAgICAgLy8g5aSE55CG6L2u5pKt5Zu+XG4gICAgICB0aGlzLnN3aXBlcnMucHVzaCh7aW1hZ2U6ICdodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8yLmpwZycsdXJsOicnfSlcbiAgICB9XG4gIH1cbiJdfQ==
