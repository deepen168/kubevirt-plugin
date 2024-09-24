import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { icon } from '@kubevirt-utils/resources/vmi';
import { Label } from '@patternfly/react-core';
import VirtualMachineInstanceActions from '../list/components/VirtualMachineInstanceActions/VirtualMachineInstanceAction';
import VirtualMachineInstanceBreadcrumb from '../list/components/VirtualMachineInstanceBreadcrumb/VirtualMachineInstanceBreadcrumb';
var VirtualMachinesInstancePageHeader = function (_a) {
    var _b, _c;
    var vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var status = (_b = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _b === void 0 ? void 0 : _b.phase;
    var IconComponent = icon === null || icon === void 0 ? void 0 : icon[status];
    return (React.createElement("div", { className: "co-m-nav-title co-m-nav-title--detail" },
        React.createElement(VirtualMachineInstanceBreadcrumb, null),
        React.createElement("span", { className: 'co-m-pane__heading' },
            React.createElement("h1", { className: "co-resource-item__resource-name" },
                React.createElement("span", { className: "co-m-resource-icon co-m-resource-icon--lg" }, t('VMI')), (_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 :
                _c.name,
                ' ',
                React.createElement(Label, { icon: React.createElement(IconComponent, null), isCompact: true }, status)),
            React.createElement(VirtualMachineInstanceActions, { vmi: vmi }))));
};
export default VirtualMachinesInstancePageHeader;
//# sourceMappingURL=VirtualMachinesInstancePageHeader.js.map