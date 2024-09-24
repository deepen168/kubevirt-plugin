import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { CpuMemHelperTextResources } from './utils/utils';
var CPUDescription = function (_a) {
    var cpu = _a.cpu, _b = _a.helperTextResource, helperTextResource = _b === void 0 ? CpuMemHelperTextResources.ActualVM : _b;
    var t = useKubevirtTranslation().t;
    var _c = cpu || {}, cores = _c.cores, sockets = _c.sockets, threads = _c.threads;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            t('CPUs = sockets x threads x cores.'),
            " "),
        React.createElement("div", null,
            helperTextResource,
            t(' {{sockets}} sockets, {{threads}} threads, and {{cores}} cores.', {
                cores: cores,
                sockets: sockets,
                threads: threads,
            }))));
};
export default CPUDescription;
//# sourceMappingURL=CPUDescription.js.map