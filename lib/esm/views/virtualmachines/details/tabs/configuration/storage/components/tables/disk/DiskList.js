import React from 'react';
import DiskListTitle from '@kubevirt-utils/components/DiskListTitle/DiskListTitle';
import DiskSourceSelect from '@kubevirt-utils/components/DiskModal/components/DiskSourceSelect/DiskSourceSelect';
import DiskModal from '@kubevirt-utils/components/DiskModal/DiskModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import WindowsDrivers from '@kubevirt-utils/components/WindowsDrivers/WindowsDrivers';
import useDisksTableData from '@kubevirt-utils/resources/vm/hooks/disk/useDisksTableData';
import useProvisioningPercentage from '@kubevirt-utils/resources/vm/hooks/useProvisioningPercentage';
import { ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Flex, FlexItem } from '@patternfly/react-core';
import { updateDisks } from '@virtualmachines/details/tabs/configuration/details/utils/utils';
import useDiskColumns from '../../hooks/useDiskColumns';
import useDisksFilters from '../../hooks/useDisksFilters';
import DiskRow from './DiskRow';
import './disklist.scss';
var DiskList = function (_a) {
    var _b = _a.customize, customize = _b === void 0 ? false : _b, onDiskUpdate = _a.onDiskUpdate, vm = _a.vm, vmi = _a.vmi;
    var createModal = useModal().createModal;
    var columns = useDiskColumns();
    var _c = useDisksTableData(vm, vmi), disks = _c[0], loaded = _c[1], loadError = _c[2];
    var filters = useDisksFilters();
    var _d = useListPageFilter(disks, filters), data = _d[0], filteredData = _d[1], onFilterChange = _d[2];
    var provisioningPercentages = useProvisioningPercentage(vm).percentages;
    var onSubmit = onDiskUpdate || updateDisks;
    return (React.createElement("div", { className: "kv-configuration-vm-disk-list" },
        React.createElement(DiskListTitle, null),
        React.createElement(DiskSourceSelect, { onSelect: function (diskSource) {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DiskModal, { createDiskSource: diskSource, isOpen: isOpen, onClose: onClose, onSubmit: onDiskUpdate || updateDisks, vm: vm }));
                });
            } }),
        React.createElement(Flex, null,
            React.createElement(FlexItem, null,
                React.createElement(ListPageFilter, { data: data, hideLabelFilter: true, loaded: loaded, onFilterChange: onFilterChange, rowFilters: filters })),
            React.createElement(FlexItem, null,
                React.createElement(WindowsDrivers, { updateVM: onSubmit, vm: vm }))),
        React.createElement(VirtualizedTable, { columns: columns, data: filteredData, loaded: loaded, loadError: loadError, Row: DiskRow, rowData: { customize: customize, onSubmit: onSubmit, provisioningPercentages: provisioningPercentages, vm: vm, vmi: vmi }, unfilteredData: data })));
};
export default DiskList;
//# sourceMappingURL=DiskList.js.map