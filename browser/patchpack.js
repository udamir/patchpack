/*! patchpack@0.2.2 */
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
        ref: node
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNwQixRQUFBLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQTJCbEIsUUFBQSxVQUFVLEdBQUcsVUFBQyxJQUE0QjtJQUE1QixxQkFBQSxFQUFBLE9BQW1CLEVBQVM7SUFBa0IsT0FBQSxDQUFDO1FBQ3hFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3JCLENBQUM7QUFIdUUsQ0FHdkUsQ0FBQTtBQWFXLFFBQUEsVUFBVSxHQUFHLFVBQUMsSUFBNEI7SUFBNUIscUJBQUEsRUFBQSxPQUFtQixFQUFTO0lBQWtCLE9BQUEsQ0FBQztRQUN4RSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNYLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBVztRQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQWE7UUFDaEMsR0FBRyxFQUFFLElBQUk7S0FDVixDQUFDO0FBUHVFLENBT3ZFLENBQUE7QUFZVyxRQUFBLFdBQVcsR0FBRyxVQUFDLEtBQThCO0lBQTlCLHNCQUFBLEVBQUEsUUFBcUIsRUFBUztJQUFtQixPQUFBLENBQUM7UUFDNUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDWixFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2QsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCLENBQUM7QUFMMkUsQ0FLM0UsQ0FBQTtBQUVXLFFBQUEsS0FBSyxHQUFHLFVBQUMsU0FBYyxFQUFFLEtBQWE7SUFDakQsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3ZCO0FBQ0gsQ0FBQyxDQUFBIn0=

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
        this.nextId = 0;
        this.types = schema && schema.types || [];
        this.nodes = schema && schema.nodes || [];
    }
    Schema.prototype.applyPatch = function (patch) {
        var pathArr = patch.path.split("/");
        var type = pathArr[1];
        var index = +pathArr[2];
        switch (patch.op) {
            case "add":
                return pathArr.length === 4
                    ? this.nodesAddMapKey(index, patch.value)
                    : this.add(type, patch.value, index);
            case "remove":
                return this.remove(type, index);
            case "replace":
                return this.replace(type, index, patch.value);
        }
    };
    Schema.prototype.buildFrom = function (value) {
        this.nodes.length = 0;
        this.nextId = 0;
        return this.createNode(value, { parentId: -1, key: -1 });
    };
    Schema.prototype.addNodeFrom = function (value, path) {
        var pathArr = path.split("/").reverse();
        var key = pathArr[0];
        var node = common_1.schemaNode(this.nodes[0]);
        while (pathArr.length > 1) {
            node = this.getChildNode(node, pathArr.pop());
            if (!node) {
                throw new Error("Cannot add new node - wrong path: " + path);
            }
        }
        return this.createNode(value, { parentId: node.id, key: key });
    };
    Schema.prototype.deleteNode = function (path) {
        var pathArr = path.split("/").reverse();
        if (pathArr[pathArr.length - 1] === "") {
            pathArr.pop();
        }
        var node = common_1.schemaNode(this.nodes[0]);
        while (pathArr.length) {
            node = this.getChildNode(node, pathArr.pop());
            if (!node) {
                throw new Error("Cannot add delete node - wrong path: " + path);
            }
        }
        return this.nodesDelete(node.id);
    };
    Schema.prototype.addType = function (name, props) {
        common_1.check(this.types.find(function (n) { return n[0] === name; }), "Cannot add type to schema - type " + name + " already exists!");
        return this.add("types", __spreadArrays([name], props));
    };
    Schema.prototype.addTypes = function (types) {
        var _this = this;
        return Object.keys(types).map(function (key) { return _this.addType(key, types[key]); });
    };
    Schema.prototype.nodesAddArray = function (nodeId, parentId, name) {
        return this.nodesAdd(nodeId, common_1.NODE_ARRAY_TYPE, parentId, name);
    };
    Schema.prototype.nodesAddMap = function (nodeId, parentId, name, keys) {
        if (keys === void 0) { keys = []; }
        return this.nodesAdd(nodeId, common_1.NODE_MAP_TYPE, parentId, name, keys);
    };
    Schema.prototype.nodesAddObject = function (nodeId, type, parentId, name) {
        var typeIndex = this.types.findIndex(function (n) { return n[0] === type; });
        common_1.check(typeIndex < 0, "Cannot add node to schema - node type " + type + " is not found!");
        return this.nodesAdd(nodeId, typeIndex, parentId, name);
    };
    Schema.prototype.nodesAdd = function (nodeId, type, parentId, name, keys) {
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
    Schema.prototype.nodesAddMapKey = function (nodeId, key) {
        var index = this.nodes.findIndex(function (n) { return n[0] === nodeId; });
        var node = this.nodes[index];
        common_1.check(!node, "Cannot add key to schema - node with id " + nodeId + " not found");
        common_1.check(node[1] !== common_1.NODE_MAP_TYPE, "Cannot add key to schema - node with id " + nodeId + " must be map type");
        common_1.check(node.slice(4).indexOf(key) >= 0, "Cannot add key to schema - key " + key + " already exists!");
        node.push(key);
        return { op: "add", path: "/nodes/" + index + "/" + (node.length - 1), value: key };
    };
    Schema.prototype.nodesDelete = function (nodeId, deleteChildren) {
        var _this = this;
        if (deleteChildren === void 0) { deleteChildren = false; }
        var index = this.nodes.findIndex(function (n) { return n[0] === nodeId; });
        common_1.check(index < 0, "Cannot delete node to schema - node with id " + nodeId + " not exists!");
        // delete child nodes
        if (deleteChildren) {
            this.nodes.filter(function (n) { return n[2] === nodeId; }).forEach(function (n) { return _this.nodesDelete(n[0]); });
        }
        // update nodes array index
        var node = common_1.schemaNode(this.nodes[index]);
        var parent = this.getNode(node.parent);
        if (parent && parent.type === common_1.NODE_ARRAY_TYPE) {
            this.nodes.filter(function (n) { return n[2] === parent.id && n[3] > node.index; }).forEach(function (n) { return n[3] = +n[3] - 1; });
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
    Schema.prototype.findType = function (keys) {
        var type = this.types.find(function (t) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (t.indexOf(key) < 1) {
                    return false;
                }
            }
            return true;
        });
        return type ? type[0] : null;
    };
    Schema.prototype.createNode = function (value, meta) {
        var _this = this;
        var parentId = meta.parentId, key = meta.key;
        var patches = [];
        if (Array.isArray(value)) {
            var nodeId_1 = this.nextId++;
            patches.push(this.nodesAddArray(nodeId_1, parentId, key));
            value.forEach(function (item, i) {
                patches.push.apply(patches, _this.createNode(item, { parentId: nodeId_1, key: i }));
            });
        }
        else if (typeof value === "object") {
            var nodeId_2 = this.nextId++;
            var type = this.findType(Object.keys(value));
            if (!type) {
                patches.push(this.nodesAddMap(nodeId_2, parentId, key));
            }
            else {
                patches.push(this.nodesAddObject(nodeId_2, type, parentId, key));
            }
            Object.keys(value).forEach(function (childKey) {
                patches.push.apply(patches, _this.createNode(value[childKey], { parentId: nodeId_2, key: childKey }));
            });
        }
        else {
            var parent_1 = this.getNode(parentId);
            var path = this.getNodePath(parent_1);
            if (typeof value === "function" || typeof value === "symbol") {
                throw new Error("Cannot build schema - wrong value on path " + path + "/" + key);
            }
            if (parent_1.type === common_1.NODE_MAP_TYPE) {
                patches.push(this.nodesAddMapKey(parentId, key));
            }
            return [];
        }
        return patches;
    };
    Schema.prototype.add = function (type, value, index) {
        if (index === void 0) { index = this[type].length; }
        var patch = { op: "add", path: "/" + type + "/" + index, value: __spreadArrays(value) };
        if (type === "nodes" && typeof value[3] === "string") {
            // value[3] is map key => need to add key to parent map
            var parent_2 = this.getNode(value[2]);
            var keyIndex = parent_2.items.findIndex(function (n) { return n === value[3]; });
            // check if key already exists
            if (keyIndex < 0) {
                // add key to map node
                this.nodesAddMapKey(parent_2.id, value[3]);
                // put key index in value[3]
                value[3] = parent_2.items.length;
            }
            else {
                // put key index in value[3]
                value[3] = keyIndex;
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
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUNBR2lCO0FBRWpCO0lBS0UsZ0JBQWEsTUFBZ0I7UUFGdEIsV0FBTSxHQUFXLENBQUMsQ0FBQTtRQUd2QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQTtRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsS0FBaUI7UUFDakMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDckMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBUSxDQUFBO1FBQzlCLElBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLFFBQVEsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNoQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUN4QyxLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNqQyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FB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

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
    PatchPack.prototype.encodeSchema = function () {
        return notepack.encode(this.schema);
    };
    PatchPack.prototype.decodeSchema = function (buffer) {
        var schema = notepack.decode(buffer);
        this.schema.types = schema && schema.types || [];
        this.schema.nodes = schema && schema.nodes || [];
        return schema;
    };
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
        if (node.type === common_1.NODE_MAP_TYPE) {
            if (typeof snapshot !== "object") {
                var path = this.schema.getNodePath(sn) + (name === undefined ? "" : "/" + name);
                throw new Error("Cannot encode snapshot - object expected on path: " + path);
            }
            return node.items.map(function (key, i) { return _this.encodeNode(snapshot[key], node, key); });
        }
        else if (node.type === -1) {
            if (!Array.isArray(snapshot)) {
                var path = this.schema.getNodePath(sn) + (name === undefined ? "" : "/" + name);
                throw new Error("Cannot encode snapshot - array expected on path: " + path);
            }
            return snapshot.map(function (item, i) { return _this.encodeNode(item, node, i); });
        }
        else {
            var props = this.schema.getTypeProps(node.type);
            return props.map(function (key, i) { return _this.encodeNode(snapshot[key], node, key); });
        }
    };
    PatchPack.prototype.encodeSnapshot = function (snapshot, nodeId) {
        if (nodeId === void 0) { nodeId = 0; }
        var node = this.schema.getNode(nodeId);
        if (!node) {
            throw new Error("Cannot encode snapshot - node with id " + nodeId + " not found!");
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
    PatchPack.prototype.decodeSchemaPatch = function (sp) {
        var patch = common_1.schemaPatch(sp);
        // set JsonPatch operation
        var op = ["add", "replace", "remove"][patch.op + (patch.op < -3 ? 6 : 3)];
        // set path elements
        var pathArr = [, patch.op < -3 ? "types" : "nodes", patch.id];
        if (patch.prop >= 0) {
            pathArr.push(patch.prop);
        }
        var jsonPatch = { op: op, path: pathArr.join("/") };
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
        if (nodeId === void 0) { nodeId = 0; }
        return this.decodeNode(nodeId, notepack.decode(buffer));
    };
    PatchPack.prototype.decodePatch = function (buffer, updateSchema) {
        if (updateSchema === void 0) { updateSchema = true; }
        var encodedPatch = notepack.decode(buffer);
        if (encodedPatch[0] < 0) {
            // decode schemaMap patch
            var decodedPatch = this.decodeSchemaPatch(encodedPatch);
            return updateSchema ? this.schema.applyPatch(decodedPatch) : decodedPatch;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hwYWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BhdGNocGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXVDO0FBRXZDLG1DQUdpQjtBQUNqQixtQ0FBaUM7QUFFakM7SUFFRSxtQkFBYSxNQUFnQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNFLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVNLGdDQUFZLEdBQW5CLFVBQW9CLE1BQWM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBVSxNQUFNLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUE7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFBO1FBQ2hELE9BQU8sTUFBTSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixLQUFpQjtRQUN4Qyx5QkFBeUI7UUFDekIsZUFBZTtRQUNULElBQUEsS0FBd0IsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTFDLElBQUksUUFBQSxFQUFFLEtBQUssUUFBQSxFQUFFLElBQUksUUFBeUIsQ0FBQTtRQUVuRCwrQkFBK0I7UUFDL0IseUNBQXlDO1FBQ3pDLHlDQUF5QztRQUN6QyxJQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENB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

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