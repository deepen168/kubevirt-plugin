import React from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useVMIAndPodsForVM } from '@kubevirt-utils/resources/vm';
import { getVMIPod } from '@kubevirt-utils/resources/vmi';
import useVirtualMachineLogData from '../hooks/useVirtualMachineLogData';
import VirtualMachineBasicLogViewer from '../VirtualMachineBasicLogViewer/VirtualMachineBasicLogViewer';
import './virtual-machine-log-viewer-stand-alone.scss';
var VirtualMachineLogViewerStandAlone = function () {
    var location = useLocation();
    var locationSplitter = location.pathname.split('/');
    var ns = locationSplitter[locationSplitter.indexOf('ns') + 1];
    var name = locationSplitter[locationSplitter.indexOf(VirtualMachineModelRef) + 1];
    var _a = useVMIAndPodsForVM(name, ns), pods = _a.pods, vmi = _a.vmi;
    var pod = getVMIPod(vmi, pods);
    var data = useVirtualMachineLogData({ pod: pod }).data;
    return (React.createElement("div", { className: "VirtualMachineLogViewerStandAlone--main" },
        React.createElement(VirtualMachineBasicLogViewer, { data: data, isExternal: true, vmi: vmi }),
        ";"));
};
export default VirtualMachineLogViewerStandAlone;
//# sourceMappingURL=VirtualMachineLogViewerStandAlone.js.map