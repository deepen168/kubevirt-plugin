import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { modelToGroupVersionKind, PersistentVolumeClaimModel } from '@kubevirt-utils/models';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { ResourceLink, TableData } from '@openshift-console/dynamic-plugin-sdk';
import { Label, Popover, PopoverPosition, Stack, StackItem } from '@patternfly/react-core';
import { isPVCSource } from './utils/helpers';
import DiskRowActions from './DiskRowActions';
import { HotplugLabel } from './HotplugLabel';
var DiskRow = function (_a) {
    var activeColumnIDs = _a.activeColumnIDs, obj = _a.obj, _b = _a.rowData, _c = _b.customize, customize = _c === void 0 ? false : _c, onSubmit = _b.onSubmit, provisioningPercentages = _b.provisioningPercentages, vm = _b.vm, vmi = _b.vmi;
    var t = useKubevirtTranslation().t;
    var provisioningPercentage = provisioningPercentages === null || provisioningPercentages === void 0 ? void 0 : provisioningPercentages[obj === null || obj === void 0 ? void 0 : obj.source];
    return (React.createElement(React.Fragment, null,
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "name" },
            React.createElement(Stack, null,
                React.createElement(StackItem, null,
                    provisioningPercentage ? (React.createElement(Popover, { bodyContent: React.createElement(React.Fragment, null,
                            t('Provisioning'),
                            " ",
                            provisioningPercentage), position: PopoverPosition.right },
                        React.createElement("span", { className: "provisioning-popover-button" }, obj === null || obj === void 0 ? void 0 : obj.name))) : (obj === null || obj === void 0 ? void 0 : obj.name),
                    ' ',
                    React.createElement(HotplugLabel, { diskName: obj === null || obj === void 0 ? void 0 : obj.name, vm: vm, vmi: vmi })),
                (obj === null || obj === void 0 ? void 0 : obj.isBootDisk) && (React.createElement(StackItem, null,
                    React.createElement(Label, { className: "disk-row-label-bootable", color: "blue", variant: "filled" }, t('bootable')))),
                (obj === null || obj === void 0 ? void 0 : obj.isEnvDisk) && (React.createElement(StackItem, null,
                    React.createElement(Label, { color: "blue", variant: "filled" }, t('environment disk')))))),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "source" }, isPVCSource(obj) ? (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(PersistentVolumeClaimModel), name: obj === null || obj === void 0 ? void 0 : obj.source, namespace: obj === null || obj === void 0 ? void 0 : obj.namespace })) : (obj === null || obj === void 0 ? void 0 : obj.source)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "size" }, readableSizeUnit(obj === null || obj === void 0 ? void 0 : obj.size)),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "drive" }, obj === null || obj === void 0 ? void 0 : obj.drive),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "interface" }, obj === null || obj === void 0 ? void 0 : obj.interface),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, id: "storage-class" }, obj === null || obj === void 0 ? void 0 : obj.storageClass),
        React.createElement(TableData, { activeColumnIDs: activeColumnIDs, className: "dropdown-kebab-pf pf-v5-c-table__action", id: "" },
            React.createElement(DiskRowActions, { customize: customize, obj: obj, onDiskUpdate: onSubmit, vm: vm, vmi: vmi }))));
};
export default DiskRow;
//# sourceMappingURL=DiskRow.js.map