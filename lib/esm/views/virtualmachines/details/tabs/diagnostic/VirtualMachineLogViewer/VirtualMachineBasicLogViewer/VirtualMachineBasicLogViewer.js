import React, { useState } from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Bullseye, Checkbox, Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';
import { LogViewer, LogViewerSearch } from '@patternfly/react-log-viewer';
var VirtualMachineBasicLogViewer = function (_a) {
    var _b, _c;
    var data = _a.data, _d = _a.isExternal, isExternal = _d === void 0 ? false : _d, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var _e = useState(false), isTextWrapped = _e[0], setIsTextWrapped = _e[1];
    if (!vmi) {
        return React.createElement(Bullseye, null, t('VirtualMachine is not running.'));
    }
    if (isEmpty(data)) {
        return (React.createElement(Bullseye, null,
            React.createElement(Loading, null)));
    }
    return (React.createElement(LogViewer, { toolbar: React.createElement(Toolbar, null,
            React.createElement(ToolbarContent, null,
                React.createElement(ToolbarItem, null,
                    React.createElement(LogViewerSearch, { minSearchChars: 3, placeholder: "Search..." })),
                React.createElement(ToolbarItem, { align: { default: 'alignRight' } },
                    React.createElement(Checkbox, { id: "wrap-text-checkbox", isChecked: isTextWrapped, label: t('Wrap text'), onChange: function (_event, val) { return setIsTextWrapped(val); } })),
                !isExternal && (React.createElement(React.Fragment, null,
                    React.createElement(ToolbarItem, { variant: "separator" }),
                    React.createElement(ToolbarItem, null,
                        React.createElement(ExternalLink, { href: "/k8s/ns/".concat((_b = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _b === void 0 ? void 0 : _b.namespace, "/kubevirt.io~v1~VirtualMachine/").concat((_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.name, "/diagnostics/logs/standalone") }, t('Open logs in a new window'))))))), data: data, isTextWrapped: isTextWrapped, scrollToRow: data.length, theme: "dark" }));
};
export default VirtualMachineBasicLogViewer;
//# sourceMappingURL=VirtualMachineBasicLogViewer.js.map