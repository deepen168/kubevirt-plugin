import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useLocation } from 'react-router-dom-v5-compat';
import { VirtualMachineDetailsTab } from '@kubevirt-utils/constants/tabs-constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Tab, Tabs, TabTitleText } from '@patternfly/react-core';
import useDiagnosticData from './hooks/useDianosticData';
import VirtualMachineDiagnosticTabConditions from './tables/VirtualMachineDiagnosticTabConditions';
import VirtualMachineDiagnosticTabDataVolumeStatus from './tables/VirtualMachineDiagnosticTabDataVolumeStatus';
import VirtualMachineDiagnosticTabVolumeStatus from './tables/VirtualMachineDiagnosticTabVolumeStatus';
import { createURLDiagnostic } from './utils/utils';
import VirtualMachineLogViewer from './VirtualMachineLogViewer/VirtualMachineLogViewer';
import './virtual-machine-diagnostic-tab.scss';
var VirtualMachineDiagnosticTab = function (_a) {
    var vm = _a.obj;
    var navigate = useNavigate();
    var location = useLocation();
    var t = useKubevirtTranslation().t;
    var _b = useDiagnosticData(vm), conditions = _b.conditions, dataVolumesStatuses = _b.dataVolumesStatuses, volumeSnapshotStatuses = _b.volumeSnapshotStatuses;
    var _c = useState(), activeTabKey = _c[0], setActiveTabKey = _c[1];
    useEffect(function () {
        var _a;
        setActiveTabKey(((_a = location === null || location === void 0 ? void 0 : location.pathname) === null || _a === void 0 ? void 0 : _a.endsWith(VirtualMachineDetailsTab.Logs))
            ? VirtualMachineDetailsTab.Logs
            : VirtualMachineDetailsTab.Tables);
    }, [location.pathname]);
    return (React.createElement("div", { className: "VirtualMachineDiagnosticTab--main" },
        React.createElement(Tabs, { onSelect: function (_, key) {
                navigate(createURLDiagnostic(location.pathname, key));
                setActiveTabKey(key);
            }, activeKey: activeTabKey, className: "VirtualMachineDiagnosticTab--main__tabs", isVertical: true },
            React.createElement(Tab, { className: "VirtualMachineDiagnosticTab--main__content", eventKey: VirtualMachineDetailsTab.Tables, title: React.createElement(TabTitleText, null, t('Status & Conditions')) },
                React.createElement(VirtualMachineDiagnosticTabConditions, { conditions: conditions }),
                React.createElement(VirtualMachineDiagnosticTabVolumeStatus, { volumeSnapshotStatuses: volumeSnapshotStatuses }),
                React.createElement(VirtualMachineDiagnosticTabDataVolumeStatus, { dataVolumesStatuses: dataVolumesStatuses })),
            React.createElement(Tab, { className: "VirtualMachineDiagnosticTab--main__content", eventKey: VirtualMachineDetailsTab.Logs, title: React.createElement(TabTitleText, null, t('Guest system log')) },
                React.createElement(VirtualMachineLogViewer, { connect: activeTabKey === VirtualMachineDetailsTab.Logs, vm: vm })))));
};
export default VirtualMachineDiagnosticTab;
//# sourceMappingURL=VirtualMachineDiagnosticTab.js.map