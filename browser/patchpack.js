/*! patchpack@0.1.0 */
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.schemaPatch = exports.schemaNode = exports.schemaType = exports.NODE_MAP_TYPE = exports.NODE_ARRAY_TYPE = void 0;
exports.NODE_ARRAY_TYPE = -1;
exports.NODE_MAP_TYPE = -2;
exports.schemaType = function (type) {
    if (type === void 0) { type = []; }
    return ({
        name: type[0],
        props: type.slice(1),
    });
};
exports.schemaNode = function (node) {
    if (node === void 0) { node = []; }
    return ({
        id: node[0],
        type: node[1],
        parent: node[2],
        index: node[3],
        items: node.slice(4),
    });
};
exports.schemaPatch = function (patch) {
    if (patch === void 0) { patch = []; }
    return ({
        op: patch[0],
        id: patch[1],
        prop: patch[2],
        values: patch.slice(3),
    });
};
exports.check = function (condition, error) {
    if (condition) {
        throw new Error(error);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNwQixRQUFBLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQTJCbEIsUUFBQSxVQUFVLEdBQUcsVUFBQyxJQUE0QjtJQUE1QixxQkFBQSxFQUFBLE9BQW1CLEVBQVM7SUFBa0IsT0FBQSxDQUFDO1FBQ3hFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JCLENBQUM7QUFIdUUsQ0FHdkUsQ0FBQTtBQVlXLFFBQUEsVUFBVSxHQUFHLFVBQUMsSUFBNEI7SUFBNUIscUJBQUEsRUFBQSxPQUFtQixFQUFTO0lBQWtCLE9BQUEsQ0FBQztRQUN4RSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBVztRQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQWE7S0FDakMsQ0FBQztBQU51RSxDQU12RSxDQUFBO0FBWVcsUUFBQSxXQUFXLEdBQUcsVUFBQyxLQUE4QjtJQUE5QixzQkFBQSxFQUFBLFFBQXFCLEVBQVM7SUFBbUIsT0FBQSxDQUFDO1FBQzVFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1osRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNkLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN2QixDQUFDO0FBTDJFLENBSzNFLENBQUE7QUFFVyxRQUFBLEtBQUssR0FBRyxVQUFDLFNBQWMsRUFBRSxLQUFhO0lBQ2pELElBQUksU0FBUyxFQUFFO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUN2QjtBQUNILENBQUMsQ0FBQSJ9

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
    function Schema(schema) {
        this.types = schema && schema.types || [];
        this.nodes = schema && schema.nodes || [];
    }
    Schema.prototype.add = function (type, value, index) {
        if (index === void 0) { index = this[type].length; }
        var patch = { op: "add", path: "/" + type + "/" + index, value: __spreadArrays(value) };
        if (type === "nodes" && typeof value[3] === "string") {
            // value[3] is map key => need to add key to parent map
            var parentIndex = this.nodes.findIndex(function (n) { return n[0] === value[2]; });
            var keyIndex = this.nodes[parentIndex].findIndex(function (n) { return n === value[3]; });
            // check if key already exists
            if (keyIndex < 4) {
                // add key to map node
                this.addMapNodeKey(parentIndex, value[3]);
                // put key index in value[3]
                value[3] = this.nodes[parentIndex].length - 5;
            }
            else {
                // put key index in value[3]
                value[3] = keyIndex - 4;
            }
        }
        // add value to schema
        this[type].splice(index, 0, value);
        return patch;
    };
    Schema.prototype.replace = function (type, index, value) {
        this[type][index] = value;
        return { op: "replace", path: "/" + type + "/" + index, value: value, };
    };
    Schema.prototype.remove = function (type, index) {
        this[type].splice(index, 1);
        return { op: "remove", path: "/nodes/" + index };
    };
    Schema.prototype.addType = function (name, props) {
        common_1.check(this.types.find(function (n) { return n[0] === name; }), "Cannot add type to schema - type " + name + " already exists!");
        return this.add("types", __spreadArrays([name], props));
    };
    Schema.prototype.addArrayNode = function (nodeId, parentId, name) {
        return this.addNode(nodeId, common_1.NODE_ARRAY_TYPE, parentId, name);
    };
    Schema.prototype.addMapNode = function (nodeId, parentId, name, keys) {
        if (keys === void 0) { keys = []; }
        return this.addNode(nodeId, common_1.NODE_MAP_TYPE, parentId, name, keys);
    };
    Schema.prototype.addObjectNode = function (nodeId, type, parentId, name) {
        var typeIndex = this.types.findIndex(function (n) { return n[0] === type; });
        common_1.check(typeIndex < 0, "Cannot add node to schema - node type " + type + " is not found!");
        return this.addNode(nodeId, typeIndex, parentId, name);
    };
    Schema.prototype.addNode = function (nodeId, type, parentId, name, keys) {
        if (keys === void 0) { keys = []; }
        common_1.check(this.getNode(nodeId), "Cannot add node to schema - node with id " + nodeId + " already exists!");
        common_1.check(parentId === -1 && this.nodes.length, "Cannot add second root node to schema - only root node can have parentId -1!");
        var parent = this.getNode(parentId);
        common_1.check(!parent && parentId >= 0, "Cannot add node to schema - parent with id " + parentId + " not found!");
        var index = typeof name === "string" && (!parent || parent.type !== common_1.NODE_MAP_TYPE)
            ? this.getNodeIndex(parentId, name) : name;
        common_1.check(index === -1 && this.nodes.length, "Cannot add node to schema - key/index \"" + name + "\" not exist!");
        return this.add("nodes", __spreadArrays([nodeId, type, parentId, index], keys));
    };
    Schema.prototype.addMapNodeKey = function (index, key) {
        var node = this.nodes[index];
        common_1.check(!node, "Cannot add key to schema - node with index " + index + " not found");
        common_1.check(node.slice(4).indexOf(key) >= 0, "Cannot add key to schema - key " + key + " already exists!");
        node.push(key);
        return { op: "add", path: "/nodes/" + index + "/" + (node.length - 1), value: key };
    };
    Schema.prototype.deleteNode = function (nodeId, deleteChildren) {
        var _this = this;
        if (deleteChildren === void 0) { deleteChildren = false; }
        var index = this.nodes.findIndex(function (n) { return n[0] === nodeId; });
        common_1.check(index < 0, "Cannot delete node to schema - node with id " + nodeId + " not exists!");
        if (deleteChildren) {
            this.nodes.filter(function (n) { return n[2] === nodeId; }).forEach(function (n) { return _this.deleteNode(n[0]); });
        }
        return this.remove("nodes", index);
    };
    Schema.prototype.getTypeProps = function (index) {
        var type = this.types[index];
        return type ? type.slice(1) : [];
    };
    Schema.prototype.getNodeName = function (sn) {
        var node = Array.isArray(sn) ? common_1.schemaNode(sn) : sn;
        var parent = this.getNode(node.parent);
        if (!parent) {
            return "";
        }
        else if (parent.type === common_1.NODE_ARRAY_TYPE) {
            return node.index;
        }
        else if (parent.type === common_1.NODE_MAP_TYPE) {
            return parent.items[node.index];
        }
        else {
            var props = common_1.schemaType(this.types[parent.type]).props;
            return props[node.index];
        }
    };
    Schema.prototype.getNodeIndex = function (parentId, name) {
        var parent = this.getNode(parentId);
        if (!parent) {
            return -1;
        }
        else if (parent.type === common_1.NODE_MAP_TYPE) {
            return parent.items.indexOf(name);
        }
        else if (parent.type === common_1.NODE_ARRAY_TYPE) {
            return +name;
        }
        else {
            var props = this.getTypeProps(parent.type);
            return props.indexOf(name);
        }
    };
    Schema.prototype.getNode = function (nodeId) {
        var node = this.nodes.find(function (n) { return n[0] === nodeId; });
        return node && common_1.schemaNode(node);
    };
    Schema.prototype.getNodePath = function (sn) {
        var node = Array.isArray(sn) ? common_1.schemaNode(sn) : sn;
        var pathArr = [];
        while (!!node) {
            pathArr.push(this.getNodeName(node));
            node = this.getNode(node.parent);
        }
        return pathArr.reverse().join("/");
    };
    Schema.prototype.getChildNode = function (sn, name) {
        if (!sn) {
            return this.findNode({ parent: -1 });
        }
        var node = Array.isArray(sn) ? common_1.schemaNode(sn) : sn;
        if (node.type === common_1.NODE_ARRAY_TYPE) {
            return this.findNode({ parent: node.id, index: +name });
        }
        else if (node.type === common_1.NODE_MAP_TYPE) {
            return this.findNode({ parent: node.id, index: node.items.indexOf(name) });
        }
        else {
            var props = common_1.schemaType(this.types[node.type]).props;
            return this.findNode({ parent: node.id, index: props.indexOf(name) });
        }
    };
    Schema.prototype.findNode = function (query) {
        var sn = this.nodes.find(function (n) {
            var node = common_1.schemaNode(n);
            return !Object.keys(query).find(function (key) { return node[key] !== query[key]; });
        });
        return sn && common_1.schemaNode(sn);
    };
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBR2lCO0FBRWpCO0lBSUUsZ0JBQWEsTUFBZ0I7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUE7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUE7SUFDM0MsQ0FBQztJQUVNLG9CQUFHLEdBQVYsVUFBVyxJQUF1QixFQUFFLEtBQThCLEVBQUUsS0FBaUM7UUFBakMsc0JBQUEsRUFBQSxRQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtRQUNuRyxJQUFNLEtBQUssR0FBZSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQUksSUFBSSxTQUFJLEtBQU8sRUFBRSxLQUFLLGlCQUFPLEtBQUssQ0FBRSxFQUFFLENBQUE7UUFDdkYsSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUNwRCx1REFBdUQ7WUFDdkQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUE7WUFDbEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFBO1lBQ3pFLDhCQUE4QjtZQUM5QixJQUFJLFFBQVEsR0FBRyxD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

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchPack = void 0;
var notepack = __importStar(__webpack_require__(4));
var common_1 = __webpack_require__(0);
var schema_1 = __webpack_require__(1);
var PatchPack = /** @class */ (function () {
    function PatchPack(schema) {
        this.schema = new schema_1.Schema(schema);
    }
    PatchPack.prototype.encodeSchemaPatch = function (patch) {
        // split path to elements
        // "/nodes/1/2"
        var _a = patch.path.split("/"), type = _a[1], index = _a[2], prop = _a[3];
        // set operation for patch type
        // if "/nodes/" updated op = -3 | -2 | -1
        // if "/types/" updated op = -6 | -5 | -4
        var opIndex = ["add", "replace", "remove"].indexOf(patch.op) - (type === "nodes" ? 3 : 6);
        // return SchemaPatch
        return notepack.encode([opIndex, +index, prop === undefined ? -1 : +prop, patch.value]);
    };
    PatchPack.prototype.encodeNode = function (snapshot, sn, name) {
        var _this = this;
        var node = name === undefined ? sn : this.schema.getChildNode(sn, name);
        if (!node || !snapshot) {
            return snapshot;
        }
        if (node.type === -2) {
            return node.items.map(function (key, i) { return _this.encodeNode(snapshot[key], node, key); });
        }
        else if (node.type === -1) {
            return snapshot.map(function (item, i) { return _this.encodeNode(item, node, i); });
        }
        else {
            var props = this.schema.getTypeProps(node.type);
            return props.map(function (key, i) { return _this.encodeNode(snapshot[key], node, key); });
        }
    };
    PatchPack.prototype.encodeSnapshot = function (snapshot, nodeId) {
        var node = this.schema.getNode(nodeId);
        if (!node) {
            throw new Error("Cannot encode Snapshot - node with id " + nodeId + " not found!");
        }
        return notepack.encode(this.encodeNode(snapshot, node));
    };
    PatchPack.prototype.encodePatch = function (patch) {
        var pathArr = patch.path === "/" ? [""] : patch.path.split("/");
        var i = -1;
        var node;
        while (++i < pathArr.length) {
            var child = this.schema.getChildNode(node, pathArr[i] || "");
            if (!child) {
                break;
            }
            node = child;
        }
        if (!node) {
            throw new Error("Wrong patch path: " + patch.path);
        }
        var op = ["add", "replace", "remove"].indexOf(patch.op);
        var props = this.schema.getTypeProps(node.type);
        var propIndex = props.indexOf(pathArr[i]);
        var data = [op, node.id, propIndex];
        if (patch.op !== "remove") {
            data.push(this.encodeNode(patch.value, node, pathArr[i]));
        }
        if (patch.op !== "add" && "oldValue" in patch) {
            data.push(this.encodeNode(patch.oldValue, node, pathArr[i]));
        }
        return notepack.encode(data);
    };
    PatchPack.prototype.decodeSchemaPatch = function (sp, prefix) {
        if (prefix === void 0) { prefix = ""; }
        var patch = common_1.schemaPatch(sp);
        // set JsonPatch operation
        var op = ["add", "replace", "remove"][patch.op + (patch.op < -3 ? 6 : 3)];
        // set path elements
        var pathArr = [, patch.op < -3 ? "types" : "nodes", patch.id];
        if (patch.prop >= 0) {
            pathArr.push(patch.prop);
        }
        var jsonPatch = { op: op, path: prefix + pathArr.join("/") };
        if (patch.values[0] !== undefined) {
            jsonPatch.value = patch.values[0];
        }
        // return JsonPatch
        return jsonPatch;
    };
    PatchPack.prototype.decodeNode = function (nodeId, encoded) {
        var _this = this;
        var node = this.schema.getNode(nodeId);
        if (!node || !encoded) {
            return encoded;
        }
        if (node.type === common_1.NODE_ARRAY_TYPE) {
            return encoded.map(function (item, i) {
                var itemNode = _this.schema.getChildNode(node, i);
                return _this.decodeNode(itemNode ? itemNode.id : -1, item);
            });
        }
        else {
            var result_1 = {};
            var keys = node.type === common_1.NODE_MAP_TYPE ? node.items : this.schema.getTypeProps(node.type);
            keys.forEach(function (key, i) {
                var itemNode = _this.schema.getChildNode(node, key);
                var value = _this.decodeNode(itemNode ? itemNode.id : -1, encoded[i]);
                if (value === undefined) {
                    return;
                }
                result_1[key] = value;
            });
            return result_1;
        }
    };
    PatchPack.prototype.decodeSnapshot = function (buffer, nodeId) {
        return this.decodeNode(nodeId, notepack.decode(buffer));
    };
    PatchPack.prototype.decodePatch = function (buffer, updateSchema) {
        if (updateSchema === void 0) { updateSchema = true; }
        var encodedPatch = notepack.decode(buffer);
        if (encodedPatch[0] < 0) {
            // decode schemaMap patch
            var decodedPatch = this.decodeSchemaPatch(encodedPatch, "");
            if (updateSchema) {
                var pathArr = decodedPatch.path.split("/");
                var type = pathArr[1];
                var index = +pathArr[2];
                switch (decodedPatch.op) {
                    case "add":
                        return pathArr.length === 4
                            ? this.schema.addMapNodeKey(+pathArr[2], encodedPatch[3])
                            : this.schema.add(type, encodedPatch[3], index);
                    case "remove":
                        return this.schema.remove(type, index);
                    case "replace":
                        return this.schema.replace(type, index, encodedPatch[3]);
                }
            }
            return decodedPatch;
        }
        var opIndex = encodedPatch[0], entryId = encodedPatch[1], propIndex = encodedPatch[2], values = encodedPatch.slice(3);
        var node = this.schema.getNode(entryId);
        if (!node) {
            throw new Error("Cannot decode patch - schema for node with id " + entryId + " not found");
        }
        var path = this.schema.getNodePath(node);
        var props = this.schema.getTypeProps(node.type);
        var patch = {
            op: ["add", "replace", "remove"][opIndex],
            path: path + (propIndex >= 0 ? "/" + props[propIndex] : "")
        };
        var child = this.schema.findNode({ parent: entryId, index: propIndex });
        var nodeId = child ? child.id : propIndex < 0 && entryId || -1;
        if (values.length && patch.op !== "remove") {
            patch.value = this.decodeNode(nodeId, values.reverse().pop());
        }
        if (values.length && patch.op !== "add") {
            patch.oldValue = this.decodeNode(nodeId, values.pop());
        }
        if (values.length) {
            throw new Error("Unhandled params: " + values.toString());
        }
        return patch;
    };
    return PatchPack;
}());
exports.PatchPack = PatchPack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hwYWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGNocGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXVDO0FBRXZDLG1DQUdpQjtBQUNqQixtQ0FBaUM7QUFFakM7SUFFRSxtQkFBYSxNQUFlO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixLQUFpQjtRQUN4Qyx5QkFBeUI7UUFDekIsZUFBZTtRQUNULElBQUEsS0FBd0IsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTFDLElBQUksUUFBQSxFQUFFLEtBQUssUUFBQSxFQUFFLElBQUksUUFBeUIsQ0FBQTtRQUVuRCwrQkFBK0I7UUFDL0IseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxJQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFM0YscUJBQXFCO1FBQ3JCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUE7SUFDM0YsQ0FBQztJQUVPLDhCQUFVLEdBQWxCLFVBQW1CLFFBQWEsRUFBRSxFQUFlLEVBQUUsSUFBc0I7UUFBekUsaUJBWUM7UUFYQyxJQUFNLElBQUksR0FBRyxJQUFJLEtB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

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