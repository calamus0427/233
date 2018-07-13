'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _side_tab = require('./../components/side_tab.js');

var _side_tab2 = _interopRequireDefault(_side_tab);

var _imageList = require('./../components/imageList.js');

var _imageList2 = _interopRequireDefault(_imageList);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _ads = require('./../components/ads.js');

var _ads2 = _interopRequireDefault(_ads);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Old = function (_wepy$page) {
  _inherits(Old, _wepy$page);

  function Old() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Old);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Old.__proto__ || Object.getPrototypeOf(Old)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '类型索引'
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.once": "categories", "xmlns:v-on": "" }, "imageList": { "v-bind:list.sync": "list" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" } }, _this.$events = { "SideTab": { "v-on:change": "switchTab" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      SearchBar: _searchbar2.default,
      Ads: _ads2.default
    }, _this.mixins = [], _this.data = {
      init: true,
      currentId: '1',
      currentTitle: '搞笑',
      categories: {
        'list': [{ 'id': '1', 'title': '搞笑' }, { 'id': '2', 'title': '催泪' }, { 'id': '3', 'title': '治愈' }, { 'id': '4', 'title': '致郁' }, { 'id': '5', 'title': '国产' }, { 'id': '6', 'title': '耽美' }, { 'id': '7', 'title': '百合' }, { 'id': '8', 'title': '泡面' }, { 'id': '9', 'title': '卖萌' }, { 'id': '10', 'title': '穿越' }, { 'id': '11', 'title': '推理' }, { 'id': '12', 'title': '番茄酱' }, { 'id': '13', 'title': '后宫' }, { 'id': '14', 'title': '机甲' }],
        'selectedId': '1',
        'currentTitle': '搞笑'
      },
      defaultList: [{
        'name': 'overloadIII',
        'image': ['http://pbsp6zdxi.bkt.clouddn.com/image/233/overload.jpg', '', ''],
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
        'image': ['http://pbsp6zdxi.bkt.clouddn.com/image/233/tianshi.jpg', '', ''],
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
        'image': ['http://pbsp6zdxi.bkt.clouddn.com/image/233/%E5%B7%A5%E4%BD%9C%E7%BB%86%E8%83%9E.jpg', '', ''],
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
        'image': ['http://pbsp6zdxi.bkt.clouddn.com/image/233/%E5%90%8E%E8%A1%97%E5%A5%B3%E5%AD%A9.jpg', '', ''],
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
        'image': ['http://pbsp6zdxi.bkt.clouddn.com/image/233/%E5%B7%A8%E4%BA%BA.jpg', '', ''],
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
        'image': ['http://p79mwfmry.bkt.clouddn.com/%E7%9F%B3%E5%A4%B4%E9%97%A8.jpg', '', ''],
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
      list: function list() {
        var _this2 = this;

        console.log(this.currentTitle);
        var list = this.defaultList.filter(function (res) {
          return res.tag.indexOf(_this2.currentTitle) > -1;
        });
        return list;
        // console.log(this.currentId,this.defaultList.slice(this.currentId-1,this.currentId))
        // return this.defaultList.slice(this.currentId-1,this.currentId);
      }
    }, _this.methods = {
      // 点击分类
      switchTab: function switchTab(item) {
        console.log(item);
        this.currentId = item.id;
        this.currentTitle = item.title;
        // this.tab.categoryId = selectedId;
        // this.reload();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Old, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onReady',
    value: function onReady() {
      this.initPage();
    }
  }, {
    key: 'initPage',
    value: function initPage() {
      this.getAnimeTag();
    }
  }, {
    key: 'search',
    value: function search() {
      wx.navigateTo({
        url: '/pages/searchTag'
      });
    }
  }, {
    key: 'getAnimeTag',
    value: function getAnimeTag() {
      var _this3 = this;

      wx.request({
        url: 'https://www.calamus.xyz/api/getAnimeTag.php', //仅为示例，并非真实的接口地址
        success: function success(res) {
          console.log(res);
          _this3.categories = res.data;
        },
        fail: function fail(res) {
          console.log("fail", res);
          _this3.categories = {
            'list': [{ 'id': '1', 'title': '催泪' }, { 'id': '2', 'title': '搞笑' }, { 'id': '3', 'title': '治愈' }, { 'id': '4', 'title': '致郁' }, { 'id': '5', 'title': '国产' }, { 'id': '6', 'title': '耽美' }, { 'id': '7', 'title': '百合' }, { 'id': '8', 'title': '泡面' }, { 'id': '9', 'title': '卖萌' }, { 'id': '10', 'title': '穿越' }, { 'id': '11', 'title': '推理' }, { 'id': '12', 'title': '番茄酱' }, { 'id': '13', 'title': '后宫' }, { 'id': '14', 'title': '机甲' }],
            'selectedId': '1'
          };
        }
      });
    }
  }]);

  return Old;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Old , 'pages/old'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC5qcyJdLCJuYW1lcyI6WyJPbGQiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTaWRlVGFiIiwiaW1hZ2VMaXN0IiwiU2VhcmNoQmFyIiwiQWRzIiwiZGF0YSIsImluaXQiLCJjdXJyZW50SWQiLCJjdXJyZW50VGl0bGUiLCJjYXRlZ29yaWVzIiwiZGVmYXVsdExpc3QiLCJjb21wdXRlZCIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwicmVzIiwidGFnIiwiaW5kZXhPZiIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsImV2ZW50cyIsImluaXRQYWdlIiwiZ2V0QW5pbWVUYWciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZXF1ZXN0Iiwic3VjY2VzcyIsImZhaWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUlxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxtQkFBa0IsWUFBbkIsRUFBZ0MsY0FBYSxFQUE3QyxFQUFYLEVBQTRELGFBQVksRUFBQyxvQkFBbUIsTUFBcEIsRUFBeEUsRUFBb0csYUFBWSxFQUFDLFFBQU8sS0FBUixFQUFjLGdCQUFlLEVBQTdCLEVBQWdDLDJCQUEwQixZQUExRCxFQUFoSCxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxlQUFjLFdBQWYsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFRQSxrQkFE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LEVBVUwsRUFBQyxNQUFLLElBQU4sRUFBVyxTQUFRLElBQW5CLEVBVkssRUFXTCxFQUFDLE1BQUssSUFBTixFQUFXLFNBQVEsSUFBbkIsRUFYSyxFQVlMLEVBQUMsTUFBSyxJQUFOLEVBQVcsU0FBUSxLQUFuQixFQVpLLEVBYUwsRUFBQyxNQUFLLElBQU4sRUFBVyxTQUFRLElBQW5CLEVBYkssRUFjTCxFQUFDLE1BQUssSUFBTixFQUFXLFNBQVEsSUFBbkIsRUFkSyxDQURPO0FBaUJaLDBCQUFhO0FBakJELFdBQWxCO0FBbUJEO0FBM0JRLE9BQVg7QUE2Qkg7Ozs7RUFsTThCd0IsZUFBS0MsSTs7a0JBQWpCM0MsRyIsImZpbGUiOiJvbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNpZGVUYWIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlX3RhYidcbiAgaW1wb3J0IGltYWdlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlTGlzdCdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IEFkcyBmcm9tICcuLi9jb21wb25lbnRzL2FkcydcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBPbGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIG1peGlucyA9IFtiYXNlLCBodHRwXVxuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnsbvlnovntKLlvJUnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTaWRlVGFiXCI6e1widi1iaW5kOnRhYi5vbmNlXCI6XCJjYXRlZ29yaWVzXCIsXCJ4bWxuczp2LW9uXCI6XCJcIn0sXCJpbWFnZUxpc3RcIjp7XCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCJ9LFwiU2VhcmNoQmFyXCI6e1widHlwZVwiOlwidGFnXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnBsYWNlaG9sZGVyLm9uY2VcIjpcInNlYXJjaFRleHRcIn19O1xyXG4kZXZlbnRzID0ge1wiU2lkZVRhYlwiOntcInYtb246Y2hhbmdlXCI6XCJzd2l0Y2hUYWJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFNpZGVUYWI6U2lkZVRhYixcbiAgICAgIGltYWdlTGlzdDppbWFnZUxpc3QsXG4gICAgICBTZWFyY2hCYXI6U2VhcmNoQmFyLFxuICAgICAgQWRzOkFkc1xuICAgIH1cblxuICAgIG1peGlucyA9IFtdXG5cbiAgICBkYXRhID0ge1xuICAgICAgaW5pdDp0cnVlLFxuICAgICAgY3VycmVudElkOicxJyxcbiAgICAgIGN1cnJlbnRUaXRsZTon5pCe56yRJyxcbiAgICAgIGNhdGVnb3JpZXM6IHtcbiAgICAgICAgICAgICAgICAnbGlzdCc6W1xuICAgICAgICAgICAgICAgICAgeydpZCc6JzEnLCd0aXRsZSc6J+aQnueskSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzInLCd0aXRsZSc6J+WCrOazqid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzMnLCd0aXRsZSc6J+ayu+aEiCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzQnLCd0aXRsZSc6J+iHtOmDgSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzUnLCd0aXRsZSc6J+WbveS6pyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzYnLCd0aXRsZSc6J+iAvee+jid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzcnLCd0aXRsZSc6J+eZvuWQiCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzgnLCd0aXRsZSc6J+azoemdoid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzknLCd0aXRsZSc6J+WNluiQjCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzEwJywndGl0bGUnOifnqb/otoonfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxMScsJ3RpdGxlJzon5o6o55CGJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMTInLCd0aXRsZSc6J+eVquiMhOmFsSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzEzJywndGl0bGUnOiflkI7lrqsnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxNCcsJ3RpdGxlJzon5py655SyJ31cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAnc2VsZWN0ZWRJZCc6JzEnLFxuICAgICAgICAgICAgICAgICAgJ2N1cnJlbnRUaXRsZSc6J+aQnueskSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgZGVmYXVsdExpc3Q6W3tcbiAgICAgICAgICAgICduYW1lJzonb3ZlcmxvYWRJSUknLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wYnNwNnpkeGkuYmt0LmNsb3VkZG4uY29tL2ltYWdlLzIzMy9vdmVybG9hZC5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+WQvuS5g+S+jeWlieaXoOS4iuiHs+WwiuS5i+S6uicsXG4gICAgICAgICAgICAnY29udGVudCc6JycsXG4gICAgICAgICAgICAndGFnJzpbJ+ijhemAvCcsJ+W8guS4lueVjCddLFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnY3JlYXRlVGltZSc6JzIwMTgtMDctMTAnLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdpZCc6JydcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgICduYW1lJzon5p2A5oiu5aSp5L2/JyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcGJzcDZ6ZHhpLmJrdC5jbG91ZGRuLmNvbS9pbWFnZS8yMzMvdGlhbnNoaS5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6JzEz5bKB55qE5bCR5aWz55Ge5ZCJ5YS/77yM5Zyo5p+Q5Liq5aSn5qW85pyA5bqV5bGC6IuP6YaS5ZCO77yM55Ge5ZCJ5YS/5aSx5Y675LqG5omA5pyJ55qE6K6w5b+G77yM5bm26K+V552A5LuO6L+Z6YeM6YCD5Ye65Y67JyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn5oGQ5oCWJywn5oKs55aRJywn5YaS6ZmpJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxOC0wNy0wNicsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOiflt6XkvZznu4bog54nLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wYnNwNnpkeGkuYmt0LmNsb3VkZG4uY29tL2ltYWdlLzIzMy8lRTUlQjclQTUlRTQlQkQlOUMlRTclQkIlODYlRTglODMlOUUuanBnJywnJywnJ10sXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiflpK3lr7/kuobvvIzmiJHnmoTnu4bog57lnKjmiJHnmoTkvZPlhoXosIjmgYvniLHkuoYnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6WyfmlZnogrInLCfljZbokIwnLCfmgYvniLEnLCflo7DkvJjkuI3opoHpkrEnLCfmkJ7nrJEnXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDE4LTA3LTcnLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdpZCc6JydcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgICduYW1lJzon5ZCO6KGX5aWz5a2pJyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcGJzcDZ6ZHhpLmJrdC5jbG91ZGRuLmNvbS9pbWFnZS8yMzMvJUU1JTkwJThFJUU4JUExJTk3JUU1JUE1JUIzJUU1JUFEJUE5LmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzon5LiA6LW35oiQ5Li65YG25YOP5ZCnMjMzJyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn5pCe56yRJywn5YG25YOPJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxOC0wNy00JyxcbiAgICAgICAgICAgICdmbGFnJzonMScsXG4gICAgICAgICAgICAnYXV0aG9yJzonJyxcbiAgICAgICAgICAgICd0eXBlJzonZ2FtZScsXG4gICAgICAgICAgICAnY29tcGFueSc6JycsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICAnbmFtZSc6J+i/m+WHu+eahOW3qOS6uklJSScsXG4gICAgICAgICAgICAnaW1hZ2UnOlsnaHR0cDovL3Bic3A2emR4aS5ia3QuY2xvdWRkbi5jb20vaW1hZ2UvMjMzLyVFNSVCNyVBOCVFNCVCQSVCQS5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+mCo+S4gOWkqe+8jOS6uuexu+aDs+i1t+adpeiiq+W3qOS6uuaUr+mFjeeahOaBkOaAlicsXG4gICAgICAgICAgICAnY29udGVudCc6JycsXG4gICAgICAgICAgICAndGFnJzpbJ+eDreihgCcsJ+aImOaWlyddLFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnY3JlYXRlVGltZSc6JzIwMTgtMDctMjInLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdpZCc6JydcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgICduYW1lJzon5ZG96L+Q55+z5LmL6ZeoMCcsXG4gICAgICAgICAgICAnaW1hZ2UnOlsnaHR0cDovL3A3OW13Zm1yeS5ia3QuY2xvdWRkbi5jb20vJUU3JTlGJUIzJUU1JUE0JUI0JUU5JTk3JUE4LmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzon5LiA5YiH6YO95piv5ZG96L+Q55+z5LmL6Zeo55qE6YCJ5oupJyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn6Ie06YOBJywn5pe26Ze056m/6LaKJywn56We5L2cJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxMy0wNC0yMCcsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH1dXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBsaXN0KCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFRpdGxlKVxuICAgICAgICB2YXIgbGlzdCA9IHRoaXMuZGVmYXVsdExpc3QuZmlsdGVyKChyZXMpPT57XG4gICAgICAgICAgcmV0dXJuIHJlcy50YWcuaW5kZXhPZih0aGlzLmN1cnJlbnRUaXRsZSkgPiAtMVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbGlzdCA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudElkLHRoaXMuZGVmYXVsdExpc3Quc2xpY2UodGhpcy5jdXJyZW50SWQtMSx0aGlzLmN1cnJlbnRJZCkpXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmRlZmF1bHRMaXN0LnNsaWNlKHRoaXMuY3VycmVudElkLTEsdGhpcy5jdXJyZW50SWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAvLyDngrnlh7vliIbnsbtcbiAgICAgIHN3aXRjaFRhYihpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIHRoaXMuY3VycmVudElkID0gaXRlbS5pZDtcbiAgICAgICAgdGhpcy5jdXJyZW50VGl0bGUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAvLyB0aGlzLnRhYi5jYXRlZ29yeUlkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgLy8gdGhpcy5yZWxvYWQoKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgIH1cbiAgICBpbml0UGFnZSgpe1xuICAgICAgdGhpcy5nZXRBbmltZVRhZygpXG4gICAgfVxuICAgIHNlYXJjaCgpe1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaFRhZydcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ2V0QW5pbWVUYWcoKXtcblxuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5jYWxhbXVzLnh5ei9hcGkvZ2V0QW5pbWVUYWcucGhwJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhIDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6KHJlcyk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbFwiLHJlcylcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHtcbiAgICAgICAgICAgICAgICAnbGlzdCc6W1xuICAgICAgICAgICAgICAgICAgeydpZCc6JzEnLCd0aXRsZSc6J+WCrOazqid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzInLCd0aXRsZSc6J+aQnueskSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzMnLCd0aXRsZSc6J+ayu+aEiCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzQnLCd0aXRsZSc6J+iHtOmDgSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzUnLCd0aXRsZSc6J+WbveS6pyd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzYnLCd0aXRsZSc6J+iAvee+jid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzcnLCd0aXRsZSc6J+eZvuWQiCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzgnLCd0aXRsZSc6J+azoemdoid9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzknLCd0aXRsZSc6J+WNluiQjCd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzEwJywndGl0bGUnOifnqb/otoonfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxMScsJ3RpdGxlJzon5o6o55CGJ30sXG4gICAgICAgICAgICAgICAgICB7J2lkJzonMTInLCd0aXRsZSc6J+eVquiMhOmFsSd9LFxuICAgICAgICAgICAgICAgICAgeydpZCc6JzEzJywndGl0bGUnOiflkI7lrqsnfSxcbiAgICAgICAgICAgICAgICAgIHsnaWQnOicxNCcsJ3RpdGxlJzon5py655SyJ31cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAnc2VsZWN0ZWRJZCc6JzEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==