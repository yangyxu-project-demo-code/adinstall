/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);

zn.app.adinstall = __webpack_require__(11);
module.exports = zn.react.extendPath('/adinstall.base.', __webpack_require__(55));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = zn.extend.apply(zn, [{}, __webpack_require__(12), __webpack_require__(20), __webpack_require__(28), __webpack_require__(32), __webpack_require__(41), __webpack_require__(49)]);
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Advs': __webpack_require__(13),
  'GroupPanel': __webpack_require__(14),
  'OrderBaseInfo': __webpack_require__(15),
  'OrderItem': __webpack_require__(16),
  'ShopSelector': __webpack_require__(17),
  'SignatureArea': __webpack_require__(18)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var Adv = React.createClass({
  displayName: "Adv",
  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },
  __getButtons: function __getButtons(status) {
    if (this.props.status == 2) {
      return [{
        type: 'submit',
        icon: 'fa-upload',
        text: '上传施工图片',
        status: 'warning'
      }];
    }

    if (this.props.status == -3) {
      return [{
        type: 'submit',
        icon: 'fa-upload',
        text: '重新上传施工图片',
        status: 'warning'
      }];
    }

    return [];
  },
  render: function render() {
    var _this = this;

    var item = this.props.data;
    return React.createElement("div", {
      className: "adinstall-base-component-adv"
    }, React.createElement("div", {
      className: "adv-title",
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      }
    }, React.createElement("div", {
      className: "title"
    }, item.bsf_logo && React.createElement("img", {
      style: {
        width: 32,
        height: 32
      },
      src: zn.http.fixURL(item.bsf_logo)
    }), item.bsf_zn_title), React.createElement("i", {
      className: "fa " + (this.state.active ? 'fa-angle-down' : 'fa-angle-right')
    })), React.createElement("div", {
      className: "adv-content",
      style: {
        display: this.state.active ? 'block' : 'none'
      }
    }, React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u7F16\u53F7"), React.createElement("span", {
      className: "_value"
    }, item.bsf_code)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5E7F\u544A\u4F4D\u7F6E"), React.createElement("span", {
      className: "_value"
    }, item.bsf_adv_position)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u95E8\u5E97\u4F4D\u7F6E"), React.createElement("span", {
      className: "_value"
    }, item.bsf_shop_position)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5B89\u88C5\u96BE\u5EA6"), React.createElement("span", {
      className: "_value"
    }, item.bsf_install_difficulty)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5B89\u88C5\u8BF4\u660E"), React.createElement("span", {
      className: "_value"
    }, item.bsf_install_guide)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6750\u8D28"), React.createElement("span", {
      className: "_value"
    }, item.bsf_cai_zhi)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u57FA\u5C42"), React.createElement("span", {
      className: "_value"
    }, item.bsf_ji_ceng)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u51FA\u8840\u5C3A\u5BF8(\u9AD8/\u5BBD)"), React.createElement("span", {
      className: "_value"
    }, (item.bsf_chu_xue_chi_cun_gao || 0).toFixed(2), " / ", (item.bsf_chu_xue_chi_cun_kuang || 0).toFixed(2))), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8FB9\u6846\u5C3A\u5BF8(\u9AD8/\u5BBD)"), React.createElement("span", {
      className: "_value"
    }, (item.bsf_bian_kuang_chi_cun_gao || 0).toFixed(2), " / ", (item.bsf_bian_kuang_chi_cun_kuang || 0).toFixed(2))), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u4ECB\u7ECD"), React.createElement("span", {
      className: "_value"
    }, item.comment)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5B89\u88C5\u524D(\u4E0A\u4E00\u6B21\u5B89\u88C5\u540E)"), React.createElement(zn.react.Files, {
      className: "_value",
      value: item.bsf_images
    })), React.createElement(zn.react.Form, {
      style: {
        padding: 5
      },
      items: [{
        title: '安装前(更新)',
        name: 'before_images',
        type: 'FileUploader'
      }, {
        title: '安装后',
        name: 'after_images',
        type: 'FileUploader',
        required: true
      }, {
        title: '工单备注',
        name: 'comment',
        type: 'Textarea'
      }],
      merge: "data",
      action: "/adinstall/supplier_order/saveProjectItemShopFrameImages",
      exts: {
        project_item_brand_shop_frame_id: item.id
      },
      value: item,
      readonly: this.props.status == 2 || this.props.status == -3 ? false : true,
      buttons: this.__getButtons()
    })));
  }
});
var Advs = React.createClass({
  displayName: "Advs",
  render: function render() {
    return React.createElement("div", {
      className: "adinstall-base-component-advs"
    }, this.props.data.map(function (item) {
      return React.createElement(Adv, {
        data: item,
        status: this.props.status
      });
    }.bind(this)));
  }
});
Advs.Adv = Adv;
module.exports = Advs;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: zn.react.classname("adinstall-base-component-group-panel", this.props.className),
      style: this.props.style,
      "data-active": this.state.active
    }, React.createElement("div", {
      className: "gp-header",
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      }
    }, React.createElement("div", {
      className: "gp-header-left"
    }, this.props.left), React.createElement("div", {
      className: "gp-header-right"
    }, this.props.right, React.createElement("i", {
      className: "icon fa " + (this.state.active ? 'fa-angle-down' : 'fa-angle-right')
    }))), React.createElement("div", {
      className: "gp-body"
    }, this.props.children));
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {};
  },
  __formatPhone: function __formatPhone(value) {
    if (value) {
      value = value.replace(/\-/g, '');
      value = value.replace(/\s+/g, '');
    }

    return value;
  },
  __onAddressClick: function __onAddressClick() {
    var _data = this.props.data;
    wx.openLocation({
      //latitude: 0, // 纬度，浮点数，范围为90 ~ -90
      //longitude: 0, // 经度，浮点数，范围为180 ~ -180。
      name: _data.brandshop.zn_title,
      // 位置名
      address: _data.brandshop.address,
      // 地址详情说明
      scale: 1 // 地图缩放级别,整形值,范围从1~28。默认为最大
      //infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转

    });
  },
  __supplierRender: function __supplierRender(value) {
    if (value) {
      var _values = value.split('&&__zn__&&');

      return React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u4F9B\u5E94\u5546(\u6267\u884C)"), React.createElement("span", {
        className: "_value"
      }, _values[0]));
    } else {}
  },
  render: function render() {
    var _data = this.props.data;
    return React.createElement("div", {
      className: "adv"
    }, React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title"
    }, React.createElement("span", null, "\u5DE5\u5355\u53F7 ", _data.code), React.createElement("span", null, _data.zn_create_time)), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5DE5\u5355\u7C7B\u578B"), React.createElement("span", {
      className: "_value"
    }, _data.work_type_convert)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8981\u6C42\u8FDB\u573A\u65E5\u671F"), React.createElement("span", {
      className: "_value"
    }, _data.plan_start_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8981\u6C42\u5B8C\u5DE5\u65E5\u671F"), React.createElement("span", {
      className: "_value"
    }, _data.plan_end_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5DF2\u9884\u7EA6\u65F6\u95F4"), React.createElement("span", {
      className: "_value"
    }, _data.order_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8D39\u7528"), React.createElement("span", {
      className: "_value",
      style: {
        color: '#d9534f'
      }
    }, _data.cost.toFixed(2), React.createElement("i", {
      className: "fa fa-rmb zr-padding-3"
    }))), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8D1F\u8D23\u4EBA"), React.createElement("span", {
      className: "_value"
    }, _data.zn_create_user_convert)), this.__supplierRender(_data.supplier_openid_convert), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6548\u679C\u56FE"), React.createElement(zn.react.Files, {
      className: "_value",
      value: _data.requirement_images
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6"), React.createElement(zn.react.Files, {
      className: "_value",
      value: _data.attactments
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8BF4\u660E(\u5907\u6CE8)"), React.createElement("span", {
      className: "_value"
    }, _data.comment)))), React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u95E8\u5E97\u4FE1\u606F"), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6240\u5C5E\u54C1\u724C"), React.createElement("span", {
      className: "_value"
    }, _data.brand_id_convert)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u540D\u79F0"), React.createElement("span", {
      className: "_value"
    }, _data.brandshop.zn_title)), React.createElement("div", {
      className: "group-item",
      onClick: this.__onAddressClick
    }, React.createElement("span", {
      className: "_key"
    }, "\u5730\u5740"), React.createElement("span", {
      className: "_value"
    }, _data.brandshop.address), React.createElement("i", {
      className: "fa fa-angle-right"
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8054\u7CFB\u4EBA"), React.createElement("span", {
      className: "_value"
    }, _data.brandshop.contact)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5EA7\u673A"), React.createElement("a", {
      className: "_value",
      href: "tel:" + this.__formatPhone(_data.brandshop.phone)
    }, React.createElement("i", {
      className: "fa fa-phone zr-padding-3"
    }), _data.brandshop.phone)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u7535\u8BDD"), React.createElement("a", {
      className: "_value",
      href: "tel:" + this.__formatPhone(_data.brandshop.telephone)
    }, React.createElement("i", {
      style: {
        fontSize: 16
      },
      className: "fa fa-mobile zr-padding-3"
    }), _data.brandshop.telephone)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u95E8\u5E97\u524D\u666F\u7167"), React.createElement("span", {
      className: "_value"
    }, React.createElement("img", {
      className: "img",
      src: zn.http.fixURL(_data.brandshop.logo)
    }))), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u95E8\u5E97\u5185\u666F\u7167"), React.createElement("div", {
      className: "_value"
    }, React.createElement(zn.react.Files, {
      value: _data.brandshop.images
    }))), React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u5E7F\u544A\u4F4D"), React.createElement(zn.app.adinstall.Advs, {
      data: _data.brandshopframes,
      status: _data.status
    })))));
  }
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  __renderStatus: function __renderStatus(status) {
    switch (status) {
      case 0:
        return React.createElement("span", {
          style: {
            color: '#FF9800'
          }
        }, "\u5F85\u5BA1\u6838");

      case -1:
        return React.createElement("span", {
          style: {
            color: '#FF5722'
          }
        }, "\u5DF2\u9A73\u56DE");

      case 1:
        return React.createElement("span", {
          style: {
            color: '#2196F3'
          }
        }, "\u5F85\u63A5\u5355");

      case -2:
        return React.createElement("span", {
          style: {
            color: '#f91100'
          }
        }, "\u5DF2\u62D2\u5355");

      case 2:
        return React.createElement("span", {
          style: {
            color: '#f0ad4e'
          }
        }, "\u5DF2\u63A5\u5355");

      case -3:
        return React.createElement("span", {
          style: {
            color: '#f91100'
          }
        }, "\u7B7E\u6536\u88AB\u9A73\u56DE");

      case 3:
        return React.createElement("span", {
          style: {
            color: '#4FCCD9'
          }
        }, "\u5F85\u7B7E\u6536");

      case 4:
        return React.createElement("span", {
          style: {
            color: '#6d81ec'
          }
        }, "\u7B7E\u6536\u5F85\u76D1\u7406\u786E\u8BA4");

      case 5:
        return React.createElement("span", {
          style: {
            color: '#d068e2'
          }
        }, "\u7B7E\u6536\u5F85\u9879\u76EE\u786E\u8BA4");

      case 6:
        return React.createElement("span", {
          style: {
            color: '#673AB7'
          }
        }, "\u5F85\u7ED3\u7B97");

      case 7:
        return React.createElement("span", {
          style: {
            color: '#0aca12'
          }
        }, "\u5DF2\u7ED3\u7B97");

      case 8:
        return React.createElement("span", {
          style: {
            color: '#b5b1b1'
          }
        }, "\u5DF2\u5173\u95ED");
    }
  },
  __supplierRender: function __supplierRender(value) {
    if (value) {
      var _values = value.split('&&__zn__&&');

      return React.createElement("div", {
        className: "field value",
        style: {
          color: '#2197f5'
        }
      }, React.createElement("span", null, React.createElement("i", {
        className: "fa fa-user-md"
      }), "\u4F9B\u5E94\u5546(\u6267\u884C)\uFF1A", React.createElement("a", {
        href: zn.react.session.relativeURL('/adinstall.base.common.supplier.center', {
          znid: _values[2]
        })
      }, _values[0])));
    } else {}
  },
  render: function render() {
    var item = this.props.data || this.props;
    return React.createElement("div", {
      className: "adinstall-base-component-order-item"
    }, React.createElement("div", {
      className: "title"
    }, React.createElement("div", null, React.createElement("span", {
      className: "work-type"
    }, item.work_type_convert), React.createElement("span", {
      className: "code"
    }, item.code)), this.__renderStatus(item.status)), React.createElement("div", {
      className: "info",
      onClick: this.props.onClick
    }, item.brand_logo_convert && React.createElement("img", {
      className: "icon",
      src: zn.http.fixURL(item.brand_logo_convert)
    }), React.createElement("div", {
      className: "fields"
    }, React.createElement("div", {
      className: "field",
      style: {
        fontWeight: 'bold'
      }
    }, React.createElement("span", null, item.brand_shop_title_convert)), React.createElement("div", {
      className: "field value",
      style: {
        color: '#d9534f'
      }
    }, React.createElement("span", null, React.createElement("i", {
      className: "fa fa-map-marker"
    }), item.brand_shop_address_convert)), React.createElement("div", {
      className: "field value"
    }, React.createElement("span", null, React.createElement("i", {
      className: "fa fa-clock-o"
    }), item.plan_start_time, " ~ ", item.plan_end_time)), React.createElement("div", {
      className: "field value"
    }, React.createElement("span", null, React.createElement("i", {
      className: "fa fa-rmb"
    }), "\u8D39\u7528\uFF1A", React.createElement("i", {
      style: {
        color: '#d9534f',
        fontWeight: 'bold'
      }
    }, (item.cost || 0).toFixed(2)))), React.createElement("div", {
      className: "field value"
    }, React.createElement("span", null, React.createElement("i", {
      className: "fa fa-user"
    }), "\u8D1F\u8D23\u4EBA\uFF1A", item.zn_create_user_convert)), this.__supplierRender(item.supplier_openid_convert))));
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      value: ','
    };
  },
  __onShopClick: function __onShopClick(item, checked) {
    if (checked) {
      this.state.value = this.state.value.replace(',' + item.id + ',', ',');
    } else {
      this.state.value = this.state.value + item.id + ',';
    }

    this.forceUpdate();
    this.props.onChange && this.props.onChange(this.state.value);
  },
  checkAll: function checkAll(value) {
    if (value) {
      this.state.value = ',' + this.props.data.map(function (item) {
        return item.id;
      }).join(',') + ',';
    } else {
      this.state.value = ',';
    }

    this.forceUpdate();
    this.props.onChange && this.props.onChange(this.state.value);
  },
  getValue: function getValue() {
    return this.state.value;
  },
  render: function render() {
    return React.createElement("div", {
      className: zn.react.classname("adinstall-base-component-shop-selector", this.props.className),
      style: this.props.style
    }, this.props.data && !!this.props.data.length && React.createElement("div", {
      className: "shops"
    }, this.props.data.map(function (item, index) {
      var _this = this;

      var _checked = this.state.value.indexOf(item.id) != -1;

      return React.createElement("div", {
        className: "shop",
        "data-selected": _checked
      }, React.createElement("i", {
        onClick: function onClick() {
          return _this.__onShopClick(item, _checked);
        },
        className: "check-icon fa " + (_checked ? 'fa-check-circle' : 'fa-check-circle-o')
      }), item.logo && React.createElement("img", {
        className: "logo",
        src: zn.http.fixURL(item.logo)
      }), React.createElement("div", {
        className: "infos"
      }, React.createElement("div", {
        className: "name"
      }, item.zn_title), React.createElement("div", {
        className: "address"
      }, React.createElement("i", {
        className: "fa fa-map-marker zr-padding-3"
      }), item.address)));
    }.bind(this))));
  }
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

var SignaturePad = __webpack_require__(19);

var SignatureArea = React.createClass({
  displayName: "SignatureArea",
  componentDidMount: function componentDidMount() {
    this.signaturePad = new SignaturePad(ReactDOM.findDOMNode(this.refs.signaturecanvas), {
      penColor: "#6B6B6B",
      backgroundColor: "#FFFFFF"
    });
  },
  __undo: function __undo() {
    var data = this.signaturePad.toData();

    if (data) {
      data.pop(); // remove the last dot or line

      this.signaturePad.fromData(data);
    }
  },
  __reset: function __reset() {
    zn.confirm('重新签名将清空已存在内容, 确认提交？', '提示', function () {
      this.signaturePad.clear();
    }.bind(this));
  },
  getValue: function getValue() {
    return this.signaturePad.toDataURL();
  },
  render: function render() {
    return React.createElement("div", {
      className: "adinstall-index-shopstaff-signature-area"
    }, React.createElement("div", {
      className: "title"
    }, "\u7535\u5B50\u7B7E\u540D"), React.createElement("canvas", {
      ref: "signaturecanvas",
      className: "signature-pad",
      width: 340,
      height: 300
    }), React.createElement("div", {
      className: "adinstall-btns"
    }, React.createElement("span", {
      onClick: this.__undo,
      className: "btn"
    }, "\u56DE\u64A4"), React.createElement("span", {
      onClick: this.__reset,
      className: "btn danger"
    }, "\u91CD\u65B0\u7B7E\u540D")));
  }
});
module.exports = SignatureArea;

/***/ }),
/* 19 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

Point.prototype.equals = function (other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

/* eslint-disable */

// http://stackoverflow.com/a/27078401/815507
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
  this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;

  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }

  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

  // Skip this point if it's too close to the previous one
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point),
        curve = _addPoint.curve,
        widths = _addPoint.widths;

    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }

    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0]; // Point instance

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

    // When drawing a dot, there's only one point in a group, so without this check
    // such group would end up with exactly the same 2 points.
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;

        if (j === 0) {
          // First point in a group. Nothing to draw yet.

          // All points in the group have the same color, so it's enough to set
          // penColor just at the beginning.
          this.penColor = color;
          this._reset();

          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths, color) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', color);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', rawPoint.color);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });

  this._data = pointGroups;
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'BrandBaseInfo': __webpack_require__(21),
  'BrandShops': __webpack_require__(22),
  'BrandAllProjects': __webpack_require__(23),
  'BrandAllProjectTasks': __webpack_require__(24),
  'BrandProjects': __webpack_require__(25),
  'BrandTasks': __webpack_require__(26),
  'CreateBrandProject': __webpack_require__(27)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      info: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseInfo(this.props.znid);
  },
  __loadBaseInfo: function __loadBaseInfo(zn_id) {
    zn.http.post('/zn.plugin.admin/model/selectOne', {
      model: 'AdinstallBrand',
      where: {
        zn_id: zn_id
      }
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  render: function render() {
    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-base-info adinstall-admin-brand-info"
    }, React.createElement("div", {
      className: "right"
    }, React.createElement("div", {
      className: "base"
    }, React.createElement("img", {
      className: "logo",
      src: zn.http.fixURL(this.state.info.logo)
    }), React.createElement("span", {
      className: "title"
    }, this.state.info.zn_title)), React.createElement("div", {
      className: "item-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u57FA\u672C\u4FE1\u606F"), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u5E7F\u544A\u4F4D\u7C7B\u578B: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.adv_type_ids)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u7701: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.province_convert)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u5E02: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.city_convert)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u5730\u5740: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.address)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u4ECB\u7ECD: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.comment)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u8BF4\u660E: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.zn_note)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u521B\u5EFA\u65F6\u95F4: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.zn_create_time))), React.createElement("div", {
      className: "item-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u8054\u7CFB\u4EBA"), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u59D3\u540D: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.contact)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u7535\u8BDD: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.phone)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u90AE\u7BB1: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.email))), React.createElement("div", {
      className: "item-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u6587\u4EF6"), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u9644\u4EF6: "), React.createElement("div", {
      className: true
    }), React.createElement("div", {
      className: "item-value"
    }, React.createElement(zn.react.Files, {
      value: this.state.info.attachments
    }))))));
  }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/brand/getShops', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onCreateProjectTask: function __onCreateProjectTask(item) {
    zn.react.session.relativeJump('/adinstall.base.my.brands.create.project.task', {
      znid: item.zn_id
    });
  },
  __onShopInfo: function __onShopInfo(item) {
    zn.react.session.relativeJump('/adinstall.base.common.brand.shop.center', {
      znid: item.zn_id
    });
  },
  __onItemRender: function __onItemRender(item) {
    var _this = this;

    return React.createElement("div", {
      className: "adinstall-inner"
    }, item.logo && React.createElement("div", {
      className: "inner-left"
    }, React.createElement("img", {
      className: "logo",
      src: zn.http.fixURL(item.logo)
    })), React.createElement("div", {
      className: "inner-right"
    }, React.createElement("div", {
      className: "r-header"
    }, React.createElement("span", {
      className: "name",
      onClick: function onClick() {
        return _this.__onShopInfo(item);
      },
      "data-tooltip": "\u67E5\u770B\u95E8\u5E97\u4FE1\u606F"
    }, item.zn_title)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, React.createElement("i", {
      className: "fa fa-map-marker zr-padding-3"
    })), React.createElement("span", {
      className: "_value"
    }, item.address)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8054\u7CFB\u4EBA\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.contact)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5EA7\u673A\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.phone)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u624B\u673A\u53F7\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.telephone))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/brand/getAllProjects', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).refresh();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-inner"
    }, React.createElement("div", {
      className: "inner-right"
    }, React.createElement("div", {
      className: "r-header"
    }, React.createElement("span", {
      className: "name",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.project.detail', {
          zn_id: item.zn_id
        });
      }
    }, "\u5361\u53F7 ", item.code), React.createElement("span", {
      "data-tooltip": "\u521B\u5EFA\u65F6\u95F4",
      className: "zr-fr adinstall-tag"
    }, "\u521B\u5EFA\u4E8E ", item.zn_create_time)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6240\u5C5E\u54C1\u724C\uFF1A"), React.createElement("span", {
      className: "_value adinstall-tag"
    }, item.brand_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u540D\u79F0\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_title)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u7ECF\u7406\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_user_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (item.plan_start_time || '').toString().split(' ')[0], " ~ ", (item.plan_end_time || '').toString().split(' ')[0]))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/brand/getAllTasks', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).exec();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/brand/getProjects', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).refresh();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-inner"
    }, React.createElement("div", {
      className: "inner-right"
    }, React.createElement("div", {
      className: "r-header"
    }, React.createElement("span", {
      className: "name",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.project.detail', {
          zn_id: item.zn_id
        });
      }
    }, "\u5361\u53F7 ", item.code), React.createElement("span", {
      "data-tooltip": "\u521B\u5EFA\u65F6\u95F4",
      className: "zr-fr adinstall-tag"
    }, item.zn_create_time)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u540D\u79F0\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_title)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u7ECF\u7406\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_user_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (item.plan_start_time || '').toString().split(' ')[0], " ~ ", (item.plan_end_time || '').toString().split(' ')[0]))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/brand/getTasks', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onResolveTask: function __onResolveTask(item) {
    var _this = this;

    zn.dialog({
      title: '确认工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/resolve",
        exts: {
          code: item.code
        },
        items: [{
          title: '备注',
          name: 'note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.state.data.refresh();
        },
        buttons: [{
          text: '确认通过',
          status: 'success',
          type: 'submit'
        }]
      })
    });
  },
  __onRejectTask: function __onRejectTask(item) {
    var _this2 = this;

    zn.dialog({
      title: '驳回工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/reject",
        exts: {
          code: item.code
        },
        items: [{
          title: '备注',
          name: 'note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.state.data.refresh();
        },
        buttons: [{
          text: '驳回',
          status: 'danger',
          type: 'submit'
        }]
      })
    });
  },
  __onItemRender: function __onItemRender(item) {
    var _this3 = this;

    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }), item.status == 0 && React.createElement("div", {
      className: "adinstall-link"
    }, React.createElement("span", {
      onClick: function onClick() {
        return _this3.__onRejectTask(item);
      },
      className: "link danger"
    }, "\u9A73\u56DE"), React.createElement("span", {
      onClick: function onClick() {
        return _this3.__onResolveTask(item);
      },
      className: "link ok"
    }, "\u786E\u8BA4\u901A\u8FC7")), item.status == 5 && React.createElement("div", {
      className: "adinstall-link"
    }, React.createElement("span", {
      onClick: function onClick() {
        return _this3.__onRejectTask(item);
      },
      className: "link danger"
    }, "\u8BA2\u5355\u5B8C\u6210\u786E\u8BA4")));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var Region = React.createClass({
  displayName: "Region",
  getInitialState: function getInitialState() {
    return {
      value: ','
    };
  },
  getValue: function getValue() {
    var _shops = this.refs.brand_shop_ids.getValue();

    if (_shops.length > 2) {
      var _value = {
        zn_id: zn.uuid(),
        brand_id: this.props.brandId,
        region: this.props.id,
        zn_rights_owner_id: this.props.zn_rights_owner_id,
        brand_shop_ids: _shops,
        attachments: this.refs.attachments.validate(),
        comment: this.refs.comment.validate()
      };

      if (this.refs.start_time.validate()) {
        _value.start_time = this.refs.start_time.validate();
      }

      if (this.refs.end_time.validate()) {
        _value.end_time = this.refs.end_time.validate();
      }

      return _value;
    }
  },
  __onCBGChange: function __onCBGChange(value) {
    this.setState({
      value: value
    });
  },
  render: function render() {
    var _this = this;

    var _count = this.state.value.split(',').length - 2;

    return React.createElement(zn.app.adinstall.GroupPanel, {
      left: React.createElement("span", null, "\u3010", this.props.shops.length, "\u3011", this.props.zn_rights_owner_id_convert, "/", this.props.zn_title),
      right: !!_count ? React.createElement("span", {
        className: "a-tag",
        style: {
          backgroundColor: 'green'
        }
      }, "\u5DF2\u9009\u62E9 ", _count, " \u5BB6\u95E8\u5E97") : React.createElement("span", {
        className: "a-tag"
      }, "\u672A\u9009\u62E9\u95E8\u5E97")
    }, !!this.props.shops.length ? React.createElement("div", {
      className: "content",
      style: {
        padding: 10
      }
    }, React.createElement(zn.react.Checkbox, {
      style: {
        backgroundColor: '#f3f1f1'
      },
      onChange: function onChange(event, value) {
        return _this.refs.brand_shop_ids.checkAll(value);
      },
      text: "\u9009\u62E9\u5168\u90E8\u95E8\u5E97"
    }), React.createElement(zn.app.adinstall.ShopSelector, {
      onChange: this.__onCBGChange,
      ref: "brand_shop_ids",
      data: this.props.shops
    }), React.createElement(zn.react.Group, {
      title: "\u533A\u57DF\u8BE6\u60C5",
      style: {
        margin: '20px 0px',
        backgroundColor: '#FFF'
      }
    }, React.createElement(zn.react.FormItem, {
      ref: "start_time",
      type: "Input",
      name: "plan_start_time",
      attrs: {
        type: 'date'
      },
      title: "\u5F00\u59CB\u65F6\u95F4"
    }), React.createElement(zn.react.FormItem, {
      ref: "end_time",
      type: "Input",
      name: "plan_end_time",
      attrs: {
        type: 'date'
      },
      title: "\u7ED3\u675F\u65F6\u95F4"
    }), React.createElement(zn.react.FormItem, {
      ref: "attachments",
      type: "FileUploader",
      name: "attachments",
      title: "\u9644\u4EF6"
    }), React.createElement(zn.react.FormItem, {
      ref: "comment",
      type: "Textarea",
      name: "comment",
      title: "\u8BF4\u660E"
    }))) : React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: 10
      }
    }, "\u6682\u65E0\u95E8\u5E97\u5217\u8868"));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      brand: null,
      regions: {},
      data: {},
      projectRegions: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadCreateMeta();
  },
  __loadCreateMeta: function __loadCreateMeta() {
    zn.preloader.open({
      content: '加载中...'
    });
    zn.http.post('/adinstall/brand/getCreateProjectMeta', {
      brandCode: this.props.brandCode
    }).then(function (data) {
      if (data.status == 200) {
        this.__parseData(data.result);
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error("网络请求失败");
      zn.preloader.close();
    });
  },
  __parseData: function __parseData(data) {
    var _brand = data[0][0],
        _regions = data[1],
        _shops = data[2];

    _regions.forEach(function (region, index) {
      region.shops = [];
      this.state.regions[region.id] = region;
    }.bind(this));

    _shops.forEach(function (shop, index) {
      if (this.state.regions[shop.region]) {
        this.state.regions[shop.region].shops.push(shop);
      }
    }.bind(this));

    this.state.brand = _brand;
    this.state.data.zn_id = zn.uuid();
    this.state.data.brand_id = _brand.id;
    this.state.data.zn_rights_owner_id = _brand.zn_rights_owner_id;
    this.state.data.code = _brand.type_code + '-' + zn.date.nowDateString() + '-' + zn.util.getRandomNumbers();
    this.forceUpdate();
  },
  __onCreate: function __onCreate() {
    this.state.projectRegions = [];

    for (var key in this.refs) {
      if (!isNaN(+key)) {
        var _value = this.refs[key].getValue();

        if (_value) {
          _value.project_code = this.state.data.code;
          this.state.projectRegions.push(_value);
        }
      } else {
        var _value = this.refs[key].validate();

        if (_value === false) {
          return false;
        }

        if (_value) {
          this.state.data[key] = this.refs[key].validate();
        }
      }
    }

    if (!this.state.projectRegions.length) {
      return zn.toast.warning('至少需要选择一个区域');
    }

    zn.confirm('确定创建该项目吗？', '提示', function () {
      zn.preloader.open({
        content: '创建中, 请稍后...'
      });
      zn.http.post('/adinstall/brand/createProject', {
        meta: this.state.data,
        regions: this.state.projectRegions
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('创建成功');
          zn.react.session.relativeJump('/adinstall.base.my.project.detail', {
            zn_id: this.state.data.zn_id
          });
        } else {
          zn.notification.error(data.result);
        }

        zn.preloader.close();
      }.bind(this), function (data) {
        zn.notification.error('请求网络失败: ' + data);
        zn.preloader.close();
      });
    }.bind(this));
  },
  render: function render() {
    if (!this.state.brand) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "adinstall-admin-create-brand-project"
    }, React.createElement("div", {
      className: "index-title"
    }, React.createElement("span", null, this.state.brand.zn_title), React.createElement("span", {
      "data-tooltip": "\u9879\u76EE\u5361\u53F7"
    }, " ", this.state.data.code)), React.createElement(zn.react.Group, {
      title: "\u9879\u76EE\u8BE6\u60C5",
      style: {
        margin: '10px 5px',
        backgroundColor: '#FFF'
      }
    }, React.createElement(zn.react.FormItem, {
      required: true,
      ref: "zn_title",
      type: "Input",
      name: "zn_title",
      title: "\u540D\u79F0"
    }), React.createElement(zn.react.FormItem, {
      required: true,
      ref: "plan_start_time",
      type: "Input",
      name: "plan_start_time",
      attrs: {
        type: 'date'
      },
      title: "\u9884\u8BA1\u5F00\u59CB\u65F6\u95F4"
    }), React.createElement(zn.react.FormItem, {
      required: true,
      ref: "plan_end_time",
      type: "Input",
      name: "plan_end_time",
      attrs: {
        type: 'date'
      },
      title: "\u9884\u8BA1\u7ED3\u675F\u65F6\u95F4"
    }), React.createElement(zn.react.FormItem, {
      ref: "attachments",
      type: "FileUploader",
      name: "attachments",
      title: "\u9644\u4EF6"
    }), React.createElement(zn.react.FormItem, {
      ref: "comment",
      type: "Textarea",
      name: "comment",
      title: "\u8BF4\u660E"
    })), React.createElement("div", {
      style: {
        padding: 5,
        lineHeight: '30px'
      }
    }, "\u9009\u62E9\u533A\u57DF\u53CA\u95E8\u5E97\uFF1A"), Object.keys(this.state.regions).map(function (key) {
      if (this.state.regions[key].shops.length) {
        return React.createElement(Region, _extends({
          ref: key
        }, this.state.regions[key], {
          brandId: this.state.brand.id
        }));
      }
    }.bind(this)), React.createElement(zn.react.Button, {
      text: "\u786E\u8BA4\u521B\u5EFA\u9879\u76EE",
      icon: "fa-pencil",
      status: "warning",
      style: {
        margin: 5
      },
      onClick: this.__onCreate
    }));
  }
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'BrandShopBaseInfo': __webpack_require__(29),
  'BrandShopTasks': __webpack_require__(30),
  'BrandShopAdvs': __webpack_require__(31)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      info: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseInfo(this.props.znid);
  },
  __loadBaseInfo: function __loadBaseInfo(zn_id) {
    zn.http.post('/zn.plugin.admin/model/selectOne', {
      model: 'AdinstallBrandShop',
      where: {
        zn_id: zn_id
      }
    }).then(function (data) {
      this.setState({
        info: data.result
      });
    }.bind(this));
  },
  render: function render() {
    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "zn-plugin-admin-base-info adinstall-admin-brand-info"
    }, React.createElement("div", {
      className: "right"
    }, React.createElement("div", {
      className: "base"
    }, React.createElement("img", {
      className: "logo",
      src: zn.http.fixURL(this.state.info.logo)
    }), React.createElement("span", {
      className: "title"
    }, this.state.info.zn_title)), React.createElement("div", {
      className: "item-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u57FA\u672C\u4FE1\u606F"), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u8054\u7CFB\u4EBA: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.contact)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u5EA7\u673A: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.phone)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u624B\u673A\u53F7: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.telephone)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u90AE\u7BB1: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.email)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u5730\u5740: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.address)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u4ECB\u7ECD: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.comment)), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u5185\u666F\u7167: "), React.createElement("div", {
      className: true
    }), React.createElement("div", {
      className: "item-value"
    }, React.createElement(zn.react.Files, {
      value: this.state.info.images
    }))), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u9644\u4EF6: "), React.createElement("div", {
      className: true
    }), React.createElement("div", {
      className: "item-value"
    }, React.createElement(zn.react.Files, {
      value: this.state.info.attachments
    }))), React.createElement("div", {
      className: "item"
    }, React.createElement("span", {
      className: "item-key"
    }, "\u521B\u5EFA\u65F6\u95F4: "), React.createElement("span", {
      className: "item-value"
    }, this.state.info.zn_create_time)))));
  }
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/shop/getTasks', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/shop/getAdvs', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-base-component-adv",
      style: {
        backgroundColor: '#FFF'
      }
    }, React.createElement("div", {
      className: "adv-title"
    }, React.createElement("div", {
      className: "title"
    }, item.logo && React.createElement("img", {
      style: {
        width: 32,
        height: 32
      },
      src: zn.http.fixURL(item.logo)
    }), item.zn_title)), React.createElement("div", {
      className: "adv-content"
    }, React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u7F16\u53F7"), React.createElement("span", {
      className: "_value"
    }, item.code)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5E7F\u544A\u4F4D\u7F6E"), React.createElement("span", {
      className: "_value"
    }, item.adv_position)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u95E8\u5E97\u4F4D\u7F6E"), React.createElement("span", {
      className: "_value"
    }, item.shop_position)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5B89\u88C5\u96BE\u5EA6"), React.createElement("span", {
      className: "_value"
    }, item.install_difficulty)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5B89\u88C5\u8BF4\u660E"), React.createElement("span", {
      className: "_value"
    }, item.install_guide)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6750\u8D28"), React.createElement("span", {
      className: "_value"
    }, item.cai_zhi)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u57FA\u5C42"), React.createElement("span", {
      className: "_value"
    }, item.ji_ceng)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u51FA\u8840\u5C3A\u5BF8(\u9AD8/\u5BBD)"), React.createElement("span", {
      className: "_value"
    }, (item.chu_xue_chi_cun_gao || 0).toFixed(2), " / ", (item.chu_xue_chi_cun_kuang || 0).toFixed(2))), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8FB9\u6846\u5C3A\u5BF8(\u9AD8/\u5BBD)"), React.createElement("span", {
      className: "_value"
    }, (item.bian_kuang_chi_cun_gao || 0).toFixed(2), " / ", (item.bian_kuang_chi_cun_kuang || 0).toFixed(2))), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u4ECB\u7ECD"), React.createElement("span", {
      className: "_value"
    }, item.comment)), React.createElement("div", {
      className: "adv-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5F53\u524D\u753B\u9762"), React.createElement(zn.react.Files, {
      className: "_value",
      value: item.images
    }))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'MyBrands': __webpack_require__(33),
  'MySuppliers': __webpack_require__(34),
  'OwnConfirmedTasks': __webpack_require__(35),
  'OwnProjects': __webpack_require__(36),
  'OwnProjectTasks': __webpack_require__(37),
  'OwnRegions': __webpack_require__(38),
  'OwnRegionTasks': __webpack_require__(39),
  'OwnRegionTaskInfo': __webpack_require__(40)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      currIndex: 0,
      brands: null,
      status: [],
      level: [],
      type: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseInfo();
  },
  __loadBaseInfo: function __loadBaseInfo() {
    zn.http.get('/adinstall/my/brands').then(function (data) {
      data = data.result;
      this.setState({
        brands: data[0],
        status: data[1],
        level: data[2],
        type: data[3]
      });
    }.bind(this));
  },
  __onCreateBrandProject: function __onCreateBrandProject(brand) {
    zn.react.session.relativeJump('/adinstall.base.my.brands.create.project', {
      pcode: brand.type_code
    });
  },
  __renderBrands: function __renderBrands() {
    var _type = {};
    this.state.type.forEach(function (type, index) {
      type.data = [];
      _type[type.id] = type;
    });
    this.state.brands.forEach(function (brand) {
      _type[brand.type].data.push(brand);
    });
    return React.createElement("div", {
      className: "catgorys"
    }, Object.keys(_type).map(function (key) {
      var _temp = _type[key];

      if (_temp.data.length) {
        return React.createElement(zn.app.adinstall.GroupPanel, {
          left: "【" + _temp.data.length + "】" + _temp.zn_title
        }, React.createElement("ul", {
          className: "adinstall-base-grid"
        }, _temp.data.map(function (_item) {
          var _this = this;

          return React.createElement("li", {
            className: "zr-item brand"
          }, React.createElement("div", {
            className: "adinstall-inner"
          }, React.createElement("div", {
            className: "inner-left"
          }, React.createElement("img", {
            className: "logo",
            src: zn.http.fixURL(_item.logo)
          })), React.createElement("div", {
            className: "inner-right"
          }, React.createElement("div", {
            className: "r-header"
          }, React.createElement("span", {
            onClick: function onClick() {
              return zn.react.session.relativeJump('/adinstall.base.common.brand.center', {
                znid: _item.zn_id
              });
            },
            className: "name"
          }, _item.zn_title), React.createElement("i", {
            onClick: function onClick() {
              return _this.__onCreateBrandProject(_item);
            },
            className: "fa fa-plus zr-fr adinstall-icon-btn"
          }, "\u521B\u5EFA\u9879\u76EE")), React.createElement("div", {
            className: "r-item"
          }, React.createElement("i", {
            className: "fa fa-tag"
          }), React.createElement("span", {
            className: "adinstall-tag"
          }, _item.status_convert), React.createElement("span", {
            className: "adinstall-tag"
          }, _item.level_convert), React.createElement("span", {
            className: "adinstall-tag"
          }, "\u7F16\u53F7\uFF1A", _item.type_code)), React.createElement("div", {
            className: "r-item"
          }, React.createElement("span", null, React.createElement("i", {
            className: "fa fa-user zr-padding-3"
          }), "\u8054\u7CFB\u4EBA\uFF1A"), React.createElement("span", {
            className: "_value"
          }, _item.contact)), React.createElement("div", {
            className: "r-item"
          }, React.createElement("span", null, React.createElement("i", {
            className: "fa fa-phone zr-padding-3"
          }), "\u7535\u8BDD\uFF1A"), React.createElement("span", {
            className: "_value"
          }, _item.phone)), React.createElement("div", {
            className: "r-item"
          }, React.createElement("span", null, React.createElement("i", {
            className: "fa fa-envelope zr-padding-3"
          }), "\u90AE\u7BB1\uFF1A"), React.createElement("span", {
            className: "_value"
          }, _item.email)))));
        }.bind(this))));
      }
    }.bind(this)));
  },
  render: function render() {
    return React.createElement("div", {
      className: "adinstall-base-component-my-brands"
    }, this.state.brands ? this.__renderBrands() : React.createElement(zn.react.DataLoader, {
      content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
      loader: "timer"
    }));
  }
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var Province = React.createClass({
  displayName: "Province",
  getInitialState: function getInitialState() {
    return {
      active: false
    };
  },
  render: function render() {
    var _this = this;

    var province = this.props.province;
    return React.createElement("li", {
      className: "province " + (this.state.active ? 'active' : '')
    }, React.createElement("div", {
      className: "header"
    }, province.text, "(", province.suppliers.length, "\u4E2A\u4F9B\u5E94\u5546)", React.createElement("i", {
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      },
      style: {
        cursor: 'pointer'
      },
      className: "fa zr-padding-5 " + (this.state.active ? 'fa-angle-down' : 'fa-angle-right')
    })), React.createElement("div", {
      className: "content"
    }, React.createElement("ul", {
      className: "suppliers adinstall-base-grid"
    }, province.suppliers.map(function (supplier, index) {
      return React.createElement("li", {
        key: index,
        className: "supplier zr-item"
      }, React.createElement("div", {
        className: "adinstall-inner"
      }, supplier.avatar && React.createElement("div", {
        className: "inner-left"
      }, React.createElement("img", {
        src: zn.http.fixURL(supplier.avatar || './')
      })), React.createElement("div", {
        className: "inner-right"
      }, React.createElement("div", {
        className: "r-header"
      }, React.createElement("a", {
        href: zn.react.session.relativeURL('/adinstall.base.common.supplier.center', {
          znid: supplier.zn_id
        }),
        className: "name"
      }, supplier.name), React.createElement("span", {
        className: "adinstall-tag"
      }, supplier.level), React.createElement("span", {
        className: "adinstall-tag"
      }, supplier.supplier_type ? '公司' : '个人'), React.createElement("span", {
        className: "adinstall-tag"
      }, supplier.sex), React.createElement("span", {
        className: "adinstall-tag"
      }, supplier.age, "\u5C81"), React.createElement("span", {
        className: "adinstall-tag"
      }, supplier.city_convert), React.createElement("i", {
        "data-tooltip": "\u7533\u8BF7\u4FEE\u6539\u4FE1\u606F",
        className: "fa fa-edit h-btn"
      })), React.createElement("div", {
        className: "r-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5FAE\u4FE1\u8BA4\u8BC1\uFF1A"), React.createElement("span", {
        className: "_value " + (supplier.openid ? 'ok' : '')
      }, supplier.openid ? '已认证' : '未认证')), React.createElement("div", {
        className: "r-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u7535\u8BDD/\u5EA7\u673A\uFF1A"), React.createElement("span", {
        className: "_value"
      }, supplier.phone + ' / ' + supplier.telephone)), React.createElement("div", {
        className: "r-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u90AE\u7BB1\uFF1A"), React.createElement("span", {
        className: "_value"
      }, supplier.email)), React.createElement("div", {
        className: "r-item"
      }, React.createElement("span", {
        className: "_key"
      }, "QQ\uFF1A"), React.createElement("span", {
        className: "_value"
      }, supplier.qq)), React.createElement("div", {
        className: "r-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5FAE\u4FE1\uFF1A"), React.createElement("span", {
        className: "_value"
      }, supplier.wechat)), React.createElement("div", {
        className: "r-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5730\u5740\uFF1A"), React.createElement("span", {
        className: "_value"
      }, supplier.address)))));
    }))));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      provinces: {},
      suppliers: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadBaseInfo();
  },
  __loadBaseInfo: function __loadBaseInfo() {
    zn.http.get('/adinstall/my/suppliers').then(function (data) {
      if (data.status == 200) {
        data = data.result;
        var _provinces = data.provinces,
            _suppliers = data.suppliers;

        _provinces.forEach(function (province, index) {
          province.suppliers = [];
          this.state.provinces[province.value] = province;
        }.bind(this));

        _suppliers.forEach(function (supplier, index) {
          if (this.state.provinces[supplier.province]) {
            this.state.provinces[supplier.province].suppliers.push(supplier);
          }
        }.bind(this));

        this.state.suppliers = _suppliers;
        this.forceUpdate();
      } else {
        this.state.suppliers = [];
        this.forceUpdate();
      }
    }.bind(this), function () {
      zn.notification.error('请求网络失败');
    });
  },
  __renderSuppliers: function __renderSuppliers() {
    return React.createElement("ul", {
      className: "provinces"
    }, Object.keys(this.state.provinces).map(function (key) {
      var province = this.state.provinces[key];

      if (!province.suppliers.length) {
        return null;
      }

      return React.createElement(Province, {
        province: province
      });
    }.bind(this)));
  },
  render: function render() {
    return React.createElement("div", {
      className: "adinstall-base-component-my-suppliers",
      title: "\u6211\u7684\u4F9B\u5E94\u5546"
    }, this.state.suppliers ? this.state.suppliers.length ? this.__renderSuppliers() : React.createElement("span", {
      className: "zr-tip"
    }, "\u60A8\u6682\u65E0\u4F9B\u5E94\u5546") : React.createElement(zn.react.DataLoader, {
      content: "\u6B63\u5728\u52A0\u8F7D\u4E2D...",
      loader: "timer"
    }));
  }
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/task/ownConfirmed', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).exec();
    }
  },
  __onResolveTask: function __onResolveTask(item) {
    var _this = this;

    zn.dialog({
      title: '确认工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/resolve",
        exts: {
          code: item.code
        },
        items: [{
          title: '备注',
          name: 'note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.state.data.refresh();
        },
        buttons: [{
          text: '确认通过',
          status: 'success',
          type: 'submit'
        }]
      })
    });
  },
  __onRejectTask: function __onRejectTask(item) {
    var _this2 = this;

    zn.dialog({
      title: '驳回工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/reject",
        exts: {
          code: item.code
        },
        items: [{
          title: '备注',
          name: 'note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.state.data.refresh();
        },
        buttons: [{
          text: '驳回',
          status: 'danger',
          type: 'submit'
        }]
      })
    });
  },
  __onConfirmTask: function __onConfirmTask(task) {
    zn.confirm('确定确认工单 ' + task.code + ' 吗, 确认完成将提交给财务审核？', '提示', function () {
      zn.http.post('/adinstall/task/ownConfirm', {
        taskCode: task.code
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('确认成功');
          this.state.data.refresh();
        } else {
          zn.notification.error(data.result);
        }
      }.bind(this), function () {
        zn.notification.error('网络请求失败');
      });
    }.bind(this));
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/my/getOwnProjects', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).refresh();
    }
  },
  __onRemoveItem: function __onRemoveItem(item) {
    var _self = this;

    zn.confirm('删除项目后将无法恢复项目数据, 确认删除么？', '提示', function () {
      zn.preloader.open({
        content: '删除中...'
      });
      zn.http.post('/adinstall/project/removeProject', {
        project_znid: item.zn_id
      }).then(function (data) {
        if (data.status == 200) {
          zn.toast.success('删除成功');

          _self.state.data.refresh();
        } else {
          zn.toast.error('删除失败, ' + data.result);
        }

        zn.preloader.close();
      }, function (err) {
        zn.toast.error('网络请求失败');
        zn.preloader.close();
      });
    });
  },
  __onItemRender: function __onItemRender(item) {
    var _this = this;

    return React.createElement("div", {
      className: "adinstall-inner"
    }, React.createElement("div", {
      className: "inner-right"
    }, React.createElement("div", {
      className: "r-header"
    }, React.createElement("span", {
      className: "name",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.project.detail', {
          zn_id: item.zn_id
        });
      }
    }, "\u5361\u53F7 ", item.code), React.createElement("span", {
      "data-tooltip": "\u5220\u9664\u9879\u76EE",
      onClick: function onClick() {
        return _this.__onRemoveItem(item);
      },
      className: "zr-fr adinstall-btn danger"
    }, React.createElement("i", {
      className: "fa fa-trash zr-padding-3"
    })), React.createElement("span", {
      "data-tooltip": "\u521B\u5EFA\u65F6\u95F4",
      className: "zr-fr adinstall-tag"
    }, "\u521B\u5EFA\u4E8E ", item.zn_create_time)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6240\u5C5E\u54C1\u724C\uFF1A"), React.createElement("span", {
      className: "adinstall-tag"
    }, item.brand_id_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u540D\u79F0\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_title)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u7ECF\u7406\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_user_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (item.plan_start_time || '').toString().split(' ')[0], " ~ ", (item.plan_end_time || '').toString().split(' ')[0]))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/my/getOwnProjectTasks', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).exec();
    }
  },
  __onResolveTask: function __onResolveTask(item) {
    var _this = this;

    zn.dialog({
      title: '确认工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/resolve",
        exts: {
          code: item.code
        },
        items: [{
          title: '备注',
          name: 'note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.state.data.refresh();
        },
        buttons: [{
          text: '确认通过',
          status: 'success',
          type: 'submit'
        }]
      })
    });
  },
  __onRejectTask: function __onRejectTask(item) {
    var _this2 = this;

    zn.dialog({
      title: '驳回工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/reject",
        exts: {
          code: item.code
        },
        items: [{
          title: '备注',
          name: 'note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.state.data.refresh();
        },
        buttons: [{
          text: '驳回',
          status: 'danger',
          type: 'submit'
        }]
      })
    });
  },
  __onOwnConfirmTask: function __onOwnConfirmTask(task) {
    zn.confirm('确定确认工单 ' + task.code + ' 吗, 确认完成将提交给财务审核？', '提示', function () {
      zn.http.post('/adinstall/task/ownConfirm', {
        taskCode: task.code
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('确认成功');
          this.state.data.refresh();
        } else {
          zn.notification.error(data.result);
        }
      }.bind(this), function () {
        zn.notification.error('网络请求失败');
      });
    }.bind(this));
  },
  __onOwnRejectTask: function __onOwnRejectTask(item) {
    var _this3 = this;

    zn.dialog({
      title: '驳回工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/ownReject",
        exts: {
          taskCode: item.code
        },
        items: [{
          title: '备注',
          name: 'comment',
          type: 'Textarea',
          required: true
        }, {
          title: '附件',
          name: 'attachments',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this3.state.data.refresh();
        },
        buttons: [{
          text: '确认驳回',
          status: 'danger',
          type: 'submit'
        }]
      })
    });
  },
  __onItemRender: function __onItemRender(item) {
    var _this4 = this;

    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }), item.status == 0 && React.createElement("div", {
      className: "adinstall-link"
    }, React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onRejectTask(item);
      },
      className: "link danger"
    }, "\u9A73\u56DE"), React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onResolveTask(item);
      },
      className: "link ok"
    }, "\u786E\u8BA4\u901A\u8FC7")), item.status == 5 && React.createElement("div", {
      className: "adinstall-link"
    }, React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onOwnRejectTask(item);
      },
      className: "link danger"
    }, "\u9A73\u56DE"), React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onOwnConfirmTask(item);
      },
      className: "link ok"
    }, "\u786E\u8BA4\u5B8C\u6210")));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/my/getOwnProjectRegions', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).exec();
    }
  },
  __onCreateProjectTask: function __onCreateProjectTask(item) {
    zn.react.session.relativeJump('/adinstall.base.my.brands.create.project.task', {
      znid: item.zn_id
    });
  },
  __renderStatus: function __renderStatus(item) {
    var _this = this;

    switch (item.status) {
      case 0:
        return React.createElement("span", {
          onClick: function onClick() {
            return _this.__onCreateProjectTask(item);
          }
        }, React.createElement("i", {
          className: "fa fa-plus zr-padding-3"
        }), "\u521B\u5EFA\u5DE5\u5355");

      case 1:
        return React.createElement("span", {
          style: {
            color: '#03a9f4',
            borderColor: '#03a9f4'
          }
        }, "\u7ED3\u7B97\u4E2D");

      case 2:
        return React.createElement("span", {
          style: {
            color: '#green',
            borderColor: '#green'
          }
        }, "\u5DF2\u5B8C\u6210");
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-inner"
    }, React.createElement("div", {
      className: "inner-left",
      style: {
        width: 80
      }
    }, React.createElement(zn.react.ProgressRing, {
      style: {
        margin: '0 auto'
      },
      full: false,
      value: item.task_count ? item.task_finished_count / item.task_count * 100 : 0
    }), React.createElement("div", {
      className: "status"
    }, this.__renderStatus(item))), React.createElement("div", {
      className: "inner-right"
    }, React.createElement("div", {
      className: "r-header"
    }, React.createElement("span", {
      className: "name",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.project.region.detail', {
          zn_id: item.zn_id
        });
      },
      "data-tooltip": "\u67E5\u770B\u9879\u76EE\u4FE1\u606F"
    }, item.project_code), React.createElement("span", {
      className: "adinstall-tag"
    }, item.brand_id_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6240\u5C5E\u9879\u76EE\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.project_id_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u7ECF\u7406\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_user_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5F53\u524D\u8FDB\u5EA6\uFF1A"), React.createElement("span", {
      className: "adinstall-tag",
      "data-tooltip": "已确认(" + item.task_finished_count + ") / 工单总量(" + item.task_count + ")"
    }, item.task_finished_count, " / ", item.task_count)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6307\u6D3E\u65F6\u95F4\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_time)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (item.start_time || '').toString().split(' ')[0], " ~ ", (item.end_time || '').toString().split(' ')[0]))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/my/getCreatedProjectTasks', {
        status: this.props.status
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.status != this.props.status) {
      this.state.data.extend({
        status: nextProps.status
      }).exec();
    }
  },
  __onProjectInfo: function __onProjectInfo(project) {
    zn.react.session.relativeJump('/my.regionproject.info', {
      znid: project.zn_id
    });
  },
  __auditRegionProject: function __auditRegionProject(project, status) {
    zn.preloader.open({
      content: '提交中, 请稍后...'
    });
    zn.http.post('/adinstall/regionproject/audit', {
      znid: project.zn_id,
      status: status
    }).then(function (data) {
      if (data.status == 200) {
        zn.notification.success('提交成功');
        this.state.data.refresh();
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function (data) {
      zn.notification.error('请求网络失败: ' + data);
      zn.preloader.close();
    });
  },
  __onReEdit: function __onReEdit(item) {
    var _this = this;

    var _where = {
      city: item.city
    };

    if (item.province == 58) {
      _where = {};
    }

    _where.work_type = item.work_type;

    var _suppliers = zn.store.post('/adinstall/var/getRegionSupplier', _where);

    zn.dialog({
      title: '重新提交工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/reSubmit",
        merge: "data",
        exts: {
          code: item.code
        },
        items: [{
          title: '施工位置',
          name: 'brand_shop_frame_ids',
          type: 'CheckboxGroup',
          data: zn.store.post('/adinstall/var/getShopFrames', {
            shopId: item.brand_shop_id
          })
        }, {
          title: '施工类型',
          name: 'work_type',
          type: 'Select',
          data: zn.store.post('/zn.plugin.admin/var/getByPid', {
            pid: 25
          }),
          onChange: function (value) {
            if (value) {
              _suppliers.extend({
                work_type: value.value
              }).refresh();
            }
          }.bind(this)
        }, {
          title: '供应商',
          name: 'supplier_openid',
          type: 'Select',
          data: _suppliers
        }, {
          title: '费用',
          name: 'cost',
          type: 'Input',
          attrs: {
            type: 'number'
          }
        }, {
          title: '预计进场时间',
          name: 'plan_start_time',
          type: 'Input',
          attrs: {
            type: 'date'
          }
        }, {
          title: '预计完成时间',
          name: 'plan_end_time',
          type: 'Input',
          attrs: {
            type: 'date'
          }
        }, {
          title: '效果图',
          name: 'requirement_images',
          type: 'FileUploader'
        }, {
          title: '附件',
          name: 'attachments',
          type: 'FileUploader'
        }, {
          title: '说明',
          name: 'comment',
          type: 'Textarea'
        }],
        value: item,
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.state.data.refresh();
        },
        buttons: [{
          text: '重新提交',
          status: 'warning',
          type: 'submit'
        }]
      })
    });
  },
  __onAssignTask: function __onAssignTask(item) {
    var _this2 = this;

    var _where = {
      city: item.city
    };

    if (item.province == 58) {
      _where = {};
    }

    _where.work_type = item.work_type;
    zn.dialog({
      title: '重新指派工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/assign",
        exts: {
          code: item.code
        },
        items: [{
          title: '供应商',
          data: zn.store.post('/adinstall/var/getRegionSupplier', _where),
          name: 'supplier_openid',
          type: 'Radio',
          required: true
        }, {
          title: '备注',
          name: 'zn_note',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this2.state.data.refresh();
        },
        buttons: [{
          text: '指派',
          status: 'warning',
          type: 'submit'
        }]
      })
    });
  },
  __onDeleteTask: function __onDeleteTask(task) {
    zn.confirm('确定删除工单 ' + task.code + ' 吗？', '提示', function () {
      zn.http.post('/adinstall/project/deleteTask', {
        taskCode: task.code
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('删除成功');
          this.state.data.refresh();
        } else {
          zn.notification.error(data.result);
        }
      }.bind(this), function () {
        zn.notification.error('网络请求失败');
      });
    }.bind(this));
  },
  __onConfirmTask: function __onConfirmTask(task) {
    zn.confirm('确定确认工单 ' + task.code + ' 吗, 确认完成将提交给项目经理审核？', '提示', function () {
      zn.http.post('/adinstall/task/supervisionConfirm', {
        taskCode: task.code
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('确认成功');
          this.state.data.refresh();
        } else {
          zn.notification.error(data.result);
        }
      }.bind(this), function () {
        zn.notification.error('网络请求失败');
      });
    }.bind(this));
  },
  __onSupervisionRejectTask: function __onSupervisionRejectTask(item) {
    var _this3 = this;

    zn.dialog({
      title: '驳回工单',
      content: React.createElement(zn.react.Form, {
        style: {
          padding: 20
        },
        action: "/adinstall/task/supervisionReject",
        exts: {
          taskCode: item.code
        },
        items: [{
          title: '备注',
          name: 'comment',
          type: 'Textarea',
          required: true
        }, {
          title: '附件',
          name: 'attachments',
          type: 'Textarea'
        }],
        onSubmitSuccess: function onSubmitSuccess() {
          return _this3.state.data.refresh();
        },
        buttons: [{
          text: '确认驳回',
          status: 'danger',
          type: 'submit'
        }]
      })
    });
  },
  __onItemRender: function __onItemRender(item) {
    var _this4 = this;

    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }), React.createElement("div", {
      className: "adinstall-link"
    }, item.status < 1 && React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onDeleteTask(item);
      },
      className: "link danger"
    }, React.createElement("i", {
      className: "fa fa-sign-in zr-padding-3 danger"
    }), "\u5220\u9664"), item.status == -1 && React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onReEdit(item);
      },
      className: "link danger"
    }, React.createElement("i", {
      "data-tooltip": item.zn_note,
      className: "fa fa-info-circle zr-padding-3"
    }), "\u91CD\u65B0\u63D0\u4EA4"), item.status == -2 && React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onAssignTask(item);
      },
      className: "link"
    }, React.createElement("i", {
      className: "fa fa-sign-in zr-padding-3"
    }), "\u91CD\u65B0\u6307\u6D3E"), item.status == 4 && React.createElement("div", null, React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onConfirmTask(item);
      },
      className: "link"
    }, React.createElement("i", {
      className: "fa fa-sign-in zr-padding-3 danger"
    }), "\u9A73\u56DE\u5DE5\u5355"), React.createElement("span", {
      onClick: function onClick() {
        return _this4.__onSupervisionRejectTask(item);
      },
      className: "link"
    }, React.createElement("i", {
      className: "fa fa-sign-in zr-padding-3 ok"
    }), "\u786E\u8BA4\u5B8C\u6210"))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ReactDOM = __webpack_require__(1);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadInfo();
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.orderCode != this.props.orderCode) {
      this.__loadInfo(nextProps.orderCode);
    }
  },
  __loadInfo: function __loadInfo(orderCode) {
    zn.preloader.open({
      content: '加载中...'
    });
    zn.http.post('/adinstall/supplier_order/orderInfo', {
      orderCode: orderCode || this.props.orderCode
    }).then(function (data) {
      if (data.status == 200) {
        this.setState({
          data: data.result
        });
      } else {
        zn.toast.error('操作失败, ' + data.result);
      }

      zn.preloader.close();
    }.bind(this), function (err) {
      zn.toast.error('网络请求失败');
      zn.preloader.close();
    });
  },
  __onConfirm: function __onConfirm() {
    var _self = this,
        _signature_note = this.refs.signature_note.validate();

    if (!this.refs.SignatureArea.signaturePad.toData().length) {
      return zn.notification.error('还未签名');
    }

    var _value = this.refs.SignatureArea.getValue();

    zn.confirm('签收后工人将退场, 确认签收？', '提示', function () {
      zn.preloader.open({
        content: '提交中...'
      });
      zn.http.post('/adinstall/supplier_order/doSign', {
        orderCode: _self.state.data.code,
        openid: zn.plugin.wechat.getToken().openid,
        signature: _value,
        signature_note: _signature_note
      }).then(function (data) {
        if (data.status == 200) {
          zn.toast.success('签收成功');

          _self.__loadInfo();
        } else {
          zn.toast.error('操作失败, ' + data.result);
        }

        zn.preloader.close();
      }, function (err) {
        zn.toast.error('网络请求失败');
        zn.preloader.close();
      });
    });
  },
  __doSuccess: function __doSuccess() {//console.log('提交成功');
  },
  __onComplaint: function __onComplaint() {
    zn.dialog({
      title: '投诉',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: "AdinstallProjectItemFeedback"
        },
        hiddens: {
          brand_shop_id: this.state.data.brand_shop_id,
          project_id: this.state.data.project_id,
          project_item_id: this.state.data.id,
          supplier_openid: this.state.data.supplier_openid,
          brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
        },
        merge: "values",
        itemClassName: "column",
        onSubmitSuccess: this.__doSuccess,
        items: [{
          title: '投诉内容',
          name: 'comment',
          type: 'Textarea',
          required: true
        }, {
          title: '截图附件',
          name: 'attachments',
          type: 'FileUploader',
          required: true
        }]
      })
    });
  },
  __onRepair: function __onRepair() {
    zn.dialog({
      title: '报修',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: "AdinstallProjectItemService"
        },
        hiddens: {
          brand_shop_id: this.state.data.brand_shop_id,
          project_id: this.state.data.project_id,
          project_item_id: this.state.data.id,
          supplier_openid: this.state.data.supplier_openid,
          brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
        },
        merge: "values",
        itemClassName: "column",
        onSubmitSuccess: this.__doSuccess,
        items: [{
          title: '报修内容',
          name: 'comment',
          type: 'Textarea',
          required: true
        }, {
          title: '截图附件',
          name: 'attachments',
          type: 'FileUploader',
          required: true
        }]
      })
    });
  },
  __onComment: function __onComment() {
    zn.dialog({
      title: '评价',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/insert",
        exts: {
          model: "AdinstallSupplierComment"
        },
        hiddens: {
          brand_shop_id: this.state.data.brand_shop_id,
          project_id: this.state.data.project_id,
          project_item_id: this.state.data.id,
          supplier_openid: this.state.data.supplier_openid,
          brand_shop_staff_openid: zn.plugin.wechat.getToken().openid
        },
        merge: "values",
        itemClassName: "column",
        onSubmitSuccess: this.__doSuccess,
        items: [{
          title: '备注',
          name: 'comment',
          type: 'Textarea',
          required: true
        }, {
          title: '截图附件',
          name: 'attachments',
          type: 'FileUploader',
          required: true
        }]
      })
    });
  },
  __renderBody: function __renderBody() {
    if (this.state.data) {
      return React.createElement("div", {
        className: "info"
      }, this.state.data.status > 2 && React.createElement("div", {
        className: "sign-code"
      }, !!this.state.data.signature && React.createElement("div", {
        className: "signature"
      }, React.createElement("img", {
        src: this.state.data.signature
      }), React.createElement("div", {
        className: "title"
      }, React.createElement("span", {
        className: "b"
      }, this.state.data.signature_openid_convert.split('&&__zn__&&')[0]), "\u4E8E", React.createElement("span", {
        className: "b"
      }, this.state.data.signature_time), "\u7B7E\u6536"), this.state.data.signature_note && React.createElement("div", {
        className: "note"
      }, React.createElement("strong", null, "\u7B7E\u6536\u5907\u6CE8\uFF1A"), this.state.data.signature_note)), React.createElement("div", {
        className: "msg-tip"
      }, "\u6CE8\uFF1A\u7535\u5B50\u7B7E\u540D\u7B49\u540C\u7EB8\u8D28\u7B7E\u540D\u5177\u6709\u540C\u7B49\u6CD5\u5F8B\u6548\u529B.")), React.createElement(zn.app.adinstall.OrderBaseInfo, {
        data: this.state.data
      }), React.createElement("div", {
        className: "adinstall-group"
      }, React.createElement("div", {
        className: "group-title"
      }, "\u65BD\u5DE5\u56FE\u7247"), React.createElement("div", {
        className: "group"
      }, React.createElement(zn.react.Form, {
        itemClassName: "column",
        items: [{
          title: '全景图',
          name: 'full_images',
          type: 'FileUploader'
        }, {
          title: '物料图',
          name: 'materiel_images',
          type: 'FileUploader'
        }, {
          title: '工单备注',
          name: 'supplier_work_note',
          type: 'Textarea'
        }],
        value: this.state.data,
        readonly: true,
        buttons: []
      }))));
    } else {
      return React.createElement(zn.react.DataLoader, {
        loader: "timer",
        content: "\u52A0\u8F7D\u4E2D..."
      });
    }
  },
  render: function render() {
    return React.createElement("div", {
      className: "adinstall-order-info"
    }, this.__renderBody());
  }
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'CreateProjectTask': __webpack_require__(42),
  'ProjectBaseInfo': __webpack_require__(43),
  'ProjectRegions': __webpack_require__(44),
  'ProjectShops': __webpack_require__(46),
  'ProjectTasks': __webpack_require__(47),
  'RegionProjectInfo': __webpack_require__(48)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = __webpack_require__(0);

var Shop = React.createClass({
  displayName: "Shop",
  getInitialState: function getInitialState() {
    var _where = {
      city: this.props.city
    };

    if (this.props.province == 58) {
      _where = {};
    }

    this.suppliers = zn.store.post('/adinstall/var/getRegionSupplier', _where);
    return {
      formItems: [{
        title: '施工位置',
        name: 'brand_shop_frame_ids',
        type: 'CheckboxGroup',
        data: zn.store.post('/adinstall/var/getShopFrames', {
          shopId: this.props.value
        })
      }, {
        title: '施工类型',
        name: 'work_type',
        type: 'Select',
        data: zn.store.post('/zn.plugin.admin/var/getByPid', {
          pid: 25
        }),
        onChange: function (value) {
          this.suppliers.extend({
            work_type: value.value
          }).refresh();
        }.bind(this)
      }, {
        title: '供应商',
        name: 'supplier_openid',
        type: 'Select',
        data: this.suppliers
      }, {
        title: '费用',
        name: 'cost',
        type: 'Input',
        attrs: {
          type: 'number'
        }
      }, {
        title: '预计进场时间',
        name: 'plan_start_time',
        type: 'Input',
        attrs: {
          type: 'date'
        }
      }, {
        title: '预计完成时间',
        name: 'plan_end_time',
        type: 'Input',
        attrs: {
          type: 'date'
        }
      }, {
        title: '效果图',
        name: 'requirement_images',
        type: 'FileUploader'
      }, {
        title: '附件',
        name: 'attachments',
        type: 'FileUploader'
      }, {
        title: '说明',
        name: 'comment',
        type: 'Textarea'
      }],
      value: null
    };
  },
  __onFormSubmitBefore: function __onFormSubmitBefore(data) {
    //console.log(data);
    return false;
  },
  getValue: function getValue() {
    var _value = this.refs.form.validate() || {};

    _value.brand_shop_id = this.props.value;
    _value.zn_rights_owner_id = this.props.zn_rights_owner_id;

    if (!_value.work_type) {
      return null;
    }

    return _value;

    if (_value.supplier_openid && _value.work_type) {
      return _value;
    }

    return null;
  },
  render: function render() {
    //{ text: '保存表单', icon: 'fa-save', type: 'submit', status: 'primary' }
    return React.createElement("div", {
      className: "shop"
    }, React.createElement(zn.react.Group, {
      title: this.props.text,
      style: {
        margin: 10,
        backgroundColor: '#FFF'
      }
    }, React.createElement(zn.react.Form, {
      ref: "form",
      items: this.state.formItems,
      buttons: [],
      onSubmitBefore: this.__onFormSubmitBefore
    })));
  }
});
var Province = React.createClass({
  displayName: "Province",
  getInitialState: function getInitialState() {
    return {
      active: this.props.active || false
    };
  },
  getValue: function getValue() {
    var _data = [],
        _value = null;

    for (var key in this.refs) {
      _value = this.refs[key].getValue();

      if (_value) {
        _data.push(_value);
      }
    }

    return _data;
  },
  render: function render() {
    var _this = this;

    return React.createElement("div", {
      className: "adinstall-admin-create-brand-project-region " + (this.state.active ? 'active' : '')
    }, React.createElement("div", {
      className: "header"
    }, React.createElement("div", null, this.props.zn_title, "(", this.props.shops.length, "\u4E2A\u95E8\u5E97)"), React.createElement("div", null, React.createElement("i", {
      onClick: function onClick() {
        return _this.setState({
          active: !_this.state.active
        });
      },
      style: {
        cursor: 'pointer'
      },
      className: "fa zr-padding-5 " + (this.state.active ? 'fa-angle-down' : 'fa-angle-right')
    }))), React.createElement("div", {
      className: "content"
    }, React.createElement("div", {
      className: "shops"
    }, this.props.shops.map(function (shop, index) {
      shop.zn_rights_owner_id = this.props.zn_rights_owner_id;
      return React.createElement(Shop, _extends({
        ref: index
      }, shop));
    }.bind(this)))));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      project: null,
      region_project: null,
      provinces: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadCreateMeta();
  },
  __loadCreateMeta: function __loadCreateMeta() {
    zn.http.post('/adinstall/project/getCreateProjectTaskMeta', {
      znid: this.props.znid
    }).then(function (data) {
      if (data.status == 200) {
        this.__parseData(data.result);
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this), function () {
      zn.notification.error("网络请求失败");
    });
  },
  __parseData: function __parseData(data) {
    var _project = data.project,
        _provinces = data.provinces,
        _shops = data.shops;

    _provinces.forEach(function (province, index) {
      province.shops = [];
      this.state.provinces[province.id] = province;
    }.bind(this));

    _shops.forEach(function (shop, index) {
      if (this.state.provinces[shop.province]) {
        this.state.provinces[shop.province].shops.push(shop);
      }
    }.bind(this));

    this.state.project = _project;
    this.state.region_project = data.region_project;
    this.forceUpdate();
  },
  __onCreate: function __onCreate() {
    var _tasks = [];

    for (var key in this.refs) {
      var _value = this.refs[key].getValue();

      if (_value.length) {
        _tasks = _tasks.concat(_value);
      }
    }

    if (!_tasks.length) {
      return zn.toast.warning('至少需要选择一个门店');
    }

    zn.confirm('确定创建已选择' + _tasks.length + '个门店工单吗？', '提示', function () {
      zn.http.post('/adinstall/project/createProjectTasks', {
        meta: {
          project_id: this.state.project.id,
          brand_id: this.state.project.brand_id,
          project_region_id: this.state.region_project.id,
          region: this.state.region_project.region
        },
        tasks: _tasks
      }).then(function (data) {
        if (data.status == 200) {
          zn.toast.success('创建成功');
          zn.react.session.relativeJump('/adinstall.base.my.project.region.detail', {
            zn_id: this.state.region_project.zn_id
          });
        } else {
          zn.toast.error(data.result);
        }
      }.bind(this), function (data) {
        zn.toast.error('请求网络失败: ' + data);
      });
    }.bind(this));
  },
  render: function render() {
    if (!this.state.project) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "adinstall-admin-create-brand-project"
    }, React.createElement("div", {
      className: "index-title"
    }, React.createElement("span", null, "\u3010", this.state.project.brand_id_convert, "\u3011", this.state.project.zn_title), React.createElement("span", {
      style: {
        "float": 'right'
      },
      className: "a-tag"
    }, "\u7531 ", this.state.project.zn_create_user_convert, " \u4E8E ", this.state.project.zn_create_time, " \u6307\u6D3E")), React.createElement(zn.react.Group, {
      className: "item-group",
      title: this.state.project.code,
      style: {
        margin: 5,
        marginTop: 15,
        padding: 10,
        backgroundColor: '#ededed'
      }
    }, React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, this.state.project.plan_start_time, " ~ ", this.state.project.plan_end_time)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8BF4\u660E\uFF1A"), React.createElement("span", {
      className: "_value"
    }, this.state.project.comment)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6\uFF1A"), React.createElement(zn.react.Files, {
      className: "_value",
      value: this.state.project.attachments
    }))), React.createElement(zn.react.Group, {
      className: "item-group",
      title: this.state.region_project.region_convert,
      style: {
        margin: 5,
        marginTop: 15,
        padding: 10,
        backgroundColor: '#ededed'
      }
    }, React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, this.state.region_project.start_time, " ~ ", this.state.region_project.end_time)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8BF4\u660E\uFF1A"), React.createElement("span", {
      className: "_value"
    }, this.state.region_project.comment)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6\uFF1A"), React.createElement(zn.react.Files, {
      className: "_value",
      value: this.state.region_project.attachments
    })), React.createElement("div", {
      className: "zr-tip-warning"
    }, React.createElement("i", {
      className: "fa fa-info-circle"
    }), "\u5C55\u5F00\u53EF\u4EE5\u6279\u91CF\u521B\u5EFA\u9879\u76EE\u5DE5\u5355, \u4E5F\u53EF\u4EE5\u521B\u5EFA\u5355\u4E2A\u5DE5\u5355."), Object.keys(this.state.provinces).map(function (key) {
      if (this.state.provinces[key].shops.length) {
        return React.createElement(Province, _extends({
          ref: key,
          active: false
        }, this.state.provinces[key], {
          zn_rights_owner_id: this.state.project.zn_rights_owner_id
        }));
      } else {
        return null;
      }
    }.bind(this)), React.createElement(zn.react.Button, {
      status: "warning",
      text: "\u521B\u5EFA\u9879\u76EE\u5DE5\u5355",
      style: {
        margin: 5
      },
      onClick: this.__onCreate
    })));
  }
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      info: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadInfo();
  },
  __loadInfo: function __loadInfo() {
    zn.preloader.open({
      content: '加载中...'
    });
    zn.http.post('/adinstall/detail/getProjectDetail', {
      znid: this.props.zn_id
    }).then(function (data) {
      if (data.status == 200) {
        this.setState({
          info: data.result
        });
      } else {
        zn.toast.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.preloader.close();
      zn.toast.error('网络请求失败');
    });
  },
  __editInfo: function __editInfo(info) {
    var _this = this;

    zn.dialog({
      title: '编辑基本信息',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        merge: "updates",
        exts: {
          model: 'AdinstallProject',
          where: {
            id: info.id
          }
        },
        items: [{
          title: '项目名称',
          type: 'Input',
          name: 'zn_title',
          required: true
        }, {
          title: '预计开始时间',
          type: 'Input',
          name: 'plan_start_time',
          attrs: {
            type: 'date'
          },
          required: true
        }, {
          title: '预计结束时间',
          type: 'Input',
          name: 'plan_end_time',
          attrs: {
            type: 'date'
          },
          required: true
        }, {
          title: '附件',
          type: 'FileUploader',
          name: 'attachments'
        }, {
          title: '备注',
          type: 'Textarea',
          name: 'comment'
        }],
        value: info,
        onSubmitSuccess: function onSubmitSuccess() {
          return _this.__loadInfo();
        },
        buttons: [{
          text: '确认修改',
          type: 'submit',
          status: 'danger',
          icon: 'fa-edit'
        }]
      })
    });
  },
  render: function render() {
    var _this2 = this;

    if (!this.state.info) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u52A0\u8F7D\u4E2D...",
        loader: "timer"
      });
    }

    var _info = this.state.info;
    return React.createElement("div", {
      className: "adinstall-base-component-project-base-info"
    }, React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u6C47\u603B"), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5DE5\u5355\u603B\u91CF"), React.createElement("div", {
      className: "_value"
    }, _info.item_total_count || 0, "\u4E2A")), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5DE5\u5355\u603B\u8D39\u7528"), React.createElement("div", {
      className: "_value"
    }, (_info.item_total_cost || 0).toFixed(2), "\uFFE5(\u4EBA\u6C11\u5E01)")), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5E7F\u544A\u4F4D\u91CF"), React.createElement("div", {
      className: "_value"
    }, _info.shop_frame_total_count || 0, "\u6B21")), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u6D89\u53CA\u533A\u57DF"), React.createElement("div", {
      className: "_value"
    }, _info.region_total_count || 0, "\u4E2A")), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5BA2\u6237\u6295\u8BC9"), React.createElement("div", {
      className: "_value"
    }, _info.complaint_total_count || 0, "\u4EF6")), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5BA2\u6237\u8BC4\u4EF7"), React.createElement("div", {
      className: "_value"
    }, _info.comment_total_count || 0, "\u6B21")))), React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title"
    }, "\u8BE6\u60C5", React.createElement("i", {
      onClick: function onClick() {
        return _this2.__editInfo(_info);
      },
      className: "fa zr-fr adinstall-btn danger fa-edit zr-padding-3"
    }, "\u7F16\u8F91")), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5361\u53F7"), React.createElement("div", {
      className: "_value"
    }, _info.code)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u540D\u79F0"), React.createElement("div", {
      className: "_value"
    }, _info.zn_title)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u521B\u5EFA\u65F6\u95F4"), React.createElement("div", {
      className: "_value"
    }, _info.zn_create_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (_info.plan_start_time || '').toString().split(' ')[0], " ~ ", (_info.plan_end_time || '').toString().split(' ')[0])), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u9644\u4EF6"), React.createElement(zn.react.Files, {
      className: "_value",
      value: _info.attachments
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("div", {
      className: "_key"
    }, "\u5907\u6CE8"), React.createElement("div", {
      className: "_value"
    }, _info.comment)))));
  }
});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ProjectRegion = __webpack_require__(45);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/projectdetail/getRegions', {
        zn_id: this.props.zn_id
      })
    };
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement(ProjectRegion, {
      data: item
    });
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var RegionInfo = React.createClass({
  displayName: "RegionInfo",
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return React.createElement("div", null);
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      active: false,
      data: this.props.data
    };
  },
  __editInfo: function __editInfo(info) {
    var _this = this;

    var _value = null;
    zn.dialog({
      title: '编辑区域信息',
      content: React.createElement(zn.react.Form, {
        action: "/zn.plugin.admin/model/update",
        merge: "updates",
        exts: {
          model: 'AdinstallProjectRegion',
          where: {
            id: info.id
          }
        },
        items: [{
          title: '预计开始时间',
          type: 'Input',
          name: 'start_time',
          attrs: {
            type: 'date'
          }
        }, {
          title: '预计结束时间',
          type: 'Input',
          name: 'end_time',
          attrs: {
            type: 'date'
          }
        }, {
          title: '附件',
          type: 'FileUploader',
          name: 'attachments'
        }, {
          title: '备注',
          type: 'Textarea',
          name: 'comment'
        }],
        value: info,
        onSubmitBefore: function onSubmitBefore(value) {
          return _value = value;
        },
        onSubmitSuccess: function onSubmitSuccess() {
          _this.setState({
            data: zn.extend(_this.state.data, _value)
          });

          zn.notification.success('更新成功');
        },
        buttons: [{
          text: '确认修改',
          type: 'submit',
          status: 'danger',
          icon: 'fa-edit'
        }]
      })
    });
  },
  render: function render() {
    var _this2 = this;

    var item = this.state.data;
    return React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title",
      style: {
        backgroundColor: item.task_count != 0 && item.task_finished_count == item.task_count ? '#87f587' : '#f3f2f2',
        alignItems: 'center'
      }
    }, React.createElement("div", {
      className: "group-title-left"
    }, React.createElement("a", {
      className: "name",
      href: zn.react.session.relativeURL('/adinstall.base.my.project.region.detail', {
        zn_id: item.zn_id
      })
    }, item.region_convert), React.createElement("span", {
      className: "adinstall-tag"
    }, item.zn_rights_owner_id_convert)), React.createElement("div", {
      className: "group-title-right"
    }, React.createElement("progress", {
      "data-tooltip": "已确认(" + item.task_finished_count + ") / 工单总量(" + item.task_count + ")",
      style: {
        margin: 8
      },
      value: item.task_finished_count,
      max: item.task_count
    }), React.createElement("i", {
      onClick: function onClick() {
        return _this2.__editInfo(item);
      },
      style: {
        margin: 5
      },
      className: "zr-fr adinstall-btn danger fa fa-edit"
    }), React.createElement("span", {
      className: "zr-fr adinstall-tag"
    }, (item.task_finished_count / item.task_count * 100).toFixed(2), "% - ", item.task_finished_count, " / ", item.task_count))), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (item.start_time || '').toString().split(' ')[0], " ~ ", (item.end_time || '').toString().split(' ')[0])), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6\uFF1A"), React.createElement(zn.react.Files, {
      className: "_value",
      value: item.attachments
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8BF4\u660E"), React.createElement("span", {
      className: "_value"
    }, item.comment))));
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/my/getOwnProjects')
    };
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-inner"
    }, React.createElement("div", {
      className: "inner-right"
    }, React.createElement("div", {
      className: "r-header"
    }, React.createElement("span", {
      className: "name",
      onClick: function onClick() {
        return zn.react.session.relativeJump('/my.ownproject.info', {
          znid: item.zn_id
        });
      }
    }, "\u5361\u53F7 ", item.code), React.createElement("span", {
      className: "adinstall-tag"
    }, item.brand_id_convert), React.createElement("i", {
      "data-tooltip": "\u7533\u8BF7\u4FEE\u6539\u4FE1\u606F",
      className: "fa fa-edit h-btn"
    })), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u540D\u79F0\uFF1A"), React.createElement("span", {
      className: "h-tag"
    }, item.zn_title)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9879\u76EE\u7ECF\u7406\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_user_convert)), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, (item.plan_start_time || '').toString().split(' ')[0], " ~ ", (item.plan_end_time || '').toString().split(' ')[0])), React.createElement("div", {
      className: "r-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u521B\u5EFA\u65F6\u95F4\uFF1A"), React.createElement("span", {
      className: "_value"
    }, item.zn_create_time))));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/projectdetail/getTasks', {
        zn_id: this.props.zn_id
      })
    };
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", null, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }));
  },
  render: function render() {
    return React.createElement("div", null, React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    }));
  }
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var ShopTask = React.createClass({
  displayName: "ShopTask",
  getInitialState: function getInitialState() {
    return {
      value: null,
      tasks: []
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadTasks();
  },
  __onChange: function __onChange(shop) {
    this.state.value = shop.value;

    this.__loadTasks();
  },
  __loadTasks: function __loadTasks() {
    zn.preloader.open({
      content: '工单加载中...'
    });
    zn.http.post('/adinstall/project/getTasks', {
      shop_id: this.state.value,
      region_project_id: this.props.region_project.id
    }).then(function (data) {
      if (data.status == 200) {
        this.state.tasks = data.result;
        this.forceUpdate();
      } else {
        zn.notification.error(data.result);
      }

      zn.preloader.close();
    }.bind(this), function () {
      zn.notification.error('网络请求失败');
      zn.preloader.close();
    });
  },
  __onDeleteProjectTask: function __onDeleteProjectTask(task) {
    zn.confirm('确定删除编号：' + task.code + '的单据么吗？', '提示', function () {
      zn.http.post('/adinstall/project/deleteTask', {
        taskCode: task.code
      }).then(function (data) {
        if (data.status == 200) {
          zn.notification.success('删除成功');

          this.__loadTasks();
        } else {
          zn.notification.error(data.result);
        }
      }.bind(this), function () {
        zn.notification.error('网络请求失败');
      });
    }.bind(this));
  },
  render: function render() {
    return React.createElement("div", {
      className: "adinstall-admin-brand-project-info-shop-task"
    }, React.createElement("div", {
      className: "shops"
    }, React.createElement("div", {
      className: "title"
    }, React.createElement("span", null, "\u95E8\u5E97")), React.createElement("div", {
      className: "content"
    }, Object.keys(this.props.provinces).map(function (key) {
      var _province = this.props.provinces[key];

      if (_province.shops.length) {
        return React.createElement("div", {
          className: "province"
        }, React.createElement("div", {
          className: "p-title"
        }, _province.zn_title, "(", _province.shops.length, "\u5BB6\u95E8\u5E97)"), React.createElement("ul", {
          className: "p-shops"
        }, _province.shops.map(function (shop, index) {
          var _this = this;

          return React.createElement("li", {
            onClick: function onClick() {
              return _this.__onChange(shop);
            },
            className: "shop " + (this.state.value == shop.value ? 'curr' : ''),
            "data-tooltip": shop.address
          }, shop.zn_title);
        }.bind(this))));
      } else {
        return null;
      }
    }.bind(this)))), React.createElement("div", {
      className: "tasks"
    }, React.createElement("div", {
      className: "title"
    }, "\u5DE5\u5355(", this.state.tasks.length, "\u4E2A)"), React.createElement("div", {
      className: "content"
    }, React.createElement("ul", {
      className: "task-list"
    }, this.state.tasks.map(function (task, index) {
      return React.createElement("li", {
        className: "task-item"
      }, React.createElement(zn.app.adinstall.OrderItem, {
        data: task,
        onClick: function onClick() {
          return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
            orderCode: task.code
          });
        }
      }));
    }.bind(this))))));
  }
});
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      project: null,
      region_project: null,
      provinces: {}
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadCreateMeta();
  },
  __loadCreateMeta: function __loadCreateMeta() {
    zn.http.post('/adinstall/project/getCreateProjectTaskMeta', {
      znid: this.props.znid
    }).then(function (data) {
      if (data.status == 200) {
        this.__parseData(data.result);
      } else {
        zn.notification.error(data.result);
      }
    }.bind(this), function () {
      zn.notification.error("网络请求失败");
    });
  },
  __parseData: function __parseData(data) {
    var _project = data.project,
        _provinces = data.provinces,
        _shops = data.shops;

    _provinces.forEach(function (province, index) {
      province.shops = [];
      this.state.provinces[province.id] = province;
    }.bind(this));

    _shops.forEach(function (shop, index) {
      if (this.state.provinces[shop.province]) {
        this.state.provinces[shop.province].shops.push(shop);
      }
    }.bind(this));

    this.state.project = _project;
    this.state.region_project = data.region_project;
    this.forceUpdate();
  },
  render: function render() {
    if (!this.state.project) {
      return React.createElement(zn.react.DataLoader, {
        content: "\u6B63\u5728\u52A0\u8F7D...",
        loader: "timer"
      });
    }

    return React.createElement("div", {
      className: "adinstall-admin-create-brand-project"
    }, React.createElement("div", {
      className: "index-title"
    }, React.createElement("span", null, "\u3010", this.state.project.brand_id_convert, "\u3011", this.state.project.zn_title)), React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title",
      style: {
        backgroundColor: '#f3f2f2',
        alignItems: 'center'
      }
    }, React.createElement("span", {
      className: "name"
    }, this.state.project.code), React.createElement("span", {
      className: "adinstall-tag"
    }, "\u7531 ", this.state.project.zn_create_user_convert, " \u4E8E ", this.state.project.zn_create_time, " \u6307\u6D3E")), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, this.state.project.plan_start_time, " ~ ", this.state.project.plan_end_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6\uFF1A"), React.createElement(zn.react.Files, {
      className: "_value",
      value: this.state.project.attachments
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8BF4\u660E"), React.createElement("span", {
      className: "_value"
    }, this.state.project.comment)))), React.createElement("div", {
      className: "adinstall-group"
    }, React.createElement("div", {
      className: "group-title",
      style: {
        backgroundColor: '#f3f2f2',
        alignItems: 'center'
      }
    }, React.createElement("div", {
      className: "group-title-left"
    }, React.createElement("a", {
      className: "name"
    }, this.state.region_project.region_convert), React.createElement("span", {
      className: "adinstall-tag"
    }, this.state.region_project.zn_rights_owner_id_convert)), React.createElement("div", {
      className: "group-title-right"
    }, React.createElement("progress", {
      "data-tooltip": "已确认(" + this.state.region_project.task_finished_count + ") / 工单总量(" + this.state.region_project.task_count + ")",
      style: {
        margin: 8
      },
      value: this.state.region_project.task_finished_count,
      max: this.state.region_project.task_count
    }), React.createElement("span", {
      className: "zr-fr adinstall-tag"
    }, (this.state.region_project.task_finished_count / this.state.region_project.task_count * 100).toFixed(2), "% - ", this.state.region_project.task_finished_count, " / ", this.state.region_project.task_count))), React.createElement("div", {
      className: "group"
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9884\u8BA1\u5468\u671F\uFF1A"), React.createElement("span", {
      className: "_value"
    }, this.state.region_project.start_time, " ~ ", this.state.region_project.end_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6\uFF1A"), React.createElement(zn.react.Files, {
      className: "_value",
      value: this.state.region_project.attachments
    })), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u8BF4\u660E"), React.createElement("span", {
      className: "_value"
    }, this.state.region_project.comment)), React.createElement(ShopTask, {
      provinces: this.state.provinces,
      region_project: this.state.region_project
    }))));
  }
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Complaints': __webpack_require__(50),
  'SupplierBaseInfo': __webpack_require__(51),
  'SupplierTasks': __webpack_require__(52),
  'SupplierMessages': __webpack_require__(53),
  'SupplierSuggestions': __webpack_require__(54)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/zn.plugin.admin/model/paging', {
        model: 'AdinstallProjectItemComplaint',
        where: {
          supplier_openid: this.props.openid
        }
      })
    };
  },
  __onPagingListData: function __onPagingListData() {
    zn.preloader.close();
  },
  __itemRender: function __itemRender(item, index) {
    return React.createElement("div", {
      className: "adinstall-group",
      style: {
        backgroundColor: '#FFF'
      }
    }, React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u521B\u5EFA\u65F6\u95F4: "), React.createElement("span", {
      className: "_value"
    }, item.zn_create_time)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u5DE5\u5355\u53F7: "), React.createElement("a", {
      className: "_value",
      href: zn.react.session.relativeURL('/supplier.order.info', {
        orderCode: item.order_code
      })
    }, item.order_code)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6807\u9898: "), React.createElement("span", {
      className: "_value"
    }, item.zn_title)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u7C7B\u578B: "), React.createElement("span", {
      className: "_value"
    }, item.type)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u6295\u8BC9\u5185\u5BB9: "), React.createElement("span", {
      className: "_value"
    }, item.comment)), React.createElement("div", {
      className: "group-item"
    }, React.createElement("span", {
      className: "_key"
    }, "\u9644\u4EF6: "), React.createElement(zn.react.Files, {
      className: "_value",
      value: item.attachments
    })));
  },
  render: function render() {
    return React.createElement(zn.react.PagingList, {
      onData: this.__onPagingListData,
      data: this.state.data,
      itemRender: this.__itemRender
    });
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  componentDidMount: function componentDidMount() {
    this.__loadInfo();
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.__loadInfo(nextProps.znid);
    }
  },
  __loadInfo: function __loadInfo(znid) {
    zn.http.post('/adinstall/supplier/getByOpenId', {
      zn_id: znid || this.props.znid
    }).then(function (data) {
      this.setState({
        data: data.result
      });
    }.bind(this));
  },
  render: function render() {
    if (this.state.data) {
      return React.createElement("div", {
        className: "adinstall-base-supplier-info"
      }, React.createElement("div", {
        className: "adinstall-group"
      }, React.createElement("div", {
        className: "group-title"
      }, "\u57FA\u672C\u4FE1\u606F"), React.createElement("div", {
        className: "group"
      }, React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u59D3\u540D\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.name)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u8EAB\u4EFD\u8BC1\u53F7\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.card_id)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u6027\u522B\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.sex)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5E74\u9F84\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.age, "\u5C81")), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u7701 / \u5E02\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.province_convert, " / ", this.state.data.city_convert)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5730\u5740\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.address)))), React.createElement("div", {
        className: "adinstall-group"
      }, React.createElement("div", {
        className: "group-title"
      }, "\u901A\u4FE1"), React.createElement("div", {
        className: "group"
      }, React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u624B\u673A\u53F7\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.phone)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5EA7\u673A\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.telephone)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "QQ\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.qq)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5FAE\u4FE1\u53F7\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.wechat)))), React.createElement("div", {
        className: "adinstall-group"
      }, React.createElement("div", {
        className: "group-title"
      }, "\u5DE5\u79CD"), React.createElement("div", {
        className: "group"
      }, React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5DE5\u79CD\uFF1A"), React.createElement("div", {
        className: "_value"
      }, this.state.data.work_types_convert.split(',').map(function (type, index) {
        if (type) {
          return React.createElement("span", {
            className: "zr-tag"
          }, type);
        }
      }))), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u5DE5\u9F84\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.work_age, "\u6708")), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u7ED3\u7B97\u8D39\u7528\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.work_fee, "\u5143/\u5E73\u65B9")))), React.createElement("div", {
        className: "adinstall-group"
      }, React.createElement("div", {
        className: "group-title"
      }, "\u652F\u4ED8"), React.createElement("div", {
        className: "group"
      }, React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u94F6\u884C\u5361\u540D\u79F0\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.bank_card_title)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u94F6\u884C\u5361\u7528\u6237\u540D\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.bank_card_name)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u94F6\u884C\u5361\u8D26\u53F7\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.bank_card_id)))), !!this.state.data.type && React.createElement("div", {
        className: "adinstall-group"
      }, React.createElement("div", {
        className: "group-title"
      }, "\u4F01\u4E1A\u4FE1\u606F"), React.createElement("div", {
        className: "group"
      }, React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u4F01\u4E1A\u540D\u79F0\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.company_title)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u4F01\u4E1A\u6CD5\u4EBA\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.company_legal_person)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u4F01\u4E1A\u7A0E\u52A1\u767B\u8BB0\u53F7\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.company_tax_id)), React.createElement("div", {
        className: "group-item"
      }, React.createElement("span", {
        className: "_key"
      }, "\u4F01\u4E1A\u4E3B\u8425\u4E1A\u52A1\uFF1A"), React.createElement("span", {
        className: "_value"
      }, this.state.data.company_main_business)))));
    } else {
      return React.createElement(zn.react.DataLoader, {
        loader: "timer",
        content: "\u52A0\u8F7D\u4E2D..."
      });
    }
  }
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/supplier/getTasks', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      className: "adinstall-task"
    }, React.createElement(zn.app.adinstall.OrderItem, {
      data: item,
      onClick: function onClick() {
        return zn.react.session.relativeJump('/adinstall.base.my.own.region.task.info', {
          orderCode: item.code
        });
      }
    }));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      className: "adinstall-base-my-own-region-tasks",
      viewClassName: "adinstall-base-grid",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/supplier/getMessages', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      style: {
        borderRadius: 3,
        backgroundColor: '#FFF'
      }
    }, React.createElement("div", {
      className: "title",
      style: {
        display: 'flex',
        borderBottom: '1px solid #eae7e7',
        justifyContent: 'space-between',
        padding: 5
      }
    }, React.createElement("span", null, item.title), React.createElement("span", null, item.zn_create_time)), React.createElement("div", {
      className: "content",
      style: {
        padding: 10,
        fontSize: 12
      }
    }, item.content));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "xx",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      data: zn.store.post('/adinstall/supplier/getSuggestions', {
        znid: this.props.znid
      })
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.znid != this.props.znid) {
      this.state.data.extend({
        znid: nextProps.znid
      }).exec();
    }
  },
  __onItemRender: function __onItemRender(item) {
    return React.createElement("div", {
      style: {
        borderRadius: 3,
        backgroundColor: '#FFF'
      }
    }, React.createElement("div", {
      className: "title",
      style: {
        display: 'flex',
        borderBottom: '1px solid #eae7e7',
        justifyContent: 'space-between',
        padding: 5
      }
    }, React.createElement("span", null, "\u610F\u89C1"), React.createElement("span", null, item.zn_create_time)), React.createElement("div", {
      className: "content",
      style: {
        padding: 10,
        fontSize: 12
      }
    }, React.createElement("div", null, item.comment), React.createElement(zn.react.Files, {
      value: item.attachments
    })));
  },
  render: function render() {
    return React.createElement(zn.react.PagerView, {
      view: "ListView",
      viewClassName: "xx",
      data: this.state.data,
      itemRender: this.__onItemRender
    });
  }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var _exports = {},
    _export = null;
var _temps = {
  common: __webpack_require__(56),
  my: __webpack_require__(62)
};

for (var name in _temps) {
  _export = _temps[name];

  for (var key in _export) {
    _exports[(name + '.' + key).toLowerCase()] = _export[key];
  }
}

module.exports = _exports;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Brand.All.Projects': __webpack_require__(57),
  'Brand.All.Project.Tasks': __webpack_require__(58),
  'Brand.Center': __webpack_require__(59),
  'Brand.Shop.Center': __webpack_require__(60),
  'Supplier.Center': __webpack_require__(61)
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      status: 100
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u9879\u76EE\u7BA1\u7406",
      className: "adinstall-list-view-page",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: function onClick(value) {
          return _this.setState({
            status: value.value
          });
        },
        value: this.state.status,
        data: [{
          status: 100,
          text: '全部'
        }, {
          status: 0,
          text: '进行中'
        }, {
          status: 1,
          text: '结算中'
        }, {
          status: 2,
          text: '已结束'
        }]
      })
    }, React.createElement(zn.app.adinstall.BrandAllProjects, {
      status: this.state.status
    }));
  }
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      status: 100,
      items: [100, 0, -1, 1, -2, 2, 3, 4, 5, 6, 7, 8].map(function (item) {
        return {
          status: item,
          text: this.__renderStatus(item)
        };
      }.bind(this))
    };
  },
  __renderStatus: function __renderStatus(status) {
    switch (status) {
      case 100:
        return React.createElement("span", null, "\u5168\u90E8");

      case 0:
        return React.createElement("span", {
          style: {
            color: '#FF9800'
          }
        }, "\u5F85\u5BA1\u6838");

      case -1:
        return React.createElement("span", {
          style: {
            color: '#FF5722'
          }
        }, "\u5DF2\u9A73\u56DE");

      case 1:
        return React.createElement("span", {
          style: {
            color: '#2196F3'
          }
        }, "\u5F85\u63A5\u5355");

      case -2:
        return React.createElement("span", {
          style: {
            color: '#f91100'
          }
        }, "\u5DF2\u62D2\u5355");

      case 2:
        return React.createElement("span", {
          style: {
            color: '#f0ad4e'
          }
        }, "\u5DF2\u63A5\u5355");

      case 3:
        return React.createElement("span", {
          style: {
            color: '#4FCCD9'
          }
        }, "\u5F85\u7B7E\u6536");

      case 4:
        return React.createElement("span", {
          style: {
            color: '#6d81ec'
          }
        }, "\u7B7E\u6536\u5F85\u76D1\u7406\u786E\u8BA4");

      case 5:
        return React.createElement("span", {
          style: {
            color: '#d068e2'
          }
        }, "\u7B7E\u6536\u5F85\u9879\u76EE\u786E\u8BA4");

      case 6:
        return React.createElement("span", {
          style: {
            color: '#673AB7'
          }
        }, "\u5F85\u7ED3\u7B97");

      case 7:
        return React.createElement("span", {
          style: {
            color: '#0aca12'
          }
        }, "\u5DF2\u7ED3\u7B97");

      case 8:
        return React.createElement("span", {
          style: {
            color: '#b5b1b1'
          }
        }, "\u5DF2\u5173\u95ED");
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u5DE5\u5355\u7BA1\u7406",
      className: "adinstall-list-view-page",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: function onClick(value) {
          return _this.setState({
            status: value.value
          });
        },
        value: this.state.status,
        data: this.state.items
      })
    }, React.createElement(zn.app.adinstall.BrandAllProjectTasks, {
      status: this.state.status
    }));
  }
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var BaseInfo = zn.app.adinstall.BrandBaseInfo;
var Shops = zn.app.adinstall.BrandShops;
var Projects = zn.app.adinstall.BrandProjects;
var BrandTasks = zn.app.adinstall.BrandTasks;
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      view: BaseInfo,
      toolbarItems: [{
        text: '编辑',
        name: 'edit',
        icon: 'fa-edit',
        status: 'danger'
      }]
    };
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'edit':
        zn.notification.warning('还未开发');
        break;
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u54C1\u724C\u8BE6\u60C5",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "view",
        onClick: function onClick(data) {
          return _this.setState({
            view: data.value
          });
        },
        value: this.state.view,
        data: [{
          view: BaseInfo,
          text: '基本信息'
        }, {
          view: Shops,
          text: '门店管理'
        }, {
          view: Projects,
          text: '项目管理'
        }, {
          view: BrandTasks,
          text: '工单管理'
        }]
      }),
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, this.state.view && React.createElement(this.state.view, {
      znid: this.props.request.search.znid
    }));
  }
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var BrandShopBaseInfo = zn.app.adinstall.BrandShopBaseInfo;
var BrandShopAdvs = zn.app.adinstall.BrandShopAdvs;
var BrandShopStaffs = zn.app.adinstall.BrandShopStaffs;
var BrandShopTasks = zn.app.adinstall.BrandShopTasks;
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      view: BrandShopBaseInfo,
      toolbarItems: [{
        text: '编辑',
        name: 'edit',
        icon: 'fa-edit',
        status: 'danger'
      }]
    };
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'edit':
        zn.notification.warning('还未开发');
        break;
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u95E8\u5E97\u8BE6\u60C5",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "view",
        onClick: function onClick(data) {
          return _this.setState({
            view: data.value
          });
        },
        value: this.state.view,
        data: [{
          view: BrandShopBaseInfo,
          text: '基本信息'
        }, {
          view: BrandShopAdvs,
          text: '广告位'
        }, //{ view: BrandShopStaffs, text: '店员' },
        {
          view: BrandShopTasks,
          text: '工单'
        }]
      }),
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, this.state.view && React.createElement(this.state.view, {
      znid: this.props.request.search.znid
    }));
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

var BaseInfo = zn.app.adinstall.SupplierBaseInfo;
var SupplierTasks = zn.app.adinstall.SupplierTasks;
var SupplierMessages = zn.app.adinstall.SupplierMessages;
var SupplierSuggestions = zn.app.adinstall.SupplierSuggestions;
module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      view: BaseInfo,
      toolbarItems: [//{ text: '编辑', name: 'edit', icon: 'fa-edit', status: 'danger' }
      ]
    };
  },
  __onToolbarClick: function __onToolbarClick(item) {
    switch (item.name) {
      case 'edit':
        zn.notification.warning('还未开发');
        break;
    }
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u4F9B\u5E94\u5546\u8BE6\u60C5",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "view",
        onClick: function onClick(data) {
          return _this.setState({
            view: data.value
          });
        },
        value: this.state.view,
        data: [{
          view: BaseInfo,
          text: '基本信息'
        }, {
          view: SupplierTasks,
          text: '工单'
        }, {
          view: SupplierMessages,
          text: '消息'
        }, {
          view: SupplierSuggestions,
          text: '意见'
        }, {
          view: null,
          text: '投诉'
        }, {
          view: null,
          text: '评价'
        }]
      }),
      toolbarItems: this.state.toolbarItems,
      onToolbarClick: this.__onToolbarClick
    }, this.state.view && React.createElement(this.state.view, {
      znid: this.props.request.search.znid
    }));
  }
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'Brands': __webpack_require__(63),
  'Brands.Create.Project': __webpack_require__(64),
  'Brands.Create.Project.Task': __webpack_require__(65),
  'Confirmed.Tasks': __webpack_require__(66),
  'Own.Projects': __webpack_require__(67),
  'Own.Project.Tasks': __webpack_require__(68),
  'Own.Regions': __webpack_require__(69),
  'Own.Region.Tasks': __webpack_require__(70),
  'Own.Region.Task.Info': __webpack_require__(71),
  'Project.Detail': __webpack_require__(72),
  'Project.Region.Detail': __webpack_require__(73),
  'Suppliers': __webpack_require__(74)
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u6211\u7684\u54C1\u724C"
    }, React.createElement(zn.app.adinstall.MyBrands, null));
  }
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u521B\u5EFA\u9879\u76EE"
    }, React.createElement(zn.app.adinstall.CreateBrandProject, {
      brandCode: this.props.request.search.pcode
    }));
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u521B\u5EFA\u9879\u76EE\u5DE5\u5355"
    }, React.createElement(zn.app.adinstall.CreateProjectTask, {
      znid: this.props.request.search.znid
    }));
  }
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u5F85\u7ED3\u7B97\u5DE5\u5355"
    }, React.createElement(zn.app.adinstall.OwnConfirmedTasks, {
      status: 6
    }));
  }
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      status: 100
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u521B\u5EFA\u9879\u76EE",
      className: "adinstall-list-view-page",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: function onClick(value) {
          return _this.setState({
            status: value.value
          });
        },
        value: this.state.status,
        data: [{
          status: 100,
          text: '全部'
        }, {
          status: 0,
          text: '进行中'
        }, {
          status: 1,
          text: '结算中'
        }, {
          status: 2,
          text: '已结束'
        }]
      })
    }, React.createElement(zn.app.adinstall.OwnProjects, {
      status: this.state.status
    }));
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      status: 100
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u533A\u57DF\u5DE5\u5355",
      className: "adinstall-list-view-page",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: function onClick(value) {
          return _this.setState({
            status: value.value
          });
        },
        value: this.state.status,
        data: [{
          status: 100,
          text: '全部'
        }, {
          status: 0,
          text: '待审核'
        }, {
          status: 5,
          text: '待完成确认'
        }]
      })
    }, React.createElement(zn.app.adinstall.OwnProjectTasks, {
      status: this.state.status
    }));
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      status: 100
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u9879\u76EE\u533A\u57DF",
      className: "adinstall-list-view-page",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: function onClick(value) {
          return _this.setState({
            status: value.value
          });
        },
        value: this.state.status,
        data: [{
          status: 100,
          text: '全部'
        }, {
          status: 0,
          text: '进行中'
        }, {
          status: 1,
          text: '结算中'
        }, {
          status: 2,
          text: '已结束'
        }]
      })
    }, React.createElement(zn.app.adinstall.OwnRegions, {
      status: this.state.status
    }));
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      status: 100
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u533A\u57DF\u5DE5\u5355",
      className: "adinstall-list-view-page",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "status",
        onClick: function onClick(value) {
          return _this.setState({
            status: value.value
          });
        },
        value: this.state.status,
        data: [{
          status: 100,
          text: '全部'
        }, {
          status: -1,
          text: '已驳回'
        }, {
          status: -2,
          text: '已拒单'
        }, {
          status: 4,
          text: '签收待确认'
        }]
      })
    }, React.createElement(zn.app.adinstall.OwnRegionTasks, {
      status: this.state.status
    }));
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u8BA2\u5355\u8BE6\u60C5",
      className: "adinstall-list-view-page"
    }, React.createElement(zn.app.adinstall.OwnRegionTaskInfo, {
      orderCode: this.props.request.search.orderCode
    }));
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  getInitialState: function getInitialState() {
    return {
      items: [{
        value: zn.app.adinstall.ProjectBaseInfo,
        text: '介绍'
      }, {
        value: zn.app.adinstall.ProjectRegions,
        text: '区域'
      }, {
        value: zn.app.adinstall.ProjectTasks,
        text: '工单'
      }],
      value: zn.app.adinstall.ProjectBaseInfo
    };
  },
  render: function render() {
    var _this = this;

    return React.createElement(zn.react.Page, {
      title: "\u9879\u76EE\u8BE6\u60C5",
      headerCenter: React.createElement(zn.react.ListView, {
        className: "zr-tab-ios",
        selectMode: "radio",
        valueKey: "value",
        onClick: function onClick(value) {
          return _this.setState({
            value: value.value
          });
        },
        value: this.state.value,
        data: this.state.items
      })
    }, this.state.value && React.createElement(this.state.value, {
      zn_id: this.props.request.search.zn_id
    }));
  }
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u533A\u57DF\u8BE6\u60C5"
    }, React.createElement(zn.app.adinstall.RegionProjectInfo, {
      znid: this.props.request.search.zn_id
    }));
  }
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(0);

module.exports = React.createClass({
  displayName: "exports",
  render: function render() {
    return React.createElement(zn.react.Page, {
      title: "\u6211\u7684\u4F9B\u5E94\u5546"
    }, React.createElement(zn.app.adinstall.MySuppliers, null));
  }
});

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);