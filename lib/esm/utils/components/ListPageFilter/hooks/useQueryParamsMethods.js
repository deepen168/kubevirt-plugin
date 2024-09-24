import { useNavigate } from 'react-router-dom-v5-compat';
export var useQueryParamsMethods = function () {
    var navigate = useNavigate();
    var setAllQueryArguments = function (newParams) {
        var params = new URLSearchParams(window.location.search);
        var update = false;
        Object.entries(newParams || {}).forEach(function (_a) {
            var k = _a[0], v = _a[1];
            if (params.get(k) !== v) {
                update = true;
                params.set(k, v);
            }
        });
        if (update) {
            var url = new URL(window.location.href);
            navigate("".concat(url.pathname, "?").concat(params.toString()).concat(url.hash), { replace: true });
        }
    };
    var removeQueryArguments = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var params = new URLSearchParams(window.location.search);
        var update = false;
        keys.forEach(function (k) {
            if (params.has(k)) {
                update = true;
                params.delete(k);
            }
        });
        if (update) {
            var url = new URL(window.location.href);
            navigate("".concat(url.pathname, "?").concat(params.toString()).concat(url.hash), { replace: true });
        }
    };
    var setOrRemoveQueryArgument = function (k, v) {
        var _a;
        return v ? setAllQueryArguments((_a = {}, _a[k] = v, _a)) : removeQueryArguments(k);
    };
    return { removeQueryArguments: removeQueryArguments, setAllQueryArguments: setAllQueryArguments, setOrRemoveQueryArgument: setOrRemoveQueryArgument };
};
//# sourceMappingURL=useQueryParamsMethods.js.map