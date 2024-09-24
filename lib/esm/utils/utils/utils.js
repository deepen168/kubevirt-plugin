var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
import { animals, colors, NumberDictionary, uniqueNamesGenerator } from 'unique-names-generator';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { ALL_NAMESPACES, ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { k8sBasePath } from '@openshift-console/dynamic-plugin-sdk/lib/utils/k8s/k8s';
export var kubevirtConsole = console;
export var clusterBasePath = k8sBasePath.slice(0, k8sBasePath.lastIndexOf('api/kubernetes'));
export var getValidNamespace = function (activeNamespace) {
    return activeNamespace === ALL_NAMESPACES_SESSION_KEY ? DEFAULT_NAMESPACE : activeNamespace;
};
export var isEmpty = function (obj) {
    return [Array, Object].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
};
export var get = function (obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    var travel = function (regexp) {
        return String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce(function (res, key) {
            return res !== null && res !== undefined ? res[key] : res;
        }, obj);
    };
    var result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
};
export var isUpstream = ((_a = window.SERVER_FLAGS) === null || _a === void 0 ? void 0 : _a.branding) === 'okd';
export var isString = function (val) { return val !== null && typeof val === 'string'; };
export var getSSHNodePort = function (sshService) { var _a, _b, _c; return (_c = (_b = (_a = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _a === void 0 ? void 0 : _a.ports) === null || _b === void 0 ? void 0 : _b.find(function (port) { return parseInt(port.targetPort, 10) === 22; })) === null || _c === void 0 ? void 0 : _c.nodePort; };
export var isTemplateParameter = function (value) {
    return Boolean(/^\${[A-z0-9_]+}$/.test(value));
};
export var getRandomChars = function (len) {
    if (len === void 0) { len = 6; }
    return Math.random()
        .toString(36)
        .replace(/[^a-z0-9]+/g, '')
        .substr(1, len);
};
export var SSH_PUBLIC_KEY_VALIDATION_REGEX = /^(sk-)?(ssh-rsa AAAAB3NzaC1yc2|ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNT|ecdsa-sha2-nistp384 AAAAE2VjZHNhLXNoYTItbmlzdHAzODQAAAAIbmlzdHAzOD|ecdsa-sha2-nistp521 AAAAE2VjZHNhLXNoYTItbmlzdHA1MjEAAAAIbmlzdHA1Mj|ssh-ed25519 AAAAC3NzaC1lZDI1NTE5|ssh-dss AAAAB3NzaC1kc3)[0-9A-Za-z+/]+[=]{0,3}( .*)?$/;
export var validateSSHPublicKey = function (value) {
    var trimmedValue = value === null || value === void 0 ? void 0 : value.trim();
    return isEmpty(trimmedValue) || Boolean(SSH_PUBLIC_KEY_VALIDATION_REGEX === null || SSH_PUBLIC_KEY_VALIDATION_REGEX === void 0 ? void 0 : SSH_PUBLIC_KEY_VALIDATION_REGEX.test(trimmedValue));
};
export var getContentScrollableElement = function () {
    return document.getElementById('content-scrollable');
};
export var findAllIndexes = function (array, predicate) {
    return Array.from(array.entries()).reduce(function (acc, _a) {
        var index = _a[0], element = _a[1];
        return (predicate(element, index, array) ? __spreadArray(__spreadArray([], acc, true), [index], false) : acc);
    }, []);
};
// return the name or 'Other' if the name not included in the array of available items for filtering
export var getItemNameWithOther = function (itemName, items) {
    return !(items === null || items === void 0 ? void 0 : items.find(function (item) { return item.id === itemName; })) || itemName === 'Other'
        ? 'Other'
        : itemName;
};
export var includeFilter = function (compareData, items, itemName) {
    var _a, _b;
    var compareString = getItemNameWithOther(itemName, items);
    return ((_a = compareData.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 || ((_b = compareData.selected) === null || _b === void 0 ? void 0 : _b.includes(compareString));
};
export var ensurePath = function (data, paths) {
    var current = data;
    if (Array.isArray(paths)) {
        paths.forEach(function (path) { return ensurePath(data, path); });
    }
    else {
        var keys = paths.split('.');
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!current[key])
                current[key] = {};
            current = current[key];
        }
    }
};
var getValueByPath = function (obj, path) {
    var pathArray = path === null || path === void 0 ? void 0 : path.split('.');
    return pathArray === null || pathArray === void 0 ? void 0 : pathArray.reduce(function (acc, field) { return acc === null || acc === void 0 ? void 0 : acc[field]; }, obj);
};
export var columnSorting = function (data, direction, pagination, path) {
    var _a;
    var endIndex = pagination.endIndex, startIndex = pagination.startIndex;
    var predicate = function (a, b) {
        var _a, _b, _c;
        var _d = direction === 'asc' ? { first: a, second: b } : { first: b, second: a }, first = _d.first, second = _d.second;
        return (_b = (_a = getValueByPath(first, path)) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.localeCompare((_c = getValueByPath(second, path)) === null || _c === void 0 ? void 0 : _c.toString(), undefined, {
            numeric: true,
            sensitivity: 'base',
        });
    };
    return (_a = data === null || data === void 0 ? void 0 : data.sort(predicate)) === null || _a === void 0 ? void 0 : _a.slice(startIndex, endIndex);
};
export var removeDuplicatesByName = function (array, nameProperty) {
    if (nameProperty === void 0) { nameProperty = 'name'; }
    return array === null || array === void 0 ? void 0 : array.reduce(function (acc, curr) {
        if (!acc.find(function (item) { return (item === null || item === void 0 ? void 0 : item[nameProperty]) === (curr === null || curr === void 0 ? void 0 : curr[nameProperty]); }))
            acc.push(curr);
        return acc;
    }, []);
};
export var generatePrettyName = function (prefix) {
    var numberDictionary = NumberDictionary.generate({ length: 2 });
    var prefixValue = prefix ? "".concat(prefix, "-") : '';
    return "".concat(prefixValue).concat(uniqueNamesGenerator({
        dictionaries: [colors, animals, numberDictionary],
        separator: '-',
    }));
};
var DOCKER_PREFIX = 'docker://';
export var appendDockerPrefix = function (image) {
    return (image === null || image === void 0 ? void 0 : image.startsWith(DOCKER_PREFIX)) ? image : DOCKER_PREFIX.concat(image);
};
export var removeDockerPrefix = function (image) { return image === null || image === void 0 ? void 0 : image.replace(DOCKER_PREFIX, ''); };
export var isAllNamespaces = function (namespace) {
    return !namespace || namespace === ALL_NAMESPACES || namespace === ALL_NAMESPACES_SESSION_KEY;
};
//# sourceMappingURL=utils.js.map