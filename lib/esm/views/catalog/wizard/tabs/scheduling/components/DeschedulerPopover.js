import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var DeschedulerPopover = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
        React.createElement("p", null, "The descheduler evicts a running pod so that the pod can be rescheduled on a more suitable node."),
        React.createElement("br", null),
        React.createElement("p", null, "Note: This setting is disabled if the VirtualMachine is not live migratable.")));
};
export default DeschedulerPopover;
//# sourceMappingURL=DeschedulerPopover.js.map