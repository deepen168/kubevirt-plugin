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
var usePreviewFeaturesData = function () {
    var features = [];
    var allFeatures = features.reduce(function (acc, feature) {
        acc.canEditAll = (acc === null || acc === void 0 ? void 0 : acc.canEditAll) && (feature === null || feature === void 0 ? void 0 : feature.canEdit);
        acc.isEnabledAll = (acc === null || acc === void 0 ? void 0 : acc.isEnabledAll) && (feature === null || feature === void 0 ? void 0 : feature.featureEnabled);
        acc.loading = (acc === null || acc === void 0 ? void 0 : acc.loading) || (feature === null || feature === void 0 ? void 0 : feature.loading);
        acc.togglers.push(feature.toggleFeature);
        return acc;
    }, {
        canEditAll: true,
        isEnabledAll: true,
        loading: false,
        togglers: [],
    });
    return __assign(__assign({}, allFeatures), { features: features });
};
export default usePreviewFeaturesData;
//# sourceMappingURL=usePreviewFeaturesData.js.map