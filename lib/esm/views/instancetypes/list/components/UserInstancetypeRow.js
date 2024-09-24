import React from 'react';
import { VirtualMachineInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import RedHatLabel from '@kubevirt-utils/components/RedHatLabel/RedHatLabel';
import { VENDOR_LABEL } from '@kubevirt-utils/constants/constants';
import { getLabel, getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import UserInstancetypeActions from '../../actions/UserInstancetypeActions';
var UserInstancetypeRow = function (_a) {
    var _b, _c, _d, _e;
    var activeColumnIDs = _a.activeColumnIDs, it = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineInstancetypeModelGroupVersionKind, inline: true, name: getName(it), namespace: getNamespace(it) }),
            React.createElement(RedHatLabel, { obj: it })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace" }, getNamespace(it)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "cpu" }, (_c = (_b = it === null || it === void 0 ? void 0 : it.spec) === null || _b === void 0 ? void 0 : _b.cpu) === null || _c === void 0 ? void 0 : _c.guest),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "memory" }, readableSizeUnit((_e = (_d = it === null || it === void 0 ? void 0 : it.spec) === null || _d === void 0 ? void 0 : _d.memory) === null || _e === void 0 ? void 0 : _e.guest)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vendor" }, getLabel(it, VENDOR_LABEL, NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(UserInstancetypeActions, { instanceType: it, isKebabToggle: true }))));
};
export default UserInstancetypeRow;
//# sourceMappingURL=UserInstancetypeRow.js.map