import React from 'react';
import { formatVCPUsAsSockets } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import './CPUHelperText.scss';
var CPUHelperText = function (_a) {
    var _b;
    var cpu = _a.cpu, hide = _a.hide;
    var t = useKubevirtTranslation().t;
    if (hide)
        return null;
    return (React.createElement("div", { id: "cpu-helper-text" }, t('Topology will be set to {{sockets}} socket, 1 core, 1 thread', {
        sockets: (_b = formatVCPUsAsSockets(cpu)) === null || _b === void 0 ? void 0 : _b.sockets,
    })));
};
export default CPUHelperText;
//# sourceMappingURL=CPUHelperText.js.map