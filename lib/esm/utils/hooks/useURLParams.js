var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
/**
 * A Hook for manipulating URL Parameters and History.
 */
export var useURLParams = function () {
    var location = useLocation();
    var navigate = useNavigate();
    var params = new URLSearchParams(location.search);
    /**
     * A function for setting a URL parameter. if the parameter exists, it will be overwritten.
     * @param {string} key - the parameter key
     * @param {string} value - the parameter value
     */
    var setParam = function (key, value) {
        if (value) {
            params.set(key, value);
            navigate({ pathname: location.pathname, search: params.toString() });
        }
        else {
            if (params.has(key)) {
                params.delete(key);
                navigate({ pathname: location.pathname, search: params.toString() });
            }
        }
    };
    /**
     * A function for appending a URL parameter. if the parameter exists, it will not be overwritten.
     * @param {string} key - the parameter key
     * @param {string} value - the parameter value
     */
    var appendParam = function (key, value) {
        params.append(key, value);
        navigate({ pathname: location.pathname, search: params.toString() });
    };
    /**
     * A function for deleting a URL parameter.
     * @param {string} key - the parameter key
     * @param {string} value - the parameter value
     */
    var deleteParam = function (key, value) {
        if (value) {
            var newParams = __spreadArray([], params.getAll(key), true).filter(function (v) { return v !== value; });
            params.delete(key);
            newParams.forEach(function (v) { return params.append(key, v); });
            navigate({ pathname: location.pathname, search: params.toString() });
        }
        else {
            if (params.has(key)) {
                params.delete(key);
                navigate({ pathname: location.pathname, search: params.toString() });
            }
        }
    };
    return { appendParam: appendParam, deleteParam: deleteParam, params: params, setParam: setParam };
};
//# sourceMappingURL=useURLParams.js.map