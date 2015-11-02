'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SAControlPanel = (function (_HTMLElement) {
    _inherits(SAControlPanel, _HTMLElement);

    function SAControlPanel() {
        _classCallCheck(this, SAControlPanel);

        _get(Object.getPrototypeOf(SAControlPanel.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SAControlPanel, [{
        key: 'setProperties',
        value: function setProperties() {}
    }, {
        key: 'runTask',
        value: function runTask(task) {
            var xhr = new XMLHttpRequest();
            //xhr.addEventListener('load', () => {});
            xhr.open("get", 'api/run/?task=' + task, true);
            xhr.send();
        }
    }, {
        key: 'registerElements',
        value: function registerElements() {
            this.dom = {};
            this.dom.packageBtn = this.root.querySelector('#package');
            this.dom.discoverBtn = this.root.querySelector('#discover');
            this.dom.cleanBtn = this.root.querySelector('#clean');
        }
    }, {
        key: 'parseAttributes',

        /**
         * parse attributes on element
         */
        value: function parseAttributes() {
            if (this.hasAttribute('uri')) {
                this.uri = this.getAttribute('uri');
            }
        }
    }, {
        key: 'createdCallback',

        // Fires when an instance of the element is created.
        value: function createdCallback() {
            this.setProperties();
            this.parseAttributes();
        }
    }, {
        key: 'attachedCallback',

        // Fires when an instance was inserted into the document.
        value: function attachedCallback() {
            var _this = this;

            var template = this.owner.querySelector('template');
            this.root = this.createShadowRoot();
            var clone = document.importNode(template.content, true);
            this.root.appendChild(clone);
            this.registerElements();

            this.dom.packageBtn.addEventListener('click', function (event) {
                _this.runTask(event.currentTarget.id);
            });
            this.dom.discoverBtn.addEventListener('click', function (event) {
                _this.runTask(event.currentTarget.id);
            });
            this.dom.cleanBtn.addEventListener('click', function (event) {
                _this.runTask(event.currentTarget.id);
            });
        }

        // Fires when an instance was removed from the document.
    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {}
    }, {
        key: 'attributeChangedCallback',

        // Fires when an attribute was added, removed, or updated.
        value: function attributeChangedCallback(attr, oldVal, newVal) {}
    }]);

    return SAControlPanel;
})(HTMLElement);

SAControlPanel.prototype.owner = (document._currentScript || document.currentScript).ownerDocument;
document.registerElement('sa-controlpanel', SAControlPanel);
//# sourceMappingURL=sa-controlpanel.js.map
