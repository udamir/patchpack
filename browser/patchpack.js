/*! patchpack@0.3.1 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQWEsUUFBQSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDZixRQUFBLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQW9CYixRQUFBLEtBQUssR0FBRyxVQUFDLFNBQWMsRUFBRSxLQUFhO0lBQ2pELElBQUksU0FBUyxFQUFFO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUN2QjtBQUNILENBQUMsQ0FBQTtBQUVjLFFBQUEsTUFBTSxJQUFSLEtBQW9DLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsVUFBckMsUUFBQSxVQUFVLFVBQUUsUUFBQSxTQUFTLFNBQWdCIn0=

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
        if (types === void 0) { types = {}; }
        this._nextId = 0;
        this.init(Object.keys(types).map(function (name) { return __spreadArrays([name], types[name]); }));
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
        return pathArr.reverse().join("/") + (!key ? "" : ("/" + key));
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
            return sn.items[sn.type.props.indexOf(name)];
        }
    };
    Schema.prototype.findType = function (value) {
        var keys = Object.keys(value);
        var type = this._types.find(function (t) {
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
        node.items.forEach(function (child) { return _this.deleteNode(child); });
        var index = this._nodes.indexOf(node);
        this._nodes.splice(index, 1);
    };
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBQWdHO0FBRWhHO0lBS0UsZ0JBQWEsS0FBd0M7UUFBeEMsc0JBQUEsRUFBQSxVQUF3QztRQUY3QyxZQUFPLEdBQVcsQ0FBQyxDQUFBO1FBR3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssdUJBQUUsSUFBSSxHQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBdEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUVELHNCQUFXLHlCQUFLO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFFLEVBQWU7b0JBQWIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBO2dCQUFPLHVCQUFFLElBQUksR0FBSyxLQUFLO1lBQWhCLENBQWtCLENBQUMsQ0FBQTtRQUNsRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHdCQUFJO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywwQkFBTTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ3ZCLENBQUM7OztPQUFBO0lBRU0scUJBQUksR0FBWCxVQUFZLEtBQW9CO1FBQWhDLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFFaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWdCO2dCQUFmLElBQUksUUFBQSxFQUFLLEtBQUssY0FBQTtZQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJ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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxrREFBK0I7QUFDL0IsK0NBQTRCO0FBQzVCLCtDQUE0QiJ9

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
        this.schema = new schema_1.Schema(types);
    }
    PatchPack.prototype.encodeState = function (value, addTypes) {
        if (addTypes === void 0) { addTypes = true; }
        // encode root node
        var encoded = this.encodeNode(value, { key: "", index: -1 });
        // encode snapshot nodes and schema
        var snapshot = __spreadArrays([encoded], addTypes ? [this.schema.types] : []);
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
        var parent = meta.parent, _a = meta.key, key = _a === void 0 ? "" : _a, _b = meta.index, index = _b === void 0 ? -1 : _b;
        // add key to map schema keys
        if (parent && parent.type === common_1.MAP_NODE) {
            parent.keys.push(key);
        }
        // get child node
        var node = parent ? this.schema.getChildNode(parent, key) : this.schema.root;
        var data = [];
        if (Array.isArray(value)) {
            // create schema node
            node = node || this.schema.createNode(this.schema.nextId, parent, common_1.ARRAY_NODE, key, index);
            // set encoded node type and id
            data.push(common_1.ARRAY_NODE, node.id);
            // set encoded node items
            for (var i = 0; i < value.length; i++) {
                data.push(this.encodeNode(value[i], { parent: node, key: i, index: i }));
            }
        }
        else if (typeof value === "object" && value) {
            // check value type
            var type_1 = this.schema.findType(value) || common_1.MAP_NODE;
            // create schema node
            node = node || this.schema.createNode(this.schema.nextId, parent, type_1, key, index);
            data.push(type_1 !== common_1.MAP_NODE ? type_1.index : common_1.MAP_NODE, node.id);
            if (type_1 !== common_1.MAP_NODE) {
                // set encoded props
                Object.keys(value).forEach(function (k) {
                    data.push(_this.encodeNode(value[k], { parent: node, key: k, index: type_1.props.indexOf(k) }));
                });
            }
            else {
                // set map items
                Object.keys(value).forEach(function (k, i) {
                    data.push(k, _this.encodeNode(value[k], { parent: node, key: k, index: i }));
                });
            }
        }
        else {
            // check type
            common_1.check(typeof value === "function" || typeof value === "symbol", "Cannot build schema - wrong value on path " + this.schema.getNodePath(parent, key));
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
    PatchPack.prototype.encodePatch = function (patch) {
        var path = patch.path[0] === "/" ? patch.path.slice(1) : patch.path;
        var pathArr = path.split("/").reverse();
        var key = pathArr.splice(0, 1)[0];
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
            if (node) {
                this.schema.deleteNode(node);
            }
            if (parent.type === common_1.MAP_NODE && patch.op === "add") {
                data.push([key, this.encodeNode(patch.value, { parent: parent, key: key, index: index })]);
            }
            else {
                data.push(this.encodeNode(patch.value, { parent: parent, key: key, index: index }));
            }
        }
        if (patch.op !== "add" && "oldValue" in patch) {
            data.push(this.encodeNode(patch.oldValue, { parent: parent, key: key, index: index }));
        }
        // delete node if remove operation
        if (patch.op === "remove" && node) {
            this.schema.deleteNode(node);
        }
        return notepack.encode(data);
    };
    PatchPack.prototype.decodePatch = function (buffer) {
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
    return PatchPack;
}());
exports.PatchPack = PatchPack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hwYWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGNocGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUF1QztBQUV2QyxtQ0FBdUc7QUFDdkcsbUNBQWlDO0FBUWpDO0lBRUUsbUJBQWEsS0FBb0M7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsS0FBVSxFQUFFLFFBQWU7UUFBZix5QkFBQSxFQUFBLGVBQWU7UUFDNUMsbUJBQW1CO1FBQ25CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTlELG1DQUFtQztRQUNuQyxJQUFNLFFBQVEsbUJBQUssT0FBTyxHQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FBQTtRQUVwRSx5QkFBeUI7UUFDekIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUE0QixNQUFjO1FBQ2xDLElBQUEsS0FBdUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBN0MsV0FBVyxRQUFBLEVBQUUsS0FBSyxRQUEyQixDQUFBO1FBRXBELHFCQUFxQjtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV2QixrQkFBa0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFF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

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