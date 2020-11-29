/*! patchpack@0.4.0 */
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
            common_1.check(index >= parent.keys.length, "Cannot decode value - map " + this.getNodePath(parent) + " doesnt hava key with index " + index + "\n" + parent.keys.toString());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBQTZHO0FBRTdHO0lBTUUsZ0JBQWEsS0FBOEM7UUFGbkQsWUFBTyxHQUFXLENBQUMsQ0FBQTtRQUd6QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsSUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFBO2FBQ3BDO2lCQUFNO2dCQUNMLHVDQUF1QztnQkFDdkMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQTthQUNuRjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHNCQUFXLHlCQUFLO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFFLEVBQWU7b0JBQWIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBO2dCQUFPLHVCQUFFLElBQUksR0FBSyxLQUFLO1lBQWhCLENBQWtCLENBQUMsQ0FBQTtRQUNsRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJCQUFP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QUFLLEVBQUU7WUFBaEMsQ0FBZ0MsQ0FBQyxDQUFBO1NBQ25GO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBZTtvQkFBYixNQUFNLFlBQUEsRUFBRSxHQUFHLFNBQUE7Z0JBQU8sT0FBQSxHQUFHLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxFQUFFO1lBQTdCLENBQTZCLENBQUMsQ0FBQTtTQUM5RTtJQUNILENBQUM7SUFFTSw2QkFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQTFKRCxJQTBKQztBQTFKWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1BUF9OT0RFLCBBUlJBWV9OT0RFLCBJU2NoZW1hVHlwZSwgSVNjaGVtYU5vZGUsIE5vZGVUeXBlLCBUU2NoZW1hVHlwZSwgVHlwZSwgY2hlY2sgfSBmcm9tIFwiLi9jb21tb25cIlxuXG5leHBvcnQgY2xhc3MgU2NoZW1hIHtcbiAgcHJpdmF0ZSBfdHlwZXMhOiBJU2NoZW1hVHlwZVtdXG4gIHByaXZhdGUgX25vZGVzITogSVNjaGVtYU5vZGVbXVxuICBwcml2YXRlIF9kZWxldGVkOiBJU2NoZW1hTm9kZVtdXG4gIHByaXZhdGUgX25leHRJZDogbnVtYmVyID0gMFxuXG4gIGNvbnN0cnVjdG9yICh0eXBlczogeyBbdHlwZTogc3RyaW5nXTogc3RyaW5nW10gfCBUeXBlPGFueT59KSB7XG4gICAgdGhpcy5fbm9kZXMgPSBbXVxuICAgIHRoaXMuX2RlbGV0ZWQgPSBbXVxuICAgIHRoaXMuX3R5cGVzID0gT2JqZWN0LmtleXModHlwZXMpLm1hcCgobmFtZSwgaSkgPT4ge1xuICAgICAgY29uc3QgdCA9IHR5cGVzW25hbWVdXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0KSkge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBwcm9wczogdCwgaW5kZXg6IGkgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuZXctcGFyZW5zXG4gICAgICAgIHJldHVybiB7IG5hbWU6IHQubmFtZSwgcHJvcHM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5ldyB0KSwgaW5kZXg6IGksIHJlZjogdH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldCB0eXBlcygpOiBUU2NoZW1hVHlwZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZXMubWFwKCggeyBuYW1lLCBwcm9wcyB9KSA9PiBbIG5hbWUsIC4uLnByb3BzIF0pXG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlbGV0ZWQoKTogSVNjaGVtYU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWRcbiAgfVxuXG4gIHB1YmxpYyBhZGRUeXBlKG5hbWU6IHN0cmluZywgcHJvcHM6IHN0cmluZ1tdLCByZWY/OiBUeXBlPGFueT4pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX3R5cGVzLmxlbmd0aFxuICAgIHRoaXMuX3R5cGVzLnB1c2goeyBuYW1lLCBwcm9wcywgaW5kZXgsIHJlZiB9KVxuICB9XG5cbiAgcHVibGljIHR5cGVCeU5hbWUobmFtZTogc3RyaW5nKTogSVNjaGVtYVR5cGUgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl90eXBlcy5maW5kKCh0KSA9PiB0Lm5hbWUgPT09IG5hbWUpXG4gIH1cblxuICBwdWJsaWMgZ2V0IHJvb3QoKTogSVNjaGVtYU5vZGUge1xuICAgIHJldHVybiB0aGlzLl9ub2Rlc1swXVxuICB9XG5cbiAgcHVibGljIGdldCBuZXh0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25leHRJZCsrXG4gIH1cblxuICBwdWJsaWMgaW5pdCh0eXBlczogVFNjaGVtYVR5cGVbXSkge1xuICAgIHRoaXMuX3R5cGVzID0gW11cbiAgICB0aGlzLl9ub2RlcyA9IFtdXG5cbiAgICB0eXBlcy5mb3JFYWNoKChbbmFtZSwgLi4ucHJvcHNdKSA9PiB0aGlzLl90eXBlcy5wdXNoKHsgbmFtZSwgcHJvcHMsIGluZGV4OiB0aGlzLl90eXBlcy5sZW5ndGggfSkpXG4gIH1cblxuICBwdWJsaWMgZ2V0Tm9kZShub2RlSWQ6IG51bWJlcik6IElTY2hlbWFOb2RlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZXMuZmluZCgobikgPT4gbi5pZCA9PT0gbm9kZUlkKVxuICB9XG5cbiAgcHVibGljIGdldE5vZGVQYXRoKHNuPzogSVNjaGVtYU5vZGUsIGtleT86IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IG5vZGUgPSBzblxuICAgIGNvbnN0IHBhdGhBcnIgPSBbXVxuICAgIHdoaWxlICghIW5vZGUpIHtcbiAgICAgIHBhdGhBcnIucHVzaChub2RlLmtleSlcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudCFcbiAgICB9XG4gICAgcmV0dXJuIHBhdGhBcnIucmV2ZXJzZSgpLmpvaW4oXCIvXCIpICsgKGtleSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IChcIi9cIiArIGtleSkpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hpbGROb2RlKHNuOiBJU2NoZW1hTm9kZSwgbmFtZTogc3RyaW5nIHwgbnVtYmVyKTogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWQge1xuICAgIGlmIChzbi50eXBlID09PSBNQVBfTk9ERSkge1xuICAgICAgcmV0dXJuIHNuLml0ZW1zLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gbmFtZSlcbiAgICB9IGVsc2UgaWYgKHNuLnR5cGUgPT09IEFSUkFZX05PREUpIHtcbiAgICAgIHJldHVybiBzbi5pdGVtcy5maW5kKCh7IGluZGV4IH0pID0+IGluZGV4ID09PSArbmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNuLml0ZW1zLmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gbmFtZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmluZFR5cGUodmFsdWU6IGFueSk6IElTY2hlbWFUeXBlIHwgdW5kZWZpbmVkIHtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcbiAgICBjb25zdCB0eXBlID0gdGhpcy5fdHlwZXMuZmluZCgodCkgPT4ge1xuICAgICAgaWYgKHQucmVmKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIHQucmVmXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmICh0LnByb3BzLmluZGV4T2Yoa2V5KSA8IDApIHsgcmV0dXJuIGZhbHNlIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgICByZXR1cm4gdHlwZVxuICB9XG5cbiAgcHVibGljIGdldFR5cGUoaW5kZXg6IG51bWJlcik6IE5vZGVUeXBlIHtcbiAgICByZXR1cm4gaW5kZXggPCAwID8gaW5kZXggYXMgTm9kZVR5cGUgOiB0aGlzLl90eXBlc1tpbmRleF1cbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZEluZGV4IChwYXJlbnQ6IElTY2hlbWFOb2RlLCBrZXk6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHBhcmVudC50eXBlID09PSBNQVBfTk9ERSkge1xuICAgICAgcmV0dXJuIHBhcmVudC5rZXlzIS5pbmRleE9mKGtleSBhcyBzdHJpbmcpXG4gICAgfSBlbHNlIGlmIChwYXJlbnQudHlwZSA9PT0gQVJSQVlfTk9ERSkge1xuICAgICAgcmV0dXJuICtrZXlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcmVudC50eXBlLnByb3BzLmluZGV4T2Yoa2V5IGFzIHN0cmluZylcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hpbGROYW1lIChwYXJlbnQ6IElTY2hlbWFOb2RlIHwgdW5kZWZpbmVkLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICBpZiAoIXBhcmVudCkgeyByZXR1cm4gXCJcIiB9XG4gICAgaWYgKHBhcmVudC50eXBlID09PSBNQVBfTk9ERSkge1xuICAgICAgY2hlY2sgKGluZGV4ID49IHBhcmVudC5rZXlzIS5sZW5ndGgsIGBDYW5ub3QgZGVjb2RlIHZhbHVlIC0gbWFwICR7IHRoaXMuZ2V0Tm9kZVBhdGgocGFyZW50KSB9IGRvZXNudCBoYXZhIGtleSB3aXRoIGluZGV4ICR7aW5kZXh9XFxuJHtwYXJlbnQua2V5cyEudG9TdHJpbmcoKX1gKVxuICAgICAgcmV0dXJuIHBhcmVudC5rZXlzIVtpbmRleF1cbiAgICB9IGVsc2UgaWYgKHBhcmVudC50eXBlID09PSBBUlJBWV9OT0RFKSB7XG4gICAgICByZXR1cm4gaW5kZXhcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcmVudC50eXBlLnByb3BzW2luZGV4XVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVOb2RlKGlkOiBudW1iZXIsIHBhcmVudDogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWQsIHR5cGU6IE5vZGVUeXBlLCBrZXk6IHN0cmluZyB8IG51bWJlciwgaW5kZXg6IG51bWJlcikge1xuXG4gICAgY29uc3Qgbm9kZTogSVNjaGVtYU5vZGUgPSB7IGlkLCB0eXBlLCBwYXJlbnQsIGtleSwgaW5kZXgsIGl0ZW1zOiBbXSB9XG5cbiAgICBpZiAodHlwZSA9PT0gTUFQX05PREUpIHtcbiAgICAgIG5vZGUua2V5cyA9IFtdXG4gICAgfVxuXG4gICAgcGFyZW50Py5pdGVtcy5wdXNoKG5vZGUpXG4gICAgdGhpcy5fbm9kZXMucHVzaChub2RlKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVOb2RlKG5vZGU6IElTY2hlbWFOb2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50KSB7XG4gICAgICBjb25zdCBpdGVtSW5kZXggPSBub2RlLnBhcmVudC5pdGVtcy5pbmRleE9mKG5vZGUpXG4gICAgICBub2RlLnBhcmVudC5pdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKVxuICAgIH1cbiAgICBub2RlLml0ZW1zLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLmRlbGV0ZU5vZGUoY2hpbGQpKVxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbm9kZXMuaW5kZXhPZihub2RlKVxuICAgIHRoaXMuX25vZGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLl9kZWxldGVkLnB1c2gobm9kZSlcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWxldGVkTm9kZShzbjogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWQsIG5hbWU6IHN0cmluZyB8IG51bWJlcik6IElTY2hlbWFOb2RlIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXNuKSB7IHJldHVybiB9XG4gICAgaWYgKHNuLnR5cGUgPT09IEFSUkFZX05PREUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWxldGVkLmZpbmQoKHsgcGFyZW50LCBpbmRleCB9KSA9PiBpbmRleCA9PT0gK25hbWUgJiYgcGFyZW50ID09PSBzbilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZWQuZmluZCgoeyBwYXJlbnQsIGtleSB9KSA9PiBrZXkgPT09IG5hbWUgJiYgcGFyZW50ID09PSBzbilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXJEZWxldGVkKCkge1xuICAgIHRoaXMuX2RlbGV0ZWQgPSBbXVxuICB9XG59XG4iXX0=

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
        var parent = meta.parent, key = meta.key, index = meta.index, _a = meta.updateSchema, updateSchema = _a === void 0 ? true : _a, _b = meta.checkDeleted, checkDeleted = _b === void 0 ? false : _b;
        var type = encoded[0], id = encoded[1], data = encoded.slice(2);
        var schemaType = this.schema.getType(type);
        common_1.check(!schemaType, "Cannot decode state - unknown type: " + type);
        var node;
        // create schema node
        if (updateSchema) {
            node = this.schema.createNode(id, parent, schemaType, key, index);
        }
        else {
            // get child node
            if (checkDeleted) {
                node = this.schema.getDeletedNode(parent, key);
            }
            if (!node && parent) {
                node = this.schema.getChildNode(parent, key);
            }
        }
        common_1.check(!node, "Cannot decode value - node for " + this.schema.getNodePath(parent, key) + " not found}");
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
        // get kety from new map item or from schema
        var key = parent.type === common_1.MAP_NODE && patch.op === "add"
            ? values[0][0]
            : this.schema.getChildName(parent, propIndex);
        // get node from schema
        var node = this.schema.getChildNode(parent, key);
        if (values.length && patch.op !== "remove") {
            // revome old node
            if (node) {
                this.schema.deleteNode(node);
            }
            // decode value
            var value = values.reverse().pop();
            if (parent.type === common_1.MAP_NODE && patch.op === "add") {
                (_a = parent.keys) === null || _a === void 0 ? void 0 : _a.push(key);
                patch.value = this.decodeNode(value[1], { parent: parent, key: key, index: propIndex });
            }
            else {
                patch.value = this.decodeNode(value, { parent: parent, key: key, index: propIndex });
            }
        }
        if (values.length && patch.op !== "add") {
            patch.oldValue = this.decodeNode(values.pop(), {
                parent: parent, key: key,
                index: propIndex, updateSchema: false, checkDeleted: true
            });
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
    PatchPack.encode = function (value) {
        return notepack.encode(value);
    };
    PatchPack.decode = function (buffer) {
        return notepack.decode(buffer);
    };
    return PatchPack;
}());
exports.PatchPack = PatchPack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hwYWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGNocGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXVDO0FBRXZDLG1DQUEwSDtBQUMxSCxtQ0FBaUM7QUFVakM7SUFFRSxtQkFBYSxLQUFnRDtRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsS0FBVSxFQUFFLFlBQW1CLEVBQUUsWUFBbUI7UUFBeEMsNkJBQUEsRUFBQSxtQkFBbUI7UUFBRSw2QkFBQSxFQUFBLG1CQUFtQjtRQUNyRSxtQkFBbUI7UUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUE7UUFFNUUsbUNBQW1DO1FBQ25DLElBQU0sUUFBUSxtQkFBSyxPQUFPLEdBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxDQUFBO1FBRXhFLHlCQUF5QjtRQUN6QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQTRCLE1BQWM7UUFDbEMsSUFBQSxLQUF1QixRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUE3QyxXQUFXLFFBQUEsRUFBRSxLQUFLLFFBQTJCLENBQUE7UUFFcEQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFB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Q0FBQyxNQUFNLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBcUIsTUFBTSxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUE7U0FDMUQ7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFYSxnQkFBTSxHQUFwQixVQUFxQixLQUFVO1FBQzdCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRWEsZ0JBQU0sR0FBcEIsVUFBcUIsTUFBYztRQUNqQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTNRRCxJQTJRQztBQTNRWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG5vdGVwYWNrIGZyb20gXCJub3RlcGFjay5pb1wiXG5cbmltcG9ydCB7IGNoZWNrLCBJUmV2ZXJzaWJsZUpzb25QYXRjaCwgSVNjaGVtYU5vZGUsIE1BUF9OT0RFLCBBUlJBWV9OT0RFLCBUU2NoZW1hUGF0Y2gsIFR5cGUsIElTY2hlbWFUeXBlIH0gZnJvbSBcIi4vY29tbW9uXCJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiXG5cbmludGVyZmFjZSBJQnVpbGRNZXRhIHtcbiAgcGFyZW50PzogSVNjaGVtYU5vZGVcbiAga2V5OiBudW1iZXIgfCBzdHJpbmdcbiAgaW5kZXg6IG51bWJlclxuICB1cGRhdGVTY2hlbWE/OiBib29sZWFuXG4gIGNoZWNrRGVsZXRlZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNsYXNzIFBhdGNoUGFjayB7XG4gIHB1YmxpYyBzY2hlbWEhOiBTY2hlbWFcbiAgY29uc3RydWN0b3IgKHR5cGVzPzogeyBbdHlwZTogc3RyaW5nXTogc3RyaW5nW10gfCBUeXBlPGFueT4gfSkge1xuICAgIHRoaXMuc2NoZW1hID0gbmV3IFNjaGVtYSh0eXBlcyB8fCB7fSlcbiAgfVxuXG4gIHB1YmxpYyBlbmNvZGVTdGF0ZSh2YWx1ZTogYW55LCBpbmNsdWRlVHlwZXMgPSB0cnVlLCB1cGRhdGVTY2hlbWEgPSB0cnVlKTogQnVmZmVyIHtcbiAgICAvLyBlbmNvZGUgcm9vdCBub2RlXG4gICAgY29uc3QgZW5jb2RlZCA9IHRoaXMuZW5jb2RlTm9kZSh2YWx1ZSwgeyBrZXk6IFwiXCIsIGluZGV4OiAtMSwgdXBkYXRlU2NoZW1hIH0pXG5cbiAgICAvLyBlbmNvZGUgc25hcHNob3Qgbm9kZXMgYW5kIHNjaGVtYVxuICAgIGNvbnN0IHNuYXBzaG90ID0gWyBlbmNvZGVkLCAuLi5pbmNsdWRlVHlwZXMgPyBbdGhpcy5zY2hlbWEudHlwZXNdIDogW10gXVxuXG4gICAgLy8gcmV0dXJuIHBhY2tlZCBzbmFwc2hvdFxuICAgIHJldHVybiBub3RlcGFjay5lbmNvZGUoc25hcHNob3QpXG4gIH1cblxuICBwdWJsaWMgZGVjb2RlU3RhdGU8VCA9IGFueT4oYnVmZmVyOiBCdWZmZXIpIHtcbiAgICBjb25zdCBbZW5jb2RlZE5vZGUsIHR5cGVzXSA9IG5vdGVwYWNrLmRlY29kZShidWZmZXIpXG5cbiAgICAvLyBhcHBseSBzY2hlbWEgdHlwZXNcbiAgICB0aGlzLnNjaGVtYS5pbml0KHR5cGVzKVxuXG4gICAgLy8gZGVjb2RlIHNuYXBzaG90XG4gICAgcmV0dXJuIHRoaXMuZGVjb2RlTm9kZShlbmNvZGVkTm9kZSwgeyBrZXk6IFwiXCIsIGluZGV4OiAtMSB9KVxuICB9XG5cbiAgcHJpdmF0ZSBlbmNvZGVOb2RlKHZhbHVlOiBhbnksIG1ldGE6IElCdWlsZE1ldGEpOiBhbnkge1xuICAgIGNvbnN0IHsgcGFyZW50LCBrZXkgPSBcIlwiLCBpbmRleCA9IC0xLCB1cGRhdGVTY2hlbWEgPSB0cnVlLCBjaGVja0RlbGV0ZWQgfSA9IG1ldGFcblxuICAgIC8vIGFkZCBrZXkgdG8gbWFwIHNjaGVtYSBrZXlzXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gTUFQX05PREUgJiYgdXBkYXRlU2NoZW1hKSB7XG4gICAgICBwYXJlbnQua2V5cyEucHVzaChrZXkgYXMgc3RyaW5nKVxuICAgIH1cblxuICAgIGxldCBub2RlOiBJU2NoZW1hTm9kZSB8IHVuZGVmaW5lZFxuICAgIGlmICghcGFyZW50KSB7XG4gICAgICBub2RlID0gdGhpcy5zY2hlbWEucm9vdFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXQgY2hpbGQgbm9kZVxuICAgICAgaWYgKGNoZWNrRGVsZXRlZCkge1xuICAgICAgICBub2RlID0gdGhpcy5zY2hlbWEuZ2V0RGVsZXRlZE5vZGUocGFyZW50LCBrZXkpIVxuICAgICAgfVxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIG5vZGUgPSB0aGlzLnNjaGVtYS5nZXRDaGlsZE5vZGUocGFyZW50LCBrZXkpIVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBbXVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cbiAgICAgIGlmICghbm9kZSAmJiB1cGRhdGVTY2hlbWEpIHtcbiAgICAgICAgLy8gY3JlYXRlIHNjaGVtYSBub2RlXG4gICAgICAgIG5vZGUgPSB0aGlzLnNjaGVtYS5jcmVhdGVOb2RlKHRoaXMuc2NoZW1hLm5leHRJZCwgcGFyZW50LCBBUlJBWV9OT0RFLCBrZXksIGluZGV4KVxuICAgICAgfVxuICAgICAgY2hlY2soIW5vZGUsIGBDYW5ub3QgZW5jb2RlIHZhbHVlIC0gbm9kZSBub3QgZm91bmQgb24gcGF0aDogJHt0aGlzLnNjaGVtYS5nZXROb2RlUGF0aChwYXJlbnQsIGtleSl9YClcblxuICAgICAgLy8gc2V0IGVuY29kZWQgbm9kZSB0eXBlIGFuZCBpZFxuICAgICAgZGF0YS5wdXNoKEFSUkFZX05PREUsIG5vZGUuaWQpXG4gICAgICAvLyBzZXQgZW5jb2RlZCBub2RlIGl0ZW1zXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuZW5jb2RlTm9kZSh2YWx1ZVtpXSwgeyBwYXJlbnQ6IG5vZGUsIGtleTogaSwgaW5kZXg6IGksIHVwZGF0ZVNjaGVtYSB9KSlcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlKSB7XG5cbiAgICAgIC8vIGNoZWNrIHZhbHVlIHR5cGVcbiAgICAgIGNvbnN0IHR5cGUgPSBub2RlID8gbm9kZS50eXBlIGFzIElTY2hlbWFUeXBlIDogdGhpcy5zY2hlbWEuZmluZFR5cGUodmFsdWUpIHx8IE1BUF9OT0RFXG4gICAgICBpZiAoIW5vZGUgJiYgdXBkYXRlU2NoZW1hKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBzY2hlbWEgbm9kZVxuICAgICAgICBub2RlID0gdGhpcy5zY2hlbWEuY3JlYXRlTm9kZSh0aGlzLnNjaGVtYS5uZXh0SWQsIHBhcmVudCwgdHlwZSwga2V5LCBpbmRleClcbiAgICAgIH1cblxuICAgICAgY2hlY2soIW5vZGUsIGBDYW5ub3QgZW5jb2RlIHZhbHVlIC0gbm9kZSBub3QgZm91bmQgb24gcGF0aDogJHt0aGlzLnNjaGVtYS5nZXROb2RlUGF0aChwYXJlbnQsIGtleSl9YClcblxuICAgICAgZGF0YS5wdXNoKHR5cGUgIT09IE1BUF9OT0RFID8gdHlwZS5pbmRleCA6IE1BUF9OT0RFLCBub2RlLmlkKVxuXG4gICAgICBpZiAodHlwZSAhPT0gTUFQX05PREUpIHtcbiAgICAgICAgLy8gc2V0IGVuY29kZWQgcHJvcHNcbiAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goKGspID0+IHtcbiAgICAgICAgICBkYXRhLnB1c2godGhpcy5lbmNvZGVOb2RlKHZhbHVlW2tdLCB7IC4uLm1ldGEsIHBhcmVudDogbm9kZSwga2V5OiBrLCBpbmRleDogdHlwZS5wcm9wcy5pbmRleE9mKGspIH0pKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2V0IG1hcCBpdGVtc1xuICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCgoaywgaSkgPT4ge1xuICAgICAgICAgIGRhdGEucHVzaChrLCB0aGlzLmVuY29kZU5vZGUodmFsdWVba10sIHsgLi4ubWV0YSwgcGFyZW50OiBub2RlLCBrZXk6IGssIGluZGV4OiBpIH0pKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjaGVjayB0eXBlXG4gICAgICBjaGVjayAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcInN5bWJvbFwiLFxuICAgICAgICBgQ2Fubm90IGVuY29kZSB2YWx1ZSAtIHdyb25nIHZhbHVlIG9uIHBhdGggJHsgdGhpcy5zY2hlbWEuZ2V0Tm9kZVBhdGgocGFyZW50LCBrZXkpIH1gKVxuXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBkZWNvZGVOb2RlIChlbmNvZGVkOiBhbnksIG1ldGE6IElCdWlsZE1ldGEpOiBhbnkge1xuICAgIC8vIGNoZWNrIGlmIGVuY29kZWQgcHJpbWl0aXZlIHZhbHVlXG4gICAgaWYgKCFlbmNvZGVkIHx8ICFBcnJheS5pc0FycmF5KGVuY29kZWQpKSB7IHJldHVybiBlbmNvZGVkIH1cblxuICAgIGNvbnN0IHsgcGFyZW50LCBrZXksIGluZGV4LCB1cGRhdGVTY2hlbWEgPSB0cnVlLCBjaGVja0RlbGV0ZWQgPSBmYWxzZSB9ID0gbWV0YVxuICAgIGNvbnN0IFsgdHlwZSwgaWQsIC4uLmRhdGEgXSA9IGVuY29kZWRcblxuICAgIGNvbnN0IHNjaGVtYVR5cGUgPSB0aGlzLnNjaGVtYS5nZXRUeXBlKHR5cGUpIVxuICAgIGNoZWNrKCFzY2hlbWFUeXBlLCBgQ2Fubm90IGRlY29kZSBzdGF0ZSAtIHVua25vd24gdHlwZTogJHt0eXBlfWApXG5cbiAgICBsZXQgbm9kZTogSVNjaGVtYU5vZGUgfCB1bmRlZmluZWRcbiAgICAvLyBjcmVhdGUgc2NoZW1hIG5vZGVcbiAgICBpZiAodXBkYXRlU2NoZW1hKSB7XG4gICAgICBub2RlID0gdGhpcy5zY2hlbWEuY3JlYXRlTm9kZShpZCwgcGFyZW50LCBzY2hlbWFUeXBlLCBrZXksIGluZGV4KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBnZXQgY2hpbGQgbm9kZVxuICAgICAgaWYgKGNoZWNrRGVsZXRlZCkge1xuICAgICAgICBub2RlID0gdGhpcy5zY2hlbWEuZ2V0RGVsZXRlZE5vZGUocGFyZW50LCBrZXkpIVxuICAgICAgfVxuICAgICAgaWYgKCFub2RlICYmIHBhcmVudCkge1xuICAgICAgICBub2RlID0gdGhpcy5zY2hlbWEuZ2V0Q2hpbGROb2RlKHBhcmVudCwga2V5KSFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVjayghbm9kZSwgYENhbm5vdCBkZWNvZGUgdmFsdWUgLSBub2RlIGZvciAke3RoaXMuc2NoZW1hLmdldE5vZGVQYXRoKHBhcmVudCwga2V5KX0gbm90IGZvdW5kfWApXG5cbiAgICBjb25zdCByZXN1bHQgPSB7fSBhcyBhbnlcblxuICAgIGlmIChzY2hlbWFUeXBlID09PSBBUlJBWV9OT0RFKSB7XG4gICAgICByZXR1cm4gZGF0YS5tYXAoKGl0ZW06IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZU5vZGUoaXRlbSwgeyBwYXJlbnQ6IG5vZGUsIGluZGV4OiBpLCBrZXk6IGkgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChzY2hlbWFUeXBlID09PSBNQVBfTk9ERSkge1xuICAgICAgLy8gZGVjb2RlIG1hcCBpdGVtc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkSW5kZXggPSBub2RlIS5rZXlzIS5wdXNoKGRhdGFbaV0pIC0gMVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kZWNvZGVOb2RlKGRhdGFbaSsxXSwgeyBwYXJlbnQ6IG5vZGUsIGtleTogZGF0YVtpXSwgaW5kZXg6IGNoaWxkSW5kZXggfSlcblxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc3VsdFtkYXRhW2ldXSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVjb2RlIHR5cGUgcHJvcHNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NoZW1hVHlwZS5wcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9wID0gc2NoZW1hVHlwZS5wcm9wc1tpXVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kZWNvZGVOb2RlKGRhdGFbaV0sIHsgcGFyZW50OiBub2RlLCBrZXk6IHByb3AsIGluZGV4OiBpIH0pXG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHB1YmxpYyBlbmNvZGVQYXRjaChwYXRjaDogSVJldmVyc2libGVKc29uUGF0Y2gsIHVwZGF0ZVNjaGVtYSA9IHRydWUpOiBCdWZmZXIge1xuICAgIGNvbnN0IHBhdGggPSBwYXRjaC5wYXRoWzBdID09PSBcIi9cIiA/IHBhdGNoLnBhdGguc2xpY2UoMSkgOiBwYXRjaC5wYXRoXG4gICAgY29uc3QgcGF0aEFyciA9IHBhdGguc3BsaXQoXCIvXCIpLnJldmVyc2UoKVxuICAgIGNvbnN0IGtleSA9IHBhdGhBcnIuc3BsaWNlKDAsMSlbMF1cblxuICAgIGlmICh1cGRhdGVTY2hlbWEpIHtcbiAgICAgIHRoaXMuc2NoZW1hLmNsZWFyRGVsZXRlZCgpXG4gICAgfVxuXG4gICAgbGV0IHBhcmVudDogSVNjaGVtYU5vZGUgPSB0aGlzLnNjaGVtYS5yb290IVxuICAgIGNoZWNrICghcGFyZW50LGBDYW5ub3QgZW5jb2RlIHBhdGNoLCB5b3UgbmVlZCB0byBidWlsZCBzY2hlbWEgZmlyc3QhYClcblxuICAgIHdoaWxlIChwYXRoQXJyLmxlbmd0aCkge1xuICAgICAgcGFyZW50ID0gdGhpcy5zY2hlbWEuZ2V0Q2hpbGROb2RlKHBhcmVudCwgcGF0aEFyci5wb3AoKSEpIVxuICAgICAgY2hlY2soIXBhcmVudCwgYENhbm5vdCBhZGQgbmV3IG5vZGUgLSB3cm9uZyBwYXRoOiAke3BhdGNoLnBhdGh9YClcbiAgICB9XG5cbiAgICBjb25zdCBvcCA9IFtcImFkZFwiLCBcInJlcGxhY2VcIiwgXCJyZW1vdmVcIl0uaW5kZXhPZihwYXRjaC5vcCkgYXMgYW55XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNjaGVtYS5nZXRDaGlsZEluZGV4KHBhcmVudCwga2V5KVxuICAgIGNvbnN0IGRhdGE6IFRTY2hlbWFQYXRjaCA9IFsgb3AsIHBhcmVudC5pZCwgaW5kZXggXVxuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuc2NoZW1hLmdldENoaWxkTm9kZShwYXJlbnQsIGtleSlcbiAgICBpZiAocGF0Y2gub3AgIT09IFwicmVtb3ZlXCIpIHtcbiAgICAgIGlmIChub2RlICYmIHVwZGF0ZVNjaGVtYSkge1xuICAgICAgICB0aGlzLnNjaGVtYS5kZWxldGVOb2RlKG5vZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gTUFQX05PREUgJiYgcGF0Y2gub3AgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgZGF0YS5wdXNoKFtrZXksIHRoaXMuZW5jb2RlTm9kZShwYXRjaC52YWx1ZSwgeyBwYXJlbnQsIGtleSwgaW5kZXgsIHVwZGF0ZVNjaGVtYSB9KV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5lbmNvZGVOb2RlKHBhdGNoLnZhbHVlLCB7IHBhcmVudCwga2V5LCBpbmRleCwgdXBkYXRlU2NoZW1hIH0pKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXRjaC5vcCAhPT0gXCJhZGRcIiAmJiBcIm9sZFZhbHVlXCIgaW4gcGF0Y2gpIHtcbiAgICAgIGRhdGEucHVzaCh0aGlzLmVuY29kZU5vZGUocGF0Y2gub2xkVmFsdWUsIHsgcGFyZW50LCBrZXksIGluZGV4LCB1cGRhdGVTY2hlbWE6IGZhbHNlLCBjaGVja0RlbGV0ZWQ6IHRydWUgfSkpXG4gICAgfVxuXG4gICAgLy8gZGVsZXRlIG9sZCBub2RlXG4gICAgaWYgKHBhdGNoLm9wICE9PSBcInJlbW92ZVwiICYmIG5vZGUgJiYgdXBkYXRlU2NoZW1hKSB7XG4gICAgICB0aGlzLnNjaGVtYS5kZWxldGVOb2RlKG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vdGVwYWNrLmVuY29kZShkYXRhKVxuICB9XG5cbiAgcHVibGljIGRlY29kZVBhdGNoIChidWZmZXI6IEJ1ZmZlcik6IElSZXZlcnNpYmxlSnNvblBhdGNoIHtcblxuICAgIC8vIGVuY29kZSBwYXRjaFxuICAgIGNvbnN0IGVuY29kZWRQYXRjaCA9IG5vdGVwYWNrLmRlY29kZTxUU2NoZW1hUGF0Y2g+KGJ1ZmZlcilcblxuICAgIGNvbnN0IFtvcEluZGV4LCBub2RlSWQsIHByb3BJbmRleCwgLi4udmFsdWVzXSA9IGVuY29kZWRQYXRjaFxuXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5zY2hlbWEuZ2V0Tm9kZShub2RlSWQpIVxuICAgIGNoZWNrICghcGFyZW50LCBgQ2Fubm90IGRlY29kZSBwYXRjaCAtIHNjaGVtYSBmb3Igbm9kZSB3aXRoIGlkICR7bm9kZUlkfSBub3QgZm91bmRgKVxuXG4gICAgY29uc3QgcGF0Y2g6IGFueSA9IHsgb3A6IFtcImFkZFwiLCBcInJlcGxhY2VcIiwgXCJyZW1vdmVcIl1bb3BJbmRleF0sIHBhdGg6ICcnIH1cblxuICAgIC8vIGdldCBrZXR5IGZyb20gbmV3IG1hcCBpdGVtIG9yIGZyb20gc2NoZW1hXG4gICAgY29uc3Qga2V5ID0gcGFyZW50LnR5cGUgPT09IE1BUF9OT0RFICYmIHBhdGNoLm9wID09PSBcImFkZFwiXG4gICAgICA/IHZhbHVlc1swXVswXVxuICAgICAgOiB0aGlzLnNjaGVtYS5nZXRDaGlsZE5hbWUocGFyZW50LCBwcm9wSW5kZXgpXG5cbiAgICAvLyBnZXQgbm9kZSBmcm9tIHNjaGVtYVxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnNjaGVtYS5nZXRDaGlsZE5vZGUocGFyZW50LCBrZXkpXG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCAmJiBwYXRjaC5vcCAhPT0gXCJyZW1vdmVcIikge1xuXG4gICAgICAvLyByZXZvbWUgb2xkIG5vZGVcbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIHRoaXMuc2NoZW1hLmRlbGV0ZU5vZGUobm9kZSlcbiAgICAgIH1cblxuICAgICAgLy8gZGVjb2RlIHZhbHVlXG4gICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlcy5yZXZlcnNlKCkucG9wKClcbiAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gTUFQX05PREUgJiYgcGF0Y2gub3AgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgcGFyZW50LmtleXM/LnB1c2goa2V5IGFzIHN0cmluZylcbiAgICAgICAgcGF0Y2gudmFsdWUgPSB0aGlzLmRlY29kZU5vZGUodmFsdWVbMV0sIHsgcGFyZW50LCBrZXksIGluZGV4OiBwcm9wSW5kZXggfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGNoLnZhbHVlID0gdGhpcy5kZWNvZGVOb2RlKHZhbHVlLCB7IHBhcmVudCwga2V5LCBpbmRleDogcHJvcEluZGV4IH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggJiYgcGF0Y2gub3AgIT09IFwiYWRkXCIpIHtcbiAgICAgIHBhdGNoLm9sZFZhbHVlID0gdGhpcy5kZWNvZGVOb2RlKHZhbHVlcy5wb3AoKSwge1xuICAgICAgICBwYXJlbnQsIGtleSwgaW5kZXg6IHByb3BJbmRleCwgdXBkYXRlU2NoZW1hOiBmYWxzZSwgY2hlY2tEZWxldGVkOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChub2RlICYmIHBhdGNoLm9wID09PSBcInJlbW92ZVwiKSB7XG4gICAgICB0aGlzLnNjaGVtYS5kZWxldGVOb2RlKG5vZGUpXG4gICAgfVxuXG4gICAgcGF0Y2gucGF0aCA9IHRoaXMuc2NoZW1hLmdldE5vZGVQYXRoKHBhcmVudCwga2V5KVxuXG4gICAgaWYgKHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIHBhcmFtczogJHt2YWx1ZXMudG9TdHJpbmcoKX1gKVxuICAgIH1cblxuICAgIHJldHVybiBwYXRjaFxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlbmNvZGUodmFsdWU6IGFueSk6IEJ1ZmZlciB7XG4gICAgcmV0dXJuIG5vdGVwYWNrLmVuY29kZSh2YWx1ZSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGVjb2RlKGJ1ZmZlcjogQnVmZmVyKTogYW55IHtcbiAgICByZXR1cm4gbm90ZXBhY2suZGVjb2RlKGJ1ZmZlcilcbiAgfVxufVxuIl19

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