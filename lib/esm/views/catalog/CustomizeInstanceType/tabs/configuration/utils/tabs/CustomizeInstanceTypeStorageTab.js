import React from 'react';
import EnvironmentForm from '@kubevirt-utils/components/EnvironmentEditor/EnvironmentForm';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { getDataVolumeTemplates, getDisks, getVolumes } from '@kubevirt-utils/resources/vm';
import { updateCustomizeInstanceType, updateVMCustomizeIT, vmSignal, } from '@kubevirt-utils/store/customizeInstanceType';
import { Divider, Grid, GridItem, PageSection, PageSectionVariants } from '@patternfly/react-core';
import DiskList from '@virtualmachines/details/tabs/configuration/storage/components/tables/disk/DiskList';
var CustomizeInstanceTypeStorageTab = function () {
    var vm = vmSignal.value;
    if (!vm) {
        return React.createElement(Loading, null);
    }
    return (React.createElement(Grid, { hasGutter: true },
        React.createElement(GridItem, null,
            React.createElement(PageSection, { variant: PageSectionVariants.light },
                React.createElement(DiskList, { onDiskUpdate: function (updatedVM) {
                        var vmModified = updateCustomizeInstanceType([
                            {
                                data: getDisks(updatedVM),
                                path: "spec.template.spec.domain.devices.disks",
                            },
                            {
                                data: getVolumes(updatedVM),
                                path: "spec.template.spec.volumes",
                            },
                            {
                                data: getDataVolumeTemplates(updatedVM),
                                path: "spec.dataVolumeTemplates",
                            },
                        ]);
                        return Promise.resolve(vmModified);
                    }, customize: true, vm: vm }))),
        React.createElement(GridItem, null,
            React.createElement(Divider, null)),
        React.createElement(GridItem, null,
            React.createElement(PageSection, { variant: PageSectionVariants.light },
                React.createElement(EnvironmentForm, { updateVM: updateVMCustomizeIT, vm: vm })))));
};
export default CustomizeInstanceTypeStorageTab;
//# sourceMappingURL=CustomizeInstanceTypeStorageTab.js.map