import React from 'react';
import { OffIcon } from '@patternfly/react-icons';
import { getVmStatusLabelFromPrintable, InventoryStatusGroup, StatusSimpleLabel, VMStatusSimpleLabel, } from './utils';
import './inventory.scss';
export var getVMStatusGroups = function (vms) {
    var _a;
    var groups = (_a = {},
        _a[InventoryStatusGroup.ERROR] = {
            count: 0,
            filterType: 'vm-status',
            statusIDs: [StatusSimpleLabel.Error],
        },
        _a[InventoryStatusGroup.NOT_MAPPED] = {
            count: 0,
            filterType: 'vm-status',
            statusIDs: [VMStatusSimpleLabel.Running],
        },
        _a[InventoryStatusGroup.PROGRESS] = {
            count: 0,
            filterType: 'vm-status',
            statusIDs: [
                StatusSimpleLabel.Importing,
                VMStatusSimpleLabel.Starting,
                VMStatusSimpleLabel.Migrating,
                VMStatusSimpleLabel.Stopping,
                StatusSimpleLabel.Pending,
                VMStatusSimpleLabel.Deleting,
            ],
        },
        _a[InventoryStatusGroup.UNKNOWN] = {
            count: 0,
            filterType: 'vm-status',
            statusIDs: [StatusSimpleLabel.Other],
        },
        _a[InventoryStatusGroup.WARN] = {
            count: 0,
            filterType: 'vm-status',
            statusIDs: [VMStatusSimpleLabel.Paused],
        },
        _a['vm-stopped'] = {
            count: 0,
            filterType: 'vm-status',
            statusIDs: [VMStatusSimpleLabel.Stopped],
        },
        _a);
    vms.forEach(function (vm) {
        var group = Object.keys(groups).find(function (key) { var _a; return groups[key].statusIDs.includes(getVmStatusLabelFromPrintable((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus)); }) || InventoryStatusGroup.UNKNOWN;
        groups[group].count++;
    });
    return groups;
};
export var VMOffGroupIcon = function () { return (React.createElement(OffIcon, { className: "kubevirt-inventory-card__status-icon--off" })); };
//# sourceMappingURL=Inventory.js.map