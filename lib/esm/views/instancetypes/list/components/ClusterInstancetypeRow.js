import React from 'react';
import { VirtualMachineClusterInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import RedHatLabel from '@kubevirt-utils/components/RedHatLabel/RedHatLabel';
import { VENDOR_LABEL } from '@kubevirt-utils/constants/constants';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import ClusterInstancetypeActions from '../../actions/ClusterInstancetypeActions';
var ClusterInstancetypeRow = function (_a) {
    var _b, _c, _d, _e, _f;
    var activeColumnIDs = _a.activeColumnIDs, it = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineClusterInstancetypeModelGroupVersionKind, inline: true, name: (_b = it === null || it === void 0 ? void 0 : it.metadata) === null || _b === void 0 ? void 0 : _b.name }),
            React.createElement(RedHatLabel, { obj: it })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "cpu" }, (_d = (_c = it === null || it === void 0 ? void 0 : it.spec) === null || _c === void 0 ? void 0 : _c.cpu) === null || _d === void 0 ? void 0 : _d.guest),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "memory" }, readableSizeUnit((_f = (_e = it === null || it === void 0 ? void 0 : it.spec) === null || _e === void 0 ? void 0 : _e.memory) === null || _f === void 0 ? void 0 : _f.guest)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vendor" }, getLabel(it, VENDOR_LABEL, NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(ClusterInstancetypeActions, { instanceType: it, isKebabToggle: true }))));
};
export default ClusterInstancetypeRow;
//# sourceMappingURL=ClusterInstancetypeRow.js.map