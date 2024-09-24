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
import React from 'react';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import EnableFeatureCheckboxControlled from './EnableFeatureCheckboxConrolled';
import './EnableFeatureCheckbox.scss';
var EnableFeatureCheckbox = function (props) {
    var _a = useFeatures(props === null || props === void 0 ? void 0 : props.featureName), canEdit = _a.canEdit, featureEnabled = _a.featureEnabled, loading = _a.loading, toggleFeature = _a.toggleFeature;
    return (React.createElement(EnableFeatureCheckboxControlled, __assign({ canEdit: canEdit, featureEnabled: featureEnabled }, props, { loading: loading, toggleFeature: toggleFeature })));
};
export default EnableFeatureCheckbox;
//# sourceMappingURL=EnableFeatureCheckbox.js.map