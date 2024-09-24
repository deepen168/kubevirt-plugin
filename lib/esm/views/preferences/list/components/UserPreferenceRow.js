import React from 'react';
import { VirtualMachinePreferenceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import RedHatLabel from '@kubevirt-utils/components/RedHatLabel/RedHatLabel';
import { VENDOR_LABEL } from '@kubevirt-utils/constants/constants';
import { getLabel, getName, getNamespace } from '@kubevirt-utils/resources/shared';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import UserPreferenceActions from '../../actions/UserPreferenceActions';
var UserPreferenceRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, preference = _a.obj;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(ResourceLink, { groupVersionKind: VirtualMachinePreferenceModelGroupVersionKind, inline: true, name: getName(preference), namespace: getNamespace(preference) }),
            React.createElement(RedHatLabel, { obj: preference })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "namespace" }, getNamespace(preference)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "vendor" }, getLabel(preference, VENDOR_LABEL, NO_DATA_DASH)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(UserPreferenceActions, { isKebabToggle: true, preference: preference }))));
};
export default UserPreferenceRow;
//# sourceMappingURL=UserPreferenceRow.js.map