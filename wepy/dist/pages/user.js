'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      // 初始化页面数据
      this.$getUserInfo(function (info) {
        var uinfo = _this2.getObject(info);
        var userInfo = _this2.getObject(_this2.userInfo);
        _this2.userInfo = Object.assign({}, userInfo, uinfo);
        _this2.initPageData();
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return User;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.config = {
    navigationBarTitleText: '朕的寝宫'
  };
  this.$repeat = {};
  this.$props = { "animeList": { "title": "我的追番", "xmlns:v-bind": "", "v-bind:star.sync": "star", "v-bind:loading.sync": "loading", "v-bind:list.sync": "collectionList", "nomoretitle": "暂无追番", "v-bind:noMore.sync": "noMoreList" } };
  this.$events = {};
  this.components = {
    animeList: _animeList2.default
  };
  this.mixins = [_base2.default, _http2.default, _user2.default];
  this.data = {
    userInfo: {
      nickName: '侍奉无上至尊之人',
      // 头像占位图
      avatarUrl: 'https://cdn.calamus.xyz/user.jpg',
      identity: {
        type: '罪域之骨终成王',
        collection: 1
      }
    },
    collectionList: [{
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
  };
  this.computed = {
    star: function star() {
      return this.collectionList.length;
      // console.log(this.getObject(this.userInfo))
      // const num = this.getObject(this.getObject(this.userInfo).identity).collection
      // return num;
    },
    identity: function identity() {
      return this.getObject(this.getObject(this.userInfo).identity);
    },
    nickName: function nickName() {
      var info = this.getObject(this.userInfo);
      // 名称或头像不为空的，才认为是授权用户
      return info.nickName || info.avatarUrl ? info.nickName : '未授权用户';
    }
  };
  this.methods = {};
  this.events = {
    'index-emit': function indexEmit() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this3.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsIiRnZXRVc2VySW5mbyIsImluZm8iLCJ1aW5mbyIsImdldE9iamVjdCIsInVzZXJJbmZvIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5pdFBhZ2VEYXRhIiwid2VweSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYW5pbWVMaXN0IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJ1c2VyIiwiZGF0YSIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiaWRlbnRpdHkiLCJ0eXBlIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25MaXN0IiwiY29tcHV0ZWQiLCJzdGFyIiwibGVuZ3RoIiwibWV0aG9kcyIsImV2ZW50cyIsIiRldmVudCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUtxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFtSVg7QUFBQTs7QUFDTDtBQUNELFdBQUtDLFlBQUwsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCLFlBQU1DLFFBQVEsT0FBS0MsU0FBTCxDQUFlRixJQUFmLENBQWQ7QUFDQSxZQUFNRyxXQUFXLE9BQUtELFNBQUwsQ0FBZSxPQUFLQyxRQUFwQixDQUFqQjtBQUNBLGVBQUtBLFFBQUwsR0FBZ0JDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixRQUFsQixFQUE0QkYsS0FBNUIsQ0FBaEI7QUFDQSxlQUFLSyxZQUFMO0FBQ0QsT0FMRDtBQU1EOzs7d0NBQ21CO0FBQ2xCLFdBQUtBLFlBQUw7QUFDRDs7OzZCQUNRLENBRVI7Ozs7RUFqSitCQyxlQUFLQyxJOzs7OztPQUNyQ0MsTSxHQUFTO0FBQ1BDLDRCQUF3QjtBQURqQixHO09B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QUpWO0FBS0EsYUFBTSxDQUFDLElBQUQsRUFBTSxNQUFOLEVBQWEsSUFBYixDQUxOO0FBTUEsZUFBUSxHQU5SO0FBT0Esb0JBQWEsWUFQYjtBQVFBLGNBQU8sR0FSUDtBQVNBLGdCQUFTLEVBVFQ7QUFVQSxjQUFPLE1BVlA7QUFXQSxpQkFBVSxFQVhWO0FBWUEsWUFBSztBQVpMLEtBakVTO0FBVlYsRztPQTJGUEMsUSxHQUFXO0FBQ1RDLFFBRFMsa0JBQ0g7QUFDSixhQUFPLEtBQUtGLGNBQUwsQ0FBb0JHLE1BQTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsS0FOUTtBQU9UTixZQVBTLHNCQU9FO0FBQ1QsYUFBTyxLQUFLckIsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZSxLQUFLQyxRQUFwQixFQUE4Qm9CLFFBQTdDLENBQVA7QUFDRCxLQVRRO0FBVVRGLFlBVlMsc0JBVUU7QUFDVCxVQUFNckIsT0FBTyxLQUFLRSxTQUFMLENBQWUsS0FBS0MsUUFBcEIsQ0FBYjtBQUNBO0FBQ0EsYUFBUUgsS0FBS3FCLFFBQUwsSUFBaUJyQixLQUFLc0IsU0FBdkIsR0FBb0N0QixLQUFLcUIsUUFBekMsR0FBb0QsT0FBM0Q7QUFDRDtBQWRRLEc7T0FpQlhTLE8sR0FBVSxFO09BSVZDLE0sR0FBUztBQUNQLGtCQUFjLHFCQUFhO0FBQUE7O0FBQ3pCLFVBQUlDLGtCQUFjLFVBQUtILE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBSSxjQUFRQyxHQUFSLENBQWUsT0FBS0MsS0FBcEIsaUJBQXFDSCxPQUFPSSxJQUE1QyxjQUF5REosT0FBT0ssTUFBUCxDQUFjRixLQUF2RTtBQUNEO0FBSk0sRzs7O2tCQTdIVXJDLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgaHR0cCBmcm9tICcuLi9taXhpbnMvaHR0cCdcbiAgaW1wb3J0IGJhc2UgZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXG4gIGltcG9ydCB1c2VyIGZyb20gJy4uL21peGlucy91c2VyJ1xuICBpbXBvcnQgYW5pbWVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvYW5pbWVMaXN0J1xuXG5cblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmnJXnmoTlr53lrqsnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJhbmltZUxpc3RcIjp7XCJ0aXRsZVwiOlwi5oiR55qE6L+955WqXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnN0YXIuc3luY1wiOlwic3RhclwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiY29sbGVjdGlvbkxpc3RcIixcIm5vbW9yZXRpdGxlXCI6XCLmmoLml6Dov73nlapcIixcInYtYmluZDpub01vcmUuc3luY1wiOlwibm9Nb3JlTGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICBhbmltZUxpc3Q6YW5pbWVMaXN0XG4gICAgfVxuXG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHAsIHVzZXJdXG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfkvo3lpYnml6DkuIroh7PlsIrkuYvkuronLFxuICAgICAgICAvLyDlpLTlg4/ljaDkvY3lm75cbiAgICAgICAgYXZhdGFyVXJsOiAnaHR0cDovL3AzaTEwaGpzNy5ia3QuY2xvdWRkbi5jb20vdXNlci5qcGcnLFxuICAgICAgICBpZGVudGl0eToge1xuICAgICAgICAgIHR5cGU6ICfnvarln5/kuYvpqqjnu4jmiJDnjosnLFxuICAgICAgICAgIGNvbGxlY3Rpb246IDFcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBjb2xsZWN0aW9uTGlzdDpbe1xuICAgICAgICAgICAgJ25hbWUnOidvdmVybG9hZElJSScsXG4gICAgICAgICAgICAnaW1hZ2UnOlsnaHR0cDovL3Bic3A2emR4aS5ia3QuY2xvdWRkbi5jb20vaW1hZ2UvMjMzL292ZXJsb2FkLmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzon5ZC+5LmD5L6N5aWJ5peg5LiK6Iez5bCK5LmL5Lq6JyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn6KOF6YC8Jywn5byC5LiW55WMJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxOC0wNy0xMCcsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOifmnYDmiK7lpKnkvb8nLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wYnNwNnpkeGkuYmt0LmNsb3VkZG4uY29tL2ltYWdlLzIzMy90aWFuc2hpLmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzonMTPlsoHnmoTlsJHlpbPnkZ7lkInlhL/vvIzlnKjmn5DkuKrlpKfmpbzmnIDlupXlsYLoi4/phpLlkI7vvIznkZ7lkInlhL/lpLHljrvkuobmiYDmnInnmoTorrDlv4bvvIzlubbor5XnnYDku47ov5nph4zpgIPlh7rljrsnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6WyfmgZDmgJYnLCfmgqznlpEnLCflhpLpmaknXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDE4LTA3LTA2JyxcbiAgICAgICAgICAgICdmbGFnJzonMScsXG4gICAgICAgICAgICAnYXV0aG9yJzonJyxcbiAgICAgICAgICAgICd0eXBlJzonZ2FtZScsXG4gICAgICAgICAgICAnY29tcGFueSc6JycsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfSx7XG4gICAgICAgICAgICAnbmFtZSc6J+W3peS9nOe7huiDnicsXG4gICAgICAgICAgICAnaW1hZ2UnOlsnaHR0cDovL3Bic3A2emR4aS5ia3QuY2xvdWRkbi5jb20vaW1hZ2UvMjMzLyVFNSVCNyVBNSVFNCVCRCU5QyVFNyVCQiU4NiVFOCU4MyU5RS5qcGcnLCcnLCcnXSxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6J+WkreWvv+S6hu+8jOaIkeeahOe7huiDnuWcqOaIkeeahOS9k+WGheiwiOaBi+eIseS6hicsXG4gICAgICAgICAgICAnY29udGVudCc6JycsXG4gICAgICAgICAgICAndGFnJzpbJ+aVmeiCsicsJ+WNluiQjCcsJ+aBi+eIsScsJ+WjsOS8mOS4jeimgemSsScsJ+aQnueskSddLFxuICAgICAgICAgICAgJ3N0YXJzJzonNScsXG4gICAgICAgICAgICAnY3JlYXRlVGltZSc6JzIwMTgtMDctNycsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOiflkI7ooZflpbPlraknLFxuICAgICAgICAgICAgJ2ltYWdlJzpbJ2h0dHA6Ly9wYnNwNnpkeGkuYmt0LmNsb3VkZG4uY29tL2ltYWdlLzIzMy8lRTUlOTAlOEUlRTglQTElOTclRTUlQTUlQjMlRTUlQUQlQTkuanBnJywnJywnJ10sXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOifkuIDotbfmiJDkuLrlgbblg4/lkKcyMzMnLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6WyfmkJ7nrJEnLCflgbblg48nXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDE4LTA3LTQnLFxuICAgICAgICAgICAgJ2ZsYWcnOicxJyxcbiAgICAgICAgICAgICdhdXRob3InOicnLFxuICAgICAgICAgICAgJ3R5cGUnOidnYW1lJyxcbiAgICAgICAgICAgICdjb21wYW55JzonJyxcbiAgICAgICAgICAgICdpZCc6JydcbiAgICAgICAgICB9LHtcbiAgICAgICAgICAgICduYW1lJzon6L+b5Ye755qE5beo5Lq6SUlJJyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcGJzcDZ6ZHhpLmJrdC5jbG91ZGRuLmNvbS9pbWFnZS8yMzMvJUU1JUI3JUE4JUU0JUJBJUJBLmpwZycsJycsJyddLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzon6YKj5LiA5aSp77yM5Lq657G75oOz6LW35p2l6KKr5beo5Lq65pSv6YWN55qE5oGQ5oCWJyxcbiAgICAgICAgICAgICdjb250ZW50JzonJyxcbiAgICAgICAgICAgICd0YWcnOlsn54Ot6KGAJywn5oiY5paXJ10sXG4gICAgICAgICAgICAnc3RhcnMnOic1JyxcbiAgICAgICAgICAgICdjcmVhdGVUaW1lJzonMjAxOC0wNy0yMicsXG4gICAgICAgICAgICAnZmxhZyc6JzEnLFxuICAgICAgICAgICAgJ2F1dGhvcic6JycsXG4gICAgICAgICAgICAndHlwZSc6J2dhbWUnLFxuICAgICAgICAgICAgJ2NvbXBhbnknOicnLFxuICAgICAgICAgICAgJ2lkJzonJ1xuICAgICAgICAgIH0se1xuICAgICAgICAgICAgJ25hbWUnOiflkb3ov5Dnn7PkuYvpl6gwJyxcbiAgICAgICAgICAgICdpbWFnZSc6WydodHRwOi8vcDc5bXdmbXJ5LmJrdC5jbG91ZGRuLmNvbS8lRTclOUYlQjMlRTUlQTQlQjQlRTklOTclQTguanBnJywnJywnJ10sXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOifkuIDliIfpg73mmK/lkb3ov5Dnn7PkuYvpl6jnmoTpgInmi6knLFxuICAgICAgICAgICAgJ2NvbnRlbnQnOicnLFxuICAgICAgICAgICAgJ3RhZyc6Wyfoh7Tpg4EnLCfml7bpl7Tnqb/otoonLCfnpZ7kvZwnXSxcbiAgICAgICAgICAgICdzdGFycyc6JzUnLFxuICAgICAgICAgICAgJ2NyZWF0ZVRpbWUnOicyMDEzLTA0LTIwJyxcbiAgICAgICAgICAgICdmbGFnJzonMScsXG4gICAgICAgICAgICAnYXV0aG9yJzonJyxcbiAgICAgICAgICAgICd0eXBlJzonZ2FtZScsXG4gICAgICAgICAgICAnY29tcGFueSc6JycsXG4gICAgICAgICAgICAnaWQnOicnXG4gICAgICAgICAgfV1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIHN0YXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvbkxpc3QubGVuZ3RoXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ2V0T2JqZWN0KHRoaXMudXNlckluZm8pKVxuICAgICAgICAvLyBjb25zdCBudW0gPSB0aGlzLmdldE9iamVjdCh0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKS5pZGVudGl0eSkuY29sbGVjdGlvblxuICAgICAgICAvLyByZXR1cm4gbnVtO1xuICAgICAgfSxcbiAgICAgIGlkZW50aXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbykuaWRlbnRpdHkpXG4gICAgICB9LFxuICAgICAgbmlja05hbWUoKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxuICAgICAgICAvLyDlkI3np7DmiJblpLTlg4/kuI3kuLrnqbrnmoTvvIzmiY3orqTkuLrmmK/mjojmnYPnlKjmiLdcbiAgICAgICAgcmV0dXJuIChpbmZvLm5pY2tOYW1lIHx8IGluZm8uYXZhdGFyVXJsKSA/IGluZm8ubmlja05hbWUgOiAn5pyq5o6I5p2D55So5oi3J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBvblNob3coKXtcbiAgICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICAgIHRoaXMuJGdldFVzZXJJbmZvKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHVpbmZvID0gdGhpcy5nZXRPYmplY3QoaW5mbylcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgdXNlckluZm8sIHVpbmZvKVxuICAgICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgICB9KVxuICAgIH1cbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICB9XG4iXX0=