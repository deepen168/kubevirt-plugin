import React from 'react';
import { VirtualMachineClusterPreferenceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import RedHatLabel from '@kubevirt-utils/components/RedHatLabel/RedHatLabel';
import { VENDOR_LABEL } from '@kubevirt-utils/constants/constants';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import ClusterPreferenceActions from '../../actions/ClusterPreferenceActions';
var ClusterPreferenceRow = function (_a) {
    var _b;
    var activeColumnIDs = _a.activeColumnIDs, preference = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachineClusterPreferenceModelGroupVersionKind, inline: true, name: (_b = preference === null || preference === void 0 ? void 0 : preference.metadata) === null || _b === void 0 ? void 0 : _b.name }),
            React.createElement(RedHatLabel, { obj: preference })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vendor" }, getLabel(preference, VENDOR_LABEL, NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(ClusterPreferenceActions, { isKebabToggle: true, preference: preference }))));
};
export default ClusterPreferenceRow;
//# sourceMappingURL=ClusterPreferenceRow.js.map