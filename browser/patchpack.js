/*! patchpack@0.3.12 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["patchpack"] = factory();
	else
		root["patchpack"] = factory();
})(self || this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OP_REMOVE = exports.OP_REPLACE = exports.OP_ADD = exports.check = exports.MAP_NODE = exports.ARRAY_NODE = void 0;
exports.ARRAY_NODE = -1;
exports.MAP_NODE = -2;
exports.check = function (condition, error) {
    if (condition) {
        throw new Error(error);
    }
};
exports.OP_ADD = (_a = [0, 1, 2], _a[0]), exports.OP_REPLACE = _a[1], exports.OP_REMOVE = _a[2];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQWEsUUFBQSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDZixRQUFBLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQXNCYixRQUFBLEtBQUssR0FBRyxVQUFDLFNBQWMsRUFBRSxLQUFhO0lBQ2pELElBQUksU0FBUyxFQUFFO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUN2QjtBQUNILENBQUMsQ0FBQTtBQUVjLFFBQUEsTUFBTSxJQUFSLEtBQW9DLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsVUFBckMsUUFBQSxVQUFVLFVBQUUsUUFBQSxTQUFTLFNBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFSUkFZX05PREUgPSAtMVxuZXhwb3J0IGNvbnN0IE1BUF9OT0RFID0gLTJcblxuZXhwb3J0IHR5cGUgVHlwZTxUPiA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IFRcblxuZXhwb3J0IHR5cGUgSnNvblBhdGNoT3AgPSBcInJlcGxhY2VcIiB8IFwiYWRkXCIgfCBcInJlbW92ZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUpzb25QYXRjaCB7XG4gIG9wOiBKc29uUGF0Y2hPcFxuICBwYXRoOiBzdHJpbmdcbiAgdmFsdWU/OiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmV2ZXJzaWJsZUpzb25QYXRjaCBleHRlbmRzIElKc29uUGF0Y2gge1xuICBvbGRWYWx1ZT86IGFueVxufVxuXG4vLyAgICAgICAgICBUU2NoZW1hVHlwZSA9IFsgbmFtZSwgICBwcm9wcyAgICBdXG5leHBvcnQgdHlwZSBUU2NoZW1hVHlwZSA9IFsgc3RyaW5nLCAuLi5zdHJpbmdbXSBdXG5cbi8vICAgICAgICAgIFRTY2hlbWFQYXRjaCA9IFsgb3AsICAgICBpZCwgICAgIHByb3AsICAgdmFsdWUvb2xkVmFsdWUgXVxuZXhwb3J0IHR5cGUgVFNjaGVtYVBhdGNoID0gWyBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBhbnk/LCBhbnk/IF1cblxuZXhwb3J0IGNvbnN0IGNoZWNrID0gKGNvbmRpdGlvbjogYW55LCBlcnJvcjogc3RyaW5nKSA9PiB7XG4gIGlmIChjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFsgT1BfQURELCBPUF9SRVBMQUNFLCBPUF9SRU1PVkUgXSA9IFsgMCwgMSwgMiBdXG5leHBvcnQgdHlwZSBOb2RlVHlwZSA9IC0xIHwgLTIgfCBJU2NoZW1hVHlwZVxuXG5leHBvcnQgaW50ZXJmYWNlIElTY2hlbWFOb2RlIHtcbiAgaWQ6IG51bWJlclxuICBwYXJlbnQ/OiBJU2NoZW1hTm9kZVxuICB0eXBlOiAtMSB8IC0yIHwgSVNjaGVtYVR5cGVcbiAgaW5kZXg6IG51bWJlclxuICBrZXk6IHN0cmluZyB8IG51bWJlclxuICBrZXlzPzogc3RyaW5nW11cbiAgaXRlbXM6IElTY2hlbWFOb2RlW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU2NoZW1hVHlwZSB7XG4gIG5hbWU6IHN0cmluZ1xuICBpbmRleDogbnVtYmVyXG4gIHByb3BzOiBzdHJpbmdbXVxuICByZWY/OiBUeXBlPGFueT5cbn1cbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
var common_1 = __webpack_require__(0);
var Schema = /** @class */ (function () {
    function Schema(types) {
        this._nextId = 0;
        this._nodes = [];
        this._deleted = [];
        this._types = Object.keys(types).map(function (name, i) {
            var t = types[name];
            if (Array.isArray(t)) {
                return { name: name, props: t, index: i };
            }
            else {
                // tslint:disable-next-line: new-parens
                return { name: t.name, props: Object.getOwnPropertyNames(new t), index: i, ref: t };
            }
        });
    }
    Object.defineProperty(Schema.prototype, "types", {
        get: function () {
            return this._types.map(function (_a) {
                var name = _a.name, props = _a.props;
                return __spreadArrays([name], props);
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "deleted", {
        get: function () {
            return this._deleted;
        },
        enumerable: false,
        configurable: true
    });
    Schema.prototype.addType = function (name, props, ref) {
        var index = this._types.length;
        this._types.push({ name: name, props: props, index: index, ref: ref });
    };
    Schema.prototype.typeByName = function (name) {
        return this._types.find(function (t) { return t.name === name; });
    };
    Object.defineProperty(Schema.prototype, "root", {
        get: function () {
            return this._nodes[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "nextId", {
        get: function () {
            return this._nextId++;
        },
        enumerable: false,
        configurable: true
    });
    Schema.prototype.init = function (types) {
        var _this = this;
        this._types = [];
        this._nodes = [];
        types.forEach(function (_a) {
            var name = _a[0], props = _a.slice(1);
            return _this._types.push({ name: name, props: props, index: _this._types.length });
        });
    };
    Schema.prototype.getNode = function (nodeId) {
        return this._nodes.find(function (n) { return n.id === nodeId; });
    };
    Schema.prototype.getNodePath = function (sn, key) {
        var node = sn;
        var pathArr = [];
        while (!!node) {
            pathArr.push(node.key);
            node = node.parent;
        }
        return pathArr.reverse().join("/") + (key === undefined ? "" : ("/" + key));
    };
    Schema.prototype.getChildNode = function (sn, name) {
        if (sn.type === common_1.MAP_NODE) {
            return sn.items.find(function (_a) {
                var key = _a.key;
                return key === name;
            });
        }
        else if (sn.type === common_1.ARRAY_NODE) {
            return sn.items.find(function (_a) {
                var index = _a.index;
                return index === +name;
            });
        }
        else {
            return sn.items.find(function (_a) {
                var key = _a.key;
                return key === name;
            });
        }
    };
    Schema.prototype.findType = function (value) {
        var keys = Object.keys(value);
        var type = this._types.find(function (t) {
            if (t.ref) {
                return value instanceof t.ref;
            }
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (t.props.indexOf(key) < 0) {
                    return false;
                }
            }
            return true;
        });
        return type;
    };
    Schema.prototype.getType = function (index) {
        return index < 0 ? index : this._types[index];
    };
    Schema.prototype.getChildIndex = function (parent, key) {
        if (parent.type === common_1.MAP_NODE) {
            return parent.keys.indexOf(key);
        }
        else if (parent.type === common_1.ARRAY_NODE) {
            return +key;
        }
        else {
            return parent.type.props.indexOf(key);
        }
    };
    Schema.prototype.getChildName = function (parent, index) {
        if (!parent) {
            return "";
        }
        if (parent.type === common_1.MAP_NODE) {
            return parent.keys[index];
        }
        else if (parent.type === common_1.ARRAY_NODE) {
            return index;
        }
        else {
            return parent.type.props[index];
        }
    };
    Schema.prototype.createNode = function (id, parent, type, key, index) {
        var node = { id: id, type: type, parent: parent, key: key, index: index, items: [] };
        if (type === common_1.MAP_NODE) {
            node.keys = [];
        }
        parent === null || parent === void 0 ? void 0 : parent.items.push(node);
        this._nodes.push(node);
        return node;
    };
    Schema.prototype.deleteNode = function (node) {
        var _this = this;
        if (node.parent) {
            var itemIndex = node.parent.items.indexOf(node);
            node.parent.items.splice(itemIndex, 1);
        }
        node.items.forEach(function (child) { return _this.deleteNode(child); });
        var index = this._nodes.indexOf(node);
        this._nodes.splice(index, 1);
        this._deleted.push(node);
    };
    Schema.prototype.getDeletedNode = function (sn, name) {
        if (!sn) {
            return;
        }
        if (sn.type === common_1.ARRAY_NODE) {
            return this._deleted.find(function (_a) {
                var parent = _a.parent, index = _a.index;
                return index === +name && parent === sn;
            });
        }
        else {
            return this._deleted.find(function (_a) {
                var parent = _a.parent, key = _a.key;
                return key === name && parent === sn;
            });
        }
    };
    Schema.prototype.clearDeleted = function () {
        this._deleted = [];
    };
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBQXNHO0FBRXRHO0lBTUUsZ0JBQWEsS0FBOEM7UUFGbkQsWUFBTyxHQUFXLENBQUMsQ0FBQTtRQUd6QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsSUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFBO2FBQ3BDO2lCQUFNO2dCQUNMLHVDQUF1QztnQkFDdkMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQTthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNCQUFXLHlCQUFLO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFFLEVBQWU7b0JBQWIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBO2dCQUFPLHVCQUFFLElBQUksR0FBSyxLQUFLO1lBQWhCLENBQWtCLENBQUMsQ0FBQTtRQUNsRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFP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QUFJLE1BQU0sS0FBSyxFQUFFO1lBQTdCLENBQTZCLENBQUMsQ0FBQTtTQUM5RTtJQUNILENBQUM7SUFFTSw2QkFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQXpKRCxJQXlKQztBQXpKWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1BUF9OT0RFLCBBUlJBWV9OT0RFLCBJU2NoZW1hVHlwZSwgSVNjaGVtYU5vZGUsIE5vZGVUeXBlLCBUU2NoZW1hVHlwZSwgVHlwZSB9IGZyb20gXCIuL2NvbW1vblwiXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWEge1xuICBwcml2YXRlIF90eXBlcyE6IElTY2hlbWFUeXBlW11cbiAgcHJpdmF0ZSBfbm9kZXMhOiBJU2NoZW1hTm9kZVtdXG4gIHByaXZhdGUgX2RlbGV0ZWQ6IElTY2hlbWFOb2RlW11cbiAgcHJpdmF0ZSBfbmV4dElkOiBudW1iZXIgPSAwXG5cbiAgY29uc3RydWN0b3IgKHR5cGVzOiB7IFt0eXBlOiBzdHJpbmddOiBzdHJpbmdbXSB8IFR5cGU8YW55Pn0pIHtcbiAgICB0aGlzLl9ub2RlcyA9IFtdXG4gICAgdGhpcy5fZGVsZXRlZCA9IFtdXG4gICAgdGhpcy5fdHlwZXMgPSBPYmplY3Qua2V5cyh0eXBlcykubWFwKChuYW1lLCBpKSA9PiB7XG4gICAgICBjb25zdCB0ID0gdHlwZXNbbmFtZV1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHQpKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIHByb3BzOiB0LCBpbmRleDogaSB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5ldy1wYXJlbnNcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogdC5uYW1lLCBwcm9wczogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobmV3IHQpLCBpbmRleDogaSwgcmVmOiB0fVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0IHR5cGVzKCk6IFRTY2hlbWFUeXBlW10ge1xuICAgIHJldHVybiB0aGlzLl90eXBlcy5tYXAoKCB7IG5hbWUsIHByb3BzIH0pID0+IFsgbmFtZSwgLi4ucHJvcHMgXSlcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVsZXRlZCgpOiBJU2NoZW1hTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZXRlZFxuICB9XG5cbiAgcHVibGljIGFkZFR5cGUobmFtZTogc3RyaW5nLCBwcm9wczogc3RyaW5nW10sIHJlZj86IFR5cGU8YW55Pikge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fdHlwZXMubGVuZ3RoXG4gICAgdGhpcy5fdHlwZXMucHVzaCh7IG5hbWUsIHByb3BzLCBpbmRleCwgcmVmIH0pXG4gIH1cblxuICBwdWJsaWMgdHlwZUJ5TmFtZShuYW1lOiBzdHJpbmcpOiBJU2NoZW1hVHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVzLmZpbmQoKHQpID0+IHQubmFtZSA9PT0gbmFtZSlcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcm9vdCgpOiBJU2NoZW1hTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVzWzBdXG4gIH1cblxuICBwdWJsaWMgZ2V0IG5leHRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmV4dElkKytcbiAgfVxuXG4gIHB1YmxpYyBpbml0KHR5cGVzOiBUU2NoZW1hVHlwZVtdKSB7XG4gICAgdGhpcy5fdHlwZXMgPSBbXVxuICAgIHRoaXMuX25vZGVzID0gW11cblxuICAgIHR5cGVzLmZvckVhY2goKFtuYW1lLCAuLi5wcm9wc10pID0+IHRoaXMuX3R5cGVzLnB1c2goeyBuYW1lLCBwcm9wcywgaW5kZXg6IHRoaXMuX3R5cGVzLmxlbmd0aCB9KSlcbiAgfVxuXG4gIHB1YmxpYyBnZXROb2RlKG5vZGVJZDogbnVtYmVyKTogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9ub2Rlcy5maW5kKChuKSA9PiBuLmlkID09PSBub2RlSWQpXG4gIH1cblxuICBwdWJsaWMgZ2V0Tm9kZVBhdGgoc24/OiBJU2NoZW1hTm9kZSwga2V5Pzogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgbm9kZSA9IHNuXG4gICAgY29uc3QgcGF0aEFyciA9IFtdXG4gICAgd2hpbGUgKCEhbm9kZSkge1xuICAgICAgcGF0aEFyci5wdXNoKG5vZGUua2V5KVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50IVxuICAgIH1cbiAgICByZXR1cm4gcGF0aEFyci5yZXZlcnNlKCkuam9pbihcIi9cIikgKyAoa2V5ID09PSB1bmRlZmluZWQgPyBcIlwiIDogKFwiL1wiICsga2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZE5vZGUoc246IElTY2hlbWFOb2RlLCBuYW1lOiBzdHJpbmcgfCBudW1iZXIpOiBJU2NoZW1hTm9kZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHNuLnR5cGUgPT09IE1BUF9OT0RFKSB7XG4gICAgICByZXR1cm4gc24uaXRlbXMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBuYW1lKVxuICAgIH0gZWxzZSBpZiAoc24udHlwZSA9PT0gQVJSQVlfTk9ERSkge1xuICAgICAgcmV0dXJuIHNuLml0ZW1zLmZpbmQoKHsgaW5kZXggfSkgPT4gaW5kZXggPT09ICtuYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc24uaXRlbXMuZmluZCgoeyBrZXkgfSkgPT4ga2V5ID09PSBuYW1lKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmaW5kVHlwZSh2YWx1ZTogYW55KTogSVNjaGVtYVR5cGUgfCB1bmRlZmluZWQge1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLl90eXBlcy5maW5kKCh0KSA9PiB7XG4gICAgICBpZiAodC5yZWYpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgdC5yZWZcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgaWYgKHQucHJvcHMuaW5kZXhPZihrZXkpIDwgMCkgeyByZXR1cm4gZmFsc2UgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICAgIHJldHVybiB0eXBlXG4gIH1cblxuICBwdWJsaWMgZ2V0VHlwZShpbmRleDogbnVtYmVyKTogTm9kZVR5cGUge1xuICAgIHJldHVybiBpbmRleCA8IDAgPyBpbmRleCBhcyBOb2RlVHlwZSA6IHRoaXMuX3R5cGVzW2luZGV4XVxuICB9XG5cbiAgcHVibGljIGdldENoaWxkSW5kZXggKHBhcmVudDogSVNjaGVtYU5vZGUsIGtleTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAocGFyZW50LnR5cGUgPT09IE1BUF9OT0RFKSB7XG4gICAgICByZXR1cm4gcGFyZW50LmtleXMhLmluZGV4T2Yoa2V5IGFzIHN0cmluZylcbiAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSBBUlJBWV9OT0RFKSB7XG4gICAgICByZXR1cm4gK2tleVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50LnR5cGUucHJvcHMuaW5kZXhPZihrZXkgYXMgc3RyaW5nKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZE5hbWUgKHBhcmVudDogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWQsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xuICAgIGlmICghcGFyZW50KSB7IHJldHVybiBcIlwiIH1cbiAgICBpZiAocGFyZW50LnR5cGUgPT09IE1BUF9OT0RFKSB7XG4gICAgICByZXR1cm4gcGFyZW50LmtleXMhW2luZGV4XVxuICAgIH0gZWxzZSBpZiAocGFyZW50LnR5cGUgPT09IEFSUkFZX05PREUpIHtcbiAgICAgIHJldHVybiBpbmRleFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50LnR5cGUucHJvcHNbaW5kZXhdXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZU5vZGUoaWQ6IG51bWJlciwgcGFyZW50OiBJU2NoZW1hTm9kZSB8IHVuZGVmaW5lZCwgdHlwZTogTm9kZVR5cGUsIGtleTogc3RyaW5nIHwgbnVtYmVyLCBpbmRleDogbnVtYmVyKSB7XG5cbiAgICBjb25zdCBub2RlOiBJU2NoZW1hTm9kZSA9IHsgaWQsIHR5cGUsIHBhcmVudCwga2V5LCBpbmRleCwgaXRlbXM6IFtdIH1cblxuICAgIGlmICh0eXBlID09PSBNQVBfTk9ERSkge1xuICAgICAgbm9kZS5rZXlzID0gW11cbiAgICB9XG5cbiAgICBwYXJlbnQ/Lml0ZW1zLnB1c2gobm9kZSlcbiAgICB0aGlzLl9ub2Rlcy5wdXNoKG5vZGUpXG5cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgcHVibGljIGRlbGV0ZU5vZGUobm9kZTogSVNjaGVtYU5vZGUpIHtcbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IG5vZGUucGFyZW50Lml0ZW1zLmluZGV4T2Yobm9kZSlcbiAgICAgIG5vZGUucGFyZW50Lml0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpXG4gICAgfVxuICAgIG5vZGUuaXRlbXMuZm9yRWFjaCgoY2hpbGQpID0+IHRoaXMuZGVsZXRlTm9kZShjaGlsZCkpXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9ub2Rlcy5pbmRleE9mKG5vZGUpXG4gICAgdGhpcy5fbm9kZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHRoaXMuX2RlbGV0ZWQucHVzaChub2RlKVxuICB9XG5cbiAgcHVibGljIGdldERlbGV0ZWROb2RlKHNuOiBJU2NoZW1hTm9kZSB8IHVuZGVmaW5lZCwgbmFtZTogc3RyaW5nIHwgbnVtYmVyKTogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWQge1xuICAgIGlmICghc24pIHsgcmV0dXJuIH1cbiAgICBpZiAoc24udHlwZSA9PT0gQVJSQVlfTk9ERSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWQuZmluZCgoeyBwYXJlbnQsIGluZGV4IH0pID0+IGluZGV4ID09PSArbmFtZSAmJiBwYXJlbnQgPT09IHNuKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVsZXRlZC5maW5kKCh7IHBhcmVudCwga2V5IH0pID0+IGtleSA9PT0gbmFtZSAmJiBwYXJlbnQgPT09IHNuKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhckRlbGV0ZWQoKSB7XG4gICAgdGhpcy5fZGVsZXRlZCA9IFtdXG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(0), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxrREFBK0I7QUFDL0IsK0NBQTRCO0FBQzVCLCtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL3NyYy9wYXRjaHBhY2tcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3NjaGVtYVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvY29tbW9uXCJcbiJdfQ==

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchPack = void 0;
var notepack = __importStar(__webpack_require__(4));
var common_1 = __webpack_require__(0);
var schema_1 = __webpack_require__(1);
var PatchPack = /** @class */ (function () {
    function PatchPack(types) {
        this.schema = new schema_1.Schema(types || {});
    }
    PatchPack.prototype.encodeState = function (value, includeTypes, updateSchema) {
        if (includeTypes === void 0) { includeTypes = true; }
        if (updateSchema === void 0) { updateSchema = true; }
        // encode root node
        var encoded = this.encodeNode(value, { key: "", index: -1, updateSchema: updateSchema });
        // encode snapshot nodes and schema
        var snapshot = __spreadArrays([encoded], includeTypes ? [this.schema.types] : []);
        // return packed snapshot
        return notepack.encode(snapshot);
    };
    PatchPack.prototype.decodeState = function (buffer) {
        var _a = notepack.decode(buffer), encodedNode = _a[0], types = _a[1];
        // apply schema types
        this.schema.init(types);
        // decode snapshot
        return this.decodeNode(encodedNode, { key: "", index: -1 });
    };
    PatchPack.prototype.encodeNode = function (value, meta) {
        var _this = this;
        var parent = meta.parent, _a = meta.key, key = _a === void 0 ? "" : _a, _b = meta.index, index = _b === void 0 ? -1 : _b, _c = meta.updateSchema, updateSchema = _c === void 0 ? true : _c, checkDeleted = meta.checkDeleted;
        // add key to map schema keys
        if (parent && parent.type === common_1.MAP_NODE && updateSchema) {
            parent.keys.push(key);
        }
        var node;
        if (!parent) {
            node = this.schema.root;
        }
        else {
            // get child node
            if (checkDeleted) {
                node = this.schema.getDeletedNode(parent, key);
            }
            if (!node) {
                node = this.schema.getChildNode(parent, key);
            }
        }
        var data = [];
        if (Array.isArray(value)) {
            if (!node && updateSchema) {
                // create schema node
                node = this.schema.createNode(this.schema.nextId, parent, common_1.ARRAY_NODE, key, index);
            }
            common_1.check(!node, "Cannot encode value - node not found on path: " + this.schema.getNodePath(parent, key));
            // set encoded node type and id
            data.push(common_1.ARRAY_NODE, node.id);
            // set encoded node items
            for (var i = 0; i < value.length; i++) {
                data.push(this.encodeNode(value[i], { parent: node, key: i, index: i, updateSchema: updateSchema }));
            }
        }
        else if (typeof value === "object" && value) {
            // check value type
            var type_1 = node ? node.type : this.schema.findType(value) || common_1.MAP_NODE;
            if (!node && updateSchema) {
                // create schema node
                node = this.schema.createNode(this.schema.nextId, parent, type_1, key, index);
            }
            common_1.check(!node, "Cannot encode value - node not found on path: " + this.schema.getNodePath(parent, key));
            data.push(type_1 !== common_1.MAP_NODE ? type_1.index : common_1.MAP_NODE, node.id);
            if (type_1 !== common_1.MAP_NODE) {
                // set encoded props
                Object.keys(value).forEach(function (k) {
                    data.push(_this.encodeNode(value[k], __assign(__assign({}, meta), { parent: node, key: k, index: type_1.props.indexOf(k) })));
                });
            }
            else {
                // set map items
                Object.keys(value).forEach(function (k, i) {
                    data.push(k, _this.encodeNode(value[k], __assign(__assign({}, meta), { parent: node, key: k, index: i })));
                });
            }
        }
        else {
            // check type
            common_1.check(typeof value === "function" || typeof value === "symbol", "Cannot encode value - wrong value on path " + this.schema.getNodePath(parent, key));
            return value;
        }
        return data;
    };
    PatchPack.prototype.decodeNode = function (encoded, meta) {
        var _this = this;
        // check if encoded primitive value
        if (!encoded || !Array.isArray(encoded)) {
            return encoded;
        }
        var parent = meta.parent, key = meta.key, index = meta.index;
        var type = encoded[0], id = encoded[1], data = encoded.slice(2);
        var schemaType = this.schema.getType(type);
        common_1.check(!schemaType, "Cannot decode state - unknown type: " + type);
        // create schema node
        var node = this.schema.createNode(id, parent, schemaType, key, index);
        var result = {};
        if (schemaType === common_1.ARRAY_NODE) {
            return data.map(function (item, i) {
                return _this.decodeNode(item, { parent: node, index: i, key: i });
            });
        }
        else if (schemaType === common_1.MAP_NODE) {
            // decode map items
            for (var i = 0; i < data.length; i += 2) {
                var childIndex = node.keys.push(data[i]) - 1;
                var value = this.decodeNode(data[i + 1], { parent: node, key: data[i], index: childIndex });
                if (value !== undefined) {
                    result[data[i]] = value;
                }
            }
        }
        else {
            // decode type props
            for (var i = 0; i < schemaType.props.length; i++) {
                var prop = schemaType.props[i];
                var value = this.decodeNode(data[i], { parent: node, key: prop, index: i });
                if (value !== undefined) {
                    result[prop] = value;
                }
            }
        }
        return result;
    };
    PatchPack.prototype.encodePatch = function (patch, updateSchema) {
        if (updateSchema === void 0) { updateSchema = true; }
        var path = patch.path[0] === "/" ? patch.path.slice(1) : patch.path;
        var pathArr = path.split("/").reverse();
        var key = pathArr.splice(0, 1)[0];
        if (updateSchema) {
            this.schema.clearDeleted();
        }
        var parent = this.schema.root;
        common_1.check(!parent, "Cannot encode patch, you need to build schema first!");
        while (pathArr.length) {
            parent = this.schema.getChildNode(parent, pathArr.pop());
            common_1.check(!parent, "Cannot add new node - wrong path: " + patch.path);
        }
        var op = ["add", "replace", "remove"].indexOf(patch.op);
        var index = this.schema.getChildIndex(parent, key);
        var data = [op, parent.id, index];
        var node = this.schema.getChildNode(parent, key);
        if (patch.op !== "remove") {
            if (node && updateSchema) {
                this.schema.deleteNode(node);
            }
            if (parent.type === common_1.MAP_NODE && patch.op === "add") {
                data.push([key, this.encodeNode(patch.value, { parent: parent, key: key, index: index, updateSchema: updateSchema })]);
            }
            else {
                data.push(this.encodeNode(patch.value, { parent: parent, key: key, index: index, updateSchema: updateSchema }));
            }
        }
        if (patch.op !== "add" && "oldValue" in patch) {
            data.push(this.encodeNode(patch.oldValue, { parent: parent, key: key, index: index, updateSchema: false, checkDeleted: true }));
        }
        // delete old node
        if (patch.op !== "remove" && node && updateSchema) {
            this.schema.deleteNode(node);
        }
        return notepack.encode(data);
    };
    PatchPack.prototype.decodePatch = function (buffer) {
        var _a;
        // encode patch
        var encodedPatch = notepack.decode(buffer);
        var opIndex = encodedPatch[0], nodeId = encodedPatch[1], propIndex = encodedPatch[2], values = encodedPatch.slice(3);
        var parent = this.schema.getNode(nodeId);
        common_1.check(!parent, "Cannot decode patch - schema for node with id " + nodeId + " not found");
        var patch = { op: ["add", "replace", "remove"][opIndex], path: '' };
        var key = this.schema.getChildName(parent, propIndex);
        var node = this.schema.getChildNode(parent, key);
        if (values.length && patch.op !== "remove") {
            // revome old node
            if (node) {
                this.schema.deleteNode(node);
            }
            // decode value
            var value = values.reverse().pop();
            if (parent.type === common_1.MAP_NODE && patch.op === "add") {
                key = value[0];
                (_a = parent.keys) === null || _a === void 0 ? void 0 : _a.push(key);
                patch.value = this.decodeNode(value[1], { parent: parent, key: key, index: propIndex });
            }
            else {
                patch.value = this.decodeNode(value, { parent: parent, key: key, index: propIndex });
            }
        }
        if (values.length && patch.op !== "add") {
            patch.oldValue = this.decodeNode(values.pop(), { parent: parent, key: key, index: propIndex });
        }
        if (node && patch.op === "remove") {
            this.schema.deleteNode(node);
        }
        patch.path = this.schema.getNodePath(parent, key);
        if (values.length) {
            throw new Error("Unhandled params: " + values.toString());
        }
        return patch;
    };
    PatchPack.prototype.encode = function (value) {
        return notepack.encode(value);
    };
    PatchPack.prototype.decode = function (buffer) {
        return notepack.decode(buffer);
    };
    return PatchPack;
}());
exports.PatchPack = PatchPack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hwYWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGNocGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXVDO0FBRXZDLG1DQUEwSDtBQUMxSCxtQ0FBaUM7QUFVakM7SUFFRSxtQkFBYSxLQUFnRDtRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsS0FBVSxFQUFFLFlBQW1CLEVBQUUsWUFBbUI7UUFBeEMsNkJBQUEsRUFBQSxtQkFBbUI7UUFBRSw2QkFBQSxFQUFBLG1CQUFtQjtRQUNyRSxtQkFBbUI7UUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUE7UUFFNUUsbUNBQW1DO1FBQ25DLElBQU0sUUFBUSxtQkFBSyxPQUFPLEdBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUFBO1FBRXhFLHlCQUF5QjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQTRCLE1BQWM7UUFDbEMsSUFBQSxLQUF1QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUE3QyxXQUFXLFFBQUEsRUFBRSxLQUFLLFFBQTJCLENBQUE7UUFFcEQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXZCLGtCQUFrQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFTyw4QkFBVSxHQUFsQixVQUFtQixLQUFVLEVBQUUsSUFBZ0I7UUFBL0MsaUJBdUVDO1FBdEVTLElBQUEsTUFBTSxHQUE4RCxJQUFJLE9BQWxFLEVBQUUsS0FBNEQsSUFBSSxJQUF4RCxFQUFSLEdBQUcsbUJBQUcsRUFBRSxLQUFBLEVBQUUsS0FBa0QsSUFBSSxNQUE1QyxFQUFWLEtBQUssbUJBQUcsQ0FBQyxDQUFDLEtBQUEsRUFBRSxLQUFzQyxJQUFJLGFBQXZCLEVBQW5CLFlBQVksbUJBQUcsSUFBSSxLQUFBLEVBQUUsWUFBWSxHQUFLLElBQUksYUFBVCxDQUFTO1FBRWhGLDZCQUE2QjtRQUM3QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGlCQUFRLElBQUksWUFBWSxFQUFFO1lBQ3RELE1BQU0sQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDLEdBQWEsQ0FBQyxDQUFBO1NBQ2pDO1FBRUQsSUFBSSxJQUE2QixDQUFBO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7U0FDeEI7YUFBTTtZQUNMLGlCQUFpQjtZQUNqQixJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsQ0FBQTthQUNoRDtZQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUUsQ0FBQTthQUM5QztTQUNGO1FBRUQsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBRWYsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRXhCLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUN6QixxQkFBcUI7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsbUJBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDbEY7WUFDRCxjQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsbURBQWlELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUcsQ0FBQyxDQUFBO1lBRXJHLCtCQUErQjtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzlCLHlCQUF5QjtZQUN6QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3ZGO1NBRUY7YUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFFN0MsbUJBQW1CO1lBQ25CLElBQU0sTUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLGlCQUFRLENBQUE7WUFDdEYsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ3pCLHFCQUFxQjtnQkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO2FBQzVFO1lBRUQsY0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLG1EQUFpRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFHLENBQUMsQ0FBQTtZQUVyRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQUksS0FBSyxpQkFBUSxDQUFDLENBQUMsQ0FBQyxNQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUU3RCxJQUFJLE1BQUksS0FBSyxpQkFBUSxFQUFFO2dCQUNyQixvQkFBb0I7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsd0JBQU8sSUFBSSxLQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUcsQ0FBQyxDQUFBO2dCQUN2RyxDQUFDLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLGdCQUFnQjtnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHdCQUFPLElBQUksS0FBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBRyxDQUFDLENBQUE7Z0JBQ3RGLENBQUMsQ0FBQyxDQUFBO2FBQ0g7U0FDRjthQUFNO1lBQ0wsYUFBYTtZQUNiLGNBQUssQ0FBRSxPQUFPLEtBQUssS0FBSyxVQUFVLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUM3RCwrQ0FBOEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBSSxDQUFDLENBQUE7WUFFeEYsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVPLDhCQUFVLEdBQWxCLFVBQW9CLE9BQVksRUFBRSxJQUFnQjtRQUFsRCxpQkEyQ0M7UUExQ0MsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQUUsT0FBTyxPQUFPLENBQUE7U0FBRTtRQUVuRCxJQUFBLE1BQU0sR0FBaUIsSUFBSSxPQUFyQixFQUFFLEdBQUcsR0FBWSxJQUFJLElBQWhCLEVBQUUsS0FBSyxHQUFLLElBQUksTUFBVCxDQUFTO1FBQzNCLElBQUEsSUFBSSxHQUFrQixPQUFPLEdBQXpCLEVBQUUsRUFBRSxHQUFjLE9BQU8sR0FBckIsRUFBSyxJQUFJLEdBQUssT0FBTyxTQUFaLENBQVk7UUFFckMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLENBQUE7UUFDN0MsY0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFLHlDQUF1QyxJQUFNLENBQUMsQ0FBQTtRQUVqRSxxQkFBcUI7UUFDckIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRXZFLElBQU0sTUFBTSxHQUFHLEVBQVMsQ0FBQTtRQUV4QixJQUFJLFVBQVUsS0FBSyxtQkFBVSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsRUFBRSxDQUFTO2dCQUNuQyxPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2xFLENBQUMsQ0FBQyxDQUFBO1NBQ0g7YUFBTSxJQUFJLFVBQVUsS0FBSyxpQkFBUSxFQUFFO1lBQ2xDLG1CQUFtQjtZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRS9DLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTtnQkFFM0YsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO2lCQUN4QjthQUNGO1NBQ0Y7YUFBTTtZQUNMLG9CQUFvQjtZQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELElBQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBRWhDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUU3RSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUE7aUJBQ3JCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLEtBQTJCLEVBQUUsWUFBbUI7UUFBbkIsNkJBQUEsRUFBQSxtQkFBbUI7UUFDakUsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ3JFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDekMsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFbEMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUMzQjtRQUVELElBQUksTUFBTSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUssQ0FBQTtRQUMzQyxjQUFLLENBQUUsQ0FBQyxNQUFNLEVBQUMsc0RBQXNELENBQUMsQ0FBQTtRQUV0RSxPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDckIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFHLENBQUUsQ0FBQTtZQUMxRCxjQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsdUNBQXFDLEtBQUssQ0FBQyxJQUFNLENBQUMsQ0FBQTtTQUNsRTtRQUVELElBQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBUSxDQUFBO1FBQ2hFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNwRCxJQUFNLElBQUksR0FBaUIsQ0FBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUUsQ0FBQTtRQUVuRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDbEQsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUN6QixJQUFJLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzdCO1lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLGlCQUFRLElBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNyRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQzlFO1NBQ0Y7UUFFRCxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSyxJQUFJLFVBQVUsSUFBSSxLQUFLLEVBQUU7WUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDNUc7UUFFRCxrQkFBa0I7UUFDbEIsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksWUFBWSxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzdCO1FBRUQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFvQixNQUFjOztRQUVoQyxlQUFlO1FBQ2YsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBZSxNQUFNLENBQUMsQ0FBQTtRQUVuRCxJQUFBLE9BQU8sR0FBa0MsWUFBWSxHQUE5QyxFQUFFLE1BQU0sR0FBMEIsWUFBWSxHQUF0QyxFQUFFLFNBQVMsR0FBZSxZQUFZLEdBQTNCLEVBQUssTUFBTSxHQUFJLFlBQVksU0FBaEIsQ0FBZ0I7UUFFNUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFFLENBQUE7UUFDM0MsY0FBSyxDQUFFLENBQUMsTUFBTSxFQUFFLG1EQUFpRCxNQUFNLGVBQVksQ0FBQyxDQUFBO1FBRXBGLElBQU0sS0FBSyxHQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUE7UUFFMUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ3JELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUVsRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFFMUMsa0JBQWtCO1lBQ2xCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQzdCO1lBRUQsZUFBZTtZQUNmLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNwQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssaUJBQVEsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRTtnQkFDbEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDZCxNQUFBLE1BQU0sQ0FBQyxJQUFJLDBDQUFFLElBQUksQ0FBQyxHQUFhLEVBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTthQUMzRTtpQkFBTTtnQkFDTCxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7YUFDeEU7U0FDRjtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRTtZQUN2QyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7U0FDbEY7UUFFRCxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUM3QjtRQUVELEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRWpELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUFxQixNQUFNLENBQUMsUUFBUSxFQUFJLENBQUMsQ0FBQTtTQUMxRDtRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxLQUFVO1FBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLE1BQWM7UUFDMUIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUF4UEQsSUF3UEM7QUF4UFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub3RlcGFjayBmcm9tIFwibm90ZXBhY2suaW9cIlxuXG5pbXBvcnQgeyBjaGVjaywgSVJldmVyc2libGVKc29uUGF0Y2gsIElTY2hlbWFOb2RlLCBNQVBfTk9ERSwgQVJSQVlfTk9ERSwgVFNjaGVtYVBhdGNoLCBUeXBlLCBJU2NoZW1hVHlwZSB9IGZyb20gXCIuL2NvbW1vblwiXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwiLi9zY2hlbWFcIlxuXG5pbnRlcmZhY2UgSUJ1aWxkTWV0YSB7XG4gIHBhcmVudD86IElTY2hlbWFOb2RlXG4gIGtleTogbnVtYmVyIHwgc3RyaW5nXG4gIGluZGV4OiBudW1iZXJcbiAgdXBkYXRlU2NoZW1hPzogYm9vbGVhblxuICBjaGVja0RlbGV0ZWQ/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjbGFzcyBQYXRjaFBhY2sge1xuICBwdWJsaWMgc2NoZW1hITogU2NoZW1hXG4gIGNvbnN0cnVjdG9yICh0eXBlcz86IHsgW3R5cGU6IHN0cmluZ106IHN0cmluZ1tdIHwgVHlwZTxhbnk+IH0pIHtcbiAgICB0aGlzLnNjaGVtYSA9IG5ldyBTY2hlbWEodHlwZXMgfHwge30pXG4gIH1cblxuICBwdWJsaWMgZW5jb2RlU3RhdGUodmFsdWU6IGFueSwgaW5jbHVkZVR5cGVzID0gdHJ1ZSwgdXBkYXRlU2NoZW1hID0gdHJ1ZSk6IEJ1ZmZlciB7XG4gICAgLy8gZW5jb2RlIHJvb3Qgbm9kZVxuICAgIGNvbnN0IGVuY29kZWQgPSB0aGlzLmVuY29kZU5vZGUodmFsdWUsIHsga2V5OiBcIlwiLCBpbmRleDogLTEsIHVwZGF0ZVNjaGVtYSB9KVxuXG4gICAgLy8gZW5jb2RlIHNuYXBzaG90IG5vZGVzIGFuZCBzY2hlbWFcbiAgICBjb25zdCBzbmFwc2hvdCA9IFsgZW5jb2RlZCwgLi4uaW5jbHVkZVR5cGVzID8gW3RoaXMuc2NoZW1hLnR5cGVzXSA6IFtdIF1cblxuICAgIC8vIHJldHVybiBwYWNrZWQgc25hcHNob3RcbiAgICByZXR1cm4gbm90ZXBhY2suZW5jb2RlKHNuYXBzaG90KVxuICB9XG5cbiAgcHVibGljIGRlY29kZVN0YXRlPFQgPSBhbnk+KGJ1ZmZlcjogQnVmZmVyKSB7XG4gICAgY29uc3QgW2VuY29kZWROb2RlLCB0eXBlc10gPSBub3RlcGFjay5kZWNvZGUoYnVmZmVyKVxuXG4gICAgLy8gYXBwbHkgc2NoZW1hIHR5cGVzXG4gICAgdGhpcy5zY2hlbWEuaW5pdCh0eXBlcylcblxuICAgIC8vIGRlY29kZSBzbmFwc2hvdFxuICAgIHJldHVybiB0aGlzLmRlY29kZU5vZGUoZW5jb2RlZE5vZGUsIHsga2V5OiBcIlwiLCBpbmRleDogLTEgfSlcbiAgfVxuXG4gIHByaXZhdGUgZW5jb2RlTm9kZSh2YWx1ZTogYW55LCBtZXRhOiBJQnVpbGRNZXRhKTogYW55IHtcbiAgICBjb25zdCB7IHBhcmVudCwga2V5ID0gXCJcIiwgaW5kZXggPSAtMSwgdXBkYXRlU2NoZW1hID0gdHJ1ZSwgY2hlY2tEZWxldGVkIH0gPSBtZXRhXG5cbiAgICAvLyBhZGQga2V5IHRvIG1hcCBzY2hlbWEga2V5c1xuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09IE1BUF9OT0RFICYmIHVwZGF0ZVNjaGVtYSkge1xuICAgICAgcGFyZW50LmtleXMhLnB1c2goa2V5IGFzIHN0cmluZylcbiAgICB9XG5cbiAgICBsZXQgbm9kZTogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWRcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgbm9kZSA9IHRoaXMuc2NoZW1hLnJvb3RcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZ2V0IGNoaWxkIG5vZGVcbiAgICAgIGlmIChjaGVja0RlbGV0ZWQpIHtcbiAgICAgICAgbm9kZSA9IHRoaXMuc2NoZW1hLmdldERlbGV0ZWROb2RlKHBhcmVudCwga2V5KSFcbiAgICAgIH1cbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICBub2RlID0gdGhpcy5zY2hlbWEuZ2V0Q2hpbGROb2RlKHBhcmVudCwga2V5KSFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gW11cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXG4gICAgICBpZiAoIW5vZGUgJiYgdXBkYXRlU2NoZW1hKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBzY2hlbWEgbm9kZVxuICAgICAgICBub2RlID0gdGhpcy5zY2hlbWEuY3JlYXRlTm9kZSh0aGlzLnNjaGVtYS5uZXh0SWQsIHBhcmVudCwgQVJSQVlfTk9ERSwga2V5LCBpbmRleClcbiAgICAgIH1cbiAgICAgIGNoZWNrKCFub2RlLCBgQ2Fubm90IGVuY29kZSB2YWx1ZSAtIG5vZGUgbm90IGZvdW5kIG9uIHBhdGg6ICR7dGhpcy5zY2hlbWEuZ2V0Tm9kZVBhdGgocGFyZW50LCBrZXkpfWApXG5cbiAgICAgIC8vIHNldCBlbmNvZGVkIG5vZGUgdHlwZSBhbmQgaWRcbiAgICAgIGRhdGEucHVzaChBUlJBWV9OT0RFLCBub2RlLmlkKVxuICAgICAgLy8gc2V0IGVuY29kZWQgbm9kZSBpdGVtc1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLmVuY29kZU5vZGUodmFsdWVbaV0sIHsgcGFyZW50OiBub2RlLCBrZXk6IGksIGluZGV4OiBpLCB1cGRhdGVTY2hlbWEgfSkpXG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSkge1xuXG4gICAgICAvLyBjaGVjayB2YWx1ZSB0eXBlXG4gICAgICBjb25zdCB0eXBlID0gbm9kZSA/IG5vZGUudHlwZSBhcyBJU2NoZW1hVHlwZSA6IHRoaXMuc2NoZW1hLmZpbmRUeXBlKHZhbHVlKSB8fCBNQVBfTk9ERVxuICAgICAgaWYgKCFub2RlICYmIHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICAvLyBjcmVhdGUgc2NoZW1hIG5vZGVcbiAgICAgICAgbm9kZSA9IHRoaXMuc2NoZW1hLmNyZWF0ZU5vZGUodGhpcy5zY2hlbWEubmV4dElkLCBwYXJlbnQsIHR5cGUsIGtleSwgaW5kZXgpXG4gICAgICB9XG5cbiAgICAgIGNoZWNrKCFub2RlLCBgQ2Fubm90IGVuY29kZSB2YWx1ZSAtIG5vZGUgbm90IGZvdW5kIG9uIHBhdGg6ICR7dGhpcy5zY2hlbWEuZ2V0Tm9kZVBhdGgocGFyZW50LCBrZXkpfWApXG5cbiAgICAgIGRhdGEucHVzaCh0eXBlICE9PSBNQVBfTk9ERSA/IHR5cGUuaW5kZXggOiBNQVBfTk9ERSwgbm9kZS5pZClcblxuICAgICAgaWYgKHR5cGUgIT09IE1BUF9OT0RFKSB7XG4gICAgICAgIC8vIHNldCBlbmNvZGVkIHByb3BzXG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgZGF0YS5wdXNoKHRoaXMuZW5jb2RlTm9kZSh2YWx1ZVtrXSwgeyAuLi5tZXRhLCBwYXJlbnQ6IG5vZGUsIGtleTogaywgaW5kZXg6IHR5cGUucHJvcHMuaW5kZXhPZihrKSB9KSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNldCBtYXAgaXRlbXNcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGssIGkpID0+IHtcbiAgICAgICAgICBkYXRhLnB1c2goaywgdGhpcy5lbmNvZGVOb2RlKHZhbHVlW2tdLCB7IC4uLm1ldGEsIHBhcmVudDogbm9kZSwga2V5OiBrLCBpbmRleDogaSB9KSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgdHlwZVxuICAgICAgY2hlY2sgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzeW1ib2xcIixcbiAgICAgICAgYENhbm5vdCBlbmNvZGUgdmFsdWUgLSB3cm9uZyB2YWx1ZSBvbiBwYXRoICR7IHRoaXMuc2NoZW1hLmdldE5vZGVQYXRoKHBhcmVudCwga2V5KSB9YClcblxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlTm9kZSAoZW5jb2RlZDogYW55LCBtZXRhOiBJQnVpbGRNZXRhKTogYW55IHtcbiAgICAvLyBjaGVjayBpZiBlbmNvZGVkIHByaW1pdGl2ZSB2YWx1ZVxuICAgIGlmICghZW5jb2RlZCB8fCAhQXJyYXkuaXNBcnJheShlbmNvZGVkKSkgeyByZXR1cm4gZW5jb2RlZCB9XG5cbiAgICBjb25zdCB7IHBhcmVudCwga2V5LCBpbmRleCB9ID0gbWV0YVxuICAgIGNvbnN0IFsgdHlwZSwgaWQsIC4uLmRhdGEgXSA9IGVuY29kZWRcblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSB0aGlzLnNjaGVtYS5nZXRUeXBlKHR5cGUpIVxuICAgIGNoZWNrKCFzY2hlbWFUeXBlLCBgQ2Fubm90IGRlY29kZSBzdGF0ZSAtIHVua25vd24gdHlwZTogJHt0eXBlfWApXG5cbiAgICAvLyBjcmVhdGUgc2NoZW1hIG5vZGVcbiAgICBjb25zdCBub2RlID0gdGhpcy5zY2hlbWEuY3JlYXRlTm9kZShpZCwgcGFyZW50LCBzY2hlbWFUeXBlLCBrZXksIGluZGV4KVxuXG4gICAgY29uc3QgcmVzdWx0ID0ge30gYXMgYW55XG5cbiAgICBpZiAoc2NoZW1hVHlwZSA9PT0gQVJSQVlfTk9ERSkge1xuICAgICAgcmV0dXJuIGRhdGEubWFwKChpdGVtOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVOb2RlKGl0ZW0sIHsgcGFyZW50OiBub2RlLCBpbmRleDogaSwga2V5OiBpIH0pXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoc2NoZW1hVHlwZSA9PT0gTUFQX05PREUpIHtcbiAgICAgIC8vIGRlY29kZSBtYXAgaXRlbXNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBjb25zdCBjaGlsZEluZGV4ID0gbm9kZS5rZXlzIS5wdXNoKGRhdGFbaV0pIC0gMVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kZWNvZGVOb2RlKGRhdGFbaSsxXSwgeyBwYXJlbnQ6IG5vZGUsIGtleTogZGF0YVtpXSwgaW5kZXg6IGNoaWxkSW5kZXggfSlcblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdFtkYXRhW2ldXSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVjb2RlIHR5cGUgcHJvcHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NoZW1hVHlwZS5wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9wID0gc2NoZW1hVHlwZS5wcm9wc1tpXVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kZWNvZGVOb2RlKGRhdGFbaV0sIHsgcGFyZW50OiBub2RlLCBrZXk6IHByb3AsIGluZGV4OiBpIH0pXG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHB1YmxpYyBlbmNvZGVQYXRjaChwYXRjaDogSVJldmVyc2libGVKc29uUGF0Y2gsIHVwZGF0ZVNjaGVtYSA9IHRydWUpOiBCdWZmZXIge1xuICAgIGNvbnN0IHBhdGggPSBwYXRjaC5wYXRoWzBdID09PSBcIi9cIiA/IHBhdGNoLnBhdGguc2xpY2UoMSkgOiBwYXRjaC5wYXRoXG4gICAgY29uc3QgcGF0aEFyciA9IHBhdGguc3BsaXQoXCIvXCIpLnJldmVyc2UoKVxuICAgIGNvbnN0IGtleSA9IHBhdGhBcnIuc3BsaWNlKDAsMSlbMF1cblxuICAgIGlmICh1cGRhdGVTY2hlbWEpIHtcbiAgICAgIHRoaXMuc2NoZW1hLmNsZWFyRGVsZXRlZCgpXG4gICAgfVxuXG4gICAgbGV0IHBhcmVudDogSVNjaGVtYU5vZGUgPSB0aGlzLnNjaGVtYS5yb290IVxuICAgIGNoZWNrICghcGFyZW50LGBDYW5ub3QgZW5jb2RlIHBhdGNoLCB5b3UgbmVlZCB0byBidWlsZCBzY2hlbWEgZmlyc3QhYClcblxuICAgIHdoaWxlIChwYXRoQXJyLmxlbmd0aCkge1xuICAgICAgcGFyZW50ID0gdGhpcy5zY2hlbWEuZ2V0Q2hpbGROb2RlKHBhcmVudCwgcGF0aEFyci5wb3AoKSEpIVxuICAgICAgY2hlY2soIXBhcmVudCwgYENhbm5vdCBhZGQgbmV3IG5vZGUgLSB3cm9uZyBwYXRoOiAke3BhdGNoLnBhdGh9YClcbiAgICB9XG5cbiAgICBjb25zdCBvcCA9IFtcImFkZFwiLCBcInJlcGxhY2VcIiwgXCJyZW1vdmVcIl0uaW5kZXhPZihwYXRjaC5vcCkgYXMgYW55XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNjaGVtYS5nZXRDaGlsZEluZGV4KHBhcmVudCwga2V5KVxuICAgIGNvbnN0IGRhdGE6IFRTY2hlbWFQYXRjaCA9IFsgb3AsIHBhcmVudC5pZCwgaW5kZXggXVxuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2NoZW1hLmdldENoaWxkTm9kZShwYXJlbnQsIGtleSlcbiAgICBpZiAocGF0Y2gub3AgIT09IFwicmVtb3ZlXCIpIHtcbiAgICAgIGlmIChub2RlICYmIHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICB0aGlzLnNjaGVtYS5kZWxldGVOb2RlKG5vZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gTUFQX05PREUgJiYgcGF0Y2gub3AgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgZGF0YS5wdXNoKFtrZXksIHRoaXMuZW5jb2RlTm9kZShwYXRjaC52YWx1ZSwgeyBwYXJlbnQsIGtleSwgaW5kZXgsIHVwZGF0ZVNjaGVtYSB9KV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5lbmNvZGVOb2RlKHBhdGNoLnZhbHVlLCB7IHBhcmVudCwga2V5LCBpbmRleCwgdXBkYXRlU2NoZW1hIH0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXRjaC5vcCAhPT0gXCJhZGRcIiAmJiBcIm9sZFZhbHVlXCIgaW4gcGF0Y2gpIHtcbiAgICAgIGRhdGEucHVzaCh0aGlzLmVuY29kZU5vZGUocGF0Y2gub2xkVmFsdWUsIHsgcGFyZW50LCBrZXksIGluZGV4LCB1cGRhdGVTY2hlbWE6IGZhbHNlLCBjaGVja0RlbGV0ZWQ6IHRydWUgfSkpXG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIG9sZCBub2RlXG4gICAgaWYgKHBhdGNoLm9wICE9PSBcInJlbW92ZVwiICYmIG5vZGUgJiYgdXBkYXRlU2NoZW1hKSB7XG4gICAgICB0aGlzLnNjaGVtYS5kZWxldGVOb2RlKG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vdGVwYWNrLmVuY29kZShkYXRhKVxuICB9XG5cbiAgcHVibGljIGRlY29kZVBhdGNoIChidWZmZXI6IEJ1ZmZlcik6IElSZXZlcnNpYmxlSnNvblBhdGNoIHtcblxuICAgIC8vIGVuY29kZSBwYXRjaFxuICAgIGNvbnN0IGVuY29kZWRQYXRjaCA9IG5vdGVwYWNrLmRlY29kZTxUU2NoZW1hUGF0Y2g+KGJ1ZmZlcilcblxuICAgIGNvbnN0IFtvcEluZGV4LCBub2RlSWQsIHByb3BJbmRleCwgLi4udmFsdWVzXSA9IGVuY29kZWRQYXRjaFxuXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5zY2hlbWEuZ2V0Tm9kZShub2RlSWQpIVxuICAgIGNoZWNrICghcGFyZW50LCBgQ2Fubm90IGRlY29kZSBwYXRjaCAtIHNjaGVtYSBmb3Igbm9kZSB3aXRoIGlkICR7bm9kZUlkfSBub3QgZm91bmRgKVxuXG4gICAgY29uc3QgcGF0Y2g6IGFueSA9IHsgb3A6IFtcImFkZFwiLCBcInJlcGxhY2VcIiwgXCJyZW1vdmVcIl1bb3BJbmRleF0sIHBhdGg6ICcnIH1cblxuICAgIGxldCBrZXkgPSB0aGlzLnNjaGVtYS5nZXRDaGlsZE5hbWUocGFyZW50LCBwcm9wSW5kZXgpXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2NoZW1hLmdldENoaWxkTm9kZShwYXJlbnQsIGtleSlcblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoICYmIHBhdGNoLm9wICE9PSBcInJlbW92ZVwiKSB7XG5cbiAgICAgIC8vIHJldm9tZSBvbGQgbm9kZVxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgdGhpcy5zY2hlbWEuZGVsZXRlTm9kZShub2RlKVxuICAgICAgfVxuXG4gICAgICAvLyBkZWNvZGUgdmFsdWVcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzLnJldmVyc2UoKS5wb3AoKVxuICAgICAgaWYgKHBhcmVudC50eXBlID09PSBNQVBfTk9ERSAmJiBwYXRjaC5vcCA9PT0gXCJhZGRcIikge1xuICAgICAgICBrZXkgPSB2YWx1ZVswXVxuICAgICAgICBwYXJlbnQua2V5cz8ucHVzaChrZXkgYXMgc3RyaW5nKVxuICAgICAgICBwYXRjaC52YWx1ZSA9IHRoaXMuZGVjb2RlTm9kZSh2YWx1ZVsxXSwgeyBwYXJlbnQsIGtleSwgaW5kZXg6IHByb3BJbmRleCB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF0Y2gudmFsdWUgPSB0aGlzLmRlY29kZU5vZGUodmFsdWUsIHsgcGFyZW50LCBrZXksIGluZGV4OiBwcm9wSW5kZXggfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCAmJiBwYXRjaC5vcCAhPT0gXCJhZGRcIikge1xuICAgICAgcGF0Y2gub2xkVmFsdWUgPSB0aGlzLmRlY29kZU5vZGUodmFsdWVzLnBvcCgpLCB7IHBhcmVudCwga2V5LCBpbmRleDogcHJvcEluZGV4IH0pXG4gICAgfVxuXG4gICAgaWYgKG5vZGUgJiYgcGF0Y2gub3AgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgIHRoaXMuc2NoZW1hLmRlbGV0ZU5vZGUobm9kZSlcbiAgICB9XG5cbiAgICBwYXRjaC5wYXRoID0gdGhpcy5zY2hlbWEuZ2V0Tm9kZVBhdGgocGFyZW50LCBrZXkpXG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgcGFyYW1zOiAke3ZhbHVlcy50b1N0cmluZygpfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGNoXG4gIH1cblxuICBwdWJsaWMgZW5jb2RlKHZhbHVlOiBhbnkpOiBCdWZmZXIge1xuICAgIHJldHVybiBub3RlcGFjay5lbmNvZGUodmFsdWUpXG4gIH1cblxuICBwdWJsaWMgZGVjb2RlKGJ1ZmZlcjogQnVmZmVyKTogYW55IHtcbiAgICByZXR1cm4gbm90ZXBhY2suZGVjb2RlKGJ1ZmZlcilcbiAgfVxufVxuIl19

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports.encode = __webpack_require__(5);
exports.decode = __webpack_require__(6);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function utf8Write(view, offset, str) {
  var c = 0;
  for (var i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 0x80) {
      view.setUint8(offset++, c);
    }
    else if (c < 0x800) {
      view.setUint8(offset++, 0xc0 | (c >> 6));
      view.setUint8(offset++, 0x80 | (c & 0x3f));
    }
    else if (c < 0xd800 || c >= 0xe000) {
      view.setUint8(offset++, 0xe0 | (c >> 12));
      view.setUint8(offset++, 0x80 | (c >> 6) & 0x3f);
      view.setUint8(offset++, 0x80 | (c & 0x3f));
    }
    else {
      i++;
      c = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
      view.setUint8(offset++, 0xf0 | (c >> 18));
      view.setUint8(offset++, 0x80 | (c >> 12) & 0x3f);
      view.setUint8(offset++, 0x80 | (c >> 6) & 0x3f);
      view.setUint8(offset++, 0x80 | (c & 0x3f));
    }
  }
}

function utf8Length(str) {
  var c = 0, length = 0;
  for (var i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i);
    if (c < 0x80) {
      length += 1;
    }
    else if (c < 0x800) {
      length += 2;
    }
    else if (c < 0xd800 || c >= 0xe000) {
      length += 3;
    }
    else {
      i++;
      length += 4;
    }
  }
  return length;
}

function _encode(bytes, defers, value) {
  var type = typeof value, i = 0, l = 0, hi = 0, lo = 0, length = 0, size = 0;

  if (type === 'string') {
    length = utf8Length(value);

    // fixstr
    if (length < 0x20) {
      bytes.push(length | 0xa0);
      size = 1;
    }
    // str 8
    else if (length < 0x100) {
      bytes.push(0xd9, length);
      size = 2;
    }
    // str 16
    else if (length < 0x10000) {
      bytes.push(0xda, length >> 8, length);
      size = 3;
    }
    // str 32
    else if (length < 0x100000000) {
      bytes.push(0xdb, length >> 24, length >> 16, length >> 8, length);
      size = 5;
    } else {
      throw new Error('String too long');
    }
    defers.push({ _str: value, _length: length, _offset: bytes.length });
    return size + length;
  }
  if (type === 'number') {
    // TODO: encode to float 32?

    // float 64
    if (Math.floor(value) !== value || !isFinite(value)) {
      bytes.push(0xcb);
      defers.push({ _float: value, _length: 8, _offset: bytes.length });
      return 9;
    }

    if (value >= 0) {
      // positive fixnum
      if (value < 0x80) {
        bytes.push(value);
        return 1;
      }
      // uint 8
      if (value < 0x100) {
        bytes.push(0xcc, value);
        return 2;
      }
      // uint 16
      if (value < 0x10000) {
        bytes.push(0xcd, value >> 8, value);
        return 3;
      }
      // uint 32
      if (value < 0x100000000) {
        bytes.push(0xce, value >> 24, value >> 16, value >> 8, value);
        return 5;
      }
      // uint 64
      hi = (value / Math.pow(2, 32)) >> 0;
      lo = value >>> 0;
      bytes.push(0xcf, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
      return 9;
    } else {
      // negative fixnum
      if (value >= -0x20) {
        bytes.push(value);
        return 1;
      }
      // int 8
      if (value >= -0x80) {
        bytes.push(0xd0, value);
        return 2;
      }
      // int 16
      if (value >= -0x8000) {
        bytes.push(0xd1, value >> 8, value);
        return 3;
      }
      // int 32
      if (value >= -0x80000000) {
        bytes.push(0xd2, value >> 24, value >> 16, value >> 8, value);
        return 5;
      }
      // int 64
      hi = Math.floor(value / Math.pow(2, 32));
      lo = value >>> 0;
      bytes.push(0xd3, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
      return 9;
    }
  }
  if (type === 'object') {
    // nil
    if (value === null) {
      bytes.push(0xc0);
      return 1;
    }

    if (Array.isArray(value)) {
      length = value.length;

      // fixarray
      if (length < 0x10) {
        bytes.push(length | 0x90);
        size = 1;
      }
      // array 16
      else if (length < 0x10000) {
        bytes.push(0xdc, length >> 8, length);
        size = 3;
      }
      // array 32
      else if (length < 0x100000000) {
        bytes.push(0xdd, length >> 24, length >> 16, length >> 8, length);
        size = 5;
      } else {
        throw new Error('Array too large');
      }
      for (i = 0; i < length; i++) {
        size += _encode(bytes, defers, value[i]);
      }
      return size;
    }

    // fixext 8 / Date
    if (value instanceof Date) {
      var time = value.getTime();
      hi = Math.floor(time / Math.pow(2, 32));
      lo = time >>> 0;
      bytes.push(0xd7, 0, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
      return 10;
    }

    if (value instanceof ArrayBuffer) {
      length = value.byteLength;

      // bin 8
      if (length < 0x100) {
        bytes.push(0xc4, length);
        size = 2;
      } else
      // bin 16
      if (length < 0x10000) {
        bytes.push(0xc5, length >> 8, length);
        size = 3;
      } else
      // bin 32
      if (length < 0x100000000) {
        bytes.push(0xc6, length >> 24, length >> 16, length >> 8, length);
        size = 5;
      } else {
        throw new Error('Buffer too large');
      }
      defers.push({ _bin: value, _length: length, _offset: bytes.length });
      return size + length;
    }

    if (typeof value.toJSON === 'function') {
      return _encode(bytes, defers, value.toJSON());
    }

    var keys = [], key = '';

    var allKeys = Object.keys(value);
    for (i = 0, l = allKeys.length; i < l; i++) {
      key = allKeys[i];
      if (typeof value[key] !== 'function') {
        keys.push(key);
      }
    }
    length = keys.length;

    // fixmap
    if (length < 0x10) {
      bytes.push(length | 0x80);
      size = 1;
    }
    // map 16
    else if (length < 0x10000) {
      bytes.push(0xde, length >> 8, length);
      size = 3;
    }
    // map 32
    else if (length < 0x100000000) {
      bytes.push(0xdf, length >> 24, length >> 16, length >> 8, length);
      size = 5;
    } else {
      throw new Error('Object too large');
    }

    for (i = 0; i < length; i++) {
      key = keys[i];
      size += _encode(bytes, defers, key);
      size += _encode(bytes, defers, value[key]);
    }
    return size;
  }
  // false/true
  if (type === 'boolean') {
    bytes.push(value ? 0xc3 : 0xc2);
    return 1;
  }
  // fixext 1 / undefined
  if (type === 'undefined') {
    bytes.push(0xd4, 0, 0);
    return 3;
  }
  throw new Error('Could not encode');
}

function encode(value) {
  var bytes = [];
  var defers = [];
  var size = _encode(bytes, defers, value);
  var buf = new ArrayBuffer(size);
  var view = new DataView(buf);

  var deferIndex = 0;
  var deferWritten = 0;
  var nextOffset = -1;
  if (defers.length > 0) {
    nextOffset = defers[0]._offset;
  }

  var defer, deferLength = 0, offset = 0;
  for (var i = 0, l = bytes.length; i < l; i++) {
    view.setUint8(deferWritten + i, bytes[i]);
    if (i + 1 !== nextOffset) { continue; }
    defer = defers[deferIndex];
    deferLength = defer._length;
    offset = deferWritten + nextOffset;
    if (defer._bin) {
      var bin = new Uint8Array(defer._bin);
      for (var j = 0; j < deferLength; j++) {
        view.setUint8(offset + j, bin[j]);
      }
    } else if (defer._str) {
      utf8Write(view, offset, defer._str);
    } else if (defer._float !== undefined) {
      view.setFloat64(offset, defer._float);
    }
    deferIndex++;
    deferWritten += deferLength;
    if (defers[deferIndex]) {
      nextOffset = defers[deferIndex]._offset;
    }
  }
  return buf;
}

module.exports = encode;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Decoder(buffer) {
  this._offset = 0;
  if (buffer instanceof ArrayBuffer) {
    this._buffer = buffer;
    this._view = new DataView(this._buffer);
  } else if (ArrayBuffer.isView(buffer)) {
    this._buffer = buffer.buffer;
    this._view = new DataView(this._buffer, buffer.byteOffset, buffer.byteLength);
  } else {
    throw new Error('Invalid argument');
  }
}

function utf8Read(view, offset, length) {
  var string = '', chr = 0;
  for (var i = offset, end = offset + length; i < end; i++) {
    var byte = view.getUint8(i);
    if ((byte & 0x80) === 0x00) {
      string += String.fromCharCode(byte);
      continue;
    }
    if ((byte & 0xe0) === 0xc0) {
      string += String.fromCharCode(
        ((byte & 0x1f) << 6) |
        (view.getUint8(++i) & 0x3f)
      );
      continue;
    }
    if ((byte & 0xf0) === 0xe0) {
      string += String.fromCharCode(
        ((byte & 0x0f) << 12) |
        ((view.getUint8(++i) & 0x3f) << 6) |
        ((view.getUint8(++i) & 0x3f) << 0)
      );
      continue;
    }
    if ((byte & 0xf8) === 0xf0) {
      chr = ((byte & 0x07) << 18) |
        ((view.getUint8(++i) & 0x3f) << 12) |
        ((view.getUint8(++i) & 0x3f) << 6) |
        ((view.getUint8(++i) & 0x3f) << 0);
      if (chr >= 0x010000) { // surrogate pair
        chr -= 0x010000;
        string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
      } else {
        string += String.fromCharCode(chr);
      }
      continue;
    }
    throw new Error('Invalid byte ' + byte.toString(16));
  }
  return string;
}

Decoder.prototype._array = function (length) {
  var value = new Array(length);
  for (var i = 0; i < length; i++) {
    value[i] = this._parse();
  }
  return value;
};

Decoder.prototype._map = function (length) {
  var key = '', value = {};
  for (var i = 0; i < length; i++) {
    key = this._parse();
    value[key] = this._parse();
  }
  return value;
};

Decoder.prototype._str = function (length) {
  var value = utf8Read(this._view, this._offset, length);
  this._offset += length;
  return value;
};

Decoder.prototype._bin = function (length) {
  var value = this._buffer.slice(this._offset, this._offset + length);
  this._offset += length;
  return value;
};

Decoder.prototype._parse = function () {
  var prefix = this._view.getUint8(this._offset++);
  var value, length = 0, type = 0, hi = 0, lo = 0;

  if (prefix < 0xc0) {
    // positive fixint
    if (prefix < 0x80) {
      return prefix;
    }
    // fixmap
    if (prefix < 0x90) {
      return this._map(prefix & 0x0f);
    }
    // fixarray
    if (prefix < 0xa0) {
      return this._array(prefix & 0x0f);
    }
    // fixstr
    return this._str(prefix & 0x1f);
  }

  // negative fixint
  if (prefix > 0xdf) {
    return (0xff - prefix + 1) * -1;
  }

  switch (prefix) {
    // nil
    case 0xc0:
      return null;
    // false
    case 0xc2:
      return false;
    // true
    case 0xc3:
      return true;

    // bin
    case 0xc4:
      length = this._view.getUint8(this._offset);
      this._offset += 1;
      return this._bin(length);
    case 0xc5:
      length = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._bin(length);
    case 0xc6:
      length = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._bin(length);

    // ext
    case 0xc7:
      length = this._view.getUint8(this._offset);
      type = this._view.getInt8(this._offset + 1);
      this._offset += 2;
      return [type, this._bin(length)];
    case 0xc8:
      length = this._view.getUint16(this._offset);
      type = this._view.getInt8(this._offset + 2);
      this._offset += 3;
      return [type, this._bin(length)];
    case 0xc9:
      length = this._view.getUint32(this._offset);
      type = this._view.getInt8(this._offset + 4);
      this._offset += 5;
      return [type, this._bin(length)];

    // float
    case 0xca:
      value = this._view.getFloat32(this._offset);
      this._offset += 4;
      return value;
    case 0xcb:
      value = this._view.getFloat64(this._offset);
      this._offset += 8;
      return value;

    // uint
    case 0xcc:
      value = this._view.getUint8(this._offset);
      this._offset += 1;
      return value;
    case 0xcd:
      value = this._view.getUint16(this._offset);
      this._offset += 2;
      return value;
    case 0xce:
      value = this._view.getUint32(this._offset);
      this._offset += 4;
      return value;
    case 0xcf:
      hi = this._view.getUint32(this._offset) * Math.pow(2, 32);
      lo = this._view.getUint32(this._offset + 4);
      this._offset += 8;
      return hi + lo;

    // int
    case 0xd0:
      value = this._view.getInt8(this._offset);
      this._offset += 1;
      return value;
    case 0xd1:
      value = this._view.getInt16(this._offset);
      this._offset += 2;
      return value;
    case 0xd2:
      value = this._view.getInt32(this._offset);
      this._offset += 4;
      return value;
    case 0xd3:
      hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
      lo = this._view.getUint32(this._offset + 4);
      this._offset += 8;
      return hi + lo;

    // fixext
    case 0xd4:
      type = this._view.getInt8(this._offset);
      this._offset += 1;
      if (type === 0x00) {
        this._offset += 1;
        return void 0;
      }
      return [type, this._bin(1)];
    case 0xd5:
      type = this._view.getInt8(this._offset);
      this._offset += 1;
      return [type, this._bin(2)];
    case 0xd6:
      type = this._view.getInt8(this._offset);
      this._offset += 1;
      return [type, this._bin(4)];
    case 0xd7:
      type = this._view.getInt8(this._offset);
      this._offset += 1;
      if (type === 0x00) {
        hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
        lo = this._view.getUint32(this._offset + 4);
        this._offset += 8;
        return new Date(hi + lo);
      }
      return [type, this._bin(8)];
    case 0xd8:
      type = this._view.getInt8(this._offset);
      this._offset += 1;
      return [type, this._bin(16)];

    // str
    case 0xd9:
      length = this._view.getUint8(this._offset);
      this._offset += 1;
      return this._str(length);
    case 0xda:
      length = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._str(length);
    case 0xdb:
      length = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._str(length);

    // array
    case 0xdc:
      length = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._array(length);
    case 0xdd:
      length = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._array(length);

    // map
    case 0xde:
      length = this._view.getUint16(this._offset);
      this._offset += 2;
      return this._map(length);
    case 0xdf:
      length = this._view.getUint32(this._offset);
      this._offset += 4;
      return this._map(length);
  }

  throw new Error('Could not parse');
};

function decode(buffer) {
  var decoder = new Decoder(buffer);
  var value = decoder._parse();
  if (decoder._offset !== buffer.byteLength) {
    throw new Error((buffer.byteLength - decoder._offset) + ' trailing bytes');
  }
  return value;
}

module.exports = decode;


/***/ })
/******/ ]);
});