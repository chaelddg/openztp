'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/dna-dev/Documents/Code/Public/Building/openztp/pages/index.js?entry';


var ss = {
  'logo': 'index__logo___33-fl'
};

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;

{/* <Link href='/a'><a>Home</a></Link> | */}

var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(_antd.Layout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'OpenZtp'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/antd/2.13.6/antd.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bundle.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })), _react2.default.createElement(Header, { className: 'header', __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement('div', { className: ss.logo, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(_antd.Menu, {
    theme: 'dark',
    mode: 'horizontal',
    defaultSelectedKeys: ['2'],
    style: { lineHeight: '64px' },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'nav 1'), _react2.default.createElement(_antd.Menu.Item, { key: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'nav 2'), _react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'nav 3'))), _react2.default.createElement(Content, { style: { padding: '0 50px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_antd.Breadcrumb, { style: { margin: '16px 0' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_antd.Breadcrumb.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, 'Home'), _react2.default.createElement(_antd.Breadcrumb.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'List'), _react2.default.createElement(_antd.Breadcrumb.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'App')), _react2.default.createElement(_antd.Layout, { style: { padding: '24px 0', background: '#fff' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(Sider, { width: 200, style: { background: '#fff' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(_antd.Menu, {
    mode: 'inline',
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    style: { height: '100%' },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(SubMenu, { key: 'sub1', title: _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }, _react2.default.createElement(_antd.Icon, { type: 'user', __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    }), 'subnav 1'), __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, 'option1'), _react2.default.createElement(_antd.Menu.Item, { key: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, 'option2'), _react2.default.createElement(_antd.Menu.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, 'option3'), _react2.default.createElement(_antd.Menu.Item, { key: '4', __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, 'option4')), _react2.default.createElement(SubMenu, { key: 'sub2', title: _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, _react2.default.createElement(_antd.Icon, { type: 'laptop', __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }), 'subnav 2'), __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: '5', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, 'option5'), _react2.default.createElement(_antd.Menu.Item, { key: '6', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'option6'), _react2.default.createElement(_antd.Menu.Item, { key: '7', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, 'option7'), _react2.default.createElement(_antd.Menu.Item, { key: '8', __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, 'option8')), _react2.default.createElement(SubMenu, { key: 'sub3', title: _react2.default.createElement('span', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }, _react2.default.createElement(_antd.Icon, { type: 'notification', __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      }
    }), 'subnav 3'), __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(_antd.Menu.Item, { key: '9', __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, 'option9'), _react2.default.createElement(_antd.Menu.Item, { key: '10', __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'option10'), _react2.default.createElement(_antd.Menu.Item, { key: '11', __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, 'option11'), _react2.default.createElement(_antd.Menu.Item, { key: '12', __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, 'option12')))), _react2.default.createElement(Content, { style: { padding: '0 24px', minHeight: 280 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, 'Content'))), _react2.default.createElement(Footer, { style: { textAlign: 'center' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, 'Ant Design \xA92016 Created by Ant UED'));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkhlYWQiLCJMYXlvdXQiLCJNZW51IiwiQnJlYWRjcnVtYiIsIkljb24iLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiU2lkZXIiLCJTdWJNZW51IiwiTWVudUl0ZW1Hcm91cCIsIkl0ZW1Hcm91cCIsImNoaWxkcmVuIiwic3MiLCJsb2dvIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFJUCxBQUFTLEFBQVEsQUFBTSxBQUFZOzs7Ozs7Ozs7OztJQUMzQixBLFMsQUFBbUMsYUFBbkMsQTtJLEFBQVEsVUFBMkIsQSxhQUEzQixBO0lBQVMsQSxTQUFrQixBLGEsQUFBbEI7SUFBUSxBLFEsQUFBVSxhQUFWLEE7O0FBRWpDLENBQUMsQUFBMkM7O0FBRTVDLElBQU0sVUFBVSxXQUFoQixBQUFxQjtBQUNyQixJQUFNLGdCQUFnQixXQUF0QixBQUEyQixBQUMzQjs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2pCLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0M7QUFERDtBQUFBLEdBQUEsa0JBQ0MsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDSTtBQURKO0FBQUEscUJBQ0ksY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREosQUFDSSxBQUNBLG9EQUFNLFNBQU4sQUFBYztnQkFBZDtrQkFGSixBQUVJLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBSEosQUFHSSxBQUNIO0FBREc7OENBQ0csS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQUpELEFBSUMsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxj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S0FBWCxBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0FGRixBQUVFLEFBQ0EsNEJBQUMsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUE7QUFBQTtLQUhGLEFBR0UsQUFDQSw0QkFBQyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQTtBQUFBO0tBaEJKLEFBWUUsQUFJRSxBQUVGLDZCQUFDLGNBQUQsV0FBUyxLQUFULEFBQWEsUUFBTyx1QkFBTyxjQUFBOztrQkFBQTtvQkFBQSxBQUFNO0FBQU47QUFBQSxLQUFBLGtCQUFNLEFBQUMsNEJBQUssTUFBTixBQUFXO2tCQUFYO29CQUFOLEFBQU07QUFBQTtRQUFqQyxBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsV0FBQSxBQUFNLFFBQUssS0FBWCxBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBQ0EsNEJBQUMsY0FBRCxXQUFBLEFBQU0sUUFBSyxLQUFYLEFBQWU7Z0JBQWY7a0JBQUE7QUFBQTtLQUZGLEFBRUUsQUFDQSw2QkFBQyxjQUFELFdBQUEsQUFBTSxRQUFLLEtBQVgsQUFBZTtnQkFBZjtrQkFBQTtBQUFBO0tBSEYsQUFHRSxBQUNBLDZCQUFDLGNBQUQsV0FBQSxBQUFNLFFBQUssS0FBWCxBQUFlO2dCQUFmO2tCQUFBO0FBQUE7S0F4QlIsQUFDRSxBQUNFLEFBa0JFLEFBSUUsQUFJTixnQ0FBQyxjQUFELFdBQVMsT0FBTyxFQUFFLFNBQUYsQUFBVyxVQUFVLFdBQXJDLEFBQWdCLEFBQWdDO2dCQUFoRDtrQkFBQTtBQUFBO0tBdkRQLEFBcUJHLEFBTUUsQUE0QkUsQUFLSiw4QkFBQyxjQUFELFVBQVEsT0FBTyxFQUFFLFdBQWpCLEFBQWUsQUFBYTtnQkFBNUI7a0JBQUE7QUFBQTtLQTdEVyxBQUNkLEFBNERHO0FBN0RKIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2RuYS1kZXYvRG9jdW1lbnRzL0NvZGUvUHVibGljL0J1aWxkaW5nL29wZW56dHAifQ==