import { getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { PROXY_KUBEVIRT_URL } from './constants';
var rsMapper = {};
export var registerResourceVersion = function (key, rs) {
    rsMapper[key] = Number(rs < (rsMapper === null || rsMapper === void 0 ? void 0 : rsMapper[key]) ? rsMapper === null || rsMapper === void 0 ? void 0 : rsMapper[key] : rs);
    return;
};
export var getResourceVersion = function (key) { return rsMapper === null || rsMapper === void 0 ? void 0 : rsMapper[key]; };
export var constructURL = function (watchOptions, query) {
    var _a = watchOptions || {}, groupVersionKind = _a.groupVersionKind, name = _a.name, namespace = _a.namespace;
    var baseUrl = "".concat(PROXY_KUBEVIRT_URL, "apis/").concat(groupVersionKind === null || groupVersionKind === void 0 ? void 0 : groupVersionKind.group, "/").concat(groupVersionKind === null || groupVersionKind === void 0 ? void 0 : groupVersionKind.version, "/");
    var namespaceUrl = "".concat(namespace ? "namespaces/".concat(namespace, "/") : '');
    var nameUrl = "".concat(!name ? 's' : "/".concat(name));
    var kindUrl = groupVersionKind === null || groupVersionKind === void 0 ? void 0 : groupVersionKind.kind.toLowerCase();
    var appendedQuery = !isEmpty(query) ? "?".concat(query) : '';
    return "".concat(baseUrl).concat(namespaceUrl).concat(kindUrl).concat(nameUrl).concat(appendedQuery);
};
export var compareNameAndNamespace = function (obj, compObj) {
    return getNamespace(obj) === getNamespace(compObj) && getName(obj) === getName(compObj);
};
//# sourceMappingURL=utils.js.map