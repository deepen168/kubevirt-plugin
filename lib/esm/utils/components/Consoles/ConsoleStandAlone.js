import React from 'react';
import { useParams } from 'react-router-dom-v5-compat';
import { useVMIAndPodsForVM } from '@kubevirt-utils/resources/vm/hooks';
import Consoles from './Consoles';
var ConsoleStandAlone = function () {
    var _a = useParams(), name = _a.name, ns = _a.ns;
    var vmi = useVMIAndPodsForVM(name, ns).vmi;
    return React.createElement(Consoles, { vmi: vmi });
};
export default ConsoleStandAlone;
//# sourceMappingURL=ConsoleStandAlone.js.map