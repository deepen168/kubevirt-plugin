import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { getGroupVersionKindForResource, ResourceLink, } from '@openshift-console/dynamic-plugin-sdk';
var OwnerReferences = function (_a) {
    var _b, _c;
    var obj = _a.obj;
    var t = useKubevirtTranslation().t;
    var ownerReferences = (_c = (((_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.ownerReferences) || [])) === null || _c === void 0 ? void 0 : _c.map(function (ownerRef) {
        var _a;
        return (React.createElement(ResourceLink, { groupVersionKind: getGroupVersionKindForResource(ownerRef), key: ownerRef === null || ownerRef === void 0 ? void 0 : ownerRef.uid, name: ownerRef === null || ownerRef === void 0 ? void 0 : ownerRef.name, namespace: (_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.namespace }));
    });
    return !isEmpty(ownerReferences) ? (React.createElement("div", null, ownerReferences)) : (React.createElement("span", { className: "text-muted" }, t('No owner')));
};
export default OwnerReferences;
//# sourceMappingURL=OwnerReferences.js.map