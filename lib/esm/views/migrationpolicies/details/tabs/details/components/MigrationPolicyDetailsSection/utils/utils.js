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
import produce from 'immer';
export var ensureMigrationPolicyMatchLabels = function (mp, labels, selector) {
    return produce(mp, function (mpDraft) {
        mpDraft.spec.selectors[selector] = __assign({}, labels);
    });
};
//# sourceMappingURL=utils.js.map