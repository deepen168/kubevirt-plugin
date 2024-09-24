var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from 'react';
import DiskSourceSelect from '@kubevirt-utils/components/DiskModal/components/DiskSourceSelect/DiskSourceSelect';
import DiskModal from '@kubevirt-utils/components/DiskModal/DiskModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SidebarEditor from '@kubevirt-utils/components/SidebarEditor/SidebarEditor';
import WindowsDrivers from '@kubevirt-utils/components/WindowsDrivers/WindowsDrivers';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { ListPageBody, ListPageFilter, useListPageFilter, VirtualizedTable, } from '@openshift-console/dynamic-plugin-sdk';
import { Flex, FlexItem, PageSection, PageSectionVariants } from '@patternfly/react-core';
import DiskRow from './components/DiskRow';
import useDiskColumns from './hooks/useDiskColumns';
import useDisksFilters from './hooks/useDisksFilters';
import useWizardDisksTableData from './hooks/useWizardDisksTableData';
var WizardDisksTab = function (_a) {
    var tabsData = _a.tabsData, updateTabsData = _a.updateTabsData, updateVM = _a.updateVM, vm = _a.vm;
    var createModal = useModal().createModal;
    var columns = useDiskColumns();
    var _b = useWizardDisksTableData(vm), disks = _b[0], disksLoaded = _b[1];
    var filters = useDisksFilters();
    var _c = useListPageFilter(disks, filters), data = _c[0], filteredData = _c[1], onFilterChange = _c[2];
    return (React.createElement(PageSection, { variant: PageSectionVariants.light },
        React.createElement(ListPageBody, null,
            React.createElement(SidebarEditor, { onResourceUpdate: function (newVM) { return updateVM(newVM); }, pathsToHighlight: PATHS_TO_HIGHLIGHT.DISKS_TAB, resource: vm },
                React.createElement(DiskSourceSelect, { onSelect: function (diskSource) {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(DiskModal, { onUploadedDataVolume: function (dataVolume) {
                                    return updateTabsData(function (draft) {
                                        var _a;
                                        ensurePath(draft, 'disks.dataVolumesToAddOwnerRef');
                                        if (draft.disks) {
                                            draft.disks.dataVolumesToAddOwnerRef = __spreadArray(__spreadArray([], (((_a = tabsData === null || tabsData === void 0 ? void 0 : tabsData.disks) === null || _a === void 0 ? void 0 : _a.dataVolumesToAddOwnerRef) || []), true), [
                                                dataVolume,
                                            ], false);
                                        }
                                    });
                                }, createDiskSource: diskSource, isOpen: isOpen, onClose: onClose, onSubmit: updateVM, vm: vm }));
                        });
                    }, className: "list-page-create-button-margin" }),
                React.createElement(Flex, null,
                    React.createElement(FlexItem, null,
                        React.createElement(ListPageFilter, { data: data, hideLabelFilter: true, loaded: disksLoaded, onFilterChange: onFilterChange, rowFilters: filters })),
                    React.createElement(FlexItem, null,
                        React.createElement(WindowsDrivers, { updateVM: updateVM, vm: vm }))),
                React.createElement(VirtualizedTable, { columns: columns, data: filteredData, loaded: disksLoaded, loadError: undefined, Row: DiskRow, unfilteredData: data })))));
};
export default WizardDisksTab;
//# sourceMappingURL=WizardDisksTab.js.map