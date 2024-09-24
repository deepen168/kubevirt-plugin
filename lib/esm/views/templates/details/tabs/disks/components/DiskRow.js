import * as React from 'react';
import TemplateValue from '@kubevirt-utils/components/TemplateValue/TemplateValue';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, PersistentVolumeClaimModel } from '@kubevirt-utils/models';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Flex, FlexItem, Label } from '@patternfly/react-core';
import DiskRowActions from './DiskRowActions';
var DiskRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _b = _a.rowData, actionsDisabled = _b.actionsDisabled, onUpdate = _b.onUpdate, vm = _b.vm;
    var t = useKubevirtTranslation().t;
    var isPVCSource = !['Container (Ephemeral)', 'Other', 'PVC (auto import)', 'URL'].includes(obj === null || obj === void 0 ? void 0 : obj.source);
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(TemplateValue, { value: obj === null || obj === void 0 ? void 0 : obj.name },
                React.createElement(Flex, null,
                    React.createElement(FlexItem, null, obj === null || obj === void 0 ? void 0 : obj.name),
                    (obj === null || obj === void 0 ? void 0 : obj.isBootDisk) && (React.createElement(FlexItem, null,
                        React.createElement(Label, { color: "blue", variant: "filled" }, t('bootable')))),
                    (obj === null || obj === void 0 ? void 0 : obj.isEnvDisk) && (React.createElement(FlexItem, null,
                        React.createElement(Label, { color: "blue", variant: "filled" }, t('environment disk'))))))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "source" }, isPVCSource ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel), name: obj === null || obj === void 0 ? void 0 : obj.source, namespace: obj === null || obj === void 0 ? void 0 : obj.namespace })) : (React.createElement(TemplateValue, { value: obj === null || obj === void 0 ? void 0 : obj.source }))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "size" },
            React.createElement(TemplateValue, { value: readableSizeUnit(obj === null || obj === void 0 ? void 0 : obj.size) })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "drive" },
            React.createElement(TemplateValue, { value: obj === null || obj === void 0 ? void 0 : obj.drive })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "interface" },
            React.createElement(TemplateValue, { value: obj === null || obj === void 0 ? void 0 : obj.interface })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "storage-class" },
            React.createElement(TemplateValue, { value: obj === null || obj === void 0 ? void 0 : obj.storageClass })),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(DiskRowActions, { diskName: obj === null || obj === void 0 ? void 0 : obj.name, isDisabled: actionsDisabled, onUpdate: onUpdate, vm: vm }))));
};
export default DiskRow;
//# sourceMappingURL=DiskRow.js.map