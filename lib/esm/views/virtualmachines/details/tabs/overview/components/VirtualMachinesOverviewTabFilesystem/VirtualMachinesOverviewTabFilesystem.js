import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { VirtualizedTable } from '@openshift-console/dynamic-plugin-sdk';
import { Card, CardBody, Divider } from '@patternfly/react-core';
import { isRunning } from '@virtualmachines/utils';
import useFilesystemListColumns from '../../../configuration/storage/components/hooks/useFilesystemListColumns';
import FilesystemRow from './VirtualMachinesOverviewTabFilesystemRow';
import FilesystemListTitle from './VirtualMachinesOverviewTabFilesystemTitle';
var VirtualMachinesOverviewTabFilesystem = function (_a) {
    var _b;
    var guestAgentData = _a.guestAgentData, guestAgentDataLoaded = _a.guestAgentDataLoaded, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var isVMRunning = isRunning(vm);
    var columns = useFilesystemListColumns();
    var fileSystems = ((_b = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.fsInfo) === null || _b === void 0 ? void 0 : _b.disks) || [];
    return (React.createElement(Card, null,
        React.createElement(FilesystemListTitle, null),
        React.createElement(Divider, null),
        React.createElement(CardBody, { isFilled: true },
            React.createElement(VirtualizedTable, { NoDataEmptyMsg: function () {
                    return !guestAgentData && isVMRunning
                        ? t('Guest agent is required')
                        : t('VirtualMachine is not running');
                }, columns: columns, data: fileSystems, loaded: guestAgentDataLoaded, loadError: null, Row: FilesystemRow, unfilteredData: fileSystems }))));
};
export default VirtualMachinesOverviewTabFilesystem;
//# sourceMappingURL=VirtualMachinesOverviewTabFilesystem.js.map