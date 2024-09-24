import { Link } from 'react-router-dom-v5-compat';
export var getLinkComponent = function (link) {
    if (!(link === null || link === void 0 ? void 0 : link.href)) {
        return 'button';
    }
    else if (link === null || link === void 0 ? void 0 : link.external) {
        return 'a';
    }
    return Link;
};
//# sourceMappingURL=utils.js.map